
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { AppView, Settings, ThemeType, LanguageType, VoiceType, AnimalInfo, AnimalCategory } from './types';
import { ANIMALS, THEMES, TRANSLATIONS } from './constants';
import { NumberCard } from './components/NumberCard';
import { AlphabetCard } from './components/AlphabetCard';
import { QuizMode } from './components/QuizMode';
import { SettingsMenu } from './components/SettingsMenu';
import { StudioMode } from './components/StudioMode';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.NUMBERS);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<AnimalCategory | 'ALL'>('ALL');
  const [isGlobalSpeaking, setIsGlobalSpeaking] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    theme: 'forest',
    language: 'en',
    voice: 'Kore'
  });

  // Memoize callbacks to prevent unnecessary child re-renders and logic loops
  const handleSpeakStart = useCallback(() => setIsGlobalSpeaking(true), []);
  const handleSpeakEnd = useCallback(() => setIsGlobalSpeaking(false), []);

  // PWA Install Prompt handling
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      console.log('Ready to install KiddoLearn on Android!');
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const t = TRANSLATIONS[settings.language];
  const theme = THEMES[settings.theme];
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const alphabetAnimals = useMemo(() => {
    const isSq = settings.language === 'sq';
    if (isSq) {
      return ANIMALS.filter(a => a.isAlphabetPrimary).sort((a, b) => {
          const sqOrder = ['A', 'B', 'C', 'Ç', 'D', 'DH', 'E', 'Ë', 'F', 'G', 'GJ', 'H', 'I', 'J', 'K', 'L', 'LL', 'M', 'N', 'NJ', 'O', 'P', 'Q', 'R', 'RR', 'S', 'SH', 'T', 'TH', 'U', 'V', 'W', 'X', 'XH', 'Y', 'Z', 'ZH'];
          return sqOrder.indexOf(a.letter) - sqOrder.indexOf(b.letter);
      });
    } else {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      const result: AnimalInfo[] = [];
      alphabet.forEach(letter => {
        const match = ANIMALS.find(a => a.names[settings.language].toUpperCase().startsWith(letter));
        if (match) {
            result.push(match);
        } else {
            const fallback = ANIMALS.find(a => a.letter === letter && a.isAlphabetPrimary);
            if (fallback) result.push(fallback);
        }
      });
      return result;
    }
  }, [settings.language]);

  const allAnimals = useMemo(() => {
    return ANIMALS.filter(animal => {
      const isActualAnimal = animal.category !== AnimalCategory.OTHER;
      const matchesCategory = selectedCategory === 'ALL' || animal.category === selectedCategory;
      return isActualAnimal && matchesCategory;
    });
  }, [selectedCategory]);

  const updateSettings = (updates: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...updates }));
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.NUMBERS:
        return (
          <div className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 p-2 pb-32 transition-opacity duration-300 ${isGlobalSpeaking ? 'opacity-70 pointer-events-none' : 'opacity-100'}`}>
            {numbers.map((n) => (
              <NumberCard 
                key={n} 
                number={n} 
                settings={settings} 
                onSpeakStart={handleSpeakStart}
                onSpeakEnd={handleSpeakEnd}
                isGlobalLocked={isGlobalSpeaking}
              />
            ))}
          </div>
        );
      case AppView.ALPHABET:
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 pb-32">
            {alphabetAnimals.map((animal, idx) => (
              <AlphabetCard 
                key={`${animal.letter}-${idx}`} 
                animal={animal} 
                settings={settings} 
                onSpeakStart={handleSpeakStart}
                onSpeakEnd={handleSpeakEnd}
                isGlobalLocked={isGlobalSpeaking}
              />
            ))}
          </div>
        );
      case AppView.ANIMALS:
        return (
          <div className="space-y-6 pb-32">
            <div className={`flex overflow-x-auto pb-4 gap-2 scrollbar-hide px-2 transition-opacity ${isGlobalSpeaking ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              {[
                { id: 'ALL', label: t.cat_all, emoji: '🐾' },
                { id: AnimalCategory.MAMMALS, label: t.cat_mammals, emoji: '🦁' },
                { id: AnimalCategory.BIRDS, label: t.cat_birds, emoji: '🦅' },
                { id: AnimalCategory.FISH, label: t.cat_fish, emoji: '🐠' },
                { id: AnimalCategory.REPTILES, label: t.cat_reptiles, emoji: '🐍' },
                { id: AnimalCategory.INSECTS, label: t.cat_insects, emoji: '🐝' }
              ].map(cat => (
                <button
                  key={cat.id}
                  disabled={isGlobalSpeaking}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold whitespace-nowrap transition-all shadow-sm
                    ${selectedCategory === cat.id 
                      ? 'bg-blue-600 text-white shadow-md scale-105' 
                      : 'bg-white text-gray-600 border border-gray-100 hover:bg-blue-50'}
                  `}
                >
                  <span className="text-lg">{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 transition-opacity ${isGlobalSpeaking ? 'opacity-70' : 'opacity-100'}`}>
              {allAnimals.map((animal, idx) => (
                <AlphabetCard 
                  key={`${animal.letter}-${idx}`} 
                  animal={animal} 
                  settings={settings} 
                  showSound 
                  onSpeakStart={handleSpeakStart}
                  onSpeakEnd={handleSpeakEnd}
                  isGlobalLocked={isGlobalSpeaking}
                />
              ))}
            </div>
          </div>
        );
      case AppView.QUIZ:
        return (
          <div className="p-2 pb-32">
            <QuizMode 
                settings={settings} 
                animalsList={allAnimals} 
                onSpeakStart={handleSpeakStart}
                onSpeakEnd={handleSpeakEnd}
                isGlobalLocked={isGlobalSpeaking}
            />
          </div>
        );
      case AppView.STUDIO:
        return (
          <div className="p-2 pb-32">
            <StudioMode settings={settings} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen h-full flex flex-col max-w-6xl mx-auto ${theme.bg} shadow-inner transition-colors duration-500`}>
      {/* Header with notch padding on mobile */}
      <header className="pt-8 pb-4 px-6 flex justify-between items-center bg-white/40 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex-1"></div>
        <div className="text-center flex-[4]">
          <h1 className={`text-4xl md:text-5xl font-black mb-1 drop-shadow-sm ${settings.theme === 'space' ? 'text-indigo-400' : 'text-blue-600'}`}>
            KiddoLearn! ✨
          </h1>
          <p className={`text-sm md:text-lg font-bold italic ${theme.primary} opacity-80`}>
            {t.subtitle}
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <button 
            disabled={isGlobalSpeaking}
            onClick={() => setShowSettings(true)}
            className={`p-3 bg-white/60 shadow-sm hover:bg-white rounded-full text-2xl transition-all active:scale-90 ${isGlobalSpeaking ? 'opacity-30 pointer-events-none' : ''}`}
          >
            ⚙️
          </button>
        </div>
      </header>

      {/* Main Content with dynamic height calculation for mobile */}
      <main className="flex-1 overflow-y-auto px-2 pt-4">
        <div className={`${theme.card} rounded-t-[3rem] rounded-b-[1rem] shadow-xl p-4 md:p-6 min-h-[75vh] border-x-4 border-t-4 ${settings.theme === 'space' ? 'border-slate-700' : 'border-white'}`}>
          <div className="mb-6 text-center">
            <h2 className={`text-2xl md:text-3xl font-black ${settings.theme === 'space' ? 'text-white' : 'text-gray-800'}`}>
              {currentView === AppView.NUMBERS && t.numbers}
              {currentView === AppView.ALPHABET && t.alphabet}
              {currentView === AppView.ANIMALS && t.sounds}
              {currentView === AppView.QUIZ && t.quiz}
              {currentView === AppView.STUDIO && t.studio}
            </h2>
          </div>
          {renderContent()}
        </div>
      </main>

      {/* Navigation - Bottom Sticky for Mobile, using Safe Area Insets */}
      <nav className={`fixed bottom-0 left-0 right-0 px-4 pt-3 pb-[calc(1.5rem+var(--safe-area-inset-bottom))] ${settings.theme === 'space' ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-lg border-t ${settings.theme === 'space' ? 'border-slate-700' : 'border-gray-100'} z-50`}>
        <div className="max-w-md mx-auto flex justify-around items-center">
          {[
            { view: AppView.NUMBERS, icon: '🔢', color: 'text-blue-500', bg: 'bg-blue-100' },
            { view: AppView.ALPHABET, icon: '🔤', color: 'text-orange-500', bg: 'bg-orange-100' },
            { view: AppView.ANIMALS, icon: '🦁', color: 'text-green-500', bg: 'bg-green-100' },
            { view: AppView.QUIZ, icon: '🎮', color: 'text-purple-500', bg: 'bg-purple-100' },
            { view: AppView.STUDIO, icon: '🎨', color: 'text-pink-500', bg: 'bg-pink-100' }
          ].map((item) => (
            <button
              key={item.view}
              disabled={isGlobalSpeaking}
              onClick={() => {
                setCurrentView(item.view);
                if (item.view === AppView.ANIMALS) setSelectedCategory('ALL');
              }}
              className={`flex flex-col items-center space-y-1 transition-all ${
                currentView === item.view ? `${item.color} scale-110` : 'text-gray-400'
              } ${isGlobalSpeaking ? 'opacity-30 grayscale pointer-events-none' : ''}`}
            >
              <div className={`p-3.5 rounded-2xl transition-colors ${currentView === item.view ? item.bg : (settings.theme === 'space' ? 'bg-slate-700' : 'bg-gray-100/50')}`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
            </button>
          ))}
        </div>
      </nav>

      {showSettings && (
        <SettingsMenu 
          settings={settings} 
          onUpdate={updateSettings} 
          onClose={() => setShowSettings(false)} 
        />
      )}
    </div>
  );
};

export default App;
