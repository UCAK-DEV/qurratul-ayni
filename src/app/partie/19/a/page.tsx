'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function AumoneMeritesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "19") || CHAPTERS[18];
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
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XIX — Section A</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              L'AUMÔNE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">et ses mérites</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">فضل الصدقة</p>

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
              <span className="text-sm font-bold tracking-tight relative z-10 italic font-serif text-white/80">
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        <div className="space-y-32">
          
          {/* 1. L'ACTE D'OFFRIR */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'acte d'offrir</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <motion.div {...fadeInUp} className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group shadow-2xl">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">A</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-justify">
                &quot;Si l’on pouvait donner en aumône quelque chose, si petit soit-il, ne serait-ce qu’un biscuit, ce serait une excellente chose. Cependant, il n’est pas recommandé de l’offrir à une personne de mauvaises mœurs, il n’est pas non plus recommandé d’aller l’offrir ailleurs alors que dans son propre entourage résident des nécessiteux.&quot;
              </div>
            </motion.div>
          </section>

          {/* 2. LES ÉQUIVALENTS DE L'AUMÔNE */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Équivalents de l'aumône</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>
            
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed text-justify">
              <p className="text-center font-sans not-italic text-emerald-400 font-bold uppercase tracking-widest text-[10px] mb-8">
                &quot;Celui qui n’a rien à offrir en aumône peut se contenter de :&quot;
              </p>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "effectuer 2 rakas au milieu de la matinée",
                  "dire « soubhana lahi » à chaque pas qui mène à la Mosquée",
                  "balayer la mosquée, l’éclairer",
                  "recommander le bien, interdire le mal",
                  "et tout ce que l’on donne à ceux qui vous frappent ou disent du mal de vous, et ce pour éviter de faire salir la peau",
                  "enlever de la route tout ce qui est de nature à faire du mal ou à salir",
                  "guider un aveugle en lui prenant sa canne",
                  "saluer un musulman tout en lui manifestant sa bonne humeur, l’aider en cas de besoin, prier pour lui, lui prêter ce dont il a besoin, lui rendre visite lorsqu’il tombe malade, porter un mort sur sa tête, accompagner un mort jusqu’à sa dernière demeure, présenter ses condoléances à la famille d’un mort."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 border-b border-white/[0.03] pb-3 group/item">
                    <span className="text-gold/40 group-hover/item:text-gold transition-colors font-serif">•</span>
                    <span className="text-base md:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-10 rounded-[3rem] bg-emerald-950/10 border border-emerald-500/20 text-center shadow-sm mt-12">
                 <p className="text-emerald-100/80 font-bold not-italic font-sans text-xs uppercase tracking-[0.4em]">
                   &quot;Tous ces actes ont la même valeur que l’aumône.&quot;
                 </p>
              </div>
            </motion.div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/19')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Sommaire XVIII</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/19/b')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}