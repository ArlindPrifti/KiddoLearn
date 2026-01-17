
import React, { useState } from 'react';
import { AnimalInfo, Settings } from '../types';
import { speakText } from '../services/geminiService';
import { TRANSLATIONS } from '../constants';

interface AlphabetCardProps {
  animal: AnimalInfo;
  settings: Settings;
  showSound?: boolean;
  onSpeakStart?: () => void;
  onSpeakEnd?: () => void;
  isGlobalLocked?: boolean;
}

export const AlphabetCard: React.FC<AlphabetCardProps> = ({ 
  animal, 
  settings, 
  showSound = false,
  onSpeakStart,
  onSpeakEnd,
  isGlobalLocked
}) => {
  const t = TRANSLATIONS[settings.language];
  const name = animal.names[settings.language];
  const sound = animal.sounds[settings.language];
  const [isSpeakingLocally, setIsSpeakingLocally] = useState(false);
  const [activePart, setActivePart] = useState<'name' | 'sound' | 'main' | null>(null);

  // Derive the letter from the current localized name, 
  // UNLESS it's Albanian where we must preserve the poster's specific sequence (Digraphs included)
  const getDisplayLetter = () => {
    if (settings.language === 'sq') {
      return animal.letter;
    }
    // Note: This ensures that if the language is English, 'Apple' shows 'A'.
    return name.charAt(0).toUpperCase();
  };

  const displayLetter = getDisplayLetter();

  const handleMainClick = async () => {
    if (isGlobalLocked) return;
    setIsSpeakingLocally(true);
    setActivePart('main');
    onSpeakStart?.();
    try {
      if (showSound) {
        await speakText(`${name} ${t.says} ${sound}`, settings.voice, settings.language);
      } else {
        await speakText(`${displayLetter} ${t.letterIs} ${name}`, settings.voice, settings.language);
      }
    } finally {
      setIsSpeakingLocally(false);
      setActivePart(null);
      onSpeakEnd?.();
    }
  };

  const handlePronounceName = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isGlobalLocked) return;
    setIsSpeakingLocally(true);
    setActivePart('name');
    onSpeakStart?.();
    try {
      await speakText(name, settings.voice, settings.language);
    } finally {
      setIsSpeakingLocally(false);
      setActivePart(null);
      onSpeakEnd?.();
    }
  };

  const handlePlaySound = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isGlobalLocked) return;
    setIsSpeakingLocally(true);
    setActivePart('sound');
    onSpeakStart?.();
    try {
      await speakText(sound, settings.voice, settings.language);
    } finally {
      setIsSpeakingLocally(false);
      setActivePart(null);
      onSpeakEnd?.();
    }
  };

  return (
    <div className={`relative group perspective-1000 transition-all duration-300 ${isGlobalLocked && !isSpeakingLocally ? 'opacity-40 pointer-events-none scale-95' : 'opacity-100 scale-100'}`}>
      {/* Visual Feedback Ring for Speaking State */}
      {isSpeakingLocally && <div className="playing-ring" />}

      {/* Name Pronunciation Button */}
      <button
        onClick={handlePronounceName}
        title={`Listen to ${name}`}
        disabled={isGlobalLocked}
        className={`
          absolute -top-3 -right-3 z-30 w-11 h-11 bg-white rounded-full flex items-center justify-center text-xl 
          transition-all shadow-[0_5px_15px_rgba(0,0,0,0.15)] border-4 border-yellow-400
          ${activePart === 'name' ? 'animate-dance scale-125 bg-yellow-50' : 'hover:scale-110 active:scale-90 shadow-sm'}
          ${isGlobalLocked && !isSpeakingLocally ? 'grayscale opacity-50' : ''}
        `}
      >
        {activePart === 'name' ? '✨' : '🔊'}
      </button>

      {/* Animal Sound Button - Paw Icon (Show in Alphabet view or when requested) */}
      {!showSound && (
        <button
          onClick={handlePlaySound}
          title={`Listen to ${sound}`}
          disabled={isGlobalLocked}
          className={`
            absolute -top-3 -left-3 z-30 w-11 h-11 bg-white rounded-full flex items-center justify-center text-xl 
            transition-all shadow-[0_5px_15px_rgba(0,0,0,0.15)] border-4 border-blue-400
            ${activePart === 'sound' ? 'animate-pulse-fast scale-125 bg-blue-50' : 'hover:scale-110 active:scale-90 shadow-sm'}
            ${isGlobalLocked && !isSpeakingLocally ? 'grayscale opacity-50' : ''}
          `}
        >
          {activePart === 'sound' ? '🎵' : '🐾'}
        </button>
      )}

      <button
        onClick={handleMainClick}
        disabled={isGlobalLocked}
        className={`
          w-full ${animal.color} p-5 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center
          transform transition-all duration-500 border-8 border-white/50
          min-h-[190px] relative overflow-hidden group-hover:shadow-2xl
          ${isSpeakingLocally ? 'scale-105 shadow-2xl ring-4 ring-yellow-300 z-10' : 'hover:scale-[1.02] hover:-rotate-1 active:scale-95'}
          ${isGlobalLocked && !isSpeakingLocally ? 'grayscale-[0.3]' : ''}
        `}
      >
        {/* Playful background element */}
        <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl transition-all duration-700 ${isSpeakingLocally ? 'bg-yellow-400/50 scale-150 animate-pulse' : 'group-hover:bg-white/20'}`} />
        
        <div className={`text-6xl md:text-7xl mb-4 drop-shadow-md transition-all duration-300 ${isSpeakingLocally ? 'scale-125 animate-bounce-short' : 'group-hover:scale-110'}`}>
          {animal.emoji}
        </div>
        
        <div className="flex flex-col items-center">
          <span className={`text-5xl font-black text-white leading-none drop-shadow-lg tracking-tight transition-all duration-300 ${isSpeakingLocally ? 'scale-110 text-yellow-100' : ''}`}>
            {displayLetter}
          </span>
          <span className="text-xl font-bold text-white/90 mt-2 bg-black/10 px-4 py-1 rounded-full backdrop-blur-sm shadow-inner text-center">
            {name}
          </span>
          
          {showSound && (
            <div className={`mt-3 bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-black text-white uppercase tracking-widest border border-white/40 shadow-sm transition-all duration-300 ${isSpeakingLocally ? 'bg-white/50 scale-110' : ''}`}>
              {sound}
            </div>
          )}
        </div>
      </button>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        
        @keyframes dance {
          0%, 100% { transform: scale(1.25) rotate(0); }
          25% { transform: scale(1.3) rotate(-15deg); }
          75% { transform: scale(1.3) rotate(15deg); }
        }

        @keyframes pulse-fast {
          0%, 100% { transform: scale(1.25); }
          50% { transform: scale(1.4); opacity: 0.8; }
        }

        @keyframes ring-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-short {
          0%, 100% { transform: translateY(0) scale(1.2); }
          50% { transform: translateY(-10px) scale(1.2); }
        }

        .animate-dance {
          animation: dance 0.4s infinite ease-in-out;
        }

        .animate-pulse-fast {
          animation: pulse-fast 0.5s infinite ease-in-out;
        }

        .animate-bounce-short {
          animation: bounce-short 0.6s infinite ease-in-out;
        }

        .playing-ring {
          position: absolute;
          inset: -12px;
          border-radius: 3rem;
          border: 6px dashed #fbbf24;
          animation: ring-rotate 4s infinite linear;
          z-index: 20;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};
