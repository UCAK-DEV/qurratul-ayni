'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function BetailZakatPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre IX — Section C</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              À PROPOS DU <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">bétail</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">حول الماشية</p>

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

        <div className="space-y-32">
          
          {/* INTRODUCTION */}
          <section className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">C</span>
            <div className="max-w-4xl relative z-10">
              <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-gold/30 pl-8">
                &quot;A PROPOS DU BÉTAIL : les animaux les plus couramment élevés chez nous sont les bœufs, les moutons et les chèvres.&quot;
              </p>
            </div>
          </section>

          {/* 1. LES BŒUFS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Les Bœufs</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">البقر</span>
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <p>
                Si le nombre de têtes est inférieur à trente (30), on ne prélève pas de zakat. De trente (30) à trente-neuf (39) têtes, il faudra prélever un taurillon de deux ans ou une génisse de deux ans en guise de zakat. De quarante à cinquante-neuf têtes, il faudra prélever une vache qui entre dans sa quatrième année pour quarante têtes, un taurillon de deux ans pour trente têtes de bétail.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 not-italic">
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-center space-y-2">
                  <span className="text-gold font-black text-[10px] uppercase">Moins de 30</span>
                  <p className="text-white/40 text-sm">Pas de prélèvement</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gold/[0.05] border border-gold/20 text-center space-y-2">
                  <span className="text-gold font-black text-[10px] uppercase">30 à 39</span>
                  <p className="text-white/80 text-sm">Taurillon / Génisse (2 ans)</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-center space-y-2">
                  <span className="text-gold font-black text-[10px] uppercase">Dès 40</span>
                  <p className="text-white/80 text-sm">Vache (4e année)</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. LES MOUTONS ET LES CHÈVRES */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Les moutons et les chèvres</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">الغنم والماعز</span>
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <p>
                De quarante à cent vingt têtes, il prélèvera une bête de plus d’un (1). De cent vingt et une têtes à deux cents, il en faudra prélever deux. De deux cent une têtes jusqu’à moins de quatre cents, on en prélèvera trois.
              </p>
              
              <div className="p-10 rounded-[3rem] bg-gold/[0.02] border-l-4 border-gold text-white/80 text-center text-xl md:text-2xl">
                &quot;À partir de quatre cents têtes, il faudra une bête par centaine.&quot;
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 not-italic">
                {[
                  { label: "40 - 120", val: "1 bête" },
                  { label: "121 - 200", val: "2 bêtes" },
                  { label: "201 - 399", val: "3 bêtes" },
                  { label: "400+", val: "1 bête / 100" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-gold font-bold text-[10px] uppercase block mb-1">{item.label}</span>
                    <span className="text-white/80 text-sm">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/9/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/9/d')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}