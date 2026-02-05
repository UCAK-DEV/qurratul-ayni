'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ActesBlamablesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const actesBlamables = [
    "Introduire dans la bouche quelque chose qui a une saveur, même s’il s’agit d’une chose du genre de la gomme arabique.",
    "S’amuser du goût d’un mets en préparation en y passant la langue ou de celui de la boisson destinée à la rupture du jeûne.",
    "Dormir pendant de longues heures durant la journée du ramadan.",
    "Utiliser du parfum ou le flairer.",
    "Utiliser de l’encens.",
    "Se mettre du collyre dans les yeux ou du khôl sur les paupières.",
    "Se curer les dents au moyen d’un morceau de bâton frais."
  ];

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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre X — Section C</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              ACTES <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">blâmables</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">المكروهات في الصوم</p>

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

        <div className="space-y-16">
          
          {/* SECTION DÉTAILLÉE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Précautions pour le jeûneur</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">C</span>
              
              <div className="relative z-10 space-y-10">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black text-center mb-16">
                  Liste des comportements déconseillés
                </p>

                <div className="grid gap-4 max-w-4xl mx-auto">
                  {actesBlamables.map((acte, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex gap-8 items-center group hover:border-gold/20 transition-all font-serif italic text-lg text-white/70 leading-relaxed shadow-sm"
                    >
                      <span className="text-gold font-black opacity-20 text-3xl group-hover:opacity-60 transition-opacity">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <p className="group-hover:text-white transition-colors">{acte}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/10/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/10/d')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}