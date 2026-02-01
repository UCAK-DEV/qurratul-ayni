'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function BetailZakatPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 9 (La Zakat)
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans">
      {/* Effets de fond modernes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-emerald-900/10 blur-[100px] rounded-full" />
      </div>

      {/* HEADER - Identité visuelle du projet */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre IX — Section C</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          À PROPOS DU BÉTAIL <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mt-2">حول الماشية</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* INTRODUCTION TEXTUELLE INTÉGRALE */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-white/70 italic text-xl leading-relaxed font-serif">
            "A PROPOS DU BÉTAIL : les animaux les plus couramment élevés chez nous sont les bœufs, les moutons et les chèvres."
          </p>
        </section>

        {/* SECTION 1: LES BŒUFS - STRUCTURE PRO */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic flex items-center gap-3">
              Les Bœufs
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-10">
            <div className="prose prose-invert max-w-none text-white/80 leading-relaxed italic text-lg text-justify font-serif">
              <p>
                Si le nombre de têtes est inférieur à trente (30), on ne prélève pas de zakat. 
                De trente (30) à trente-neuf (39) têtes, il faudra prélever un taurillon de deux ans ou une génisse de deux ans en guise de zakat. 
                De quarante à cinquante-neuf têtes, il faudra prélever une vache qui entre dans sa quatrième année pour quarante têtes, un taurillon de deux ans pour trente têtes de bétail.
              </p>
            </div>

            {/* Grille de synthèse visuelle pour les Bœufs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
                <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-4">Moins de 30 têtes</span>
                <p className="text-sm font-bold text-red-400/80 italic">Aucune Zakat</p>
              </div>
              <div className="p-6 rounded-3xl bg-gold/5 border border-gold/20 flex flex-col items-center text-center">
                <span className="text-[10px] text-gold uppercase font-black tracking-widest mb-4">30 à 39 têtes</span>
                <p className="text-sm text-white/90 font-bold">1 Taurillon (2 ans) ou 1 Génisse (2 ans)</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
                <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-4">Dès 40 têtes</span>
                <p className="text-sm text-white/90 font-bold">1 Vache (4ème année)</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: LES MOUTONS ET LES CHÈVRES - STRUCTURE PRO */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic flex items-center gap-3">
              Les moutons et les chèvres
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-10">
            <div className="prose prose-invert max-w-none text-white/80 leading-relaxed italic text-lg text-justify font-serif">
              <p>
                De quarante à cent vingt têtes, il prélèvera une bête de plus d’un (1). 
                De cent vingt et une têtes à deux cents, il en faudra prélever deux. 
                De deux cent une têtes jusqu’à moins de quatre cents, on en prélèvera trois.
              </p>
              
              <div className="mt-8 p-8 rounded-3xl bg-gold/10 border-l-4 border-gold">
                <p className="text-white/90 font-bold italic text-lg leading-relaxed">
                  "À partir de quatre cents têtes, il faudra une bête par centaine. (1%)"
                </p>
              </div>
            </div>

            {/* Recapitulatif Quantitatif */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "40 - 120", val: "1 bête" },
                { label: "121 - 200", val: "2 bêtes" },
                { label: "201 - 399", val: "3 bêtes" },
                { label: "400 +", val: "1 bête / 100" }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center group hover:border-gold/30 transition-all">
                  <p className="text-[9px] text-gold font-black mb-2 tracking-tighter uppercase">{item.label} têtes</p>
                  <p className="text-white font-bold text-xs">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION - Dock moderne flottant */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/9/b')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/9/d')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivante
        </button>
      </div>
    </main>
  );
}