'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Icon from '@/components/Icon';
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
    { id: "g", title: "L'usage du Siwak (Sotju)" },
    { id: "h", title: "Règles diverses" },
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
    { id: "l", title: "Invocations post-prière" },
    { id: "m", title: "Bienséance de la mosquée" },
    { id: "n", title: "Imam & Qunut" },
    { id: "o", title: "La Sutrah (Obstacle)" },
    { id: "p", title: "Suivre l'Imam" },
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
    { id: "e", title: "L'aumône de rupture (Fitr)" },
    { id: "f", title: "Jours de jeûne" },
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
    { id: "i", title: "Les bons comportements" },
    { id: "j", title: "Jours à éviter" },
    { id: "k", title: "Le mois de Tamharit" },
    { id: "l", title: "Le mois de Maouloud (Gamou)" },
    { id: "m", title: "La mi-Sha'ban" },
    { id: "n", title: "Premier jour de l'année" },
  ],
  "18": [
    { id: "dimanche", title: "Nafila du Dimanche" },
    { id: "lundi", title: "Nafila du Lundi" },
    { id: "mardi", title: "Nafila du Mardi" },
    { id: "mercredi", title: "Nafila du Mercredi" },
    { id: "jeudi", title: "Nafila du Jeudi" },
    { id: "vendredi", title: "Nafila du Vendredi" },
    { id: "samedi", title: "Nafila du Samedi" },
    { id: "1", title: "Ramadan - Jour 1" },
    { id: "2", title: "Ramadan - Jour 2" },
    { id: "3", title: "Ramadan - Jour 3" },
    { id: "4", title: "Ramadan - Jour 4" },
    { id: "5", title: "Ramadan - Jour 5" },
    { id: "6", title: "Ramadan - Jour 6" },
    { id: "7", title: "Ramadan - Jour 7" },
    { id: "8", title: "Ramadan - Jour 8" },
    { id: "9", title: "Ramadan - Jour 9" },
    { id: "10", title: "Ramadan - Jour 10" },
    { id: "11", title: "Ramadan - Jour 11" },
    { id: "12", title: "Ramadan - Jour 12" },
    { id: "13", title: "Ramadan - Jour 13" },
    { id: "14", title: "Ramadan - Jour 14" },
    { id: "15", title: "Ramadan - Jour 15" },
    { id: "16", title: "Ramadan - Jour 16" },
    { id: "17", title: "Ramadan - Jour 17" },
    { id: "18", title: "Ramadan - Jour 18" },
    { id: "19", title: "Ramadan - Jour 19" },
    { id: "20", title: "Ramadan - Jour 20" },
    { id: "21", title: "Ramadan - Jour 21" },
    { id: "22", title: "Ramadan - Jour 22" },
    { id: "23", title: "Ramadan - Jour 23" },
    { id: "24", title: "Ramadan - Jour 24" },
    { id: "25", title: "Ramadan - Jour 25" },
    { id: "26", title: "Ramadan - Jour 26" },
    { id: "27", title: "Ramadan - Jour 27" },
    { id: "28", title: "Ramadan - Jour 28" },
    { id: "29", title: "Ramadan - Jour 29" },
    { id: "30", title: "Ramadan - Jour 30" },
  ],
  "19": [
    { id: "a", title: "L'aumône" },
    { id: "b", title: "Lecture du Coran" },
    { id: "c", title: "Sourates et versets" },
    { id: "d", title: "Invocations & Wirds" },
    { id: "e", title: "Les mérites du Basmala" },
    { id: "f", title: "Le Rappel d'Allah (Dhikr)" },
  ]
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const { isCompleted } = useLearning();
  const { chapters } = useData();

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
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
          <Icon name={isOpen ? 'close' : 'chevron_right'} className="text-gold text-3xl" />
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
              <Icon name="close" className="text-white/50" />
            </button>
          </div>
          <p className="text-white/60 text-xs uppercase tracking-widest font-medium italic">Khouratoul Ayni Digital</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {/* LIEN FAVORIS */}
          <div className="px-4 mb-8">
            <Link 
              href="/favoris"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 p-5 rounded-2xl bg-gold/10 border border-gold/20 hover:bg-gold/20 transition-all group"
            >
              <Icon name="bookmark_heart" className="text-gold group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs font-black text-white uppercase tracking-widest leading-none">Mes Favoris</p>
                <p className="text-xs text-gold/60 uppercase mt-1">Leçons sauvegardées</p>
              </div>
            </Link>
          </div>

          {groupOrder.map((group) => {
            const chaptersInGroup = groupedChapters[group];
            if (!chaptersInGroup) return null;
            return (
              <div key={group} className="space-y-3">
                <h3 className="px-4 text-xs font-black text-gold/40 uppercase tracking-[0.2em] border-l border-gold/20 ml-2">{group}</h3>
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
                          <Icon name={chapter.icon} className={`text-xl ${expandedChapter === chapter.id ? 'text-gold' : 'text-white/60'}`} />
                          {isCompleted(chapter.id) && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full border-2 border-[#05110d] flex items-center justify-center">
                              <Icon name="check" className="text-[6px] text-black font-black" />
                            </span>
                          )}
                        </div>
                        <span className={`text-sm font-bold transition-colors ${expandedChapter === chapter.id ? 'text-white' : 'text-white/60'}`}>
                          {chapter.titleFr}
                        </span>
                      </div>
                      <Icon name="arrow_forward_ios" className={`text-xs transition-transform duration-300 ${expandedChapter === chapter.id ? 'rotate-90 text-gold' : 'text-white/20'}`} />
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
                              className="text-sm text-white/60 hover:text-gold py-2 transition-all flex items-center gap-2 group"
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
                                className="text-sm text-white/60 hover:text-gold py-2 transition-all flex items-center gap-2 group"
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
              <p className="text-xs uppercase font-bold text-white/60">Qurratul Ayni</p>
              <p className="text-xs uppercase tracking-widest text-white/60">Édition Numérique v2.0</p>
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