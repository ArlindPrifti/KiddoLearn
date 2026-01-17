
import React, { useState, useRef } from 'react';
import { TRANSLATIONS } from '../constants';
import { Settings } from '../types';
import { editImageWithNano, generateVideoWithVeo } from '../services/geminiService';

interface StudioModeProps {
  settings: Settings;
}

export const StudioMode: React.FC<StudioModeProps> = ({ settings }) => {
  const t = TRANSLATIONS[settings.language];
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [prompt, setPrompt] = useState('');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [resultVideo, setResultVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [veoMode, setVeoMode] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [needsKey, setNeedsKey] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile((reader.result as string).split(',')[1]);
      };
      reader.readAsDataURL(file);
      // Reset results
      setResultImage(null);
      setResultVideo(null);
    }
  };

  const checkApiKey = async () => {
    if (typeof (window as any).aistudio?.hasSelectedApiKey === 'function') {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        setNeedsKey(true);
        return false;
      }
    }
    return true;
  };

  const handleOpenKeyDialog = async () => {
    if (typeof (window as any).aistudio?.openSelectKey === 'function') {
      await (window as any).aistudio.openSelectKey();
      setNeedsKey(false);
    }
  };

  const handleAction = async () => {
    if (!selectedFile) {
      alert(t.uploadFirst);
      return;
    }

    setLoading(true);
    setResultImage(null);
    setResultVideo(null);

    try {
      if (veoMode) {
        const hasKey = await checkApiKey();
        if (!hasKey) {
          setLoading(false);
          return;
        }
        const videoUrl = await generateVideoWithVeo(selectedFile, mimeType, prompt, aspectRatio);
        setResultVideo(videoUrl);
      } else {
        const editedImg = await editImageWithNano(selectedFile, mimeType, prompt);
        setResultImage(editedImg);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto py-4">
      <div className="text-center space-y-2">
        <h3 className="text-4xl font-black text-pink-600">{t.studioIntro}</h3>
        <p className="text-gray-500 font-medium">{veoMode ? t.studioAnimate : t.studioEdit}</p>
      </div>

      <div className="flex gap-4 mb-2">
        <button 
          onClick={() => { setVeoMode(false); setResultImage(null); setResultVideo(null); }}
          className={`px-6 py-2 rounded-full font-bold transition-all ${!veoMode ? 'bg-pink-500 text-white shadow-lg scale-105' : 'bg-gray-200 text-gray-600'}`}
        >
          🎨 {t.studioEdit}
        </button>
        <button 
          onClick={() => { setVeoMode(true); setResultImage(null); setResultVideo(null); }}
          className={`px-6 py-2 rounded-full font-bold transition-all ${veoMode ? 'bg-purple-500 text-white shadow-lg scale-105' : 'bg-gray-200 text-gray-600'}`}
        >
          🎬 {t.studioAnimate}
        </button>
      </div>

      <div className="w-full bg-white rounded-[2.5rem] p-8 shadow-xl border-4 border-dashed border-pink-100 flex flex-col items-center space-y-6">
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
        />
        
        <button 
          onClick={() => fileInputRef.current?.click()}
          className={`w-full aspect-video rounded-3xl border-4 border-dashed border-gray-200 flex flex-col items-center justify-center space-y-2 overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors relative group`}
        >
          {selectedFile ? (
            <>
              <img 
                src={`data:${mimeType};base64,${selectedFile}`} 
                alt="Selected" 
                className="w-full h-full object-cover group-hover:opacity-50" 
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-3xl">🔄</span>
            </>
          ) : (
            <>
              <span className="text-5xl">📸</span>
              <span className="font-bold text-gray-400">Click to upload photo</span>
            </>
          )}
        </button>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t.promptPlaceholder}
          className="w-full p-4 rounded-2xl bg-pink-50 border-2 border-pink-100 focus:border-pink-300 focus:outline-none font-medium min-h-[100px] resize-none"
        />

        {veoMode && (
          <div className="flex items-center gap-4 w-full">
            <span className="font-bold text-gray-500">Aspect Ratio:</span>
            <div className="flex gap-2">
              {(['16:9', '9:16'] as const).map(ratio => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  className={`px-4 py-1 rounded-lg font-bold border-2 transition-all ${aspectRatio === ratio ? 'bg-purple-100 border-purple-400 text-purple-700' : 'bg-white border-gray-200 text-gray-400'}`}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleAction}
          disabled={loading || !selectedFile}
          className={`w-full py-5 rounded-2xl text-xl font-bold text-white shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-3 ${
            loading ? 'bg-gray-400' : (veoMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-pink-600 hover:bg-pink-700')
          }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin text-2xl">⏳</span>
              <span>{t.generating}</span>
            </div>
          ) : (
            <>
              <span>{veoMode ? t.animateButton : t.editButton}</span>
            </>
          )}
        </button>

        {needsKey && (
          <div className="w-full p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200 flex flex-col items-center space-y-2">
            <p className="text-sm font-bold text-yellow-700 text-center">{t.rekey}</p>
            <button 
              onClick={handleOpenKeyDialog}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg text-sm font-bold shadow-sm"
            >
              {t.selectKey}
            </button>
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-xs text-yellow-600 underline">
              Billing Docs
            </a>
          </div>
        )}
      </div>

      {resultImage && (
        <div className="w-full space-y-4 animate-fade-in">
          <h4 className="text-2xl font-bold text-center text-pink-600">Magic Result! ✨</h4>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img src={resultImage} alt="Magic result" className="w-full h-auto" />
          </div>
        </div>
      )}

      {resultVideo && (
        <div className="w-full space-y-4 animate-fade-in">
          <h4 className="text-2xl font-bold text-center text-purple-600">Move it move it! 🎬</h4>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <video src={resultVideo} controls autoPlay loop className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};
