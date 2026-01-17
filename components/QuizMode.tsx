
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TRANSLATIONS, ANIMALS } from '../constants';
import { AnimalInfo, QuizDifficulty, Settings, AnimalCategory } from '../types';
import { speakText, transcribeAudio } from '../services/geminiService';

enum QuestionType {
  FIND_ANIMAL = 'FIND_ANIMAL',
  FIND_LETTER = 'FIND_LETTER',
  FIND_BY_SOUND = 'FIND_BY_SOUND'
}

interface Question {
  type: QuestionType;
  target: AnimalInfo;
  options: (AnimalInfo | string)[];
  correctAnswer: string;
  displayLetter: string;
}

interface QuizModeProps {
  settings: Settings;
  animalsList: AnimalInfo[];
  onSpeakStart?: () => void;
  onSpeakEnd?: () => void;
  isGlobalLocked?: boolean;
}

export const QuizMode: React.FC<QuizModeProps> = ({ 
    settings, 
    animalsList,
    onSpeakStart,
    onSpeakEnd,
    isGlobalLocked
}) => {
  const t = TRANSLATIONS[settings.language];
  const [difficulty, setDifficulty] = useState<QuizDifficulty | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessingVoice, setIsProcessingVoice] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const isGeneratingRef = useRef(false);

  /**
   * Helper to get the correct letter for the animal in the current language.
   * Prevents Albanian digraphs (DH, XH) appearing in English mode.
   */
  const getLocalizedLetter = useCallback((animal: AnimalInfo) => {
    if (settings.language === 'sq') return animal.letter;
    return animal.names[settings.language].charAt(0).toUpperCase();
  }, [settings.language]);

  /**
   * Generates a new question.
   */
  const generateQuestion = useCallback(async () => {
    if (isGeneratingRef.current) return;
    isGeneratingRef.current = true;

    // UI Reset
    setShowNext(false);
    setFeedback(null);
    setSelectedOption(null);
    setIsAnswering(false);
    setIsCooldown(false);

    const pool = animalsList.length > 0 ? animalsList : ANIMALS.filter(a => a.category !== AnimalCategory.OTHER);
    
    const types = [QuestionType.FIND_ANIMAL, QuestionType.FIND_LETTER];
    if (difficulty === QuizDifficulty.HARD || pool.length > 10) types.push(QuestionType.FIND_BY_SOUND);
    
    const type = types[Math.floor(Math.random() * types.length)];
    const target = pool[Math.floor(Math.random() * pool.length)];
    
    let distractorCount = 1; 
    if (difficulty === QuizDifficulty.MEDIUM) distractorCount = 3;
    if (difficulty === QuizDifficulty.HARD) distractorCount = 5;

    const targetLetter = getLocalizedLetter(target);
    let distractorPool = pool.filter(a => getLocalizedLetter(a) !== targetLetter);
    
    if (distractorPool.length < distractorCount) {
      distractorPool = ANIMALS.filter(a => a.category !== AnimalCategory.OTHER && getLocalizedLetter(a) !== targetLetter).slice(0, 15);
    }

    const distractors = distractorPool.sort(() => 0.5 - Math.random()).slice(0, distractorCount);

    let options: any[] = [];
    let correctAnswer = '';
    const targetName = target.names[settings.language];
    const targetSound = target.sounds[settings.language];

    if (type === QuestionType.FIND_ANIMAL || type === QuestionType.FIND_BY_SOUND) {
      options = [target, ...distractors].sort(() => 0.5 - Math.random());
      correctAnswer = targetName;
    } else {
      options = [targetLetter, ...distractors.map(d => getLocalizedLetter(d))].sort(() => 0.5 - Math.random());
      correctAnswer = targetLetter;
    }

    setQuestion({ type, target, options, correctAnswer, displayLetter: targetLetter });

    // Wit Time: Short pause before speaking the new question
    setTimeout(async () => {
      onSpeakStart?.();
      try {
          if (type === QuestionType.FIND_ANIMAL) {
            await speakText(`${t.whichOne} "${targetLetter}"?`, 'Kore', settings.language);
          } else if (type === QuestionType.FIND_LETTER) {
            await speakText(t.startWith.replace('{name}', targetName), 'Kore', settings.language);
          } else if (type === QuestionType.FIND_BY_SOUND) {
            await speakText(`${t.whoSays} "${targetSound}"?`, 'Kore', settings.language);
          }
      } finally {
          // Mandatory wit time: 800ms silence after question is asked
          setTimeout(() => {
            onSpeakEnd?.();
            isGeneratingRef.current = false;
          }, 800);
      }
    }, 500);
  }, [difficulty, settings, animalsList, t, onSpeakStart, onSpeakEnd, getLocalizedLetter]);

  useEffect(() => {
    if (difficulty && !question && !isGeneratingRef.current) {
      generateQuestion();
    }
  }, [difficulty, question, generateQuestion]);

  const handleAnswer = async (answer: string) => {
    if (isAnswering || !question || showNext || isGlobalLocked || isCooldown) return;
    setIsAnswering(true);
    setIsCooldown(true);
    setSelectedOption(answer);

    const isCorrect = answer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim() || 
                      answer.toLowerCase().includes(question.correctAnswer.toLowerCase());

    onSpeakStart?.();
    try {
        if (isCorrect) {
          setFeedback('correct');
          setScore(s => s + 1);
          await speakText(difficulty === QuizDifficulty.HARD ? t.praiseExpert : t.praise, 'Kore', settings.language);
        } else {
          setFeedback('wrong');
          await speakText(t.consolation.replace('{answer}', question.correctAnswer), 'Kore', settings.language);
        }
    } finally {
        // Mandatory wit time: 1.2s delay before showing the "Continue" button
        // This ensures audio finishes and child processes the feedback.
        setTimeout(() => {
          onSpeakEnd?.();
          setShowNext(true);
          setIsCooldown(false);
        }, 1200);
    }
  };

  const startRecording = async () => {
    if (isGlobalLocked || showNext || isAnswering || isCooldown) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      mediaRecorder.ondataavailable = (event) => audioChunksRef.current.push(event.data);
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType });
        setIsProcessingVoice(true);
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Audio = (reader.result as string).split(',')[1];
          const transcript = await transcribeAudio(base64Audio, mediaRecorder.mimeType, settings.language);
          setIsProcessingVoice(false);
          if (transcript) handleAnswer(transcript);
        };
      };
      mediaRecorder.start();
      setIsRecording(true);
      setTimeout(() => { if (mediaRecorder.state === 'recording') stopRecording(); }, 4000);
    } catch (err) { alert("Enable your microphone to play!"); }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  if (!difficulty) {
    return (
      <div className="flex flex-col items-center justify-center space-y-10 py-12 animate-fade-in">
        <div className="text-center">
          <h3 className="text-5xl font-black text-blue-600 mb-2 drop-shadow-sm">{t.levelTitle}</h3>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Select your journey</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl px-4">
          <button onClick={() => setDifficulty(QuizDifficulty.EASY)} className="group p-10 bg-green-400 text-white rounded-[3rem] shadow-xl hover:scale-105 transition-all border-b-[12px] border-green-600 active:translate-y-2 active:border-b-0">
            <div className="text-6xl mb-4 group-hover:animate-bounce">🌱</div>
            <div className="text-2xl font-black">{t.levelEasy}</div>
          </button>
          <button onClick={() => setDifficulty(QuizDifficulty.MEDIUM)} className="group p-10 bg-orange-400 text-white rounded-[3rem] shadow-xl hover:scale-105 transition-all border-b-[12px] border-orange-600 active:translate-y-2 active:border-b-0">
            <div className="text-6xl mb-4 group-hover:animate-bounce">⭐</div>
            <div className="text-2xl font-black">{t.levelMedium}</div>
          </button>
          <button onClick={() => setDifficulty(QuizDifficulty.HARD)} className="group p-10 bg-purple-500 text-white rounded-[3rem] shadow-xl hover:scale-105 transition-all border-b-[12px] border-purple-700 active:translate-y-2 active:border-b-0">
            <div className="text-6xl mb-4 group-hover:animate-bounce">👑</div>
            <div className="text-2xl font-black">{t.levelHard}</div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-8 relative transition-opacity duration-500 ${isGlobalLocked && !isRecording && !isProcessingVoice ? 'opacity-70 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex justify-between items-center w-full max-w-lg mb-4">
        <button onClick={() => { setDifficulty(null); setQuestion(null); setScore(0); }} className="bg-gray-200/50 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-black text-sm transition-all">← {t.back}</button>
        <div className="bg-yellow-400 px-8 py-3 rounded-full border-b-4 border-yellow-600 shadow-md">
          <span className="text-2xl font-black text-white drop-shadow-sm">Score: {score} ⭐</span>
        </div>
      </div>

      <div className="text-center space-y-6 max-w-md w-full relative">
        {question ? (
          <div className="bg-blue-50 p-6 rounded-[2rem] border-4 border-white shadow-inner">
             <h3 className="text-2xl md:text-3xl font-black text-blue-700 leading-tight">
              {question.type === QuestionType.FIND_ANIMAL && `${t.whichOne} "${question.displayLetter}"?`}
              {question.type === QuestionType.FIND_LETTER && t.startWith.replace('{name}', question.target.names[settings.language])}
              {question.type === QuestionType.FIND_BY_SOUND && `${t.whoSays} "${question.target.sounds[settings.language]}"?`}
            </h3>
          </div>
        ) : (
          <div className="animate-pulse bg-gray-100 p-6 rounded-[2rem] h-24"></div>
        )}
        
        {!showNext && (
          <div className="flex flex-col items-center gap-6">
            {question?.type === QuestionType.FIND_LETTER && (
              <div className="text-8xl md:text-9xl bg-white w-48 h-48 flex items-center justify-center rounded-[3rem] shadow-xl border-8 border-blue-100 animate-bounce-slow">
                {question.target.emoji}
              </div>
            )}
            <div className="flex flex-col items-center gap-3">
              <button
                onMouseDown={startRecording} onMouseUp={stopRecording}
                onTouchStart={startRecording} onTouchEnd={stopRecording}
                disabled={isAnswering || isProcessingVoice || (isGlobalLocked && !isRecording) || isCooldown}
                className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-2xl transition-all ${isRecording ? 'bg-red-500 animate-pulse scale-110 ring-8 ring-red-100' : 'bg-purple-600 hover:scale-105 active:scale-95'} text-white relative disabled:opacity-50`}
              >
                {isProcessingVoice ? '⏳' : isRecording ? '🛑' : '🎤'}
              </button>
              <p className="text-sm font-black text-purple-600 uppercase tracking-widest">
                {isProcessingVoice ? t.checking : isRecording ? t.listening : t.voiceHold}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={`grid gap-6 w-full max-w-4xl px-4 ${difficulty === QuizDifficulty.HARD ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2'}`}>
        {question?.options.map((option, idx) => {
          const isObj = typeof option !== 'string';
          const val = isObj ? (option as AnimalInfo).names[settings.language] : (option as string);
          const isCorrect = val === question.correctAnswer;
          const isUserSelection = val === selectedOption;

          let cardStyle = isAnswering 
            ? (isCorrect ? 'border-green-500 ring-8 ring-green-100 scale-105 z-10' : (isUserSelection ? 'border-red-500 opacity-60 grayscale scale-95' : 'opacity-20 grayscale scale-90'))
            : (isGlobalLocked || isCooldown ? 'opacity-50' : 'hover:scale-105 active:scale-95');

          return (
            <button key={idx} disabled={isAnswering || isGlobalLocked || showNext || isCooldown} onClick={() => handleAnswer(val)} className={`p-6 rounded-[2.5rem] shadow-xl border-b-[8px] transition-all flex flex-col items-center justify-center min-h-[160px] ${isObj ? (option as AnimalInfo).color : 'bg-white'} ${cardStyle} ${isObj ? 'border-black/10' : 'border-blue-100'}`}>
              {isObj ? (
                <div className="flex flex-col items-center">
                  <span className="text-6xl md:text-7xl drop-shadow-md">{(option as AnimalInfo).emoji}</span>
                  <span className="text-xl font-black text-white mt-3 drop-shadow-sm">{(option as AnimalInfo).names[settings.language]}</span>
                </div>
              ) : <span className="text-7xl font-black text-blue-600">{option as string}</span>}
            </button>
          );
        })}
      </div>

      {showNext && (
        <button
            onClick={() => { setQuestion(null); generateQuestion(); }}
            className="px-16 py-6 bg-blue-600 hover:bg-blue-700 text-white text-3xl font-black rounded-full shadow-2xl animate-bounce-short border-b-[10px] border-blue-800 active:translate-y-2 active:border-b-0 transition-all"
        >
            CONTINUE! 🚀
        </button>
      )}

      {feedback && (
        <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] px-12 py-8 rounded-[3rem] text-4xl md:text-6xl font-black animate-pop shadow-2xl border-8 border-white ${feedback === 'correct' ? 'bg-green-500 text-white' : 'bg-orange-400 text-white'}`}>
          {feedback === 'correct' ? t.correct : t.wrong}
        </div>
      )}

      <style>{`
        @keyframes pop {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
          70% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        .animate-pop { animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .animate-bounce-slow { animation: bounce 2s infinite ease-in-out; }
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-short { animation: bounce-short 1s infinite ease-in-out; }
      `}</style>
    </div>
  );
};
