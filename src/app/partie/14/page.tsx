'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ProduitsCreditProhibePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 14 (ou fallback)
  const chapterData = CHAPTERS.find(c => c.id === "14") || CHAPTERS[13];

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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XIV — Fiqh des Échanges</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          CRÉDIT <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Prohibé</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">المنتجات الممنوع فيها النسيئة</p>

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
        
        {/* 1. LA PROHIBITION DU CRÉDIT */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">Règle Générale</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-red-950/10 border border-red-500/20 p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <span className="material-symbols-rounded">gavel</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-red-500">Interdiction</span>
            </div>
            <p className="text-white/80 italic font-serif text-xl leading-relaxed">
              "Il n’est pas permis de les donner sous forme de prêt (crédit), que ce que l’on donne soit de la même espèce que ce que l’on récupère ou non."
            </p>
          </div>
        </motion.section>

        {/* 2. LES CONDITIONS DU TROC (MÊME ESPÈCE) */}
        <motion.section {...fadeInUp} className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">Troc de même espèce</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <p className="text-white/70 italic font-serif text-lg leading-relaxed">
              "Cependant, l’échange, lorsqu’il se fait sur place (troc), est permis s’il s’agit de la même espèce de produits, comme entre le mil (souna) et le mil (sanio) ou entre deux variétés de maïs."
            </p>
            <div className="p-6 bg-gold/5 rounded-2xl border-l-4 border-gold">
               <div className="flex items-center gap-4 mb-2">
                 <span className="material-symbols-rounded text-gold">balance</span>
                 <span className="text-gold font-black text-[10px] uppercase tracking-widest">Condition Impérative</span>
               </div>
               <p className="text-white font-bold italic font-serif text-xl">
                 "Dans ce cas, les deux quantités échangées doivent être égales."
               </p>
            </div>
          </div>
        </motion.section>

        {/* 3. TROC D'ESPÈCES DIFFÉRENTES */}
        <motion.section {...fadeInUp} className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-emerald-400 uppercase tracking-widest italic leading-none font-sans">Espèces Différentes</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6">
              <h3 className="text-emerald-400 font-black text-[10px] uppercase mb-4 tracking-widest">Produits Céréaliers</h3>
              <p className="text-white/60 italic font-serif text-base leading-relaxed">
                "Si les deux produits échangés ne sont pas de la même espèce, comme entre le gros mil (félà) et le mil (souna), ou entre le riz et le mil, il est admis que l’une des quantités soit plus grande que l’autre."
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6">
              <h3 className="text-emerald-400 font-black text-[10px] uppercase mb-4 tracking-widest">Fruits et Variétés</h3>
              <p className="text-white/60 italic font-serif text-base leading-relaxed">
                "Il en est de même pour toutes les espèces de fruits lorsqu’elles sont présentes, qu’elles soient ou non de la même famille."
              </p>
              <div className="pt-4 flex justify-center opacity-20">
                 <span className="material-symbols-rounded text-6xl text-gold">nutrition</span>
              </div>
            </div>
          </div>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/13/b')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/15')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}