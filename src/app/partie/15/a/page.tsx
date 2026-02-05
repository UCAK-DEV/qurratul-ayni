'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChasseurPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "15") || CHAPTERS[14];
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
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XV — Section A</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">chasseur</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">أحكام الصيد</p>

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
          
          {/* 1. L'ACTE ET L'INTENTION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'Acte et l'Intention</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">A</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed space-y-12 text-justify">
                <div className="p-10 rounded-3xl bg-gold/[0.05] border border-gold/20 shadow-sm border-l-4 border-l-gold">
                  &quot;Il est recommandé au chasseur de dire <strong>« Bismilahi »</strong> avant de charger son fusil ; il répétera cette formule au moment d’appuyer sur la détente.&quot;
                </div>
                <p className="border-l-2 border-white/10 pl-8">
                  &quot;S’il atteint son objectif et que ce dernier tombe, il ne doit pas clamer fièrement son adresse ; il devra l’égorger s’il ne le trouve pas mort.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 2. ANIMAUX CONSOMMABLES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Animaux Consommables</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg leading-relaxed text-white/70">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 flex flex-col group hover:border-emerald-500/30 transition-all shadow-sm">
                <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Espèces Autorisées</h3>
                <p className="flex-1">
                  &quot;Toutes les espèces d’oiseaux ainsi que les animaux dits <strong>« Ndondeutes »</strong> sont consommables, même s’ils se nourrissent d’aliments souillés...&quot;
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-red-950/[0.03] border border-red-900/20 space-y-6 flex flex-col group hover:bg-red-950/10 transition-all shadow-sm">
                <h3 className="text-red-400 font-bold text-[10px] uppercase tracking-widest border-b border-red-900/10 pb-4">Carnassiers (Non recommandés)</h3>
                <p className="flex-1">
                  &quot;...l’hyène, le chacal, le lion, etc. La chair de ces derniers animaux n’est pas recommandée à la consommation.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 3. INTERDICTIONS FORMELLES */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-500 uppercase tracking-[0.3em]">Interdictions Formelles</h2>
              <div className="h-[1px] flex-1 bg-red-900/10" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-italic font-sans">
              {["Le Porc", "Le Phacochère", "Le Mulet", "Le Zèbre", "Le Cheval", "L'Âne"].map((animal, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-red-500/10 flex flex-col items-center justify-center text-center group hover:bg-red-950/20 hover:border-red-500 transition-all"
                >
                  <span className="material-symbols-rounded text-red-500/30 group-hover:text-red-500 mb-3 text-3xl">cancel</span>
                  <span className="text-white font-black uppercase text-[10px] tracking-widest opacity-60 group-hover:opacity-100">{animal}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-red-950/[0.05] border border-red-900/20 font-serif italic text-lg md:text-xl text-red-100/80 leading-relaxed text-center shadow-xl">
              &quot;Ces animaux sont strictement interdits à la consommation.&quot;
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/15')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Sommaire XV</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/15/b')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}