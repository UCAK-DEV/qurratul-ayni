'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PratiquesTraditionnellesE() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // ID correspondant au chapitre dans vos données (Séquence logique : 12)
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const souna18 = [
    { 
      n: "01", 
      fr: "Le rappel ou « likâm » à dire à haute voix chez l’homme, méritoire chez la femme mais à voix basse.", 
      ar: "الإقامة (للرجال والنساء)", 
      tr: "Al-Iqāmah" 
    },
    { 
      n: "02", 
      fr: "La sourate qui suit la « fatiha ».", 
      ar: "السورة بعد الفاتحة", 
      tr: "As-Sūrah ba'd al-Fātihah" 
    },
    { 
      n: "03", 
      fr: "La position debout dans laquelle on récite cette sourate.", 
      ar: "القيام للسورة", 
      tr: "Al-Qiyām lissūrah" 
    },
    { 
      n: "04", 
      fr: "La récitation à voix basse là où il le faut.", 
      ar: "السر فيما يسر فيه", 
      tr: "As-Sirr" 
    },
    { 
      n: "05", 
      fr: "La récitation à haute voix là où il le faut.", 
      ar: "الجهر فيما يجهر فيه", 
      tr: "Al-Jahr" 
    },
    { 
      n: "06", 
      fr: "Tout « kabar » (allahou akbar) autre que le premier.", 
      ar: "كل تكبيرة غير الأولى", 
      tr: "At-Takbīr ghayr al-Iḥrām" 
    },
    { 
      n: "07", 
      fr: "« Sami allahou limann hammidah ».", 
      ar: "قول سمع الله لمن حمده", 
      tr: "Sami' Allāhu liman ḥamidah" 
    },
    { 
      n: "08", 
      fr: "Le premier « tachaoude ».", 
      ar: "التشهد الأول", 
      tr: "At-Tashahhud al-Awwal" 
    },
    { 
      n: "09", 
      fr: "Le dernier « tachaoude ».", 
      ar: "التشهد الأخير", 
      tr: "At-Tashahhud al-Akhīr" 
    },
    { 
      n: "10", 
      fr: "« Allahouma salli halâ seyidinâ Mouhammadine… ».", 
      ar: "الصلاة على النبي", 
      tr: "As-Salāt 'ala an-Nabī" 
    },
    { 
      n: "11", 
      fr: "La station assise pour la récitation du premier « tachaoude ».", 
      ar: "الجلوس للتشهد الأول", 
      tr: "Al-Julūs lit-tashahhud al-awwal" 
    },
    { 
      n: "12", 
      fr: "La station assise pour la récitation du dernier « tachaoude ».", 
      ar: "الجلوس للتشهد الأخير", 
      tr: "Al-Julūs lit-tashahhud al-akhīr" 
    },
    { 
      n: "13", 
      fr: "Rendre à l’Imam le salut final.", 
      ar: "رد السلام على الإمام", 
      tr: "Radd as-salām 'ala al-Imām" 
    },
    { 
      n: "14", 
      fr: "Rendre le salut final à toute personne située à la gauche, si cette dernière a participé à au moins une rakka, qu’elle ait ou non terminé sa prière.", 
      ar: "رد السلام على اليسار", 
      tr: "Radd as-salām 'ala al-yasār" 
    },
    { 
      n: "15", 
      fr: "Se taire lorsque l’Imam récite à haute voix.", 
      ar: "الإنصات للإمام عند الجهر", 
      tr: "Al-Inṣāt lil-Imām" 
    },
    { 
      n: "16", 
      fr: "L’Imam ou celui qui prie seul doit planter un bâton d’une longueur au moins égale à une coudée et d’une épaisseur au moins égale à celle de la manche d’une hilaire ; ce bâton doit être propre, exempt de toute souillure immobile et de nature à ne pas distraire celui qui prie. Cela ne peut pas être une toute petite pierre ; il ne doit pas être juste en face de celui qui prie, mais un peu à côté.", 
      ar: "اتخاذ السترة (للإمام والمنفرد)", 
      tr: "At-Tikhādh as-Sutrah" 
    },
    { 
      n: "17", 
      fr: "Prendre assez de temps pour chaque phase afin de dire correctement ce qu’il y a lieu de dire.", 
      ar: "زائد الطمأنينة", 
      tr: "Zā'id at-Ṭuma'nīnah" 
    },
    { 
      n: "18", 
      fr: "Dire à haute voix le salut final.", 
      ar: "الجهر بالتسليمة الأولى", 
      tr: "Al-Jahr bis-salām" 
    }
  ];

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background decoration - Luxe Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[50%] bg-gold/10 blur-[150px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block"
        >
          Chapitre VI — Section E
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LES PRATIQUES <br /> TRADITIONNELLES
        </motion.h1>
        <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Elles sont au nombre de dix-huit (18)</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="mt-12 inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/30 rounded-full text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* GRILLE DES 18 SOUNA */}
        <section className="space-y-6">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">AS-SUNNAH</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">سنن الصلاة (١٨)</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {souna18.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="group relative"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-500">
                  
                  {/* Numéro et Texte Français */}
                  <div className="flex gap-6 items-start flex-1 pr-4">
                    <span className="text-gold/20 font-black text-3xl group-hover:text-gold transition-colors">
                      {item.n}
                    </span>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium group-hover:text-white transition-colors">
                      {item.fr}
                    </p>
                  </div>

                  {/* Arabe et Transcription */}
                  <div className="mt-6 md:mt-0 text-left md:text-right border-t md:border-t-0 border-white/5 pt-6 md:pt-0 min-w-[200px]">
                    <p className="font-amiri text-gold-light text-2xl md:text-3xl mb-1 dir-rtl group-hover:scale-105 transition-transform origin-right">
                      {item.ar}
                    </p>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-black italic">
                      {item.tr}
                    </p>
                  </div>

                  {/* Border Effect */}
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
            السنة
          </div>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/6/d')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/6/f')} 
          className="flex-[1.5] py-4 bg-gold text-emerald-950 rounded-2xl text-[10px] uppercase tracking-widest font-black shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all active:scale-95"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}