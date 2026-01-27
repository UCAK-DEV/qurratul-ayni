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

  // Local state for smooth volume slider interaction, removed isVolumeSliderVisible
  const [localVolume, setLocalVolume] = useState(volume); 

  useEffect(() => {
    setLocalVolume(volume);
  }, [volume]);

  // Handle seeking interaction
  const handleSeekStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsSeeking(true);
    handleSeek(e); // Set initial seek time
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSeeking && progressBarRef.current && duration > 0) {
      const rect = progressBarRef.current.getBoundingClientRect();
      let offsetX = e.clientX - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width)); // Clamp within bounds
      const time = (offsetX / rect.width) * duration;
      setSeekTime(time);
    }
  };

  const handleSeekEnd = () => {
    if (isSeeking && duration > 0) {
      seekTo(seekTime);
    }
    setIsSeeking(false);
    setSeekTime(0); // Reset seekTime
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setLocalVolume(newVolume);
    setVolume(newVolume);
  };

  const handlePlaybackRateChange = (rate: number) => {
    setPlaybackRate(rate);
  };

  if (!currentChapter) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 w-full z-[100] p-4 bg-gradient-to-t from-emerald-950-dynamic/90 to-emerald-950-dynamic/60 backdrop-blur-xl border-t border-white/5 shadow-2xl md:pb-6"
        onMouseUp={handleSeekEnd}
        onMouseLeave={handleSeekEnd} // End seek if mouse leaves player area
      >
        {/* Progress Bar with seeking */}
        <div 
          ref={progressBarRef} 
          className="relative w-full h-1.5 bg-white/10 rounded-full cursor-pointer group mb-4"
          onMouseDown={handleSeekStart}
          onMouseMove={handleSeek}
          onMouseUp={handleSeekEnd}
        >
          <motion.div 
            className="h-full bg-gold shadow-[0_0_10px_#C9A961] rounded-full" 
            style={{ width: `${isSeeking ? (seekTime / duration) * 100 : progress}%` }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full shadow-[0_0_15px_#C9A961] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ left: `${isSeeking ? (seekTime / duration) * 100 : progress}%` }}
          />
        </div>

        {/* Player Controls & Info */}
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Chapter Info */}
          <div className="flex items-center gap-3 w-1/3 md:w-auto">
            <button onClick={quitPlayback} className="text-white/40 hover:text-red-400 transition-colors p-1 md:p-2">
              <span className="material-symbols-rounded text-xl md:text-2xl">close</span>
            </button>
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-xl shrink-0">
              <span className="material-symbols-rounded">menu_book</span>
            </div>
            <div className="min-w-0 hidden sm:block">
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.1em] truncate">
                {currentChapter.titleFr}
              </p>
              <p className="text-xs text-white/70 truncate">
                {currentChapter.titleAr}
              </p>
            </div>
          </div>

          {/* Main Controls */}
          <div className="flex items-center gap-2 md:gap-4 flex-1 justify-center">
            <button onClick={playPrevious} className="text-white/70 hover:text-white transition-colors p-2 md:p-3">
              <span className="material-symbols-rounded text-xl md:text-2xl">skip_previous</span>
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

            <button onClick={playNext} className="text-white/70 hover:text-white transition-colors p-2 md:p-3">
              <span className="material-symbols-rounded text-xl md:text-2xl">skip_next</span>
            </button>
          </div>

          {/* Time, Volume, Speed, Loop Controls */}
          <div className="flex items-center justify-end gap-2 md:gap-4 w-1/3 md:w-auto">
            <p className="text-xs text-white/50 font-mono hidden md:block">
              {formatTime(isSeeking ? seekTime : currentTime)} / {formatTime(duration)}
            </p>

            {/* Volume Control */}
            <div className="flex items-center gap-1 md:gap-2 group">
              <button onClick={toggleMute} className="text-white/70 hover:text-white transition-colors p-2 md:p-3">
                <span className="material-symbols-rounded text-xl md:text-2xl">
                  {isMuted || volume === 0 ? 'volume_off' : volume > 0.5 ? 'volume_up' : 'volume_down'}
                </span>
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={localVolume}
                onChange={handleVolumeChange}
                className="w-16 md:w-20 h-1 accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>

            {/* Playback Rate */}
            <div className="relative group hidden md:flex">
              <button className="text-white/70 hover:text-white transition-colors p-2 md:p-3">
                <span className="material-symbols-rounded text-xl md:text-2xl">speed</span>
              </button>
              <div className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 p-2 bg-emerald-950-dynamic/90 backdrop-blur-lg rounded-full shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                {[0.75, 1.0, 1.25, 1.5, 2.0].map(rate => (
                  <button
                    key={rate}
                    onClick={() => handlePlaybackRateChange(rate)}
                    className={`text-xs px-2 py-1 rounded-full ${playbackRate === rate ? 'bg-gold text-emerald-950-dynamic' : 'text-white/70 hover:bg-white/10'}`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            <button onClick={toggleLoop} className={`p-2 md:p-3 rounded-full ${isLooping ? 'text-gold bg-gold/10' : 'text-white/70 hover:bg-white/10'} transition-all`}>
              <span className="material-symbols-rounded text-xl md:text-2xl">repeat</span>
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