'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function AumoneMeritesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 18 (Spiritualité)
  const chapterData = CHAPTERS.find(c => c.id === "18") || CHAPTERS[17];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVIII — Section D</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          L'AUMÔNE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Et ses mérites</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">فضل الصدقة</p>

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
        
        {/* 1. L'ACTE D'AUMÔNE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">1. L'acte d'offrir</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6">
            <p className="text-white/80 italic font-serif text-xl leading-relaxed">
              "Si l’on pouvait donner en aumône quelque chose, si petit soit-il, ne serait-ce qu’un biscuit, ce serait une excellente chose. Cependant, il n’est pas recommandé de l’offrir à une personne de mauvaises mœurs, il n’est pas non plus recommandé d’aller l’offrir ailleurs alors que dans son propre entourage résident des nécessiteux."
            </p>
          </motion.div>
        </section>

        {/* 2. LES ÉQUIVALENTS DE L'AUMÔNE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">2. Équivalents de l'aumône</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="bg-white/[0.03] p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <p className="text-white/60 italic font-serif text-lg leading-relaxed mb-8">
              "Celui qui n’a rien à offrir en aumône peut se contenter de :"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "effectuer 2 rakas au milieu de la matinée",
                "dire « soubhana lahi » à chaque pas qui mène à la Mosquée",
                "balayer la mosquée, l’éclairer",
                "recommander le bien, interdire le mal",
                "et tout ce que l’on donne à ceux qui vous frappent ou disent du mal de vous, et ce pour éviter de faire salir la peau",
                "enlever de la route tout ce qui est de nature à faire du mal ou à salir",
                "guider un aveugle en lui prenant sa canne",
                "saluer un musulman tout en lui manifestant sa bonne humeur, l’aider en cas de besoin, prier pour lui, lui prêter ce dont il a besoin, lui rendre visite lorsqu’il tombe malade, porter un mort sur sa tête, accompagner un mort jusqu’à sa dernière demeure, présenter ses condoléances à la famille d’un mort."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 group-hover:scale-150 transition-transform" />
                  <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-gold font-black uppercase tracking-widest text-center text-sm">
                "Tous ces actes ont la même valeur que l’aumône."
              </p>
            </div>
          </motion.div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/18')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Sommaire XVIII
        </button>
        <button 
          onClick={() => router.push('/partie/19/b')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
            Suivant
        </button>
      </div>
    </main>
  );
}