'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CHAPTERS } from '@/data/chapters';

// Définition des sous-sections basées sur votre table des matières
const subSections: Record<string, { id: string; title: string }[]> = {
  "5": [
    { id: "a", title: "La Purification" },
    { id: "b", title: "Les Ablutions" },
    { id: "c", title: "Le Tayamoum" },
    { id: "d", title: "Les Souillures" },
    { id: "e", title: "Les Menstrues" },
    { id: "f", title: "Les Lochies" },
  ],
  "6": [
    { id: "a", title: "Appel à la prière" },
    { id: "b", title: "La prière rituelle" },
    { id: "c", title: "Les 5 prières" },
    { id: "d", title: "Pratiques Obligatoires" },
    { id: "e", title: "Pratiques Traditionnelles" },
    { id: "f", title: "La prière du Vendredi" },
    { id: "g", title: "Prières non effectuées" },
    { id: "h", title: "Prières surérogatoires" },
  ],
  "8": [
    { id: "a", title: "Lavage mortuaire" },
    { id: "b", title: "Prière mortuaire" },
    { id: "c", title: "L'inhumation" },
    { id: "d", title: "Condoléances" },
  ],
  "10": [
    { id: "a", title: "Qu'est-ce que le jeûne ?" },
    { id: "b", title: "Qui doit jeûner ?" },
    { id: "c", title: "Actes blâmables" },
    { id: "d", title: "Petit déjeuner (Kheude)" },
  ],
  "12": [
    { id: "a", title: "Obligations" },
    { id: "b", title: "Célébration" },
    { id: "c", title: "Acte conjugal" },
    { id: "d", title: "Femme enceinte" },
    { id: "e", title: "Le Baptême" },
    { id: "f", title: "Remèdes enfant" },
    { id: "g", title: "Le Sevrage" },
    { id: "h", title: "L'Éducation" },
  ],
  "13": [
    { id: "a", title: "Retraite légale" },
    { id: "b", title: "Cas de divorce" },
  ],
  "15": [
    { id: "a", title: "Le Chasseur" },
    { id: "b", title: "Tabaski" },
  ],
  "17": [
    { id: "a", title: "Pratiques interdites" },
    { id: "c", title: "Causes de pauvreté" },
    { id: "d", title: "Aisance matérielle" },
  ],
  "19": [
    { id: "a", title: "L'Aumône" },
    { id: "b", title: "Lecture du Coran" },
    { id: "c", title: "Invocations & Wirds" },
    { id: "d", title: "Actes équivalents" },
  ]
};

export default function Sidebar({ isMobileSidebarOpen, setIsMobileSidebarOpen }: { isMobileSidebarOpen: boolean; setIsMobileSidebarOpen: (isOpen: boolean) => void }) {
  const [mounted, setMounted] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);



  const groupedChapters = CHAPTERS.reduce((acc, chapter) => {
    (acc[chapter.group] = acc[chapter.group] || []).push(chapter);
    return acc;
  }, {} as Record<string, typeof CHAPTERS>);

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

        <nav className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {Object.entries(groupedChapters).map(([group, chapters]) => (
            <div key={group} className="space-y-3">
              <h3 className="px-4 text-[10px] font-black text-gold/40 uppercase tracking-[0.2em] border-l border-gold/20 ml-2">{group}</h3>
              <div className="space-y-1">
                {chapters.map((chapter) => (
                  <div key={chapter.id} className="relative">
                    <button
                      onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                        expandedChapter === chapter.id 
                        ? 'bg-gold/10 border border-gold/20 shadow-lg shadow-gold/5' 
                        : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-4 text-left">
                        <span className={`material-symbols-rounded text-xl ${expandedChapter === chapter.id ? 'text-gold' : 'text-white/30'}`}>
                          {chapter.icon}
                        </span>
                        <span className={`text-sm font-bold transition-colors ${expandedChapter === chapter.id ? 'text-white' : 'text-white/60'}`}>
                          {chapter.titleFr}
                        </span>
                      </div>
                      <span className={`material-symbols-rounded text-xs transition-transform duration-300 ${expandedChapter === chapter.id ? 'rotate-90 text-gold' : 'text-white/20'}`}>
                        arrow_forward_ios
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedChapter === chapter.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-12 pr-4 py-2 flex flex-col gap-1 border-l border-gold/10 ml-6 mt-1">
                            {/* Lien vers l'introduction du chapitre */}
                            <Link
                              href={`/partie/${chapter.id}`}
                              onClick={() => setIsMobileSidebarOpen(false)}
                              className="text-[11px] text-white/40 hover:text-gold py-2 transition-all flex items-center gap-2 group"
                            >
                              <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-gold transition-colors" />
                              Introduction générale
                            </Link>

                            {/* Liens vers les sous-sections spécifiques */}
                            {subSections[chapter.id]?.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/partie/${chapter.id}/${sub.id}`}
                                onClick={() => setIsMobileSidebarOpen(false)}
                                className="text-[11px] text-white/40 hover:text-gold py-2 transition-all flex items-center gap-2 group"
                              >
                                <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-gold transition-colors" />
                                <span className="uppercase text-gold/60 font-bold mr-1">{sub.id}.</span>
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ))}
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