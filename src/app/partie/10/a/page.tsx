'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function DefinitionJeunePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 10 pour l'audio (Le Ramadan)
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre X — Section A</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          QU’EST-CE QUE <br />
          <span className="gold-gradient-text">LE JEÛNE ?</span>
        </motion.h1>

        <p className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mb-10">ما هو الصوم؟</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* SECTION 1: L'ESSENCE DU JEÛNE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">Définition et Intention</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic text-lg text-justify font-serif">
            <p>
              Il faut formuler intérieurement l’intention d’observer le jeûne en tant qu’obligation divine pendant tout le mois pour la face de Dieu en s’abstenant de manger, de boire, d’avoir des rapports sexuels de l’aube (avant fadjr) jusqu’au coucher du soleil.
            </p>
          </div>
        </section>

        {/* SECTION 2: OMISSIONS ET RÉPARATIONS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">Règles en cas de rupture</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8 text-white/70 italic text-lg leading-relaxed text-justify font-serif">
            <p>
              Celui qui commet un seul de ces actes ci-dessus par oubli doit continuer à observer le jeûne et payer ce jour après ; s’il le fait volontairement, il devra continuer à observer le jeûne, payer le jour et le réparer en « kafaar ». Il y a trois sortes de réparation de « kafâra » :
            </p>
            
            {/* Les 3 types de Kafâra */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans not-italic">
              <div className="p-8 rounded-[2rem] bg-gold/5 border border-gold/20 flex flex-col justify-between group hover:bg-gold/10 transition-all">
                <span className="text-gold font-black text-xs uppercase mb-4">Option 1</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  Choisir soixante (60) pauvres (miskine) et donner à chacun d’eux la moitié (1/2) d’un « andar » (environ 1 kg) de mil.
                </p>
              </div>
              
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:bg-white/[0.06] transition-all">
                <span className="text-white/40 font-black text-xs uppercase mb-4">Option 2</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  Observer le jeûne pendant deux (2) mois successifs sans en sauter un seul jour, faute de quoi, on recommence.
                </p>
              </div>

              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:bg-white/[0.06] transition-all">
                <span className="text-white/40 font-black text-xs uppercase mb-4">Option 3</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  Affranchir un esclave qui nous appartient en propre et uniquement à nous, lequel est musulman et est bien portant.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gold/5 rounded-2xl border-l-4 border-gold text-center text-sm font-bold text-white/90">
              Chacun des trois (3) « kafâra » est le prix d’un jour omis.
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/10')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Sommaire X
        </button>
        <button 
          onClick={() => router.push('/partie/10/b')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}