'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';
import Image from 'next/image';

export default function NotesAuteur() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 1
  const chapterData = CHAPTERS.find(c => c.id === "1") || CHAPTERS[0];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block"
        >
          Khouratoul Ayni
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-bold gold-gradient-text mb-10"
        >
          NOTES SUR L'AUTEUR
        </motion.h1>

        {/* Bouton Audio Biographique */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter la biographie'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl space-y-12"
        >
          {/* Portrait et Présentation Rapide */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <div className="absolute -inset-4 border border-gold/20 rounded-full animate-spin-slow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gold/40">
                <Image 
                  src="/author.jpg" 
                  alt="Serigne Shouhaïbou Mbacké" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Cheikh Abo Madyana <br />
                <span className="text-gold">Shouhaïbou Mbacké</span>
              </h2>
              <p className="text-gold/60 font-serif italic text-lg">
                1918 — 1991
              </p>
              <div className="h-[1px] w-20 bg-gold/30" />
            </div>
          </div>

          {/* Corps du texte biographique */}
          <div className="space-y-8 text-white/70 leading-relaxed font-serif text-lg md:text-xl">
            <p>
              Mieux connu sous le nom de <span className="text-white font-bold">Serigne Shouhaïbou MBACKÉ</span>, il fut l'un des remarquables soufis et érudits de la Muridiyyah.
            </p>
            <p>
              Il fut très tôt attaché à son illustre père, <span className="text-gold font-bold">Cheikh Ahmadou Bamba</span>, qui lui inculqua les valeurs islamiques fondamentales et la rigueur spirituelle.
            </p>
            <p>
              Il apprit et mémorisa le Coran très jeune auprès de son oncle Cheikh Hamzatou Diakhaté, qui le confia ensuite à Serigne Alassane Diakhaté pour ses études de droit islamique et de théologie.
            </p>
            <p>
              Sa vie durant, il s'est consacré exclusivement à Touba à l'éducation coranique et à l'orientation spirituelle des disciples, laissant derrière lui une œuvre littéraire et pédagogique immense, dont <span className="italic text-white">Khouratoul Ayni</span> est le joyau.
            </p>
          </div>

          {/* Citation Finale */}
          <div className="pt-8 border-t border-white/5">
            <p className="text-center font-amiri text-3xl text-gold-light leading-loose">
              رَضِيَ اللهُ عَنْهُ وَأَرْضَاهُ
            </p>
            <p className="text-center text-[10px] uppercase tracking-widest text-white/30 mt-4">
              Puisse Dieu être satisfait de lui et l'agréer
            </p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/accueil')} 
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Sommaire
        </button>
        <button 
          onClick={() => router.push('/partie/2')} 
          className="px-10 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Préface
        </button>
      </div>
    </main>
  );
}