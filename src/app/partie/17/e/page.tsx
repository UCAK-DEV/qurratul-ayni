'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SanteLongevitePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor conforme au projet */}
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Section E</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          SANTÉ ET <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Longévité</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">الصحة وطول العمر</p>

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
        
        {/* 1. INTRODUCTION DOCTRINALE */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6">
          <p className="text-white/80 italic font-serif text-xl leading-relaxed">
            Prier souvent le Tout-Puissant pour qu’Il nous accorde longévité et bonne santé, et prendre soin de son état de santé, car veiller à sa santé est une preuve de foi en Dieu.
          </p>
        </motion.section>

        {/* 2. LE MÉDECIN DES TEMPS JADIS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">Sagesse Médicale</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <p className="text-white/70 italic font-serif text-lg leading-relaxed border-b border-white/5 pb-6">
              "Un médecin des temps jadis a dit à son fils ce qui suit, et dont l’observation permettra d’éviter les maladies tout au long de la vie :"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-white/80 italic font-serif text-lg leading-relaxed">
              <ul className="space-y-4">
                <li>• Ne pas manger avant d’avoir digéré ce que l’on a déjà dans le ventre.</li>
                <li>• Ne jamais marcher jusqu’à l’essoufflement ou la fatigue excessive.</li>
                <li>• Ne pas épouser une femme âgée.</li>
                <li>• Ne pas avoir faim ni être trop rassasié au moment des rapports sexuels.</li>
                <li>• Ne pas boire d’eau fraîche après les rapports sexuels.</li>
                <li>• Ne pas boire d’eau fraîche la nuit.</li>
              </ul>
              <ul className="space-y-4">
                <li>• Se purger chaque semaine.</li>
                <li>• Aller se soulager et uriner chaque fois qu’on en éprouve le besoin, au lieu de remettre cela à plus tard, car cela est la cause de plusieurs maladies.</li>
                <li>• Ne pas manger les derniers fruits produits par un arbre dans une saison.</li>
                <li>• Ne pas manger de la viande séchée.</li>
                <li>• Ne pas avaler les aliments avant de les avoir bien mâchés.</li>
                <li>• Ne pas prendre simultanément du lait caillé, des œufs et du poisson.</li>
              </ul>
            </div>

            <div className="p-6 bg-gold/5 rounded-2xl border-l-4 border-gold not-italic font-sans text-sm">
              <p><strong>Remarque :</strong> Chaque fois qu’on prend l’un de ces aliments, attendre qu’il soit digéré avant d’en consommer un autre.</p>
            </div>
          </motion.div>
        </section>

        {/* 3. RYTHMES ET HYGIÈNE */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 italic font-serif text-lg leading-relaxed">
            <ul className="space-y-4">
              <li>• Ne pas manger avant d’avoir faim.</li>
              <li>• S’arrêter lorsqu’on est rassasié.</li>
              <li>• Après le déjeuner, faire la sieste.</li>
              <li>• Après le dîner, faire au moins 40 pas.</li>
              <li>• Se coucher sur le côté gauche ou sur le dos quand on dort le ventre plein ; cela accélère la digestion.</li>
            </ul>
            <ul className="space-y-4">
              <li>• Avant de se coucher, s’assurer de ne pas avoir besoin de se soulager.</li>
              <li>• Ne pas rester trop longtemps aux toilettes, car cela peut provoquer des diarrhées ou des parasitoses.</li>
              <li>• S’adonner à toutes les pratiques reconnues pour accroître la longévité, tant qu’elles ne sont pas contraires à la tradition musulmane.</li>
            </ul>
          </div>
        </motion.section>

        {/* 4. DANGERS ET RECOMMANDATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="p-8 md:p-10 rounded-[3rem] bg-red-950/10 border border-red-500/20 space-y-6">
            <h3 className="text-red-500 font-black text-[10px] uppercase tracking-widest text-center">Ce qui nuit le plus à la santé :</h3>
            <ul className="space-y-4 text-white/80 italic font-serif text-lg text-center">
              <li>• Boire de l’alcool.</li>
              <li>• Avoir des rapports sexuels fréquents.</li>
              <li>• Manger avant d’avoir digéré le repas précédent.</li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="p-8 md:p-10 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
            <h3 className="text-gold font-black text-[10px] uppercase tracking-widest text-center">Recommandations :</h3>
            <ul className="space-y-4 text-white/70 italic font-serif text-base leading-relaxed">
              <li>• Il est conseillé de prendre un seul repas journalier si possible.</li>
              <li>• Avoir des rapports sexuels une fois par semaine.</li>
              <li>• Éviter de boire la nuit, car c’est très nuisible pour la santé.</li>
              <li>• Se laver dans un endroit où l’on risque un courant d’air, ou sortir dans le vent avant d’être bien séché, est déconseillé.</li>
            </ul>
          </motion.div>
        </div>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17/d')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/17/f')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}