'use client';

import { useAudio } from '@/context/AudioContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const Player = () => {
  const { 
    currentChapter, isPlaying, progress, currentTime, duration,
    volume, playbackRate, isLooping, isMuted, isLoading, error,
    togglePlay, seekTo, setVolume, toggleMute, setPlaybackRate,
    toggleLoop, playNext, playPrevious, stop, formatTime
  } = useAudio();

  const progressBarRef = useRef<HTMLDivElement>(null);
  const volumeControlRef = useRef<HTMLInputElement>(null);
  const [isVolumeSliderVisible, setIsVolumeSliderVisible] = useState(false);
  const [localVolume, setLocalVolume] = useState(volume); // Local state for smooth volume slider interaction

  // Sync local volume with context volume
  useEffect(() => {
    setLocalVolume(volume);
  }, [volume]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && duration > 0) {
      const clickX = e.clientX - progressBarRef.current.getBoundingClientRect().left;
      const width = progressBarRef.current.getBoundingClientRect().width;
      const time = (clickX / width) * duration;
      seekTo(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setLocalVolume(newVolume);
    setVolume(newVolume);
  };

  const handlePlaybackRateChange = (rate: number) => {
    setPlaybackRate(rate);
  };

  if (!currentChapter) return null; // Player is not visible if no chapter is selected

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 w-full z-[100] px-4 py-3 bg-gradient-to-t from-emerald-950-dynamic/90 to-emerald-950-dynamic/60 backdrop-blur-xl border-t border-white/5 shadow-2xl"
      >
        {/* Progress Bar */}
        <div 
          ref={progressBarRef} 
          className="relative w-full h-1.5 bg-white/10 rounded-full cursor-pointer group mb-3"
          onClick={handleProgressBarClick}
        >
          <motion.div 
            className="h-full bg-gold shadow-[0_0_10px_#C9A961] rounded-full" 
            style={{ width: `${progress}%` }}
          />
          {/* Draggable thumb for seeking */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_#C9A961] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Player Controls & Info */}
        <div className="flex items-center justify-between gap-4">
          {/* Chapter Info */}
          <div className="flex-1 min-w-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-xl shrink-0">
              <span className="material-symbols-rounded">menu_book</span>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.1em] truncate">
                {currentChapter.titleFr}
              </p>
              <p className="text-xs text-white/70 truncate">
                {currentChapter.titleAr}
              </p>
            </div>
          </div>

          {/* Main Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={playPrevious} className="text-white/70 hover:text-white transition-colors p-2">
              <span className="material-symbols-rounded text-xl">skip_previous</span>
            </button>

            <button 
              onClick={togglePlay} 
              className="w-12 h-12 bg-gold text-emerald-950-dynamic rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
              {isLoading ? (
                <span className="material-symbols-rounded text-3xl animate-spin">progress_activity</span>
              ) : (
                <span className="material-symbols-rounded text-3xl">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              )}
            </button>

            <button onClick={playNext} className="text-white/70 hover:text-white transition-colors p-2">
              <span className="material-symbols-rounded text-xl">skip_next</span>
            </button>
          </div>

          {/* Time and Volume Controls */}
          <div className="flex-1 min-w-0 flex items-center justify-end gap-3 md:gap-6">
            <p className="text-xs text-white/50 font-mono hidden md:block">
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>

            {/* Volume Control */}
            <div 
              className="relative flex items-center"
              onMouseEnter={() => setIsVolumeSliderVisible(true)}
              onMouseLeave={() => setIsVolumeSliderVisible(false)}
            >
              <button onClick={toggleMute} className="text-white/70 hover:text-white transition-colors p-2">
                <span className="material-symbols-rounded text-xl">
                  {isMuted || volume === 0 ? 'volume_off' : volume > 0.5 ? 'volume_up' : 'volume_down'}
                </span>
              </button>
              <AnimatePresence>
                {isVolumeSliderVisible && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 p-2 bg-emerald-950-dynamic/90 backdrop-blur-lg rounded-full shadow-lg border border-white/10"
                  >
                    <input
                      ref={volumeControlRef}
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={localVolume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 accent-gold"
                      style={{ direction: 'rtl' }} // Invert slider direction if needed
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Playback Rate & Loop */}
            <div className="relative group hidden md:flex items-center">
              <button className="text-white/70 hover:text-white transition-colors p-2">
                <span className="material-symbols-rounded text-xl">speed</span>
              </button>
              <div className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 p-2 bg-emerald-950-dynamic/90 backdrop-blur-lg rounded-full shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                {[0.75, 1.0, 1.25, 1.5, 2.0].map(rate => (
                  <button
                    key={rate}
                    onClick={() => setPlaybackRate(rate)}
                    className={`text-xs px-2 py-1 rounded-full ${playbackRate === rate ? 'bg-gold text-emerald-950-dynamic' : 'text-white/70 hover:bg-white/10'}`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            <button onClick={toggleLoop} className={`p-2 rounded-full ${isLooping ? 'text-gold bg-gold/10' : 'text-white/70 hover:bg-white/10'} transition-all`}>
              <span className="material-symbols-rounded text-xl">repeat</span>
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-3 py-1 rounded-md shadow-md"
          >
            {error}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
