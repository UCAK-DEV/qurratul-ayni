'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ConseilsPratiquesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 17 dans votre data/chapters.ts
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];

  // Liste des sections pour la grille de navigation
  const categories = [
    { id: 'a', title: 'PRATIQUES INTERDITES', icon: 'block', ar: 'المحرمات' },
    { id: 'b', title: 'INTERDICTIONS FORMELLES', icon: 'gavel', ar: 'منوعات' },
    { id: 'c', title: 'CAUSES DE PAUVRETÉ', icon: 'trending_down', ar: 'أسباب الفقر' },
    { id: 'd', title: 'AISANCE MATÉRIELLE', icon: 'payments', ar: 'الغنى الحلال' },
    { id: 'e', title: 'SANTÉ & LONGÉVITÉ', icon: 'health_and_safety', ar: 'الصحة' },
    { id: 'f', title: 'SOUNNA & SALUTATIONS', icon: 'auto_awesome', ar: 'السنة' },
    { id: 'g', title: 'JOURS RECOMMANDÉS', icon: 'calendar_month', ar: 'الأيام المباركة' },
    { id: 'h', title: 'REPENTIR & FIN DU MONDE', icon: 'history_edu', ar: 'التوبة' },
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative font-sans">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[120px] rounded-full opacity-30" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[100px] rounded-full opacity-20" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Éthique & Vie</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]"
        >
          CONSEILS <br /><span className="gold-gradient-text italic">PRATIQUES</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold/80 block mb-12 drop-shadow-2xl text-center uppercase tracking-normal">نصائح عملية</p>

        {/* INTRODUCTION TEXT - Texte Intégral */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8 text-white/70 font-serif italic text-lg md:text-xl leading-relaxed text-justify mb-16 bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl"
        >
          <p>
            "Nous rassemblons dans ce chapitre des conseils concernant certaines pratiques, dont la plupart sont interdites et peuvent entraîner la perte de la foi du musulman avant la fin de ses jours."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left not-italic font-sans text-sm md:text-base pt-6 border-t border-white/5">
             <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-2xl flex items-start gap-4">
                <span className="material-symbols-rounded text-red-500">warning</span>
                <p>L’amour inconsidéré du Blanc <span className="text-white/40 block text-xs">(symbole de Satan)</span></p>
             </div>
             <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-2xl flex items-start gap-4">
                <span className="material-symbols-rounded text-red-500">gavel</span>
                <p>Vouloir rendre licite l’illicite</p>
             </div>
             <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-2xl flex items-start gap-4">
                <span className="material-symbols-rounded text-red-500">language</span>
                <p>Contester la Charia <span className="text-white/40 block text-xs">(Jeûne, Prière, Zakat, Hajj)</span></p>
             </div>
             <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-2xl flex items-start gap-4">
                <span className="material-symbols-rounded text-red-500">psychology</span>
                <p>Douter de l’unicité de Dieu</p>
             </div>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:bg-gold/20 shadow-2xl"
        >
          <span className="material-symbols-rounded text-2xl relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause' : 'play_arrow'}
          </span>
          <span className="relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter les conseils'}
          </span>
        </motion.button>
      </div>

      {/* SUB-SECTIONS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => router.push(`/partie/17/${cat.id}`)}
            className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col items-center text-center h-[240px] justify-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all mb-6">
              <span className="material-symbols-rounded text-3xl">{cat.icon}</span>
            </div>
            
            <div className="space-y-1">
              <span className="text-white/20 font-black text-[9px] uppercase tracking-[0.3em] block">Section {cat.id.toUpperCase()}</span>
              <h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors leading-tight px-4">{cat.title}</h3>
            </div>

            <span className="font-amiri text-2xl text-gold/20 absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {cat.ar}
            </span>

            {/* Hover arrow */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
               <span className="material-symbols-rounded text-gold text-sm">north_east</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/16')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/17/a')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
        >
          Commencer
        </button>
      </div>
    </main>
  );
}