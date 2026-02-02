'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PetitDejeunerAubePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 10 pour l'audio (Le Ramadan)
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];

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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre X — Section D</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LE KHEUDE & <br />
          <span className="gold-gradient-text text-3xl md:text-6xl">JEÛNES RECOMMANDÉS</span>
        </motion.h1>

        <p className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mb-10">السحور والصيام المستحب</p>

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
        
        {/* SECTION 1: LE KHEUDE ET LA CONDUITE PENDANT LE RAMADAN */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Le Petit Déjeuner de l'Aube</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic text-lg font-serif">
            <p>
              DU PETIT DÉJEUNER DE L’AUBE OU « KHEUDE » PENDANT LE RAMADAN : Manger à l’aube pendant le ramadan est une pratique traditionnelle. Il est recommandé de le faire le plus tard possible et de rompre le jeûne le plus tôt possible, de tenir sa langue et de surveiller ses gestes, de rompre le jeûne avec des dattes avant de boire de l’eau, de s’adonner à des pratiques pieuses pendant tout le mois de ramadan.
            </p>
          </div>
        </section>

        {/* SECTION 2: JEÛNES RECOMMANDÉS HORS RAMADAN */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Jeûnes Méritoires</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8 text-white/70 italic text-lg font-serif">
            <p>
              En dehors du mois de ramadan, il y a des jours pendant lesquels il est recommandé d’observer le jeûne. Il s’agit de tout le mois de l’Achoura ou « tamkharite », en particulier le premier (1er), le troisième (3e), le neuvième (9e) et le dixième (10e) jours de l’Achoura ; l’observation du jeûne pendant ce jour vous absout de tous les péchés commis pendant l’année écoulée :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-italic font-sans">
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <span className="text-gold font-black text-lg">1</span>
                <p className="text-white/80 text-sm leading-relaxed">Trois jours de chaque mois.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <span className="text-gold font-black text-lg">2</span>
                <p className="text-white/80 text-sm leading-relaxed">Tout le mois de « ndèye koor », en particulier le vingt-septième (27e) jour.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <span className="text-gold font-black text-lg">3</span>
                <p className="text-white/80 text-sm leading-relaxed">Tout le mois de « chabane » ou « barakhlou », en particulier le quinzième (15e) jour.</p>
              </div>
              <div className="p-6 rounded-3xl bg-gold/5 border border-gold/20 flex items-start gap-4 shadow-lg shadow-gold/5">
                <span className="text-gold font-black text-lg">4</span>
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">Six jours après la korité. Jeûner pendant ces six jours équivaut à jeûner tout le temps. Mais il est préférable de reprendre le jeûne le premier dimanche ou le premier mercredi qui suit.</p>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <span className="text-gold font-black text-lg">5</span>
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">Vingt-cinquième jour de « digui tabaski », en particulier le huitième (8e) et le neuvième (9e) jour. Celui qui observe le jeûne pendant le neuvième (9e) jour se verra absous de tous les péchés commis pendant l’année écoulée et ceux à commettre pendant l’année à venir.</p>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <span className="text-gold font-black text-lg">6</span>
                <p className="text-white/80 text-sm leading-relaxed">Le dernier jour de l’an.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PRÉCAUTIONS ET INTERDICTIONS */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-red-500 uppercase tracking-widest italic leading-none">Limites et Précautions</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />
          </div>

          <div className="bg-red-950/10 p-8 md:p-12 rounded-[2.5rem] border border-red-500/20 text-white/70 italic text-lg font-serif leading-relaxed">
            <p>
              Il n’est pas recommandé de jeûner tout le temps ou de choisir de jeûner un jour déterminé comme le vendredi ou pour un pèlerin de jeûner pendant le neuvième (9e) jour de la tabaski ou d’observer le jeûne en guise de précaution si on n’est pas édifié sur l’apparition du croissant lunaire, même si ce jour correspond effectivement au premier jour du ramadan, on sera alors tenu de faire un jeûne à titre compensatoire.
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/10/c')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl font-sans"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/11')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all font-sans"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}