'use client';

import { useAudio } from '@/context/AudioContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const Player = () => {
  const { 
    currentChapter, isPlaying, progress, currentTime, duration,
    volume, playbackRate, isLooping, isMuted, isLoading, error,
    togglePlay, seekTo, setVolume, toggleMute, setPlaybackRate,
    toggleLoop, playNext, playPrevious, stop, quitPlayback, formatTime
  } = useAudio();

  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false); // New state for options menu

  // Local state for smooth volume slider interaction
  const [localVolume, setLocalVolume] = useState(volume); 

  useEffect(() => {
    setLocalVolume(volume);
  }, [volume]);

  // Handle seeking interaction
  const handleSeekStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsSeeking(true);
    handleSeek(e);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSeeking && progressBarRef.current && duration > 0) {
      const rect = progressBarRef.current.getBoundingClientRect();
      let offsetX = e.clientX - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
      const time = (offsetX / rect.width) * duration;
      setSeekTime(time);
    }
  };

  const handleSeekEnd = () => {
    if (isSeeking && duration > 0) {
      seekTo(seekTime);
    }
    setIsSeeking(false);
    setSeekTime(0);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setLocalVolume(newVolume);
    setVolume(newVolume);
  };

  const handlePlaybackRateChange = (rate: number) => {
    setPlaybackRate(rate);
  };

  const remainingTime = duration - currentTime;

  if (!currentChapter) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-4 inset-x-4 max-w-sm mx-auto z-[100] p-5 bg-black/20 backdrop-blur-[20px] border border-gold/50 rounded-3xl shadow-2xl"
        onMouseUp={handleSeekEnd}
        onMouseLeave={handleSeekEnd}
      >
        <div className="flex items-center gap-4 mb-4">
          <p className="flex-1 text-white/90 text-lg font-serif truncate">
            {currentChapter.titleFr}
          </p>
          <button 
            onClick={togglePlay} 
            className="w-16 h-16 bg-gradient-to-b from-gold to-[#A8884A] text-emerald-950-dynamic rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform flex-shrink-0"
          >
            {isLoading ? (
              <span className="material-symbols-rounded text-4xl animate-spin">progress_activity</span>
            ) : (
              <span className="material-symbols-rounded text-4xl">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div 
            ref={progressBarRef} 
            className="relative w-full h-1 bg-white/10 rounded-full cursor-pointer group"
            onMouseDown={handleSeekStart}
            onMouseMove={handleSeek}
            onMouseUp={handleSeekEnd}
          >
            <motion.div 
              className="h-full bg-gold shadow-[0_0_10px_#C9A961] rounded-full" 
              style={{ width: `${isSeeking ? (seekTime / duration) * 100 : progress}%` }}
            />
          </div>
          <p className="text-xs text-white/50 font-mono w-16 text-right">
            -{formatTime(remainingTime)}
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-3 py-1 rounded-md shadow-md"
          >
            {error}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};