'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/Icon';
import { AudioTrackList } from '@/components/AudioTrackList';

export const AudioLibrarySheet: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bottom-sheet-backdrop"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            className="bottom-sheet-panel"
          >
            <div className="bottom-sheet-handle" />
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <Icon name="library_music" className="text-gold" />
                <h2 className="font-black text-sm uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  Audios
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'var(--border-subtle)', color: 'var(--text-muted)' }}
                aria-label="Fermer"
              >
                <Icon name="close" className="text-base" />
              </button>
            </div>

            {/* Track list */}
            <div className="overflow-y-auto flex-1 px-3 pt-3 pb-8" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}>
              <AudioTrackList onSelect={onClose} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AudioLibrarySheet;
