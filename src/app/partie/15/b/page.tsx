'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function TabaskiPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 15 (Fiqh Al-Dhabh)
  const chapterData = CHAPTERS.find(c => c.id === "15") || CHAPTERS[14];

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
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-emerald-900/10 blur-[100px] md:blur-[120px] rounded-full" />
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XV — Section B</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LE SACRIFICE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">De Tabaski</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">عيد الأضحى</p>

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
        
        {/* 1. IMPORTANCE ET CONDITIONS DU SACRIFICE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">1. Importance du Rite</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
            <p className="text-white/80 italic text-xl font-serif leading-relaxed">
              "Égorg­er un animal à cette occasion est une pratique traditionnelle très recommandée à tout musulman libre qui en a les moyens, sans conteste. Cela concerne aussi bien les jeunes que les vieux."
            </p>
            <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-3xl space-y-6">
               <div className="flex items-center gap-3 text-red-400">
                  <span className="material-symbols-rounded">priority_high</span>
                  <span className="font-black text-[10px] uppercase tracking-widest">Règle de l'Imam</span>
               </div>
               <p className="text-white/80 italic font-serif text-lg leading-relaxed">
                 "On n’a pas le droit d’égorger un mouton avant que l’Imam n’ait égorgé le sien. Ce dernier ne peut égorger le sien qu’après avoir effectué la prière du « Hiit » (de Tabaski bien sûr). Si l’on égorge son mouton sans tenir compte de ces prescriptions, on ne bénéficiera pas des bienfaits attachés au sacrifice de la Tabaski ; on n’aura que de la viande."
               </p>
            </div>
          </div>
        </section>

        {/* 2. LE TEMPS ET L'EXÉCUTION */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-emerald-400 uppercase tracking-widest italic leading-none font-sans">2. Période et Modalités</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <h3 className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Durée de l'opération</h3>
              <p className="text-white/70 italic font-serif text-lg leading-relaxed">
                "Le temps imparti à cette opération s’étend de la fin du sacrifice effectué par l’Imam jusqu’au coucher du soleil du troisième jour. Cependant, l’opération ne se fait pas la nuit."
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <h3 className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Responsabilité</h3>
              <p className="text-white/70 italic font-serif text-lg leading-relaxed">
                "Il est préférable que chacun égorge son mouton. Si l’on a un empêchement, on en confie le soin à un musulman. Celui qui égorge le mouton d’autrui sans y être autorisé ne bénéficiera pas des avantages et devra lui trouver un mouton en remplacement."
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. L'ANIMAL ET LA CONSOMMATION */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">3. L'Animal et les Restrictions</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
               <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold text-4xl">
                  <span className="material-symbols-rounded">verified</span>
               </div>
               <p className="text-white/80 italic font-serif text-xl leading-relaxed">
                 "Il est recommandé que la bête destinée au sacrifice soit sans défaut ; elle doit être semblable à celle recommandée pour le baptême."
               </p>
            </div>

            <div className="p-8 bg-white/[0.03] rounded-3xl border border-white/10 space-y-6">
               <span className="text-gold font-black text-[10px] uppercase tracking-[0.3em] block text-center">Interdiction de vente</span>
               <p className="text-white/60 italic font-serif text-lg leading-relaxed text-center">
                 "Aucune partie prélevée sur un mouton de Tabaski ne doit être vendue, pas même la peau de l’animal. La personne éventuellement appelée pour dépecer le mouton ne doit pas être payée avec la viande dudit mouton."
               </p>
               <div className="pt-6 border-t border-white/5 text-center">
                  <p className="text-white/80 font-bold italic font-serif text-base leading-relaxed">
                    "On peut toutefois lui donner une partie de la viande destinée aux offrandes. S’il doit être payé, que cela se fasse en argent."
                  </p>
               </div>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/15/a')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
            Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/16')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
            Suivant
        </button>
      </div>
    </main>
  );
}