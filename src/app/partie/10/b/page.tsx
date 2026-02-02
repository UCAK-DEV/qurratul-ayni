'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function QuiDoitJeunerPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 10 pour l'audio (Le Ramadan)
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];

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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre X — Section B</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          QUI DOIT <br />
          <span className="gold-gradient-text">JEÛNER ?</span>
        </motion.h1>

        <p className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mb-10">من يجب عليه الصوم؟</p>

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
        
        {/* SECTION 1: CONDITIONS D'OBLIGATION */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Conditions et Facultés</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic text-lg font-serif">
            <p>
              Toute personne qui jouit de ses facultés mentales, qui est en bonne santé physique et que la charia oblige à jeûner, elle ne doit pas être en voyage pour une distance qui nécessite la réduction de la prière. S’il s’agit d’une femme, il faut en sus qu’elle soit pure de ses menstrues et des lochies.
            </p>
          </div>
        </section>

        {/* SECTION 2: CAS DES MALADES ET DISPENSES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Maladies et Précautions</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8 text-white/70 italic text-lg font-serif">
            <p>
              Si un malade craint l’aggravation de sa maladie ou le retard de sa guérison à cause du jeûne, il peut s’abstenir de jeûner. S’il risque d’en mourir, il doit rompre le jeûne. Après la guérison, il observera le jeûne pendant le nombre de jours omis. Si, par négligence, il tarde à payer le nombre de jours omis jusqu’au mois de ramadan suivant, il paiera après ce dernier mois et, en plus, pour chaque jour omis, il donnera la moitié d’un « andar » (environ 1 kg) de mil en guise de réparation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-italic font-sans">
              <div className="p-8 rounded-[2rem] bg-gold/5 border border-gold/20">
                <span className="text-gold font-black text-[10px] uppercase mb-4 block tracking-widest">Allaitement</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  Une femme qui allaite et qui craint de porter préjudice à son enfant en jeûnant doit rompre le jeûne mais devra payer après les jours omis.
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10">
                <span className="text-white/40 font-black text-[10px] uppercase mb-4 block tracking-widest">Vieillesse</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  Celui qui est vieux, qu’il ne peut plus supporter le jeûne, peut être dispensé tout en donnant, pour chaque jour à jeûner, la moitié d’un andar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: INTENTION ET ACTES PHYSIQUES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Intention et Physiologie</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-8 text-white/70 italic text-lg font-serif">
            <p>
              On peut formuler l’intention de jeûner une fois pour toute la première nuit du mois de ramadan ou la formuler chaque soir pour le jour suivant.
            </p>
            <p>
              Les vomissements et les pituites non provoqués qu’on peut faire sortir sans en rien avaler n’annulent pas le jeûne. S’ils parviennent à la gorge et redescendent après dans l’estomac, ils annulent le jeûne. Si c’est involontaire, on observe un jeûne compensatoire ; si c’est volontaire, on observera un jeûne compensatoire et un jeûne expiatoire. Quand l’eau destinée à rincer la bouche ou à être aspirée par le nez (pendant l’ablution) descend la gorge et qu’on l’avale, elle annule le jeûne. Les crachats ordinaires ou glaireux n’annulent pas le jeûne, mais il est préférable de les jeter si la quantité est importante.
            </p>
          </div>
        </section>

        {/* SECTION 4: COMPORTEMENT SOCIAL ET ÉTHIQUE */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Éthique et Mixité</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-red-950/10 p-8 md:p-12 rounded-[2.5rem] border border-red-500/20 text-white/70 italic text-lg font-serif leading-relaxed">
            <p>
              La présence d’un homme observant le jeûne dans une assemblée de femmes est blâmable. Il en est de même pour une femme dans une assemblée d’hommes. Il est aussi blâmable pour un homme qui observe le jeûne de penser aux femmes ou de tenir des propos obscènes. Il leur est interdit de s’amuser.
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/10/a')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent 
        </button>
        <button 
          onClick={() => router.push('/partie/10/c')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}