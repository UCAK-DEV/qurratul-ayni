'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PetitDejeunerAubePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre X — Section D</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LE KHEUDE & <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">jeûnes recommandés</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">السحور والصيام المستحب</p>

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
          
          {/* 1. LE KHEUDE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le repas de l'aube</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">D</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed border-l-2 border-gold/30 pl-8">
                DU PETIT DÉJEUNER DE L’AUBE OU « KHEUDE » PENDANT LE RAMADAN : Manger à l’aube pendant le ramadan est une pratique traditionnelle. Il est recommandé de le faire le plus tard possible et de rompre le jeûne le plus tôt possible, de tenir sa langue et de surveiller ses gestes, de rompre le jeûne avec des dattes avant de boire de l’eau, de s’adonner à des pratiques pieuses pendant tout le mois de ramadan.
              </div>
            </div>
          </section>

          {/* 2. JEÛNES MÉRITOIRES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Jeûnes Méritoires</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">نوافل الصوم</span>
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
              <p className="text-center max-w-4xl mx-auto">
                En dehors du mois de ramadan, il y a des jours pendant lesquels il est recommandé d’observer le jeûne. Il s’agit de tout le mois de l’Achoura ou « tamkharite », en particulier le premier (1er), le troisième (3e), le neuvième (9e) et le dixième (10e) jours de l’Achoura ; l’observation du jeûne pendant ce jour vous absout de tous les péchés commis pendant l’année écoulée :
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 not-italic font-sans">
                {[
                  "Trois jours de chaque mois.",
                  "Tout le mois de « ndèye koor », en particulier le vingt-septième (27e) jour.",
                  "Tout le mois de « chabane » ou « barakhlou », en particulier le quinzième (15e) jour.",
                  "Six jours après la korité. Jeûner pendant ces six jours équivaut à jeûner tout le temps. Mais il est préférable de reprendre le jeûne le premier dimanche ou le premier mercredi qui suit.",
                  "Vingt-cinquième jour de « digui tabaski », en particulier le huitième (8e) et le neuvième (9e) jour. Celui qui observe le jeûne pendant le neuvième (9e) jour se verra absous de tous les péchés commis pendant l’année écoulée et ceux à commettre pendant l’année à venir.",
                  "Le dernier jour de l’an."
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 flex gap-6 items-start group hover:border-gold/20 transition-all shadow-sm"
                  >
                    <span className="text-gold font-black opacity-30 text-2xl group-hover:opacity-100 transition-opacity font-serif">
                      {idx + 1}
                    </span>
                    <p className="text-white/70 font-serif italic text-base leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. LIMITES ET PRÉCAUTIONS */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Limites et Précautions</h2>
              <div className="h-[1px] flex-1 bg-red-950/20" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-red-950/[0.03] border border-red-900/20 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-center">
              <p className="max-w-4xl mx-auto">
                Il n’est pas recommandé de jeûner tout le temps ou de choisir de jeûner un jour déterminé comme le vendredi ou pour un pèlerin de jeûner pendant le neuvième (9e) jour de la tabaski ou d’observer le jeûne en guise de précaution si on n’est pas édifié sur l’apparition du croissant lunaire, même si ce jour correspond effectivement au premier jour du ramadan, on sera alors tenu de faire un jeûne à titre compensatoire.
              </p>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/10/c')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/11')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre XI</button>
      </nav>
    </main>
  );
}