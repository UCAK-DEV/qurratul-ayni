'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import Icon from '@/components/Icon';
import { SeekBar } from '@/components/SeekBar';
import { AudioTrackList } from '@/components/AudioTrackList';

const SPEEDS = [1.0, 1.25, 1.5, 2.0, 0.75];

export default function AudioPlayerPage() {
  const {
    currentChapter, isPlaying, isLoading, isLooping, playbackRate, error,
    togglePlay, toggleLoop, setPlaybackRate, playNext, playPrevious,
  } = useAudio();
  const router = useRouter();

  const cycleSpeed = () => {
    const idx = SPEEDS.indexOf(playbackRate);
    setPlaybackRate(SPEEDS[(idx + 1) % SPEEDS.length]);
  };

  const playIcon = isLoading ? 'progress_activity' : isPlaying ? 'pause' : 'play_arrow';

  return (
    <main className="min-h-screen pt-4 pb-24 px-5">
      <div className="max-w-md mx-auto">

        {/* Barre du haut */}
        <div className="flex items-center justify-between pb-2">
          <button onClick={() => router.back()} className="one-icon-btn" aria-label="Retour">
            <Icon name="expand_more" className="text-xl" />
          </button>
          <p className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            Lecture en cours
          </p>
          <span className="w-9" />
        </div>

        {!currentChapter ? (
          <div className="text-center py-24 space-y-3">
            <Icon name="music_off" className="text-4xl" style={{ color: 'var(--text-muted)' }} />
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Aucun audio en cours de lecture.</p>
          </div>
        ) : (
          <>
            {/* Disque tournant avec le logo du site */}
            <div className="max-w-xs mx-auto mt-4">
              <div className="relative aspect-square rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: '#0b0b0b', boxShadow: 'var(--shadow-card)', border: '10px solid var(--bg-surface)' }}>
                <div
                  className="vinyl-disc relative w-full h-full rounded-full overflow-hidden"
                  data-paused={!isPlaying}
                >
                  <Image src="/favicon.png" alt="" fill className="object-cover" />
                  {/* Trou central façon vinyle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14%] h-[14%] rounded-full"
                    style={{ background: '#0b0b0b', boxShadow: '0 0 0 3px rgba(0,0,0,0.4)' }} />
                </div>
              </div>
            </div>

            {/* Titres */}
            <div className="text-center mt-6 space-y-1">
              <h2 className="font-display text-2xl font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                {currentChapter.titleFr}
              </h2>
              <p className="text-sm font-amiri" style={{ color: 'var(--color-gold)' }} lang="ar" dir="rtl">
                {currentChapter.titleAr}
              </p>
            </div>

            {/* Seek complet avec minutages */}
            <div className="mt-6">
              <SeekBar />
            </div>

            {/* Erreur de lecture éventuelle */}
            {error && (
              <p className="mt-2 text-xs text-red-400 flex items-center justify-center gap-1.5">
                <Icon name="error" className="text-sm" />
                {error}
              </p>
            )}

            {/* Contrôles principaux */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 mt-4">
              <button
                onClick={toggleLoop}
                className="one-icon-btn"
                style={isLooping ? { color: 'var(--accent)', background: 'var(--accent-soft)' } : undefined}
                aria-label="Lecture en boucle"
                aria-pressed={isLooping}
              >
                <Icon name="repeat" className="text-xl" />
              </button>

              <button onClick={playPrevious} className="one-icon-btn !w-12 !h-12" aria-label="Piste précédente">
                <Icon name="skip_previous" className="text-3xl" />
              </button>

              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full flex items-center justify-center transition-transform active:scale-90"
                style={{ background: 'var(--accent-gradient)', color: 'var(--accent-contrast)', boxShadow: 'var(--shadow-card)' }}
                aria-label={isPlaying ? 'Pause' : 'Lecture'}
              >
                <Icon name={playIcon} className={`text-4xl ${isLoading ? 'animate-spin' : ''}`} />
              </button>

              <button onClick={playNext} className="one-icon-btn !w-12 !h-12" aria-label="Piste suivante">
                <Icon name="skip_next" className="text-3xl" />
              </button>

              <button
                onClick={cycleSpeed}
                className="one-icon-btn text-sm font-bold tabular-nums"
                style={playbackRate !== 1.0 ? { color: 'var(--accent)', background: 'var(--accent-soft)' } : undefined}
                aria-label={`Vitesse de lecture : ${playbackRate}x`}
              >
                {playbackRate}x
              </button>
            </div>
          </>
        )}

        {/* Liste des audios disponibles */}
        <section className="mt-8 space-y-3">
          <p className="one-ui-group-label !p-0 flex items-center gap-2">
            <Icon name="library_music" className="text-base" />
            Liste des audios
          </p>
          <AudioTrackList />
        </section>
      </div>
    </main>
  );
}
