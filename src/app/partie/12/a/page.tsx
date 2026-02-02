'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ObligationsMariagePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 12 pour l'audio (Le Mariage)
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XII — Section A</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LES <br />
          <span className="gold-gradient-text">OBLIGATIONS</span>
        </motion.h1>

        <p className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mb-10">الواجبات</p>

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
        
        {/* SECTION 1: L'ACTE ET LE CONSENTEMENT */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">L'Acte de Mariage</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic text-lg font-serif">
            <p>
              Il n’y a mariage que sur la base d’un acte stipulant qu’une telle a été donnée en mariage à un tel avec consentement de ce dernier. Il appartient au « Kilifa » (tuteur légal, le père par exemple) de marier sa fille ou de donner des instructions dans ce sens avec la présence obligatoire d’au moins deux (2) ou quatre (4) témoins de bonne foi.
            </p>
          </div>
        </section>

        {/* SECTION 2: LA DOT */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">La Dot (Mahr)</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 text-white/70 italic text-lg font-serif">
            <p>
              La dot doit être présentée ; à défaut, on fixe le montant et l’échéance à laquelle elle doit être versée.
            </p>
          </div>
        </section>

        {/* SECTION 3: LES CONDITIONS ET IMPÉDIMENTS */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Conditions de validité</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans not-italic">
            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-start gap-6 group hover:border-gold/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold font-black italic">01</span>
              </div>
              <p className="text-white/80 leading-relaxed font-serif italic text-lg">
                La femme ne doit pas se trouver en période de retraite (ida).
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-start gap-6 group hover:border-gold/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold font-black italic">02</span>
              </div>
              <p className="text-white/80 leading-relaxed font-serif italic text-lg">
                L’homme ne doit pas avoir déjà quatre (4) quatre femmes.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/12')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl font-sans"
        >
          Sommaire XII
        </button>
        <button 
          onClick={() => router.push('/partie/12/b')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all font-sans"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}