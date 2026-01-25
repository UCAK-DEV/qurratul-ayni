'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitrePurification() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[5];

  const sectionsPurification = [
    {
      letter: "A",
      title: "LA PURIFICATION (Lavage)",
      ar: "الغسل",
      sub: ["Raisons d'une purification", "Comment se purifier ?", "Pratiques obligatoires (Farata)", "Pratiques traditionnelles (Souna)"]
    },
    {
      letter: "B",
      title: "LES ABLUTIONS",
      ar: "الوضوء",
      sub: ["Causes d'annulation", "Le Siwou (Parties intimes)", "Pratique de l'ablution", "Farata & Souna", "Mérites de l'ablution"]
    },
    {
      letter: "C",
      title: "LE TAYAMOUM (TIIM)",
      ar: "التيمم",
      sub: ["Comment pratiquer ?", "Pratiques obligatoires", "Pratiques traditionnelles"]
    },
    {
      letter: "D",
      title: "LES SOUILLURES",
      ar: "النجاسات",
      sub: ["Nature des souillures", "Comment les nettoyer"]
    },
    {
      letter: "E",
      title: "LES MENSTRUES",
      ar: "الحيض",
      sub: ["Premier cycle", "Habituée", "Femme enceinte", "L'arrêt des menstrues"]
    },
    {
      letter: "F",
      title: "LES LOCHIES",
      ar: "النفاس",
      sub: ["Règles après accouchement"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Section Pratique
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-bold gold-gradient-text mb-10"
        >
          LES PRATIQUES RELIGIEUSES
        </motion.h1>

        {/* Player Audio Global */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter les Enseignements'}
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sectionsPurification.map((item, idx) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card group p-8 md:p-12 rounded-[3rem] border border-white/5 hover:border-gold/30 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold font-black text-xl border border-gold/20">
                {item.letter}
              </div>
              <span className="text-4xl font-amiri text-gold/20 group-hover:text-gold transition-colors">
                {item.ar}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
              {item.title}
            </h2>

            <ul className="space-y-4 mb-10">
              {item.sub.map((sub, sIdx) => (
                <li key={sIdx} className="flex items-center gap-3 text-white/40 group-hover:text-white/70 transition-colors">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_#C9A961]" />
                  <span className="text-sm font-medium">{sub}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => router.push(`/partie/5/${item.letter.toLowerCase()}`)}
              className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-black hover:bg-gold hover:text-emerald-950 transition-all"
            >
              Explorer cette partie
            </button>
          </motion.div>
        ))}
      </div>

      {/* Navigation de bas de page */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/partie/4')} // Vers le chapitre précédent
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5/a')} // Vers le chapitre suivant
          className="px-10 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}