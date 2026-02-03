'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChasseurPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 15
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XV — Section A</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Chasseur</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">أحكام الصيد</p>

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
        
        {/* 1. ÉTHIQUE ET RITUELS DE LA CHASSE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">1. L'Acte et l'Intention</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
            <div className="bg-gold/5 p-8 rounded-3xl border border-gold/10 space-y-6">
               <div className="flex items-center gap-4">
                  <span className="material-symbols-rounded text-gold">precision_manufacturing</span>
                  <p className="text-white text-xl font-serif italic">
                    "Il est recommandé au chasseur de dire <strong>« Bismilahi »</strong> avant de charger son fusil ; il répétera cette formule au moment d’appuyer sur la détente."
                  </p>
               </div>
            </div>

            <p className="text-white/70 italic font-serif text-lg leading-relaxed">
              "S’il atteint son objectif et que ce dernier tombe, il ne doit pas clamer fièrement son adresse ; il devra l’égorger s’il ne le trouve pas mort."
            </p>
          </div>
        </section>

        {/* 2. ANIMAUX CONSOMMABLES (NDONDEUTES) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-emerald-400 uppercase tracking-widest italic leading-none font-sans">2. Animaux Consommables</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <p className="text-white/80 italic font-serif text-xl leading-relaxed">
              "Toutes les espèces d’oiseaux ainsi que les animaux dits <strong>« Ndondeutes »</strong> sont consommables, même s’ils se nourrissent d’aliments souillés..."
            </p>
            
            <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-3xl space-y-4">
              <span className="text-red-400 font-black text-[10px] uppercase tracking-widest block">Sauf les carnassiers :</span>
              <p className="text-white/70 italic font-serif text-lg">
                "...l’hyène, le chacal, le lion, etc. La chair de ces derniers animaux n’est pas recommandée à la consommation."
              </p>
            </div>
          </div>
        </section>

        {/* 3. INTERDICTIONS STRICTES */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-red-500 uppercase tracking-widest italic leading-none font-sans">3. Interdictions Formelles</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-sans">
            {["Le Porc", "Le Phacochère", "Le Mulet", "Le Zèbre", "Le Cheval", "L'Âne"].map((animal, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                className="p-6 rounded-2xl bg-white/[0.02] border border-red-500/10 flex flex-col items-center justify-center text-center group hover:border-red-500/30 transition-all"
              >
                <span className="material-symbols-rounded text-red-500/40 group-hover:text-red-500 mb-3">cancel</span>
                <span className="text-white/80 font-bold uppercase text-[10px] tracking-widest">{animal}</span>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-red-950/20 rounded-[2.5rem] border border-red-500/20 text-center">
            <p className="text-red-200 font-serif italic text-lg leading-relaxed">
              "Ces animaux sont strictement interdits à la consommation."
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/15')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Sommaire XV
        </button>
        <button 
          onClick={() => router.push('/partie/15/b')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}