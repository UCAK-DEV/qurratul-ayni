'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function CirconcisionPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "16") || CHAPTERS[15];
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
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVI — Rites de Pureté</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              DE LA <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">circoncision</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الختان</p>

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
          
          {/* 1. RECOMMANDATIONS ET ÂGE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Importance et Période</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">XVI</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed space-y-12 text-justify">
                <p className="border-l-2 border-gold/30 pl-8">
                  &quot;C’est une pratique traditionnelle fortement recommandée. Elle est surtout recommandée entre sept (7) et dix (10) ans.&quot;
                </p>
                <div className="p-10 rounded-[3rem] bg-red-950/[0.05] border border-red-900/20 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                  <span className="material-symbols-rounded text-red-500 text-4xl">event_busy</span>
                  <p className="text-white/70">
                    &quot;Mais il n’est pas du tout recommandé de circoncire un enfant le jour de sa naissance ou de son baptême.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. CAS PARTICULIERS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Cas Particuliers & Dispenses</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-italic">
              <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 flex flex-col group hover:border-emerald-500/30 transition-all shadow-sm">
                <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Dispense Médicale</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed flex-1 text-justify">
                  &quot;Celui qui redoute un quelconque préjudice lié à la circoncision en raison d’une maladie dont il souffre peut être dispensé de cette pratique.&quot;
                </p>
              </motion.div>
              
              <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 flex flex-col group hover:border-emerald-500/30 transition-all shadow-sm">
                <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Enfant né circoncis</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed flex-1 text-justify">
                  &quot;En ce qui concerne un enfant né circoncis, il est recommandé de prélever un peu de la partie concernée par la circoncision si cela est possible ; dans le cas contraire, on le laisse tel quel.&quot;
                </p>
              </motion.div>
            </div>
          </section>

          {/* 3. TRAITEMENT DU PRÉPUCE */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Rites de Sépulture</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-24 h-24 rounded-full bg-gold/5 flex items-center justify-center border border-gold/10">
                   <span className="material-symbols-rounded text-gold text-5xl opacity-40">eco</span>
                </div>
                <p className="flex-1">
                  &quot;La partie prélevée (le prépuce) après l’opération de la circoncision est une souillure ; elle doit être enfouie dans la terre et loin des habitations.&quot;
                </p>
              </div>

              <div className="p-10 rounded-[3.5rem] bg-red-950/[0.03] border border-red-900/20 space-y-8 shadow-sm">
                 <span className="text-red-400 font-black text-[10px] uppercase tracking-[0.4em] block text-center not-italic">Interdictions de lieu</span>
                 <p className="text-center text-white/80">
                  &quot;Elle ne peut pas être enfouie dans une mosquée et ne doit pas non plus être jetée à même le sol.&quot;
                 </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/15/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/17')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre XVII</button>
      </nav>
    </main>
  );
}