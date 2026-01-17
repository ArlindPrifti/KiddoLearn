
import { GoogleGenAI, Modality } from "@google/genai";

// Persistent "Folder" name in device storage - Bumped to v2 to clear old male caches
const VOICE_CACHE_NAME = 'kiddolearn-voice-folder-v2';

async function getCache() {
  return await caches.open(VOICE_CACHE_NAME);
}

function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

let audioContext: AudioContext | null = null;

/**
 * Browser fallback for offline/error states.
 * Tries hard to find a female voice.
 */
const fallbackSpeak = (text: string, lang: string = 'en'): Promise<void> => {
  return new Promise((resolve) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      
      // Filter for the correct language
      const langVoices = voices.filter(v => v.lang.startsWith(lang));
      
      // Try to find a female voice specifically
      let selectedVoice = langVoices.find(v => 
        v.name.toLowerCase().includes('female') || 
        v.name.toLowerCase().includes('woman') ||
        v.name.toLowerCase().includes('girl') ||
        v.name.toLowerCase().includes('google us english') // Usually high quality female
      );

      // Fallback to first available if no female specific found
      if (!selectedVoice) selectedVoice = langVoices[0];
      
      if (selectedVoice) utterance.voice = selectedVoice;
      utterance.rate = 0.95;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    } else {
      resolve();
    }
  });
};

/**
 * Transforms text input into audio output.
 * Uses a persistent local "folder" (Cache API) to store voices for offline use.
 */
export const speakText = async (text: string, voice: string = 'Kore', lang: string = 'en', silent: boolean = false): Promise<void> => {
  // We strictly use 'Kore' (Female) regardless of what is passed
  const targetVoice = 'Kore';
  const cacheKey = `https://kiddolearn.local/voice/${targetVoice}/${lang}/${encodeURIComponent(text)}`;
  
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    if (!silent && audioContext.state === 'suspended') await audioContext.resume();

    const playBuffer = (buffer: AudioBuffer): Promise<void> => {
      return new Promise((resolve) => {
        const source = audioContext!.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext!.destination);
        source.onended = () => resolve();
        source.start();
      });
    };

    // 1. Check the "Voice Folder" (Persistent Cache)
    const cache = await getCache();
    const cachedResponse = await cache.match(cacheKey);
    
    if (cachedResponse) {
      if (silent) return; // Already cached
      const blob = await cachedResponse.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const audioData = new Uint8Array(arrayBuffer);
      const audioBuffer = await decodeAudioData(audioData, audioContext, 24000, 1);
      await playBuffer(audioBuffer);
      return;
    }

    // 2. If not found and offline, use browser fallback (Female preferred)
    if (!navigator.onLine || !process.env.API_KEY) {
      if (silent) return;
      await fallbackSpeak(text, lang);
      return;
    }

    // 3. Generate new voice via Gemini API (Forced to 'Kore')
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: targetVoice } },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const audioData = decodeBase64(base64Audio);
      
      // Save to "Voice Folder" for future offline use
      const blob = new Blob([audioData], { type: 'audio/pcm' });
      await cache.put(cacheKey, new Response(blob));

      if (!silent) {
        const audioBuffer = await decodeAudioData(audioData, audioContext, 24000, 1);
        await playBuffer(audioBuffer);
      }
    } else if (!silent) {
      throw new Error("No audio data");
    }
  } catch (error) {
    if (!silent) {
      console.warn("TTS Error (using browser fallback):", error);
      await fallbackSpeak(text, lang);
    }
  }
};

/**
 * Transcribes audio. Note: Transcription requires a connection.
 */
export const transcribeAudio = async (base64Audio: string, mimeType: string, lang: string = 'en'): Promise<string> => {
  if (!process.env.API_KEY || !navigator.onLine) return "";
  const langNames = { en: "English", es: "Spanish", fr: "French", it: "Italian", de: "German", pt: "Portuguese", jp: "Japanese", zh: "Chinese", hi: "Hindi", sq: "Albanian" };
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          parts: [
            { inlineData: { data: base64Audio, mimeType } },
            { text: `The user is answering a kid's educational quiz in ${langNames[lang as keyof typeof langNames] || "English"}. They are saying a letter or an animal name. Please transcribe exactly what they said. Only return the transcribed word or phrase, nothing else.` }
          ]
        }
      ],
    });
    return response.text?.trim() || "";
  } catch (error) {
    console.error("Transcription Error:", error);
    return "";
  }
};

/**
 * Edits an image. Note: Editing requires a connection.
 */
export const editImageWithNano = async (base64Image: string, mimeType: string, prompt: string): Promise<string | null> => {
  if (!process.env.API_KEY || !navigator.onLine) return null;
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: { data: base64Image, mimeType } },
          { text: prompt }
        ]
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Edit Error:", error);
    return null;
  }
};

/**
 * Generates a video. Note: Video generation requires a connection.
 */
export const generateVideoWithVeo = async (base64Image: string, mimeType: string, prompt: string, aspectRatio: '16:9' | '9:16' = '16:9'): Promise<string | null> => {
  if (!process.env.API_KEY || !navigator.onLine) return null;
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'Animate this image',
      image: {
        imageBytes: base64Image,
        mimeType: mimeType
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: aspectRatio
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (downloadLink) {
      const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      const blob = await videoResponse.blob();
      return URL.createObjectURL(blob);
    }
    return null;
  } catch (error) {
    console.error("Veo Video Error:", error);
    return null;
  }
};
