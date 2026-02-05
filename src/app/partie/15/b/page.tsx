'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function TabaskiPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "15") || CHAPTERS[14];
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
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XV — Section B</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LE SACRIFICE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">de tabaski</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">عيد الأضحى</p>

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
          
          {/* 1. IMPORTANCE DU RITE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Importance du Rite</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">B</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed space-y-12 text-justify">
                <p className="border-l-2 border-gold/30 pl-8">
                  &quot;Égorg­er un animal à cette occasion est une pratique traditionnelle très recommandée à tout musulman libre qui en a les moyens, sans conteste. Cela concerne aussi bien les jeunes que les vieux.&quot;
                </p>
                
                <div className="p-10 rounded-[3rem] bg-red-950/[0.05] border border-red-900/20 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-rounded text-red-500">priority_high</span>
                    <span className="text-red-400 font-black text-[10px] uppercase tracking-widest font-sans not-italic">Règle de l'Imam</span>
                  </div>
                  <p className="text-white/70">
                    &quot;On n’a pas le droit d’égorger un mouton avant que l’Imam n’ait égorgé le sien. Ce dernier ne peut égorger le sien qu’après avoir effectué la prière du « Hiit » (de Tabaski bien sûr). Si l’on égorge son mouton sans tenir compte de ces prescriptions, on ne bénéficiera pas des bienfaits attachés au sacrifice de la Tabaski ; on n’aura que de la viande.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. PÉRIODE ET MODALITÉS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Période et Modalités</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-italic">
              <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 flex flex-col group hover:border-emerald-500/30 transition-all shadow-sm">
                <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Temps imparti</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed flex-1 text-justify">
                  &quot;Le temps imparti à cette opération s’étend de la fin du sacrifice effectué par l’Imam jusqu’au coucher du soleil du troisième jour. Cependant, l’opération ne se fait pas la nuit.&quot;
                </p>
              </motion.div>
              
              <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 flex flex-col group hover:border-emerald-500/30 transition-all shadow-sm">
                <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Responsabilité</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed flex-1 text-justify">
                  &quot;Il est préférable que chacun égorge son mouton. Si l’on a un empêchement, on en confie le soin à un musulman. Celui qui égorge le mouton d’autrui sans y être autorisé ne bénéficiera pas des avantages et devra lui trouver un mouton en remplacement.&quot;
                </p>
              </motion.div>
            </div>
          </section>

          {/* 3. RESTRICTIONS ET ÉTHIQUE */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'Animal et les Restrictions</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <span className="material-symbols-rounded text-gold text-5xl opacity-40">verified</span>
                <p className="flex-1">
                  &quot;Il est recommandé que la bête destinée au sacrifice soit sans défaut ; elle doit être semblable à celle recommandée pour le baptême.&quot;
                </p>
              </div>

              <div className="p-10 rounded-[3.5rem] bg-gold/[0.03] border border-gold/10 space-y-8 shadow-sm">
                 <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] block text-center not-italic">Interdiction formelle de vente</span>
                 <p className="text-center text-white/80">
                  &quot;Aucune partie prélevée sur un mouton de Tabaski ne doit être vendue, pas même la peau de l’animal. La personne éventuellement appelée pour dépecer le mouton ne doit pas être payée avec la viande dudit mouton.&quot;
                 </p>
                 <div className="pt-8 border-t border-gold/10 text-center">
                    <p className="text-white/40 text-base">
                      &quot;On peut toutefois lui donner une partie de la viande destinée aux offrandes. S’il doit être payé, que cela se fasse en argent.&quot;
                    </p>
                 </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/15/a')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/16')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre XVI</button>
      </nav>
    </main>
  );
}