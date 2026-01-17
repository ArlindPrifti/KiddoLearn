
export enum AppView {
  NUMBERS = 'NUMBERS',
  ALPHABET = 'ALPHABET',
  ANIMALS = 'ANIMALS',
  QUIZ = 'QUIZ',
  STUDIO = 'STUDIO'
}

export enum QuizDifficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD'
}

export enum AnimalCategory {
  MAMMALS = 'MAMMALS',
  BIRDS = 'BIRDS',
  FISH = 'FISH',
  REPTILES = 'REPTILES',
  INSECTS = 'INSECTS',
  OTHER = 'OTHER'
}

export type ThemeType = 'forest' | 'ocean' | 'sunset' | 'space';
export type LanguageType = 'en' | 'es' | 'fr' | 'it' | 'de' | 'pt' | 'jp' | 'zh' | 'hi' | 'sq';
export type VoiceType = 'Kore';

export interface Settings {
  theme: ThemeType;
  language: LanguageType;
  voice: VoiceType;
}

export interface AnimalInfo {
  letter: string;
  emoji: string;
  color: string;
  names: Record<LanguageType, string>;
  sounds: Record<LanguageType, string>;
  category: AnimalCategory;
  isAlphabetPrimary?: boolean; // If true, it can represent a letter in the alphabet view
  isDigraph?: boolean;
  isSpecial?: boolean;
}

export interface VoiceConfig {
  voiceName: VoiceType;
}
