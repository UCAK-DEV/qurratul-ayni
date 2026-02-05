'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function QuiDoitJeunerPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre X — Section B</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              QUI DOIT <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">jeûner ?</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">من يجب عليه الصوم؟</p>

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
          
          {/* 1. CONDITIONS D'OBLIGATION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Conditions et Facultés</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">B</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-xl md:text-2xl text-white/80 leading-relaxed border-l-2 border-gold/30 pl-8">
                Toute personne qui jouit de ses facultés mentales, qui est en bonne santé physique et que la charia oblige à jeûner, elle ne doit pas être en voyage pour une distance qui nécessite la réduction de la prière. S’il s’agit d’une femme, il faut en sus qu’elle soit pure de ses menstrues et des lochies.
              </div>
            </div>
          </section>

          {/* 2. MALADIES ET DISPENSES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Maladies et Précautions</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <p>
                Si un malade craint l’aggravation de sa maladie ou le retard de sa guérison à cause du jeûne, il peut s’abstenir de jeûner. S’il risque d’en mourir, il doit rompre le jeûne. Après la guérison, il observera le jeûne pendant le nombre de jours omis. Si, par négligence, il tarde à payer le nombre de jours omis jusqu’au mois de ramadan suivant, il paiera après ce dernier mois et, en plus, pour chaque jour omis, il donnera la moitié d’un « andar » (environ 1 kg) de mil en guise de réparation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 not-italic font-sans">
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-4">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest">Allaitement</span>
                  <p className="text-white/60 text-base italic font-serif">Une femme qui allaite et qui craint de porter préjudice à son enfant en jeûnant doit rompre le jeûne mais devra payer après les jours omis.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-4">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest">Vieillesse</span>
                  <p className="text-white/60 text-base italic font-serif">Celui qui est vieux, qu’il ne peut plus supporter le jeûne, peut être dispensé tout en donnant, pour chaque jour à jeûner, la moitié d’un andar.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. INTENTION ET ACTES PHYSIQUES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Intention et Physiologie</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
              <p>On peut formuler l’intention de jeûner une fois pour toute la première nuit du mois de ramadan ou la formuler chaque soir pour le jour suivant.</p>
              <div className="h-px bg-white/5 w-24 mx-auto" />
              <p>Les vomissements et les pituites non provoqués qu’on peut faire sortir sans en rien avaler n’annulent pas le jeûne. S’ils parviennent à la gorge et redescendent après dans l’estomac, ils annulent le jeûne. Si c’est involontaire, on observe un jeûne compensatoire ; si c’est volontaire, on observera un jeûne compensatoire et un jeûne expiatoire. Quand l’eau destinée à rincer la bouche ou à être aspirée par le nez (pendant l’ablution) descend la gorge et qu’on l’avale, elle annule le jeûne. Les crachats ordinaires ou glaireux n’annulent pas le jeûne, mais il est préférable de les jeter si la quantité est importante.</p>
            </div>
          </section>

          {/* 4. COMPORTEMENT SOCIAL */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Éthique et Mixité</h2>
              <div className="h-[1px] flex-1 bg-red-950/20" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-red-950/[0.03] border border-red-900/20 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-center">
              <p className="max-w-4xl mx-auto">
                La présence d’un homme observant le jeûne dans une assemblée de femmes est blâmable. Il en est de même pour une femme dans une assemblée d’hommes. Il est aussi blâmable pour un homme qui observe le jeûne de penser aux femmes ou de tenir des propos obscènes. Il leur est interdit de s’amuser.
              </p>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/10/a')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/10/c')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}