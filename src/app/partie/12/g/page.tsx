'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SevragePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XII — Section G</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">sevrage</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الفطام</p>

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
          
          {/* 1. CALCUL DES PÉRIODES D'ALLAITEMENT */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Périodes et Durées</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-gold/20 transition-all shadow-sm">
                <div>
                  <span className="text-gold font-black text-[10px] uppercase mb-6 block tracking-[0.2em] opacity-60 text-center">Grossesse de 7 mois</span>
                  <p className="text-white/80 font-serif italic text-lg md:text-xl leading-relaxed text-center">
                    &quot;S’il s’agit d’un enfant né après seulement 7 mois de grossesse, le sevrage pourra survenir après 23 mois d’allaitement.&quot;
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Total Coranique : 30 mois</span>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-gold/20 transition-all shadow-sm">
                <div>
                  <span className="text-gold font-black text-[10px] uppercase mb-6 block tracking-[0.2em] opacity-60 text-center">Grossesse de 9 mois</span>
                  <p className="text-white/80 font-serif italic text-lg md:text-xl leading-relaxed text-center">
                    &quot;Si l’enfant est né après 9 mois de grossesse, il pourra être sevré après 21 mois d’allaitement.&quot;
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Total Coranique : 30 mois</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. CAS DE FORCE MAJEURE ET FLEXIBILITÉ */}
          <motion.section {...fadeInUp} className="space-y-12">
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
              <div className="p-10 rounded-[3rem] bg-red-950/[0.03] border border-red-900/20 shadow-sm border-l-4 border-l-red-500">
                <span className="text-red-400 font-black text-[10px] uppercase tracking-widest block mb-6 font-sans not-italic">Règle Impérative</span>
                &quot;Cependant, le sevrage s’impose dès l’apparition d’une nouvelle grossesse, quel que soit l’âge de l’enfant.&quot;
              </div>
              <p className="text-center max-w-4xl mx-auto border-t border-white/5 pt-12">
                &quot;D’une manière générale, si on trouve les moyens de nourrir l’enfant autrement que par l’allaitement, le sevrage peut se faire le plus tôt possible.&quot;
              </p>
            </div>
          </motion.section>

          {/* 3. RITES DU SEVRAGE */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Rites & Protections</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 not-italic">
              <motion.div {...fadeInUp} className="p-12 rounded-[3.5rem] bg-emerald-950/[0.03] border border-emerald-500/10 space-y-8 flex flex-col group hover:bg-emerald-950/10 transition-all shadow-sm">
                <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest border-b border-emerald-500/10 pb-4 mb-4">L'écrit rituel</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed flex-1">
                  &quot;Dans le sevrage proprement dit, il est recommandé d’écrire ce qui suit sur du pain qu’on lui donnera à manger (Voir annexe n° XVI).&quot;
                </p>
                <div className="flex justify-end">
                   <span className="material-symbols-rounded text-emerald-400/20 text-5xl">bakery_dining</span>
                </div>
              </motion.div>
              
              <motion.div {...fadeInUp} className="p-12 rounded-[3.5rem] bg-emerald-950/[0.03] border border-emerald-500/10 space-y-8 flex flex-col group hover:bg-emerald-950/10 transition-all shadow-sm">
                <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest border-b border-emerald-500/10 pb-4 mb-4">La Protection (Gris-gris)</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed flex-1">
                  &quot;Ensuite, lui faire porter comme gris-gris la sourate « Bourôdji ».&quot;
                </p>
                <div className="text-right">
                  <p className="font-amiri text-3xl text-white opacity-80" dir="rtl">سُورَةُ الْبُرُوجِ</p>
                </div>
              </motion.div>
            </div>
          </section>

        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/12/f')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/12/h')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}