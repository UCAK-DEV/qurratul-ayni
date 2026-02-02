'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SevragePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];

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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XII — Section G</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Sevrage</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">الفطام</p>

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
        
        {/* 1. CALCUL DES PÉRIODES D'ALLAITEMENT */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">1. Périodes et Durées</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-gold font-black text-[10px] uppercase mb-4 block tracking-[0.2em]">Grossesse de 7 mois</span>
                <p className="text-white/80 italic font-serif text-lg leading-relaxed">
                  "S’il s’agit d’un enfant né après seulement 7 mois de grossesse, le sevrage pourra survenir après 23 mois d’allaitement."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-white/30 text-[10px] font-bold uppercase">Total : 30 mois</span>
                <span className="material-symbols-rounded text-gold/40">calendar_month</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-gold font-black text-[10px] uppercase mb-4 block tracking-[0.2em]">Grossesse de 9 mois</span>
                <p className="text-white/80 italic font-serif text-lg leading-relaxed">
                  "Si l’enfant est né après 9 mois de grossesse, il pourra être sevré après 21 mois d’allaitement."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-white/30 text-[10px] font-bold uppercase">Total : 30 mois</span>
                <span className="material-symbols-rounded text-gold/40">calendar_month</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. CAS DE FORCE MAJEURE ET FLEXIBILITÉ */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <div className="bg-red-950/10 border border-red-500/20 p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <span className="material-symbols-rounded">pregnancy</span>
              <span className="font-black text-[10px] uppercase tracking-widest">Règle Impérative</span>
            </div>
            <p className="text-white/80 italic font-serif text-xl leading-relaxed">
              "Cependant, le sevrage s’impose dès l’apparition d’une nouvelle grossesse, quel que soit l’âge de l’enfant."
            </p>
          </div>

          <p className="text-white/60 italic font-serif text-lg leading-relaxed px-4">
            "D’une manière générale, si on trouve les moyens de nourrir l’enfant autrement que par l’allaitement, le sevrage peut se faire le plus tôt possible."
          </p>
        </motion.section>

        {/* 3. RITES DU SEVRAGE */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-emerald-400 uppercase tracking-widest italic leading-none font-sans">2. Rites du Sevrage</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-emerald-950/20 border border-emerald-500/20 space-y-6">
              <h3 className="text-emerald-400 font-black text-[10px] uppercase mb-4 tracking-widest text-center">L'écrit sur le pain</h3>
              <p className="text-white/80 italic font-serif text-lg leading-relaxed text-center">
                "Dans le sevrage proprement dit, il est recommandé d’écrire ce qui suit sur du pain qu’on lui donnera à manger (Voir annexe n° XVI)."
              </p>
              <div className="flex justify-center">
                <span className="material-symbols-rounded text-emerald-400/30 text-5xl">bakery_dining</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-emerald-950/20 border border-emerald-500/20 space-y-6 flex flex-col justify-center">
              <h3 className="text-emerald-400 font-black text-[10px] uppercase mb-4 tracking-widest text-center">Protection (Gris-gris)</h3>
              <p className="text-white/80 italic font-serif text-lg leading-relaxed text-center mb-4">
                "Ensuite, lui faire porter comme gris-gris la sourate « Bourôdji »."
              </p>
              <p className="font-amiri text-3xl text-white text-center tracking-normal">سورة البروج</p>
            </motion.div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/12/f')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Section F
        </button>
        <button 
          onClick={() => router.push('/partie/12/h')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Section H
        </button>
      </div>
    </main>
  );
}