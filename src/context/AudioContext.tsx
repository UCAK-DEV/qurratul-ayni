'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Chapter } from '@/data/chapters';

interface AudioContextType {
  currentChapter: Chapter | null;
  isPlaying: boolean;
  progress: number;
  setChapter: (chapter: Chapter) => void;
  togglePlay: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialisation de l'élément audio global
  useEffect(() => {
    audioRef.current = new Audio();
    
    const updateProgress = () => {
      if (audioRef.current) {
        const val = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(val || 0);
      }
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    audioRef.current.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const setChapter = (chapter: Chapter) => {
    if (audioRef.current) {
      if (currentChapter?.id === chapter.id) {
        togglePlay();
      } else {
        audioRef.current.src = chapter.audioUrl;
        audioRef.current.play();
        setCurrentChapter(chapter);
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current && currentChapter) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AudioContext.Provider value={{ currentChapter, isPlaying, progress, setChapter, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio doit être utilisé dans un AudioProvider");
  return context;
};