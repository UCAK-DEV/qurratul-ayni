'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LeTayammum() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Correction : On récupère les données du chapitre 5 (Pratiques religieuses) 
  // pour maintenir la cohérence de la lecture audio globale
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) {
      togglePlay();
    } else {
      setChapter(chapterData);
    }
  };

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-32 pb-48 px-6">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gold tracking-[0.4em] text-xs uppercase font-bold mb-4 block"
        >
          Qurratul Ayni — Chapitre V (Section C)
        </motion.span>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-gold-light to-gold bg-clip-text text-transparent leading-tight mb-8"
        >
          LE TAYAMMUM <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 text-gold">(التيمم - L'ABLUTION SÈCHE)</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-widest text-[10px] backdrop-blur-md transition-colors hover:bg-gold/10 shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* SECTION DÉFINITION BILINGUE */}
        <section className="glass-card p-8 md:p-12 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Ajout du support RTL pour l'arabe */}
                <div className="w-full md:w-1/2 text-left border-l-2 border-gold/10 pl-8">
                    <p className="text-lg text-white/50 font-serif italic leading-relaxed">
                        "Le Tayammum est une dérogation permettant de se purifier avec de la terre propre en l'absence d'eau ou en cas d'incapacité physique."
                    </p>
                </div>
                <div className="w-full md:w-1/2 text-right" dir="rtl">
                    <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8]">
                        التيمم هو طهارة بديلة بالتراب الطهور عند فقد الماء أو العجز عن استعماله.
                    </p>
                </div>
                <div className="hidden md:block w-[1px] h-20 bg-gold/10" />
            </div>
        </section>

        {/* PRATIQUE DU TAYAMMUM */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-bold text-gold uppercase tracking-wider">Pratique étape par étape</h2>
            <div className="h-px flex-1 bg-gold/20" />
            <span className="font-amiri text-2xl text-gold/40">صفة التيمم</span>
          </div>
          <div className="grid gap-3">
            {[
              { fr: "Avoir l'intention et dire 'Bismillah'.", ar: "النية والتسمية" },
              { fr: "Frapper la terre des deux mains.", ar: "الضربة الأولى" },
              { fr: "Essuyer tout le visage avec les paumes.", ar: "مسح الوجه" },
              { fr: "Frapper à nouveau la terre (Souna).", ar: "الضربة الثانية" },
              { fr: "Essuyer la main droite puis la gauche.", ar: "مسح اليدين" }
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 p-5 flex justify-between items-center rounded-2xl border border-white/5 hover:border-gold/30 transition-all">
                <div className="flex gap-5 items-center">
                  <span className="text-gold/30 font-bold text-xl">0{idx + 1}</span>
                  <p className="text-white/80 text-base">{step.fr}</p>
                </div>
                <p className="font-amiri text-gold-light text-xl hidden md:block" dir="rtl">{step.ar}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OBLIGATIONS ET TRADITIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-900/20 p-8 rounded-3xl border border-emerald-500/20">
             <h3 className="text-emerald-500 font-bold text-xs uppercase mb-6 flex justify-between items-center">
                OBLIGATOIRES (FARATA) <span className="font-amiri text-xl">فرائض</span>
             </h3>
             <ul className="grid grid-cols-1 gap-3 text-white/50 text-xs">
                {["L'intention", "La terre pure (Sa'id)", "Le premier toucher", "Essuyer le visage", "Essuyer les mains", "L'immédiateté"].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full" /> {item}
                  </li>
                ))}
             </ul>
          </div>
          
          <div className="bg-gold/5 p-8 rounded-3xl border border-gold/20">
             <h3 className="text-gold font-bold text-xs uppercase mb-6 flex justify-between items-center">
                TRADITIONS (SOUNA) <span className="font-amiri text-xl">سنن</span>
             </h3>
             <ul className="grid grid-cols-1 gap-3 text-white/50 text-xs">
                {["Dire Bismillah", "Le second toucher de terre", "Passer jusqu'aux coudes", "Respecter l'ordre"].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <span className="w-1 h-1 bg-gold rounded-full" /> {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>

      {/* NAVIGATION CORRIGÉE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/5/b')} 
          className="flex-1 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/6')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          Suivant (La Prière)
        </button>
      </div>
    </main>
  );
}