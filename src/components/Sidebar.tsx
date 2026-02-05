'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CHAPTERS } from '@/data/chapters';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Pour éviter le mismatch d'hydratation
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  // Empêcher le rendu côté serveur pour les parties qui causent le mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const groupedChapters = CHAPTERS.reduce((acc, chapter) => {
    (acc[chapter.group] = acc[chapter.group] || []).push(chapter);
    return acc;
  }, {} as Record<string, typeof CHAPTERS>);

  // Si le composant n'est pas encore monté sur le client, on ne rend rien ou un placeholder
  if (!mounted) return null;

  return (
    <>
      {/* BOUTON FLÈCHE DÉPLACABLE */}
      <motion.div
        drag="y"
        dragConstraints={{ top: -200, bottom: 200 }} 
        dragElastic={0.1}
        className="fixed left-4 z-[110] cursor-grab active:cursor-grabbing hidden md:block"
        style={{ top: '50%' }}
      >
        <motion.button
          initial={{ opacity: 0.4 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          onClick={toggleSidebar}
          className="w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-full backdrop-blur-md shadow-lg"
        >
          <span className="material-symbols-rounded text-gold text-3xl">
            {isOpen ? 'close' : 'chevron_right'}
          </span>
        </motion.button>
      </motion.div>

      {/* BOUTON MOBILE */}
      <button
        onClick={toggleSidebar}
        className="fixed bottom-24 left-4 z-[110] md:hidden w-10 h-10 bg-gold rounded-full shadow-xl flex items-center justify-center text-emerald-950"
      >
        <span className="material-symbols-rounded">menu_open</span>
      </button>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[120]"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR PANNEAU */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full z-[130] w-full md:w-1/4 bg-[#05110d]/95 border-r border-gold/10 backdrop-blur-3xl shadow-2xl flex flex-col"
      >
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gold font-black text-xs uppercase tracking-[0.4em]">Bibliothèque</h2>
            <button onClick={toggleSidebar} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-rounded text-white/50">close</span>
            </button>
          </div>
          <p className="text-white/30 text-[9px] uppercase tracking-widest">Serigne Chouhinbou Mbacké</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {Object.entries(groupedChapters).map(([group, chapters]) => (
            <div key={group} className="space-y-3">
              <h3 className="px-4 text-[10px] font-black text-gold/40 uppercase tracking-[0.2em]">{group}</h3>
              <div className="space-y-1">
                {chapters.map((chapter) => (
                  <div key={chapter.id}>
                    <button
                      onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                        expandedChapter === chapter.id ? 'bg-gold/10 border-gold/20' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-4 text-left">
                        <span className="material-symbols-rounded text-xl text-gold/80">{chapter.icon}</span>
                        <span className="text-sm font-bold text-white/80">{chapter.titleFr}</span>
                      </div>
                      <span className={`material-symbols-rounded text-sm transition-transform ${expandedChapter === chapter.id ? 'rotate-90' : ''}`}>
                        arrow_forward_ios
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedChapter === chapter.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-14 py-2 flex flex-col"
                        >
                          <Link href={`/partie/${chapter.id}`} onClick={() => setIsOpen(false)} className="text-xs text-white/40 hover:text-gold py-1">
                             • Introduction
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Suppression du style jsx global qui cause le mismatch et utilisation de CSS standard */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(201, 169, 97, 0.2); border-radius: 10px; }
      `}</style>
    </>
  );
}