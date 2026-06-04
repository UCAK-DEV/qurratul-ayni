'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ReadingSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadingSettings: React.FC<ReadingSettingsProps> = ({ isOpen, onClose }) => {
  const { readingSettings, setReadingSettings } = useTheme();

  const fontSizes = [100, 110, 120, 130, 140];
  const lineHeights = [1.4, 1.6, 1.8, 2.0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-emerald-950/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 z-[160]"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-gold font-black text-xs uppercase tracking-[0.4em]">Réglages de lecture</h2>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <span className="material-symbols-rounded text-white/60">close</span>
              </button>
            </div>

            <div className="space-y-10">
              {/* Taille de police */}
              <div className="space-y-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Taille du texte</p>
                <div className="flex justify-between gap-2">
                  {fontSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setReadingSettings({ ...readingSettings, fontSize: size })}
                      className={`flex-1 py-3 rounded-xl border transition-all text-sm font-bold ${
                        readingSettings.fontSize === size 
                        ? 'bg-gold border-gold text-emerald-950' 
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-gold/30'
                      }`}
                    >
                      {size}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Interlignage */}
              <div className="space-y-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Espacement des lignes</p>
                <div className="flex justify-between gap-2">
                  {lineHeights.map(height => (
                    <button
                      key={height}
                      onClick={() => setReadingSettings({ ...readingSettings, lineHeight: height })}
                      className={`flex-1 py-3 rounded-xl border transition-all text-sm font-bold ${
                        readingSettings.lineHeight === height 
                        ? 'bg-gold border-gold text-emerald-950' 
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-gold/30'
                      }`}
                    >
                      {height}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[9px] text-center text-white/30 italic">Ces réglages sont appliqués à tous les contenus éducatifs.</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
