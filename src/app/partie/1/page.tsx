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
  
  const chapterData = CHAPTERS.find(c => c.id === "1") || CHAPTERS[0];

  const bioSections = [
    {
      fr: "Mieux connu sous le nom de Serigne Shouhaïbou MBACKÉ, il fut l'un des remarquables soufis et érudits de la Muridiyyah."
    },
    {
      fr: "Il fut très tôt attaché à son illustre père, Cheikh Ahmadou Bamba, qui lui inculqua les valeurs islamiques fondamentales et la rigueur spirituelle."
    },
    {
      fr: "Il apprit et mémorisa le Coran très jeune auprès de son oncle Cheikh Hamzatou Diakhaté, avant de poursuivre ses études de droit islamique et de théologie."
    },
    {
      fr: "Sa vie durant, il s'est consacré à l'éducation coranique à Touba, laissant une œuvre immense dont Khouratoul Ayni est le joyau."
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* Background Decoratif */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Style "Fine Art" */}
        <header className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4">
              <span className="h-[1px] w-8 bg-gold/50" />
              <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">
                Profil Biographique
              </span>
              <span className="h-[1px] w-8 bg-gold/50" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              {chapterData.titleFr}
            </h1>
          </motion.div>
        </header>

        {/* Section Principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Colonne Gauche : Portrait Fixe/Sticky */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 group">
              <Image 
                src="/author.jpg" 
                alt="Serigne Shouhaïbou Mbacké" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010302] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-gold font-serif italic text-2xl tracking-tight">
                  1918 — 1991
                </p>
              </div>
            </div>
          </motion.div>

          {/* Colonne Droite : Contenu Textuel */}
          <div className="lg:col-span-7 space-y-20">
            
            {/* Titre et Rang */}
            <section className="space-y-8">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Cheikh Abo Madyana <br />
                  <span className="gold-gradient-text italic font-serif">Shouhaïbou Mbacké</span>
                </h2>
                <div className="h-1 w-20 bg-gold" />
              </motion.div>

              {/* Blocs de texte stylisés */}
              <div className="space-y-12">
                {bioSections.map((section, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <span className="absolute -left-8 top-0 text-gold/10 text-6xl font-black opacity-0 group-hover:opacity-100 transition-opacity -z-10">
                      0{index + 1}
                    </span>
                    <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic hover:text-white transition-colors">
                      &quot;{section.fr}&quot;
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Note Finale Signature */}
            <footer className="pt-16 border-t border-white/5 text-center lg:text-left">
               <p className="text-xs uppercase tracking-[0.4em] text-white/30 mb-2">
                 Hommage & Reconnaissance
               </p>
               <p className="text-xl font-serif text-gold/80 italic">
                 Puisse Dieu être satisfait de lui et l&apos;agréer
               </p>
            </footer>
          </div>
        </div>
      </div>

      {/* Navigation Flottante Moderne */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/accueil')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Sommaire
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/2')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
        >
          Préface
        </button>
      </nav>
    </main>
  );
}