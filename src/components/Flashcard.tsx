'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flashcard as FlashcardType } from '@/types/content';

interface FlashcardProps {
  card: FlashcardType;
  index: number;
  total: number;
}

export const Flashcard: React.FC<FlashcardProps> = ({ card, index, total }) => {
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<boolean | null>(null);

  const handleFlip = () => {
    if (known === null) setFlipped(!flipped);
  };

  const handleMark = (isKnown: boolean) => {
    setKnown(isKnown);
    // Brief delay before hiding the buttons
    setTimeout(() => setFlipped(false), 300);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Card Counter */}
      <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
        Carte {index + 1} / {total}
      </p>

      {/* Flip Card */}
      <div
        className="relative w-full max-w-sm mx-auto cursor-pointer"
        style={{ perspective: '1000px', height: '220px' }}
        onClick={handleFlip}
        role="button"
        aria-label={flipped ? 'Retourner la carte (afficher le recto)' : 'Retourner la carte (afficher le verso)'}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: 'spring', damping: 20, stiffness: 150 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full relative"
        >
          {/* FRONT */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className={`absolute inset-0 rounded-2xl border flex flex-col items-center justify-center p-6 text-center transition-all ${
              known === true
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : known === false
                  ? 'bg-red-500/10 border-red-500/30'
                  : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05] hover:border-gold/20'
            }`}
          >
            {card.category && (
              <span className="text-[9px] uppercase tracking-widest text-gold/50 font-bold mb-3">
                {card.category}
              </span>
            )}
            {card.frontAr && (
              <p className="font-amiri text-3xl text-gold-light mb-4 leading-loose" lang="ar" dir="rtl">
                {card.frontAr}
              </p>
            )}
            <p className="text-white/80 font-serif italic text-base leading-relaxed">
              {card.front}
            </p>
            <p className="text-[9px] text-white/20 uppercase tracking-widest mt-4">
              Appuyez pour retourner
            </p>
          </div>

          {/* BACK */}
          <div
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 flex flex-col items-center justify-center p-6 text-center"
          >
            <span className="material-symbols-rounded text-gold text-2xl mb-3">lightbulb</span>
            <p className="text-white font-bold text-base leading-relaxed">
              {card.back}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons (appear after flip) */}
      <AnimatePresence>
        {flipped && known === null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMark(false)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500/20 transition-all"
              aria-label="Je ne savais pas"
            >
              <span className="material-symbols-rounded text-sm">close</span>
              À revoir
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMark(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all"
              aria-label="Je savais"
            >
              <span className="material-symbols-rounded text-sm">check</span>
              Je savais !
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Known badge */}
      <AnimatePresence>
        {known !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${
              known
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
            }`}
          >
            <span className="material-symbols-rounded text-sm">
              {known ? 'check_circle' : 'refresh'}
            </span>
            {known ? 'Mémorisé !' : 'À réviser'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
