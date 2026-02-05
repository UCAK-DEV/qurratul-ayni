'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LochiesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sectionsLochies = [
    {
      titreFr: "DÉFINITION ET DURÉE",
      titreAr: "تعريف النفاس ومدته",
      content: [
        { fr: "L’accouchement s’accompagne de sang. Ce saignement peut être simultané ou postérieur à l’accouchement, mais n’est jamais antérieur à celui-ci. Si le saignement est antérieur à l’accouchement, si petit soit-il, il s’agit des menstrues." },
        { fr: "La durée maximale des lochies n’excède jamais soixante (60) jours. Si elle dépasse soixante jours, il ne s’agit plus de lochies, mais d’une maladie (istihada). La femme doit alors se purifier, s’acquitter de ses prières, jeûner et reprendre ses rapports sexuels." }
      ]
    },
    {
      titreFr: "CAS D'INTERRUPTION",
      titreAr: "حكم انقطاع دم النفاس",
      content: [
        { fr: "S’il y a interruption et reprise des lochies et que cette interruption reste inférieure à quinze (15) jours, elle décompte les jours de saignement jusqu’à concurrence de soixante (60) jours. Si la durée de cette reprise excède soixante jours, il s’agit alors d’une maladie." },
        { fr: "S’il y a interruption et reprise des lochies et que la durée de cette interruption égale quinze (15) jours, il ne s’agit plus de lochies, ni d’une maladie, mais de menstrues." }
      ]
    },
    {
      titreFr: "OBLIGATIONS ET PRATIQUES",
      titreAr: "الأحكام والمستحبات",
      content: [
        { fr: "La femme en période de lochies et la femme en période de menstrues sont astreintes aux mêmes interdits, aux mêmes obligations et aux mêmes pratiques. Il est méritoire après purification d’introduire un coton parfumé dans le vagin à 3 reprises pour faire disparaître odeur et humidité (pratique méritoire, non obligatoire)." },
        { fr: "Il est aussi méritoire pour une femme après accouchement d’observer quarante (40) jours après purification avant de reprendre ses rapports sexuels. Cela n’est pas une obligation, mais simplement méritoire." }
      ]
    },
    {
      titreFr: "RECOMMANDATIONS POUR LA GROSSESSE",
      titreAr: "وصايا للمرأة الحامل",
      content: [
        { fr: "Il est recommandé d’éviter un excès d’activités, de soulever des poids lourds, de toucher des choses trop élevées, et de consommer des aliments amers, aigres ou acides." },
        { fr: "Santé : Si la grossesse n’atteint pas 6 mois, elle ne doit pas se purger. À 6 mois, elle peut utiliser une décoction légère (laxatif). Pour la nivaquine : pas avant 4 mois. À partir de 4 mois, un comprimé par jour est possible jusqu'à l'accouchement." },
        { fr: "Rapports sexuels : Il est recommandé de les limiter, surtout aux 2e, 3e, 5e, 7e et 9e mois de grossesse, car ils peuvent être préjudiciables pendant ces périodes." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre V — Section F</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LES <span className="gold-gradient-text italic font-serif lowercase">lochies</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">النفاس</p>

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
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        {/* CONTENT SECTIONS */}
        <div className="space-y-32">
          {sectionsLochies.map((section, sIdx) => (
            <section key={sIdx} className="space-y-12">
              <div className="flex items-center gap-6">
                <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">{section.titreFr}</h2>
                <div className="h-[1px] flex-1 bg-white/5" />
                <span className="text-xl font-amiri text-gold/40">{section.titreAr}</span>
              </div>

              <div className="grid gap-6">
                {section.content.map((item, cIdx) => (
                  <motion.div 
                    key={cIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all font-serif italic text-lg md:text-xl text-white/70 leading-relaxed shadow-sm"
                  >
                    &quot;{item.fr}&quot;
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/5/e')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre VI</button>
      </nav>
    </main>
  );
}