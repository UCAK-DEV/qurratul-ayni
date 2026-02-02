'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function OumraPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 11 pour l'audio (Le Pèlerinage)
  const chapterData = CHAPTERS.find(c => c.id === "11") || CHAPTERS[10];

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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XI — Section A</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LE PETIT PÈLERINAGE <br />
          <span className="gold-gradient-text">OU « OUMRA »</span>
        </motion.h1>

        <p className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mb-10">العمرة</p>

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
        
        {/* SECTION 1: DÉFINITION ET PRATIQUE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Pratique Traditionnelle</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic text-lg font-serif">
            <p>
              LE PETIT PÈLERINAGE OU « OUMRA » : L’effectuer une seule fois est une pratique traditionnelle. Il est identique à tous points au pèlerinage, mais il prend fin avec le circuit entre Safa et Marwa. Il est très déconseillé de faire « El hadj » par exemple. 
            </p>
          </div>
        </section>

        {/* SECTION 2: ÉTHIQUE ET HUMILITÉ */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Valeur Spirituelle et Humilité</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6 text-white/70 italic text-lg font-serif">
            <p>
              Cela ne doit pas nous faire croire qu’on est supérieur en quoi que ce soit à quelqu’un qui n’a pas encore effectué le pèlerinage. On doit le considérer uniquement comme un acte de dévotion au même titre que les invocations du nom de Dieu, que la prière, le jeûne, le prélèvement de la zakat, tout cela pour la face de Dieu. 
            </p>
          </div>
        </section>

        {/* SECTION 3: CONCLUSION SUR LES ACTES DE DÉVOTION */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">L'Essence de l'Engagement</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-emerald-950/10 p-8 md:p-12 rounded-[2.5rem] border border-emerald-500/20 text-white/80 italic text-lg font-serif leading-relaxed">
            <p className="mb-6">
              Qu’on sache que le pèlerinage à la Mecque et tous ces actes de dévotion ont la même valeur, étant tous des obligations divines. 
            </p>
            <p className="font-bold text-white border-l-4 border-gold pl-6 py-2">
              Tout acte est vain s’il ne s’appuie pas sur la foi et la crainte de Dieu.
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/11')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl font-sans"
        >
          Sommaire XI
        </button>
        <button 
          onClick={() => router.push('/partie/12')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all font-sans"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}