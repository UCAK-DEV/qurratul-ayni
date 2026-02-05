'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function RetraiteLegalePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "13") || CHAPTERS[12];
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
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-red-950/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XIII — Section A</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LA RETRAITE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">légale (idda)</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">العدة</p>

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
          
          {/* 1. CAS DE VIDUITÉ */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">En cas de Viduité</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">عند الوفاة</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-italic">
              <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-gold/20 transition-all shadow-sm">
                <div>
                  <span className="text-gold font-black text-[10px] uppercase mb-6 block tracking-[0.2em] opacity-60">Femme Libre</span>
                  <p className="text-white/80 font-serif italic text-lg md:text-xl leading-relaxed">
                    &quot;S’il s’agit d’une femme libre qui a perdu son mari (viduité), la période de retraite légale dure quatre (4) mois et dix (10) jours.&quot;
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-gold/20 transition-all shadow-sm">
                <div>
                  <span className="text-white/40 font-black text-[10px] uppercase mb-6 block tracking-[0.2em]">Autre cas (Esclave)</span>
                  <p className="text-white/60 font-serif italic text-lg md:text-xl leading-relaxed">
                    &quot;Si elle n’est pas une femme libre (il s’agit alors d’une esclave), la période de retraite légale dure 2 mois et 5 jours, c’est-à-dire la moitié.&quot;
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. CAS DE DIVORCE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">En cas de Divorce</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">عند الطلاق</span>
            </div>
            
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">A</span>
              <p className="relative z-10">
                &quot;S’il s’agit d’une femme libre qu’on a divorcée, elle doit observer la retraite légale de la manière suivante : elle doit rester pendant 3 périodes de pureté (à commencer par celle à laquelle a lieu le divorce), consécutives à ses cycles menstruels. La retraite légale prendra fin à l’issue de la 3ᵉ période de pureté dès qu’elle entre dans la période menstruelle qui suit cette dernière.&quot;
              </p>
              
              <div className="p-10 rounded-[3rem] bg-gold/[0.03] border border-gold/10 text-white/80 text-center shadow-sm">
                &quot;S’il ne s’agit pas d’une femme libre, elle restera pendant 2 périodes de pureté.&quot;
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5 not-italic font-sans">
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-4">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest">Absence de cycles / Ménopause</span>
                  <p className="text-white/60 font-serif italic text-base leading-relaxed">
                    &quot;Pour une divorcée qui n’a pas encore atteint l’âge où commencent ses cycles menstruels, ou pour celle qui a atteint la ménopause, la période de retraite légale dure 3 mois.&quot;
                  </p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-4">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest">État de grossesse</span>
                  <p className="text-white/60 font-serif italic text-base leading-relaxed">
                    &quot;Pour une femme en état de grossesse, la période de retraite légale prend fin dès qu’elle accouche.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. CAS DU POLYGAME */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Cas spécifique du polygame</h2>
              <div className="h-[1px] flex-1 bg-red-950/20" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-red-950/[0.03] border border-red-900/20 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-center">
              <p className="max-w-4xl mx-auto">
                &quot;Un homme qui a quatre femmes et qui en répudie une, mais pas de manière irréversible, ne pourra épouser une autre femme que lorsque la période de retraite légale de la divorcée est épuisée.&quot;
              </p>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/13')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Sommaire XIII</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/13/b')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}