
import React, { useState } from 'react';
import { speakText } from '../services/geminiService';
import { COLORS, TRANSLATIONS } from '../constants';
import { Settings } from '../types';

interface NumberCardProps {
  number: number;
  settings: Settings;
  onSpeakStart?: () => void;
  onSpeakEnd?: () => void;
  isGlobalLocked?: boolean;
}

export const NumberCard: React.FC<NumberCardProps> = ({ 
  number, 
  settings, 
  onSpeakStart, 
  onSpeakEnd, 
  isGlobalLocked 
}) => {
  const bgColor = COLORS[number % COLORS.length];
  const t = TRANSLATIONS[settings.language];
  const [isLocalSpeaking, setIsLocalSpeaking] = useState(false);

  const handleClick = async () => {
    if (isGlobalLocked) return;
    setIsLocalSpeaking(true);
    onSpeakStart?.();
    try {
      await speakText(`${t.numberIs} ${number}`, settings.voice, settings.language);
    } finally {
      setIsLocalSpeaking(false);
      onSpeakEnd?.();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isGlobalLocked}
      className={`
        ${bgColor} aspect-square rounded-2xl shadow-lg 
        flex items-center justify-center text-white text-3xl md:text-4xl font-bold
        transform transition-all border-4 border-white/30
        ${isLocalSpeaking ? 'scale-110 rotate-0 ring-4 ring-yellow-300' : 'hover:scale-105 hover:rotate-3 active:scale-90'}
        ${isGlobalLocked && !isLocalSpeaking ? 'opacity-50 grayscale-[0.5]' : 'opacity-100'}
      `}
    >
      {number}
    </button>
  );
};
