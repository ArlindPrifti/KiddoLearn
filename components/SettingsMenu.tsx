
import React, { useState } from 'react';
import { Settings, ThemeType, LanguageType } from '../types';
import { TRANSLATIONS, ANIMALS } from '../constants';
import { speakText } from '../services/geminiService';

interface SettingsMenuProps {
  settings: Settings;
  onUpdate: (updates: Partial<Settings>) => void;
  onClose: () => void;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({ settings, onUpdate, onClose }) => {
  const t = TRANSLATIONS[settings.language] || TRANSLATIONS.en;

  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const startOfflineSync = async () => {
    if (downloading) return;
    setDownloading(true);
    setDone(false);
    
    const items: string[] = [];
    for(let i=1; i<=100; i++) items.push(`${t.numberIs} ${i}`);
    ANIMALS.filter(a => a.isAlphabetPrimary).forEach(a => {
      items.push(`${a.letter} ${t.letterIs} ${a.names[settings.language]}`);
    });
    ANIMALS.slice(0, 30).forEach(a => {
      items.push(`${a.names[settings.language]} ${t.says} ${a.sounds[settings.language]}`);
    });

    const total = items.length;
    for(let i=0; i<total; i++) {
      setProgress(Math.round(((i + 1) / total) * 100));
      await speakText(items[i], 'Kore', settings.language, true);
    }

    setDownloading(false);
    setDone(true);
  };

  const themes: { id: ThemeType; emoji: string; label: string; color: string }[] = [
    { id: 'forest', emoji: '🌳', label: t.themeForest, color: 'bg-green-500' },
    { id: 'ocean', emoji: '🌊', label: t.themeOcean, color: 'bg-blue-500' },
    { id: 'sunset', emoji: '🌅', label: t.themeSunset, color: 'bg-orange-500' },
    { id: 'space', emoji: '🚀', label: t.themeSpace, color: 'bg-indigo-700' },
  ];

  const langs: { id: LanguageType; label: string; flag: string }[] = [
    { id: 'en', label: 'English', flag: '🇺🇸' },
    { id: 'es', label: 'Español', flag: '🇪🇸' },
    { id: 'fr', label: 'Français', flag: '🇫🇷' },
    { id: 'it', label: 'Italiano', flag: '🇮🇹' },
    { id: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { id: 'pt', label: 'Português', flag: '🇧🇷' },
    { id: 'jp', label: '日本語', flag: '🇯🇵' },
    { id: 'zh', label: '中文', flag: '🇨🇳' },
    { id: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { id: 'sq', label: 'Shqip', flag: '🇦🇱' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-lg overflow-hidden border-8 border-white">
        <div className="p-8 space-y-6 max-h-[85vh] overflow-y-auto scrollbar-hide">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800">{t.settings}</h2>
            <button onClick={onClose} className="text-4xl hover:scale-110 transition-transform">❌</button>
          </div>

          <div className="bg-blue-50 p-6 rounded-[2rem] border-4 border-blue-100 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📁</span>
              <div>
                <p className="font-black text-blue-700 leading-none">{t.offlineFolder}</p>
                <p className="text-xs text-blue-500 font-bold mt-1">{t.downloadDesc}</p>
              </div>
            </div>

            {downloading ? (
              <div className="space-y-2">
                <div className="w-full bg-blue-200 h-6 rounded-full overflow-hidden border-2 border-white shadow-inner">
                  <div className="bg-blue-500 h-full transition-all duration-300 flex items-center justify-center text-[10px] text-white font-black" style={{ width: `${progress}%` }}>{progress}%</div>
                </div>
                <p className="text-center text-xs font-black text-blue-400 animate-pulse">{t.downloadProgress}</p>
              </div>
            ) : done ? (
              <div className="text-center p-3 bg-green-100 rounded-2xl border-2 border-green-200">
                <p className="text-green-700 font-black text-sm">{t.downloadDone}</p>
              </div>
            ) : (
              <button onClick={startOfflineSync} className="w-full py-3 bg-white hover:bg-blue-500 hover:text-white text-blue-600 border-2 border-blue-200 rounded-2xl font-black text-sm transition-all shadow-sm active:scale-95">📥 {t.downloadVoices}</button>
            )}
          </div>

          <div className="space-y-3">
            <p className="font-bold text-gray-400 uppercase text-xs tracking-widest">{t.theme}</p>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme) => (
                <button key={theme.id} onClick={() => onUpdate({ theme: theme.id })} className={`p-3 rounded-2xl flex items-center gap-2 transition-all border-4 ${settings.theme === theme.id ? 'border-yellow-400 scale-105 shadow-md' : 'border-transparent opacity-70'} ${theme.color} text-white font-bold text-sm`}>
                  <span className="text-xl">{theme.emoji}</span>
                  {theme.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-gray-400 uppercase text-xs tracking-widest">{t.language}</p>
            <div className="grid grid-cols-3 gap-2">
              {langs.map((lang) => (
                <button key={lang.id} onClick={() => onUpdate({ language: lang.id })} className={`p-2 rounded-xl font-bold text-xs transition-all border-2 ${settings.language === lang.id ? 'bg-purple-500 text-white border-purple-200' : 'bg-gray-100 text-gray-500 border-transparent'}`}>
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          </div>

          <button onClick={onClose} className="w-full py-4 bg-blue-600 text-white rounded-2xl text-xl font-bold shadow-lg hover:bg-blue-700 active:scale-95 transition-all mt-4">{t.close}</button>
        </div>
      </div>
    </div>
  );
};
