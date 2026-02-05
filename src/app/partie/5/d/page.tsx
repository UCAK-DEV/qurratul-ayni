'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SouilluresPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sectionsSouillures = [
    {
      titreFr: "OBLIGATION DE NETTOYAGE",
      titreAr: "وجوب التطهير",
      content: [
        { fr: "Obligation est faite à tout croyant d’enlever les souillures laissées sur son corps, sur ses habits, sur les lieux de prière dès qu’il s’en aperçoit. S’il a des doutes, il doit laver la partie présumée souillée. S’il constate des tâches sur ses habits ou sur son corps et dont il ignore la nature, il n’est pas tenu de les enlever." },
        { fr: "Pour enlever les souillures liquides constatées sur le sol, on doit y verser une quantité d’eau importante. S’il s’agit de souillures non liquides, il fait les faire disparaître." }
      ]
    },
    {
      titreFr: "LE CAS DU CHIEN",
      titreAr: "حكم ولوغ الكلب",
      content: [
        { fr: "Lorsqu’un chien boit dans un récipient contenant une quantité d’eau égale ou inférieure à deux litres, cette eau devient impropre à la purification et il est méritoire de la verser, on pourrait tout au plus l’utiliser mais uniquement à des fins profanes. Cependant, il vaut mieux la verser. Il est aussi méritoire de laver le récipient sept (7) fois sans employer du sable avant un nouvel usage." },
        { fr: "Si le chien trempe la langue sans la remuer ou s’il salive dans le récipient ou s’il se contente seulement de le lécher, dans ce cas, l’eau comme le récipient est utilisable. Il en est de même s’il s’agit de récipient contenant un aliment liquide comme le lait caillé, il en est aussi de même si la quantité d’eau excède deux litres." }
      ]
    },
    {
      titreFr: "EAUX COURANTES ET SOURCES",
      titreAr: "المياه الجارية والمصادر",
      content: [
        { fr: "S’il s’agit d’une eau courante comme celle des marigots, des lacs, des citernes ou des bassins, si un animal tombe dans cette eau et y meurt sans l’altérer, il est recommandé d’enlever la partie de l’eau susceptible de contenir quelque chose qui provient de l’animal. Tout cela dépend de la taille de l’animal et de la quantité de l’eau." },
        { fr: "S’il s’agit d’une eau courante ou d’une eau provenant d’une source, si elle n’est pas altérée, on ne doit pas non plus procéder à son dragage. Mais si l’eau est altérée on est obligé de procéder à ces opérations (prélèvement de la partie souillée, dragage) sauf si la chute de l’animal dans l’eau n’a pas entraîné sa mort. Il en est de même si la mort de l’animal est antérieure à la chute et que l’eau n’est pas altérée." }
      ]
    },
    {
      titreFr: "ALIMENTS ET BLESSURES",
      titreAr: "الأطعمة والجروح",
      content: [
        { fr: "Tout aliment susceptible d’altération, quelle que soit l’importance de la quantité (lait caillé, bouillie, huile, etc.…) et quelque négligeable que soit la souillure doit être jeté. Si l’aliment n’est pas altéré et que la souillure n’y a pas duré au point de le pénétrer, on peut se contenter d’enlever la souillure et tout ce qui l’entoure. Si la durée est suffisamment longue au point de de voir altérer l’aliment, il faut alors le jeter." },
        { fr: "Celui qui a une égratignure, une blessure, un abcès, une plaie, doit au moment des ablutions, faire passer la main dessus s’il craint d’aggraver la plaie ou de se faire mal e laver les autres parties. S’il ne peut pas supporter le massage, il effleure la rugosité, si cela n’est pas possible, il ne peut l’effleurer par-dessus une bande d’étoffe ou encore doubler la bande autant de fois qu’il le jugera nécessaire, s’il n’en est pas du tout capable, alors, il peut sauter la partie douloureuse et se contenter de se laver ou de faire ses ablutions." }
      ]
    },
    {
      titreFr: "CAS DE CONJONCTIVITE",
      titreAr: "حالة الرمد",
      content: [
        { fr: "En cas de conjonctivite grave, on doit faire passer la main sur les yeux ou sur le front, si cela n’est pas possible, on peut passer la main sur une bande d’étoffe posée sur les yeux, doubler la bande au besoin, si malgré tout on ne supporte pas le massage, on peut alors contenter de laver les autres parties du corps. Si la bande se déplaçait ou arrivait à tomber, qu’on lui remette le plus rapidement possible et que on reprenne l’opération, faute de quoi, l’ablution devient nulle." }
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre V — Section D</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LES <span className="gold-gradient-text italic font-serif lowercase">souillures</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">النجاسات</p>

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

        {/* SECTIONS CONTENT */}
        <div className="space-y-32">
          {sectionsSouillures.map((section, sIdx) => (
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
                    className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all font-serif italic text-lg md:text-xl text-white/70 leading-relaxed"
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
        <button onClick={() => router.push('/partie/5/c')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/5/e')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}