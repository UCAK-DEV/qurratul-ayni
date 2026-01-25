'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PrefacePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "2") || CHAPTERS[1];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sections = [
    {
      titleAr: "الـمـقـدمـة",
      titleFr: "PRÉFACE",
      content: [
        {
          ar: "الحمد لله الذي جعل العلم نورا يهتدى به، والصلاة والسلام على من بعث رحمة للعالمين.",
          fr: "Louange à Allah qui a fait du savoir une lumière pour nous guider, et que la paix et le salut soient sur celui qui a été envoyé comme une miséricorde pour l'univers."
        },
        {
          ar: "هذا الكتاب 'قرة العين' هو دليل عملي يهدف إلى تبسيط ممارسة الإسلام لكل مسلم ومسلمة.",
          fr: "Cet ouvrage 'Khouratoul Ayni' est un guide pratique visant à simplifier la pratique de l'Islam pour chaque musulman et musulmane."
        }
      ]
    },
    {
      titleAr: "تـمـهـيـد",
      titleFr: "AVANT-PROPOS",
      content: [
        {
          ar: "إن الغرض من هذا الكتاب هو الجمع بين الجانب الروحي والعملي، ليكون رفيقاً للمؤمن في حياته اليومية.",
          fr: "Le but de ce livre est de concilier les aspects spirituels et pratiques, afin d'être un compagnon pour le croyant dans sa vie de tous les jours."
        },
        {
          ar: "تمت ترجمة هذا العمل من 'الولوفال' لتسهيل وصوله إلى الناطقين باللغة الفرنسية مع الحفاظ على روح الأصل.",
          fr: "Ce travail a été traduit du 'Wolofal' pour faciliter son accès aux francophones tout en préservant l'âme de l'œuvre originale."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Lumière sur les pratiques
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-bold gold-gradient-text mb-10"
        >
          PRÉFACE & AVANT-PROPOS
        </motion.h1>

        {/* Player Audio Intégré */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-white/5 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] backdrop-blur-xl shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Pause' : 'Écouter l\'introduction'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-12">
            <div className="flex items-center gap-8 justify-center opacity-40">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold" />
              <h2 className="text-xl md:text-2xl font-amiri text-gold-light tracking-widest uppercase">{section.titleAr} — {section.titleFr}</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold" />
            </div>

            <div className="grid gap-8">
              {section.content.map((item, cIdx) => (
                <motion.div 
                  key={cIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/5 hover:border-gold/20 transition-all duration-1000 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-right">
                      <p className="text-2xl md:text-4xl font-amiri text-gold-light leading-[1.8] dir-rtl">
                        {item.ar}
                      </p>
                    </div>
                    <div className="hidden lg:block w-[1px] h-32 bg-gold/10" />
                    <div className="text-left lg:pl-12 border-l-2 lg:border-l border-gold/20 lg:border-white/5 pl-8 lg:pl-16">
                      <p className="text-lg md:text-xl text-white/50 font-serif leading-relaxed italic">
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

      {/* Navigation de bas de page */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/partie/1')} // Vers le chapitre précédent
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/3')} // Vers le chapitre suivant
          className="px-10 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}