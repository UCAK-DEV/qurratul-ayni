'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function RetraiteLegalePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 13 (Le Divorce)
  const chapterData = CHAPTERS.find(c => c.id === "13") || CHAPTERS[12];

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
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-red-900/10 blur-[100px] md:blur-[120px] rounded-full" />
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XIII — Section A</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LA RETRAITE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Légale (Idda)</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">العدة</p>

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
        
        {/* 1. CAS DE VIDUITÉ (DÉCÈS DU MARI) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">1. En cas de Viduité</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="glass-card p-8 rounded-[2.5rem] border border-white/5 space-y-4">
              <span className="text-gold font-black text-[10px] uppercase tracking-widest block mb-2">Femme Libre</span>
              <p className="text-white/80 italic font-serif text-lg leading-relaxed">
                "S’il s’agit d’une femme libre qui a perdu son mari (viduité), la période de retraite légale dure quatre (4) mois et dix (10) jours."
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-4">
              <span className="text-white/40 font-black text-[10px] uppercase tracking-widest block mb-2">Autre cas (Esclave)</span>
              <p className="text-white/60 italic font-serif text-lg leading-relaxed">
                "Si elle n’est pas une femme libre (il s’agit alors d’une esclave), la période de retraite légale dure 2 mois et 5 jours, c’est-à-dire la moitié."
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. CAS DE DIVORCE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">2. En cas de Divorce</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
            <div className="space-y-6">
               <p className="text-white/80 italic font-serif text-xl leading-relaxed">
                 "S’il s’agit d’une femme libre qu’on a divorcée, elle doit observer la retraite légale de la manière suivante : elle doit rester pendant 3 périodes de pureté (à commencer par celle à laquelle a lieu le divorce), consécutives à ses cycles menstruels. La retraite légale prendra fin à l’issue de la 3ᵉ période de pureté dès qu’elle entre dans la période menstruelle qui suit cette dernière."
               </p>
               <div className="p-6 bg-gold/5 rounded-2xl border-l-4 border-gold">
                  <p className="text-white/60 italic font-serif text-lg">
                    "S’il ne s’agit pas d’une femme libre, elle restera pendant 2 périodes de pureté."
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/5">
              <div className="space-y-4">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest">Absence de cycles / Ménopause</span>
                <p className="text-white/70 italic font-serif text-base leading-relaxed">
                  "Pour une divorcée qui n’a pas encore atteint l’âge où commencent ses cycles menstruels, ou pour celle qui a atteint la ménopause, la période de retraite légale dure 3 mois."
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest">État de grossesse</span>
                <p className="text-white/70 italic font-serif text-base leading-relaxed">
                  "Pour une femme en état de grossesse, la période de retraite légale prend fin dès qu’elle accouche."
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. CAS DU POLYGAME */}
        <motion.section {...fadeInUp} className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-red-500 uppercase tracking-widest italic leading-none font-sans">3. Cas spécifique du polygame</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />
          </div>

          <div className="bg-red-950/10 p-8 md:p-12 rounded-[3rem] border border-red-500/20 shadow-2xl">
            <p className="text-white/80 italic font-serif text-xl leading-relaxed">
              "Un homme qui a quatre femmes et qui en répudie une, mais pas de manière irréversible, ne pourra épouser une autre femme que lorsque la période de retraite légale de la divorcée est épuisée."
            </p>
          </div>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans text-justify">
        <button 
          onClick={() => router.push('/partie/13')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Sommaire XIII
        </button>
        <button 
          onClick={() => router.push('/partie/13/b')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
            Suivant
        </button>
      </div>
    </main>
  );
}