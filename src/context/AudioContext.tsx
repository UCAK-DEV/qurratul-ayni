'use client';

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { Chapter } from '@/data/chapters';
import { useData } from './DataContext';

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
  const { chapters } = useData();
  
  // Player state
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7); // Default volume
  const [playbackRate, setPlaybackRate] = useState(1.0);
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

  // Update audio element properties when state changes (safeguard)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.loop = isLooping;
      audioRef.current.muted = isMuted;
    }
  }, [volume, playbackRate, isLooping, isMuted, currentChapter]);

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
    } else if (audioRef.current && !currentChapter && chapters.length > 0) {
      // If no chapter is selected, play the first one
      const firstChapter = chapters[0];
      setCurrentChapter(firstChapter);
      audioRef.current.src = firstChapter.audioUrl;
      audioRef.current.load();
      audioRef.current.play().catch(e => {
        console.error("Error playing audio:", e);
        setError('Impossible de lire la piste audio.');
        setIsPlaying(false);
        setIsLoading(false);
      });
      setIsPlaying(true);
    }
  }, [isPlaying, currentChapter, chapters]);

  const setChapter = useCallback((chapter: Chapter) => {
    if (audioRef.current) {
      if (currentChapter?.id === chapter.id) {
        // If same chapter, just toggle play
        togglePlay();
      } else {
        // Guard: skip chapters with no audio source to avoid Format/src errors
        if (!chapter.audioUrl) {
          setError('Aucun audio disponible pour ce chapitre.');
          return;
        }
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
  }, [currentChapter, togglePlay]);

  const playNext = useCallback(() => {
    if (!currentChapter) {
      if (chapters.length > 0) setChapter(chapters[0]);
      return;
    }
    const currentIndex = chapters.findIndex(c => c.id === currentChapter.id);
    const nextIndex = (currentIndex + 1) % chapters.length;
    setChapter(chapters[nextIndex]);
  }, [currentChapter, setChapter, chapters]);

  const playPrevious = useCallback(() => {
    if (!currentChapter) {
      if (chapters.length > 0) setChapter(chapters[0]);
      return;
    }
    const currentIndex = chapters.findIndex(c => c.id === currentChapter.id);
    const prevIndex = (currentIndex - 1 + chapters.length) % chapters.length;
    setChapter(chapters[prevIndex]);
  }, [currentChapter, setChapter, chapters]);

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
      // Ignore errors caused by intentionally clearing the src (quitPlayback)
      if (!audio.src || audio.src === window.location.href) return;
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
  }, [currentChapter, isLooping, playNext]); // Re-attach listeners if chapter or looping changes

  const seekTo = useCallback((time: number) => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      audioRef.current.currentTime = time;
    }
  }, []);

  const handleSetVolume = useCallback((level: number) => {
    setVolume(level);
    if (audioRef.current) audioRef.current.volume = level;
  }, []);

  const handleSetPlaybackRate = useCallback((rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      if (audioRef.current) audioRef.current.muted = next;
      return next;
    });
  }, []);

  const toggleLoop = useCallback(() => {
    setIsLooping(prev => {
      const next = !prev;
      if (audioRef.current) audioRef.current.loop = next;
      return next;
    });
  }, []);

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
    setVolume: handleSetVolume,
    toggleMute,
    setPlaybackRate: handleSetPlaybackRate,
    toggleLoop,
    playNext,
    playPrevious,
    stop,
    quitPlayback, // Add quitPlayback to context
    formatTime,
  }), [
    currentChapter, isPlaying, progress, currentTime, duration,
    volume, playbackRate, isLooping, isMuted, isLoading, error,
    setChapter, togglePlay, seekTo, handleSetVolume, toggleMute,
    handleSetPlaybackRate, toggleLoop, playNext, playPrevious, stop, quitPlayback
  ]);

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
      {/* Invisible Audio Element */}
      <audio ref={audioRef} />
    </AudioContext.Provider>
  );
};

// Safe no-op fallback used during SSR (before AudioProvider mounts on the client)
const AUDIO_FALLBACK: AudioContextType = {
  currentChapter: null,
  isPlaying: false,
  progress: 0,
  currentTime: 0,
  duration: 0,
  volume: 0.7,
  playbackRate: 1.0,
  isLooping: false,
  isMuted: false,
  isLoading: false,
  error: null,
  setChapter: () => {},
  togglePlay: () => {},
  seekTo: () => {},
  setVolume: () => {},
  toggleMute: () => {},
  setPlaybackRate: () => {},
  toggleLoop: () => {},
  playNext: () => {},
  playPrevious: () => {},
  stop: () => {},
  quitPlayback: () => {},
  formatTime: (s: number) => {
    if (isNaN(s)) return '00:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  },
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  // During SSR or if the component renders before AudioProvider mounts,
  // return a safe no-op object instead of crashing.
  return context ?? AUDIO_FALLBACK;
};
