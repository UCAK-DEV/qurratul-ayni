'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PratiquesObligatoires15() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "11") || CHAPTERS[10];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const farata15 = [
    { n: "01", fr: "L’intention de s’acquitter des pratiques obligatoires de la présente prière.", ar: "النِّيَّةُ", tr: "An-Niyya" },
    { n: "02", fr: "Le premier kabar (allahou akbar).", ar: "تَكْبِيرَةُ الإِحْرَامِ", tr: "Takbiratoul Ihrâm" },
    { n: "03", fr: "La station debout dans laquelle on fait ce « kabar ».", ar: "الْقِيَامُ لَهَا", tr: "Al-Qiyam" },
    { n: "04", fr: "La récitation de la « fatiha ».", ar: "قِرَاءَةُ الْفَاتِحَةِ", tr: "Qirā'at al-Fātiḥah" },
    { n: "05", fr: "La station debout pendant laquelle on récite cette « fatiha ».", ar: "الْقِيَامُ لَهَا", tr: "Al-Qiyam" },
    { n: "06", fr: "Les génuflexions.", ar: "الرُّكُوعُ", tr: "Ar-Rukū‘" },
    { n: "07", fr: "Le retour à la station debout (après les génuflexions).", ar: "الرَّفْعُ مِنْهُ", tr: "Ar-Raf‘u minhu" },
    { n: "08", fr: "Les prosternations.", ar: "السُّجُودُ", tr: "As-Sujūd" },
    { n: "09", fr: "Le retour à la position assise.", ar: "الرَّفْعُ مِنْهُ", tr: "Al-Jalsa" },
    { n: "10", fr: "L’intention d’imiter l’Imam pour le guidé.", ar: "نِيَّةُ الِاقْتِدَاءِ", tr: "Niyyat al-Iqtidā" },
    { n: "11", fr: "Le respect de l’ordre de succession des différentes parties de la prière.", ar: "تَرْتِيبُ الْفَرَائِضِ", tr: "Tartīb al-Farā'iḍ" },
    { n: "12", fr: "Les pauses absolues à observer à tout moment.", ar: "الطُّمَأْنِينَةُ", tr: "At-Ṭuma'nīnah" },
    { n: "13", fr: "L’observation d’une position droite, debout ou assise.", ar: "الاعْتِدَالُ", tr: "Al-I'tidāl" },
    { n: "14", fr: "Le salut final.", ar: "السَّلَامُ", tr: "As-Salām" },
    { n: "15", fr: "La position assise au moment du salut final.", ar: "الْجُلُوسُ لَهُ", tr: "Al-Joulous" }
  ];

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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section D</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LES PRATIQUES <br /> <span className="gold-gradient-text italic font-serif lowercase">obligatoires</span>
            </h1>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black mb-10">Elles sont au nombre de quinze (15)</p>

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

        {/* CONTENT GRID */}
        <section className="space-y-6">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">AL-FARĀ'IḌ</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
            <span className="text-xl font-amiri text-gold/40">فرائض الصلاة</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {farata15.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="group relative"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-gold/[0.02] transition-all duration-500">
                  
                  {/* Numéro et Texte Français */}
                  <div className="flex gap-8 items-start md:items-center flex-1">
                    <span className="text-gold/20 font-black text-4xl group-hover:text-gold transition-colors leading-none">
                      {item.n}
                    </span>
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed font-serif italic group-hover:text-white transition-colors">
                      {item.fr}
                    </p>
                  </div>

                  {/* Arabe et Transcription */}
                  <div className="mt-6 md:mt-0 text-left md:text-right border-t md:border-t-0 border-white/5 pt-6 md:pt-0 min-w-[200px]">
                    <p className="font-amiri text-gold-light text-2xl md:text-4xl mb-2 dir-rtl group-hover:scale-110 transition-transform origin-right">
                      {item.ar}
                    </p>
                    <p className="text-white/30 text-[9px] uppercase tracking-widest font-black">
                      {item.tr}
                    </p>
                  </div>

                  {/* Accent visuel sur le côté */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-8 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-r-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/c')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/e')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}