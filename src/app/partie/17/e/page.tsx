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
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVII — Section E</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              SANTÉ ET <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">longévité</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الصحة وطول العمر</p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAudioAction}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-20' : 'opacity-0'}`} />
              <span className="material-symbols-rounded text-4xl relative z-10 text-gold">
                {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
              </span>
              <span className="text-sm font-bold tracking-tight relative z-10 italic font-serif">
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        <div className="space-y-24">
          
          {/* 1. INTRODUCTION DOCTRINALE */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">E</span>
            <p className="max-w-3xl mx-auto text-white/80 font-serif italic text-lg md:text-xl leading-relaxed relative z-10">
              &quot;Prier souvent le Tout-Puissant pour qu’Il nous accorde longévité et bonne santé, et prendre soin de son état de santé, car veiller à sa santé est une preuve de foi en Dieu.&quot;
            </p>
          </motion.section>

          {/* 2. SAGESSE MÉDICALE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Sagesse du médecin de jadis</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed">
              <p className="text-justify border-l-2 border-gold/30 pl-8 mb-12">
                &quot;Un médecin des temps jadis a dit à son fils ce qui suit, et dont l’observation permettra d’éviter les maladies tout au long de la vie :&quot;
              </p>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
                <ul className="space-y-6">
                  {[
                    "Ne pas manger avant d’avoir digéré ce que l’on a déjà dans le ventre.",
                    "Ne jamais marcher jusqu’à l’essoufflement ou la fatigue excessive.",
                    "Ne pas épouser une femme âgée.",
                    "Ne pas avoir faim ni être trop rassasié au moment des rapports sexuels.",
                    "Ne pas boire d’eau fraîche après les rapports sexuels.",
                    "Ne pas boire d’eau fraîche la nuit."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 border-b border-white/[0.03] pb-3">
                      <span className="text-gold/40">•</span> {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-6">
                  {[
                    "Se purger chaque semaine.",
                    "Aller se soulager et uriner chaque fois qu’on en éprouve le besoin, au lieu de remettre cela à plus tard.",
                    "Ne pas manger les derniers fruits produits par un arbre dans une saison.",
                    "Ne pas manger de la viande séchée.",
                    "Ne pas avaler les aliments avant de les avoir bien mâchés.",
                    "Ne pas prendre simultanément du lait caillé, des œufs et du poisson."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 border-b border-white/[0.03] pb-3">
                      <span className="text-gold/40">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-gold/[0.03] border border-gold/10 not-italic font-sans text-xs uppercase tracking-widest text-gold-light text-center">
                Remarque : Chaque fois qu’on prend l’un de ces aliments, attendre qu’il soit digéré avant d’en consommer un autre.
              </div>
            </motion.div>
          </section>

          {/* 3. RYTHMES ET HYGIÈNE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Rythmes de Vie</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg text-white/70 leading-relaxed">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6">
                <ul className="space-y-6">
                  <li className="flex gap-4"><span className="text-gold/30">/</span> Ne pas manger avant d’avoir faim.</li>
                  <li className="flex gap-4"><span className="text-gold/30">/</span> S’arrêter lorsqu’on est rassasié.</li>
                  <li className="flex gap-4"><span className="text-gold/30">/</span> Après le déjeuner, faire la sieste.</li>
                  <li className="flex gap-4"><span className="text-gold/30">/</span> Après le dîner, faire au moins 40 pas.</li>
                </ul>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6">
                <ul className="space-y-6">
                  <li className="flex gap-4 text-white/90">Se coucher sur le côté gauche ou sur le dos quand on dort le ventre plein ; cela accélère la digestion.</li>
                  <li className="flex gap-4">Avant de se coucher, s’assurer de ne pas avoir besoin de se soulager.</li>
                  <li className="flex gap-4">Ne pas rester trop longtemps aux toilettes (risque de diarrhées ou parasitoses).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. DANGERS ET RECOMMANDATIONS FINALES */}
          <section className="space-y-8 pb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-red-950/[0.05] border border-red-900/20 space-y-8">
                <h3 className="text-red-400 font-bold text-[10px] uppercase tracking-widest border-b border-red-900/10 pb-4">Ce qui nuit le plus</h3>
                <ul className="space-y-4 text-white/80 font-serif italic text-lg">
                  <li>• Boire de l’alcool.</li>
                  <li>• Avoir des rapports sexuels fréquents.</li>
                  <li>• Manger avant d’avoir digéré le repas précédent.</li>
                </ul>
              </motion.div>

              <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-emerald-950/[0.03] border border-emerald-500/10 space-y-8">
                <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest border-b border-emerald-500/10 pb-4">Préconisations</h3>
                <ul className="space-y-6 text-white/70 font-serif italic text-base leading-relaxed">
                  <li>• Il est conseillé de prendre un seul repas journalier si possible.</li>
                  <li>• Avoir des rapports sexuels une fois par semaine.</li>
                  <li className="text-red-300/60">• Éviter de boire la nuit, car c’est très nuisible pour la santé.</li>
                  <li className="text-sm border-t border-white/5 pt-4">Se laver dans un endroit avec courant d’air ou sortir dans le vent avant d’être séché est déconseillé.</li>
                </ul>
              </motion.div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/17/d')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/17/f')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}