'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChapterSearch } from '@/hooks/useChapterSearch';
import { useAudio } from '@/context/AudioContext';
import { Chapter } from '@/data/chapters';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const results = useChapterSearch(query);
  const { selectChapter } = useAudio();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  const handleResultClick = (chapter: Chapter) => {
    selectChapter(chapter);
    onClose();
  };

  const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const panelVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
  };
  const listVariants = { visible: { transition: { staggerChildren: 0.05 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex justify-center pt-20"
        >
          <motion.div
            variants={panelVariants}
            onClick={(e) => e.stopPropagation()}
            className="w-[90vw] max-w-2xl h-fit max-h-[70vh] flex flex-col bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl"
          >
            <div className="flex-shrink-0 flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
              <span className="material-symbols-rounded text-2xl text-gray-500">search</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                placeholder="Rechercher par titre ou description..."
                className="w-full bg-transparent text-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none"
              />
            </div>
            
            <div className="flex-grow overflow-y-auto custom-scrollbar">
              {query && results.length === 0 && (
                <div className="text-center p-10 text-gray-500">
                  <p>Aucun résultat pour "{query}"</p>
                </div>
              )}
              <motion.ul variants={listVariants} initial="hidden" animate="visible">
                {results.map((chapter) => (
                  <motion.li key={chapter.id} variants={itemVariants}>
                    <button
                      onClick={() => handleResultClick(chapter)}
                      className="w-full text-left flex items-center gap-4 p-4 hover:bg-gold/10 transition-colors"
                    >
                      <span className="material-symbols-rounded text-gold/80 text-2xl">{chapter.icon}</span>
                      <div className="flex-grow">
                        <h3 className="font-bold text-gray-800 dark:text-gray-100">{chapter.titleFr}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{chapter.desc}</p>
                      </div>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};