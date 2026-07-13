'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLearning } from '@/context/LearningContext';
import Icon from '@/components/Icon';

interface ReadingProgressProps {
  chapterId: string;
  chapterTitle: string;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({
  chapterId,
  chapterTitle,
}) => {
  const { getChapterProgress } = useLearning();
  const progress = getChapterProgress(chapterId);

  // Don't render for single-section chapters
  if (progress.total <= 1) return null;

  const circumference = 2 * Math.PI * 20; // radius=20
  const strokeDashoffset = circumference - (progress.percentage / 100) * circumference;
  const isChapterComplete = progress.percentage === 100;

  const sectionLabels: Record<string, string> = {
    [chapterId]: 'Intro',
    [`${chapterId}-a`]: 'A',
    [`${chapterId}-b`]: 'B',
    [`${chapterId}-c`]: 'C',
    [`${chapterId}-d`]: 'D',
    [`${chapterId}-e`]: 'E',
    [`${chapterId}-f`]: 'F',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-2xl mx-auto mb-10"
    >
      {/* Completion Banner */}
      <AnimatePresence>
        {isChapterComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-gold/20 via-gold/10 to-transparent border border-gold/30 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Icon name="auto_awesome" className="text-gold text-xl" />
            </div>
            <div>
              <p className="text-gold font-black text-xs uppercase tracking-widest">Chapitre complété !</p>
              <p className="text-white/60 text-xs font-reading mt-0.5">
                Vous avez lu toutes les sections de «&nbsp;{chapterTitle}&nbsp;»
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Card */}
      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-5">
        {/* Circular Progress Ring */}
        <div className="relative flex-shrink-0 w-14 h-14">
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 48 48">
            {/* Background ring */}
            <circle
              cx="24" cy="24" r="20"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="3"
            />
            {/* Progress ring */}
            <motion.circle
              cx="24" cy="24" r="20"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-black text-gold">{progress.percentage}%</span>
          </div>
        </div>

        {/* Label & Section Dots */}
        <div className="flex-1 min-w-0">
          <p className="text-xs uppercase font-bold tracking-widest text-white/40 mb-2">
            {progress.completed}/{progress.total} sections lues
          </p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {progress.sections.map((section) => {
              const label = sectionLabels[section.id] ?? section.id.split('-').pop()?.toUpperCase() ?? '?';
              const href = `/partie/${section.id.replace(/-/g, '/')}`;
              return (
                <Link key={section.id} href={href} title={`Section ${label}`}>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black
                      transition-all duration-300 cursor-pointer
                      ${section.completed
                        ? 'bg-gold text-[#241c07] shadow-[0_0_8px_color-mix(in srgb, var(--accent) 40%, transparent)]'
                        : section.isCurrentVisit
                          ? 'bg-white/10 border-2 border-gold/60 text-gold'
                          : 'bg-white/[0.04] border border-white/10 text-white/30 hover:border-white/20'
                      }
                    `}
                  >
                    {section.completed ? (
                      <Icon name="check" className="text-xs leading-none" />
                    ) : (
                      label
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
