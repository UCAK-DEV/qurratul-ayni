'use client';
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface Track { title: string; url: string; }

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  currentTime: number;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentTrack]);

  const playTrack = (track: Track) => {
    if (audioRef.current) {
      if (currentTrack?.url !== track.url) {
        setCurrentTrack(track);
        audioRef.current.src = track.url;
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const seek = (time: number) => {
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, progress, duration, currentTime, playTrack, togglePlay, seek }}>
      {children}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
};