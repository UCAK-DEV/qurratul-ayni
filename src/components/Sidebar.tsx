'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Chapter } from '@/data/chapters';
import { useLearning } from '@/context/LearningContext';
import { useData } from '@/context/DataContext';

// Définition des sous-sections basées sur votre table des matières
const subSections: Record<string, { id: string; title: string }[]> = {
  "5": [
    { id: "a", title: "La purification du corps" },
    { id: "b", title: "Les ablutions" },
    { id: "c", title: "Le Tayamoum" },
    { id: "d", title: "Les souillures" },
    { id: "e", title: "Les menstrues" },
    { id: "f", title: "Les lochies" },
  ],
  "6": [
    { id: "a", title: "L'appel à la prière" },
    { id: "b", title: "La prière rituelle" },
    { id: "c", title: "Les cinq prières" },
    { id: "d", title: "Pratiques Obligatoires" },
    { id: "e", title: "Pratiques Traditionnelles" },
    { id: "f", title: "La prière du Vendredi" },
    { id: "g", title: "Prières non effectuées" },
    { id: "h", title: "La prière du voyageur" },
    { id: "i", title: "Actes durant la prière" },
    { id: "j", title: "Prières surérogatoires" },
    { id: "k", title: "Les prières des fêtes" },
  ],
  "8": [
    { id: "a", title: "Le lavage mortuaire" },
  ],
  "9": [
    { id: "a", title: "L'argent épargné" },
  ],
  "10": [
    { id: "a", title: "Qu'est-ce que le jeûne ?" },
    { id: "b", title: "Qui doit jeûner ?" },
    { id: "c", title: "Actes blâmables" },
    { id: "d", title: "Petit déjeuner de l'aube" },
  ],
  "11": [
    { id: "a", title: "Le petit pèlerinage" },
  ],
  "12": [
    { id: "a", title: "Les obligations" },
    { id: "b", title: "La célébration" },
    { id: "c", title: "L'acte conjugal" },
    { id: "d", title: "La femme enceinte" },
    { id: "e", title: "Le baptême" },
    { id: "f", title: "Quelques remèdes" },
    { id: "g", title: "Le sevrage" },
    { id: "h", title: "L'éducation" },
  ],
  "13": [
    { id: "a", title: "La retraite légale" },
    { id: "b", title: "Les cas de divorce" },
  ],
  "15": [
    { id: "a", title: "Le chasseur" },
    { id: "b", title: "Tabaski" },
  ],
  "17": [
    { id: "a", title: "Pratiques interdites" },
    { id: "b", title: "Interdictions formelles" },
    { id: "c", title: "Causes de pauvreté" },
    { id: "d", title: "Aisance matérielle" },
    { id: "e", title: "Santé et longévité" },
    { id: "f", title: "La Sounna" },
    { id: "g", title: "Jours recommandés" },
    { id: "h", title: "Le repentir" },
  ],
  "19": [
    { id: "a", title: "L'aumône" },
    { id: "b", title: "Lecture du Coran" },
    { id: "c", title: "Sourates et versets" },
    { id: "d", title: "Invocations & Wirds" },
  ]
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const { isCompleted } = useLearning();
  const { chapters } = useData();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Groupes dans l'ordre logique souhaité
  const groupOrder = ["Introduction", "Les Piliers", "Rites et Société", "Jurisprudence", "Spiritualité"];

  const groupedChapters = chapters.reduce((acc, chapter) => {
    (acc[chapter.group] = acc[chapter.group] || []).push(chapter);
    return acc;
  }, {} as Record<string, Chapter[]>);

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
          onClick={toggleSidebar}
          className="w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-full backdrop-blur-md shadow-2xl"
          aria-label={isOpen ? 'Fermer le sommaire' : 'Ouvrir le sommaire'}
        >
          <span className="material-symbols-rounded text-gold text-3xl">
            {isOpen ? 'close' : 'chevron_right'}
          </span>
        </motion.button>
      </motion.div>



      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[120]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR PANNEAU */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full z-[130] w-full md:w-1/3 lg:w-1/4 border-r border-gold/10 backdrop-blur-3xl shadow-2xl flex flex-col"
        style={{ background: 'var(--bg-nav)' }}
        aria-label="Sommaire interactif"
      >
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gold font-black text-xs uppercase tracking-[0.4em]">Sommaire Interactif</h2>
            <button 
              onClick={toggleSidebar} 
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
              aria-label="Fermer le sommaire"
            >
              <span className="material-symbols-rounded text-white/50">close</span>
            </button>
          </div>
          <p className="text-white/60 text-[9px] uppercase tracking-widest font-medium italic">Khouratoul Ayni Digital</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {/* LIEN FAVORIS */}
          <div className="px-4 mb-8">
            <Link 
              href="/favoris"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 p-5 rounded-2xl bg-gold/10 border border-gold/20 hover:bg-gold/20 transition-all group"
            >
              <span className="material-symbols-rounded text-gold group-hover:scale-110 transition-transform">bookmark_heart</span>
              <div>
                <p className="text-xs font-black text-white uppercase tracking-widest leading-none">Mes Favoris</p>
                <p className="text-[9px] text-gold/60 uppercase mt-1">Leçons sauvegardées</p>
              </div>
            </Link>
          </div>

          {groupOrder.map((group) => {
            const chaptersInGroup = groupedChapters[group];
            if (!chaptersInGroup) return null;
            return (
              <div key={group} className="space-y-3">
                <h3 className="px-4 text-[10px] font-black text-gold/40 uppercase tracking-[0.2em] border-l border-gold/20 ml-2">{group}</h3>
                <div className="space-y-1">
                  {chaptersInGroup.map((chapter) => (
                  <div key={chapter.id} className="relative">
                    <button
                      onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                        expandedChapter === chapter.id 
                        ? 'bg-gold/10 border border-gold/20 shadow-lg shadow-gold/5' 
                        : 'hover:bg-white/5 border border-transparent'
                      }`}
                      aria-expanded={expandedChapter === chapter.id}
                      aria-label={`Chapitre ${chapter.id}: ${chapter.titleFr}`}
                    >
                      <div className="flex items-center gap-4 text-left">
                        <div className="relative">
                          <span className={`material-symbols-rounded text-xl ${expandedChapter === chapter.id ? 'text-gold' : 'text-white/60'}`}>
                            {chapter.icon}
                          </span>
                          {isCompleted(chapter.id) && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full border-2 border-[#05110d] flex items-center justify-center">
                              <span className="material-symbols-rounded text-[6px] text-black font-black">check</span>
                            </span>
                          )}
                        </div>
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
                              onClick={() => setIsOpen(false)}
                              className="text-[11px] text-white/60 hover:text-gold py-2 transition-all flex items-center gap-2 group"
                            >
                              <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-gold transition-colors" />
                              Introduction générale
                            </Link>

                            {/* Liens vers les sous-sections spécifiques */}
                            {subSections[chapter.id]?.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/partie/${chapter.id}/${sub.id}`}
                                onClick={() => setIsOpen(false)}
                                className="text-[11px] text-white/60 hover:text-gold py-2 transition-all flex items-center gap-2 group"
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
          );
        })}
      </nav>

        <div className="p-8 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center font-black text-gold text-sm tracking-tighter">QA</div>
            <div>
              <p className="text-[10px] uppercase font-bold text-white/60">Qurratul Ayni</p>
              <p className="text-[8px] uppercase tracking-widest text-white/60">Édition Numérique v2.0</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/a-propos" className="text-xs text-white/60 hover:text-gold transition-colors" onClick={toggleSidebar}>
              À Propos des Développeurs
            </Link>
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