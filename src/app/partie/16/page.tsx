'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function CirconcisionPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 16 (ou fallback)
  const chapterData = CHAPTERS.find(c => c.id === "16") || CHAPTERS[15];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVI — Rites de Pureté</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          DE LA <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Circoncision</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">الختان</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* 1. RECOMMANDATIONS ET ÂGE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">1. Importance et Période</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
            <p className="text-white/80 italic text-xl font-serif leading-relaxed">
              "C’est une pratique traditionnelle fortement recommandée. Elle est surtout recommandée entre sept (7) et dix (10) ans."
            </p>
            <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-3xl flex items-center gap-6">
               <span className="material-symbols-rounded text-red-500 text-3xl">event_busy</span>
               <p className="text-white/70 italic font-serif text-lg leading-relaxed">
                 "Mais il n’est pas du tout recommandé de circoncire un enfant le jour de sa naissance ou de son baptême."
               </p>
            </div>
          </div>
        </section>

        {/* 2. CAS PARTICULIERS ET DISPENSES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-emerald-400 uppercase tracking-widest italic leading-none font-sans">2. Cas Particuliers</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <h3 className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Dispense Médicale</h3>
              <p className="text-white/70 italic font-serif text-lg leading-relaxed">
                "Celui qui redoute un quelconque préjudice lié à la circoncision en raison d’une maladie dont il souffre peut être dispensé de cette pratique."
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <h3 className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Enfant né circoncis</h3>
              <p className="text-white/70 italic font-serif text-lg leading-relaxed">
                "En ce qui concerne un enfant né circoncis, il est recommandé de prélever un peu de la partie concernée par la circoncision si cela est possible ; dans le cas contraire, on le laisse tel quel."
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. TRAITEMENT DU PRÉPUCE */}
        <motion.section {...fadeInUp} className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">3. Rites de Sépulture</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
               <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold text-4xl">
                  <span className="material-symbols-rounded">eco</span>
               </div>
               <p className="text-white/80 italic font-serif text-xl leading-relaxed">
                 "La partie prélevée (le prépuce) après l’opération de la circoncision est une souillure ; elle doit être enfouie dans la terre et loin des habitations."
               </p>
            </div>

            <div className="p-8 bg-white/[0.03] rounded-3xl border border-white/10 space-y-6">
               <span className="text-red-400 font-black text-[10px] uppercase tracking-[0.3em] block text-center">Interdictions de lieu</span>
               <p className="text-white/60 italic font-serif text-lg leading-relaxed text-center">
                 "Elle ne peut pas être enfouie dans une mosquée et ne doit pas non plus être jetée à même le sol."
               </p>
            </div>
          </div>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/15/b')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/17')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}