'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { useData } from '@/context/DataContext';
import Icon from '@/components/Icon';

export const AudioTrackList: React.FC<{ onSelect?: () => void }> = ({ onSelect }) => {
  const { currentChapter, isPlaying, setChapter } = useAudio();
  const { chapters } = useData();
  const router = useRouter();

  const playlist = chapters.filter(c => !!c.audioUrl);

  if (playlist.length === 0) {
    return (
      <p className="text-center py-8 text-sm italic" style={{ color: 'var(--text-muted)' }}>
        Aucun audio disponible pour le moment.
      </p>
    );
  }

  return (
    <div className="one-ui-list">
      {playlist.map((chapter, i) => {
        const isCurrent = currentChapter?.id === chapter.id;
        return (
          <React.Fragment key={chapter.id}>
            {i > 0 && <div className="one-ui-row-divider" />}
            <button
              onClick={() => { setChapter(chapter); onSelect?.(); router.push('/audio'); }}
              className="one-ui-row"
              style={isCurrent ? { background: 'var(--accent-soft)' } : undefined}
              aria-current={isCurrent ? 'true' : undefined}
            >
              <div className="one-ui-row-icon !w-9 !h-9 text-sm">
                {isCurrent ? (
                  <span className="eq-bars" data-paused={!isPlaying}>
                    <span /><span /><span />
                  </span>
                ) : (
                  <Icon name={chapter.icon || 'music_note'} className="text-lg" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[13px] font-medium leading-snug"
                  style={{ color: isCurrent ? 'var(--accent)' : 'var(--text-primary)' }}
                >
                  {chapter.titleFr}
                </p>
                <p className="text-[11px] font-amiri leading-snug mt-0.5" style={{ color: 'var(--text-muted)' }} lang="ar" dir="rtl">
                  {chapter.titleAr}
                </p>
              </div>
              {isCurrent && isPlaying ? (
                <Icon name="pause" className="text-lg flex-shrink-0" style={{ color: 'var(--accent)' }} />
              ) : (
                <Icon name="play_arrow" className="text-lg flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
              )}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AudioTrackList;
