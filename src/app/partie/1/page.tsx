'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';
import Image from 'next/image';

export default function NotesAuteur() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 1 (Notes sur l'auteur)
  const chapterData = CHAPTERS.find(c => c.id === "1") || CHAPTERS[0];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const bioSections = [
    {
      fr: "Mieux connu sous le nom de Serigne Shouhaïbou MBACKÉ, il fut l'un des remarquables soufis et érudits de la Muridiyyah.",
      ar: "المعروف بلقب الشيخ شعيب مباكي، كان من أبرز الصوفيين والعلماء في الطريقة المريدية."
    },
    {
      fr: "Il fut très tôt attaché à son illustre père, Cheikh Ahmadou Bamba, qui lui inculqua les valeurs islamiques fondamentales et la rigueur spirituelle.",
      ar: "ارتبط منذ صغره بوالده الجليل الشيخ أحمدو بمبا، الذي غرس فيه القيم الإسلامية الأساسية والصرامة الروحية."
    },
    {
      fr: "Il apprit et mémorisa le Coran très jeune auprès de son oncle Cheikh Hamzatou Diakhaté, avant de poursuivre ses études de droit islamique et de théologie.",
      ar: "تعلم وحفظ القرآن الكريم في سن مبكرة على يد خاله الشيخ حمزة ديخاتي، قبل أن يواصل دراساته في الفقه والتوحيد."
    },
    {
      fr: "Sa vie durant, il s'est consacré à l'éducation coranique à Touba, laissant une œuvre immense dont Khouratoul Ayni est le joyau.",
      ar: "كرس حياته للتربية القرآنية في طوبى، تاركاً وراءه إرثاً أدبياً عظيماً يعد كتاب «قرة العين» جوهرته."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block"
        >
          {chapterData.titleAr}
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-bold gold-gradient-text mb-10"
        >
          {chapterData.titleFr}
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl space-y-12"
        >
          {/* Portrait et Présentation */}
          <div className="flex flex-col md:flex-row gap-12 items-center border-b border-white/5 pb-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <div className="absolute -inset-4 border border-gold/20 rounded-full animate-spin-slow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gold/40">
                <Image 
                  src="/author.jpg" 
                  alt="Serigne Shouhaïbou Mbacké" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
                Cheikh Abo Madyana <br />
                <span className="text-gold">Shouhaïbou Mbacké</span>
              </h2>
              <p className="text-gold/60 font-serif italic text-xl">
                1918 — 1991 (١٣٣٧ - ١٤١٢ هـ)
              </p>
              <div className="h-[1px] w-24 bg-gold/30 mx-auto md:mx-0" />
            </div>
          </div>

          {/* Corps du texte biographique bilingue */}
          <div className="space-y-12">
            {bioSections.map((section, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <p className="text-lg md:text-xl text-white/70 font-serif leading-relaxed italic border-l-2 border-gold/20 pl-6">
                    &quot;{section.fr}&quot;
                  </p>
                </div>
                <div className="order-1 lg:order-2 text-right" dir="rtl">
                  <p className="text-2xl md:text-4xl font-amiri text-gold-light leading-[1.8]">
                    {section.ar}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Citation Finale */}
          <div className="pt-8 border-t border-white/5">
            <p className="text-center font-amiri text-4xl text-gold-light leading-loose">
              رَضِيَ اللهُ عَنْهُ وَأَرْضَاهُ
            </p>
            <p className="text-center text-[10px] uppercase tracking-widest text-white/30 mt-4">
              Puisse Dieu être satisfait de lui et l'agréer
            </p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/accueil')} 
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Sommaire
        </button>
        <button 
          onClick={() => router.push('/partie/2')} 
          className="px-10 py-4 bg-gold text-emerald-950-dynamic rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Préface
        </button>
      </div>
    </main>
  );
}