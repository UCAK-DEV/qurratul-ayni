'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useChapterSearch } from '@/hooks/useChapterSearch';
import { Chapter } from '@/data/chapters';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const results = useChapterSearch(query);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setQuery(''), 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleResultClick = (chapter: Chapter) => {
    router.push(`/partie/${chapter.id}`);
    onClose();
  };

  const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const panelVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { damping: 25, stiffness: 300 } },
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
          className="fixed inset-0 z-[200] flex justify-center pt-20"
          style={{ background: 'var(--bg-overlay)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            variants={panelVariants}
            onClick={(e) => e.stopPropagation()}
            className="w-[90vw] max-w-2xl h-fit max-h-[70vh] flex flex-col rounded-[2rem] border shadow-2xl"
            style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-gold)' }}
          >
            <div className="flex-shrink-0 flex items-center gap-4 p-5 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <span className="material-symbols-rounded text-2xl text-[#c9a961]">search</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                placeholder="Rechercher par titre ou description..."
                className="w-full bg-transparent text-lg outline-none placeholder:text-white/30"
                style={{ color: 'var(--text-primary)' }}
              />
            </div>
            
            <div className="flex-grow overflow-y-auto custom-scrollbar p-3">
              {query && results.length === 0 && (
                <div className="text-center p-10 font-serif italic text-white/50">
                  <p>Aucun résultat pour "{query}"</p>
                </div>
              )}
              <motion.ul variants={listVariants} initial="hidden" animate="visible">
                {results.map((chapter) => (
                  <motion.li key={chapter.id} variants={itemVariants}>
                    <button
                      onClick={() => handleResultClick(chapter)}
                      className="w-full text-left flex items-center gap-4 p-4 hover:bg-white/[0.02] border-l-2 border-transparent hover:border-[#c9a961] rounded-xl transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#c9a961]/10 border border-[#c9a961]/25 flex items-center justify-center text-[#c9a961] group-hover:scale-105 transition-all">
                        <span className="material-symbols-rounded text-xl leading-none">{chapter.icon}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-white/90 group-hover:text-[#c9a961] transition-colors">{chapter.titleFr}</h3>
                        <p className="text-sm line-clamp-1" style={{ color: 'var(--text-secondary)' }}>{chapter.desc}</p>
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