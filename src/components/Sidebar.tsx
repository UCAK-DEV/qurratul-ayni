'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CHAPTERS } from '@/data/chapters';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Sidebar({ isMobileSidebarOpen, setIsMobileSidebarOpen }: { isMobileSidebarOpen: boolean; setIsMobileSidebarOpen: (isOpen: boolean) => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const groupedChapters = useMemo(() => {
    return CHAPTERS.reduce((acc, chapter) => {
      (acc[chapter.group] = acc[chapter.group] || []).push(chapter);
      return acc;
    }, {} as Record<string, typeof CHAPTERS>);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* BOUTON FLÈCHE DÉPLACABLE */}
      <motion.div
        drag="y"
        dragConstraints={{ top: -300, bottom: 300 }}
        dragElastic={0.1}
        className="fixed left-4 z-[110] cursor-grab active:cursor-grabbing hidden md:block"
        style={{ top: '50%' }}
      >
        <motion.button
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, scale: 1.1, backgroundColor: 'rgba(201, 169, 97, 0.2)' }}
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-full backdrop-blur-md shadow-2xl"
        >
          <span className="material-symbols-rounded text-gold text-3xl">
            {isMobileSidebarOpen ? 'close' : 'chevron_right'}
          </span>
        </motion.button>
      </motion.div>

      {/* BOUTON MOBILE */}
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="fixed bottom-24 left-4 z-[110] md:hidden w-12 h-12 bg-gold rounded-full shadow-2xl flex items-center justify-center text-emerald-950"
      >
        <span className="material-symbols-rounded text-3xl">menu_open</span>
      </button>

      {/* OVERLAY */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[120]"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR PANNEAU */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isMobileSidebarOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full z-[130] w-full md:w-1/3 lg:w-1/4 bg-[#05110d]/98 border-r border-gold/10 backdrop-blur-3xl shadow-2xl flex flex-col"
      >
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gold font-black text-xs uppercase tracking-[0.4em]">Sommaire Interactif</h2>
            <button onClick={() => setIsMobileSidebarOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-rounded text-white/50">close</span>
            </button>
          </div>
          <p className="text-white/30 text-[9px] uppercase tracking-widest font-medium italic">Khouratoul Ayni Digital</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {Object.entries(groupedChapters).map(([group, chapters]) => (
              <div key={group}>
                <h3 className="px-4 mb-4 text-sm font-black text-gold/40 uppercase tracking-[0.2em]">{group}</h3>
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3"
                >
                  {chapters.map((chapter) => (
                    <motion.div key={chapter.id} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                      <Link
                        href={`/partie/${chapter.id}`}
                        onClick={() => setIsMobileSidebarOpen(false)}
                        className="flex flex-col items-center justify-center text-center p-3 aspect-square bg-white/5 rounded-2xl border border-transparent hover:border-gold/30 hover:bg-gold/10 transition-all"
                      >
                        <span className="material-symbols-rounded text-4xl text-gold/70 mb-2">{chapter.icon}</span>
                        <span className="text-xs font-bold text-white/80 leading-tight">{chapter.titleFr}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </nav>

        <div className="p-8 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center font-black text-gold text-sm tracking-tighter">QA</div>
            <div>
              <p className="text-[10px] uppercase font-bold text-white/60">Qurratul Ayni</p>
              <p className="text-[8px] uppercase tracking-widest text-white/30">Édition Numérique v2.0</p>
            </div>
          </div>
        </div>
      </motion.aside>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(201, 169, 97, 0.1); 
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
          background: rgba(201, 169, 97, 0.4); 
        }
      `}</style>
    </>
  );
}