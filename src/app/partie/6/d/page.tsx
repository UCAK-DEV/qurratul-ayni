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

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const farata15 = [
    { n: "01", fr: "L’intention de s’acquitter des pratiques obligatoires de la présente prière.", ar: "النية", tr: "An-Niyya" },
    { n: "02", fr: "Le premier kabar (allahou akbar).", ar: "تكبيرة الإحرام", tr: "Takbiratoul Ihrâm" },
    { n: "03", fr: "La station debout dans laquelle on fait ce « kabar ».", ar: "القيام لها", tr: "Al-Qiyam" },
    { n: "04", fr: "La récitation de la « fatiha ».", ar: "قراءة الفاتحة", tr: "Qirā'at al-Fātiḥah" },
    { n: "05", fr: "La station debout pendant laquelle on récite cette « fatiha ».", ar: "القيام لها", tr: "Al-Qiyam" },
    { n: "06", fr: "Les génuflexions.", ar: "الركوع", tr: "Ar-Rukū‘" },
    { n: "07", fr: "Le retour à la station debout (après les génuflexions).", ar: "الرفع منه", tr: "Ar-Raf‘u minhu" },
    { n: "08", fr: "Les prosternations.", ar: "السجود", tr: "As-Sujūd" },
    { n: "09", fr: "Le retour à la position assise.", ar: "الرفع منه", tr: "Al-Jalsa" },
    { n: "10", fr: "L’intention d’imiter l’Imam pour le guidé.", ar: "نية الاقتداء", tr: "Niyyat al-Iqtidā" },
    { n: "11", fr: "Le respect de l’ordre de succession des différentes parties de la prière.", ar: "ترتيب الفرائض", tr: "Tartīb al-Farā'iḍ" },
    { n: "12", fr: "Les pauses absolues à observer à tout moment.", ar: "الطمأنينة", tr: "At-Ṭuma'nīnah" },
    { n: "13", fr: "L’observation d’une position droite, debout ou assise.", ar: "الاعتدال", tr: "Al-I'tidāl" },
    { n: "14", fr: "Le salut final.", ar: "السلام", tr: "As-Salām" },
    { n: "15", fr: "La position assise au moment du salut final.", ar: "الجلوس له", tr: "Al-Joulous" }
  ];

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[50%] bg-gold/10 blur-[150px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre VI — Section D
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LES PRATIQUES <br /> OBLIGATOIRES
        </motion.h1>
        <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Elles sont au nombre de quinze (15)</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="mt-12 inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/30 rounded-full text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* GRILLE DES 15 FARATA */}
        <section className="space-y-6">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">AL-FARĀ'IḌ</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">فرائض الصلاة (١٥)</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {farata15.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="group relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-500">
                  
                  {/* Numéro et Texte Français */}
                  <div className="flex gap-6 items-start md:items-center flex-1">
                    <span className="text-gold/20 font-black text-3xl group-hover:text-gold transition-colors">
                      {item.n}
                    </span>
                    <p className="text-white/80 text-sm md:text-lg leading-relaxed font-medium group-hover:text-white transition-colors">
                      {item.fr}
                    </p>
                  </div>

                  {/* Arabe et Transcription */}
                  <div className="mt-4 md:mt-0 text-left md:text-right border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                    <p className="font-amiri text-gold-light text-2xl md:text-4xl mb-1 dir-rtl group-hover:scale-110 transition-transform origin-right">
                      {item.ar}
                    </p>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-black italic">
                      {item.tr}
                    </p>
                  </div>

                  {/* Effet décoratif au hover */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* SECTION FOOTER DE RAPPEL */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 text-center relative "
        >
          <div className="absolute inset-0 font-amiri text-[15rem] text-gold/5 flex items-center justify-center select-none pointer-events-none">
            فَرَطَ
          </div>
        </motion.section>
        

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/6/c')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/6/e')} 
          className="flex-[1.5] py-4 bg-gold text-emerald-950 rounded-2xl text-[10px] uppercase tracking-widest font-black shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all active:scale-95"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}