'use client';

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { CHAPTERS, Chapter } from '@/data/chapters';

// Helper to format time for display
const formatTime = (seconds: number): string => {
  if (isNaN(seconds)) return '00:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

interface AudioContextType {
  currentChapter: Chapter | null;
  isPlaying: boolean;
  progress: number; // Percentage
  currentTime: number; // Seconds
  duration: number; // Seconds
  volume: number; // 0-1
  playbackRate: number; // e.g., 1.0, 1.5
  isLooping: boolean;
  isMuted: boolean;
  isLoading: boolean;
  error: string | null;
  
  setChapter: (chapter: Chapter) => void;
  togglePlay: () => void;
  seekTo: (time: number) => void;
  setVolume: (level: number) => void;
  toggleMute: () => void;
  setPlaybackRate: (rate: number) => void;
  toggleLoop: () => void;
  playNext: () => void;
  playPrevious: () => void;
  stop: () => void;
  quitPlayback: () => void; // New function to quit playback mode
  formatTime: (seconds: number) => string; // Expose helper
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Player state
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.7); // Default volume
  const [playbackRate, setPlaybackRateState] = useState(1.0);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize audio element ref
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
  }, []);

  // Update audio element properties on state change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.loop = isLooping;
      audioRef.current.muted = isMuted;
    }
  }, [volume, playbackRate, isLooping, isMuted]);

  // Event Listeners for HTMLAudioElement
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
      setIsLoading(false);
      setError(null);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      if (!isLooping) {
        playNext(); // Automatically play next track if not looping
      }
    };
    const handleError = () => {
      setError('Erreur de lecture audio. Veuillez réessayer.');
      setIsLoading(false);
      setIsPlaying(false);
      console.error('Audio error:', audio.error);
    };
    const handleLoading = () => setIsLoading(true);

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('waiting', handleLoading);
    audio.addEventListener('playing', () => setIsLoading(false));

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('waiting', handleLoading);
      audio.removeEventListener('playing', () => setIsLoading(false));
    };
  }, [currentChapter, isLooping]); // Re-attach listeners if chapter or looping changes

  // Control functions
  const setChapter = useCallback((chapter: Chapter) => {
    if (audioRef.current) {
      if (currentChapter?.id === chapter.id) {
        // If same chapter, just toggle play
        togglePlay();
      } else {
        setIsLoading(true);
        setError(null);
        audioRef.current.src = chapter.audioUrl;
        audioRef.current.load(); // Load the new source
        audioRef.current.play().catch(e => {
          console.error("Error playing audio:", e);
          setError('Impossible de lire la piste audio.');
          setIsPlaying(false);
          setIsLoading(false);
        });
        setCurrentChapter(chapter);
        setIsPlaying(true);
      }
    }
  }, [currentChapter]);

  const togglePlay = useCallback(() => {
    if (audioRef.current && currentChapter) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.error("Error playing audio:", e);
          setError('Impossible de reprendre la lecture.');
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    } else if (audioRef.current && !currentChapter && CHAPTERS.length > 0) {
      // If no chapter is selected, play the first one
      setChapter(CHAPTERS[0]);
    }
  }, [isPlaying, currentChapter, setChapter]);

  const seekTo = useCallback((time: number) => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      audioRef.current.currentTime = time;
    }
  }, []);

  const setVolume = useCallback((level: number) => {
    if (audioRef.current) {
      audioRef.current.volume = level;
      setVolumeState(level);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const setPlaybackRate = useCallback((rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
      setPlaybackRateState(rate);
    }
  }, []);

  const toggleLoop = useCallback(() => {
    setIsLooping(!isLooping);
  }, [isLooping]);

  const playNext = useCallback(() => {
    if (!currentChapter) {
      if (CHAPTERS.length > 0) setChapter(CHAPTERS[0]);
      return;
    }
    const currentIndex = CHAPTERS.findIndex(c => c.id === currentChapter.id);
    const nextIndex = (currentIndex + 1) % CHAPTERS.length;
    setChapter(CHAPTERS[nextIndex]);
  }, [currentChapter, setChapter]);

  const playPrevious = useCallback(() => {
    if (!currentChapter) {
      if (CHAPTERS.length > 0) setChapter(CHAPTERS[0]);
      return;
    }
    const currentIndex = CHAPTERS.findIndex(c => c.id === currentChapter.id);
    const prevIndex = (currentIndex - 1 + CHAPTERS.length) % CHAPTERS.length;
    setChapter(CHAPTERS[prevIndex]);
  }, [currentChapter, setChapter]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, []);

  const quitPlayback = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = ''; // Clear audio source
    }
    setCurrentChapter(null);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setIsLoading(false);
    setError(null);
  }, []);

  const contextValue = React.useMemo(() => ({
    currentChapter,
    isPlaying,
    progress,
    currentTime,
    duration,
    volume,
    playbackRate,
    isLooping,
    isMuted,
    isLoading,
    error,
    
    setChapter,
    togglePlay,
    seekTo,
    setVolume,
    toggleMute,
    setPlaybackRate,
    toggleLoop,
    playNext,
    playPrevious,
    stop,
    quitPlayback, // Add quitPlayback to context
    formatTime,
  }), [
    currentChapter, isPlaying, progress, currentTime, duration,
    volume, playbackRate, isLooping, isMuted, isLoading, error,
    setChapter, togglePlay, seekTo, setVolume, toggleMute,
    setPlaybackRate, toggleLoop, playNext, playPrevious, stop, quitPlayback
  ]);

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
      {/* Invisible Audio Element */}
      <audio ref={audioRef} />
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio doit être utilisé dans un AudioProvider");
  return context;
};
