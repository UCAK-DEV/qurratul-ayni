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
        {
          fr: "L’accouchement s’accompagne de sang. Ce saignement peut être simultané ou postérieur à l’accouchement, mais n’est jamais antérieur à celui-ci. Si le saignement est antérieur à l’accouchement, si petit soit-il, il s’agit des menstrues.",
          ar: "النفاس هو الدم الخارج مع الولادة أو بعدها، ولا يكون قبلها أبداً. فإذا خرج دم قبل الولادة، ولو كان قليلاً، فهو دم حيض لا نفاس."
        },
        {
          fr: "La durée maximale des lochies n’excède jamais soixante (60) jours. Si elle dépasse soixante jours, il ne s’agit plus de lochies, mais d’une maladie (istihada). La femme doit alors se purifier, s’acquitter de ses prières, jeûner et reprendre ses rapports sexuels.",
          ar: "أكثر مدة النفاس ستون يوماً. فإذا تجاوزت الستين، لم يعد نفاساً بل صار دم علة وفساد (استحاضة). ويجب على المرأة حينئذٍ الاغتسال والصلاة والصيام ويحل لزوجها جماعها."
        }
      ]
    },
    {
      titreFr: "CAS D'INTERRUPTION",
      titreAr: "حكم انقطاع دم النفاس",
      content: [
        {
          fr: "S’il y a interruption et reprise des lochies et que cette interruption reste inférieure à quinze (15) jours, elle décompte les jours de saignement jusqu’à concurrence de soixante (60) jours. Si la durée de cette reprise excède soixante jours, il s’agit alors d’une maladie.",
          ar: "إذا انقطع الدم ثم عاد في مدة أقل من خمسة عشر يوماً، فإنها تلفق (تجمع) أيام الدم حتى تمام الستين يوماً. وما زاد على الستين فهو استحاضة."
        },
        {
          fr: "S’il y a interruption et reprise des lochies et que la durée de cette interruption égale quinze (15) jours, il ne s’agit plus de lochies, ni d’une maladie, mais de menstrues.",
          ar: "أما إذا انقطع الدم وطهرت طهراً تاماً لمدة خمسة عشر يوماً فأكثر، ثم عاد الدم، فإنه يعتبر حيضاً جديداً وليس نفاساً ولا استحاضة."
        }
      ]
    },
    {
      titreFr: "OBLIGATIONS ET PRATIQUES",
      titreAr: "الأحكام والمستحبات",
      content: [
        {
          fr: "La femme en période de lochies et la femme en période de menstrues sont astreintes aux mêmes interdits, aux mêmes obligations et aux mêmes pratiques. Il est méritoire après purification d’introduire un coton parfumé dans le vagin à 3 reprises pour faire disparaître odeur et humidité (pratique méritoire, non obligatoire).",
          ar: "حكم النفساء كحكم الحائض في جميع الممنوعات والواجبات. ويُندب لها بعد الطهر استخدام قطنة مطيبة بالمسك أو الطيب في الفرج ثلاث مرات لإزالة الرائحة والرطوبة، وهذا مستحب وليس بواجب."
        },
        {
          fr: "Il est aussi méritoire pour une femme après accouchement d’observer quarante (40) jours après purification avant de reprendre ses rapports sexuels. Cela n’est pas une obligation, mais simplement méritoire.",
          ar: "كما يُستحب للمرأة بعد الولادة الانتظار أربعين يوماً بعد طهرها قبل استئناف الجماع، وهذا من باب الندب لا الوجوب."
        }
      ]
    },
    {
      titreFr: "RECOMMANDATIONS POUR LA GROSSESSE",
      titreAr: "وصايا للمرأة الحامل",
      content: [
        {
          fr: "Il est recommandé d’éviter un excès d’activités, de soulever des poids lourds, de toucher des choses trop élevées, et de consommer des aliments amers, aigres ou acides.",
          ar: "يُنصح للحامل بتجنب الإرهاق الشديد، وحمل الأثقال، ومد اليد لأشياء عالية جداً، وتجنب الأطعمة المرة والحامضة."
        },
        {
          fr: "Santé : Si la grossesse n’atteint pas 6 mois, elle ne doit pas se purger. À 6 mois, elle peut utiliser une décoction légère (laxatif). Pour la nivaquine : pas avant 4 mois. À partir de 4 mois, un comprimé par jour est possible jusqu'à l'accouchement.",
          ar: "الصحة: لا تستخدم المسهلات قبل الشهر السادس، وفي السادس يمكن استخدام ملين خفيف. وبالنسبة للدواء (مثل نيفاكين)، لا يؤخذ قبل الشهر الرابع، وبعده يمكن أخذ قرص واحد يومياً حتى الولادة."
        },
        {
          fr: "Rapports sexuels : Il est recommandé de les limiter, surtout aux 2e, 3e, 5e, 7e et 9e mois de grossesse, car ils peuvent être préjudiciables pendant ces périodes.",
          ar: "الجماع: يُستحب التقليل منه، خاصة في الأشهر الثاني والثالث والخامس والسابع والتاسع، لما قد يسببه من ضرر في هذه الفترات."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-16 md:pt-28 pb-48 px-4 md:px-6">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 relative">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block"
        >
          Chapitre V — Section F
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8"
        >
          LES LOCHIES <br/>
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">النفاس</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-8 py-4 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-widest text-[10px] backdrop-blur-md shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
        
        {sectionsLochies.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10">
            {/* Titre de Section Bilingue */}
            <div className="flex items-center gap-8 px-4">
              <h2 className="text-xl font-black text-gold uppercase tracking-tighter">{section.titreFr}</h2>
              <div className="h-[1px] flex-1 bg-gold/10" />
              <h2 className="text-2xl font-amiri text-gold-light">{section.titreAr}</h2>
            </div>

            <div className="grid gap-6">
              {section.content.map((item, cIdx) => (
                <motion.div 
                  key={cIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-gold/20 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Arabe */}
                    <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                      <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8]" dir="rtl">
                        {item.ar}
                      </p>
                    </div>
                    {/* Séparateur */}
                    <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
                    {/* Français */}
                    <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                      <p className="text-lg text-white/50 font-serif italic leading-relaxed">
                        "{item.fr}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[90%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/5/e')} 
          className="flex-1 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/6')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}