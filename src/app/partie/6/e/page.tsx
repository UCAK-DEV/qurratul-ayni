'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PratiquesTraditionnellesE() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const souna18 = [
    { n: "01", fr: "Le rappel ou « likâm » à dire à haute voix chez l’homme, méritoire chez la femme mais à voix basse.", ar: "الْإِقَامَةُ", tr: "Al-Iqāmah" },
    { n: "02", fr: "La sourate qui suit la « fatiha ».", ar: "السُّورَةُ بَعْدَ الْفَاتِحَةِ", tr: "As-Sūrah ba'd al-Fātihah" },
    { n: "03", fr: "La position debout dans laquelle on récite cette sourate.", ar: "الْقِيَامُ لِلسُّورَةِ", tr: "Al-Qiyām lissūrah" },
    { n: "04", fr: "La récitation à voix basse là où il le faut.", ar: "السِّرُّ", tr: "As-Sirr" },
    { n: "05", fr: "La récitation à haute voix là où il le faut.", ar: "الْجَهْرُ", tr: "Al-Jahr" },
    { n: "06", fr: "Tout « kabar » (allahou akbar) autre que le premier.", ar: "كُلُّ تَكْبِيرَةٍ غَيْرُ الْأُولَى", tr: "At-Takbīr" },
    { n: "07", fr: "« Sami allahou limann hammidah ».", ar: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ", tr: "Sami' Allāhu liman ḥamidah" },
    { n: "08", fr: "Le premier « tachaoude ».", ar: "التَّشَهُّدُ الْأَوَّلُ", tr: "At-Tashahhud al-Awwal" },
    { n: "09", fr: "Le dernier « tachaoude ».", ar: "التَّشَهُّدُ الْأَخِيرُ", tr: "At-Tashahhud al-Akhīr" },
    { n: "10", fr: "« Allahouma salli halâ seyidinâ Mouhammadine… ».", ar: "الصَّلَاةُ عَلَى النَّبِيِّ", tr: "As-Salāt 'ala an-Nabī" },
    { n: "11", fr: "La station assise pour la récitation du premier « tachaoude ».", ar: "الْجُلُوسُ لِلتَّشَهُّدِ الْأَوَّلِ", tr: "Al-Julūs" },
    { n: "12", fr: "La station assise pour la récitation du dernier « tachaoude ».", ar: "الْجُلُوسُ لِلتَّشَهُّدِ الْأَخِيرُ", tr: "Al-Julūs" },
    { n: "13", fr: "Rendre à l’Imam le salut final.", ar: "رَدُّ السَّلَامِ عَلَى الْإِمَامِ", tr: "Radd as-salām" },
    { n: "14", fr: "Rendre le salut final à toute personne située à la gauche, si cette dernière a participé à au moins une rakka, qu’elle ait ou non terminé sa prière.", ar: "رَدُّ السَّلَامِ عَلَى الْيَسَارِ", tr: "Radd as-salām" },
    { n: "15", fr: "Se taire lorsque l’Imam récite à haute voix.", ar: "الْإِنْصَاتُ لِلْإِمَامِ", tr: "Al-Inṣāt" },
    { n: "16", fr: "L’Imam ou celui qui prie seul doit planter un bâton d’une longueur au moins égale à une coudée et d’une épaisseur au moins égale à celle de la manche d’une hilaire ; ce bâton doit être propre, exempt de toute souillure immobile et de nature à ne pas distraire celui qui prie. Cela ne peut pas être une toute petite pierre ; il ne doit pas être juste en face de celui qui prie, mais un peu à côté.", ar: "اتِّخَاذُ السُّتْرَةِ", tr: "At-Tikhādh as-Sutrah" },
    { n: "17", fr: "Prendre assez de temps pour chaque phase afin de dire correctement ce qu’il y a lieu de dire.", ar: "زَائِدُ الطُّمَأْنِينَةِ", tr: "Zā'id at-Ṭuma'nīnah" },
    { n: "18", fr: "Dire à haute voix le salut final.", ar: "الْجَهْرُ بِالتَّسْلِيمَةِ الْأُولَى", tr: "Al-Jahr" }
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section E</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LES PRATIQUES <br /> <span className="gold-gradient-text italic font-serif lowercase">traditionnelles</span>
            </h1>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black mb-10">Elles sont au nombre de dix-huit (18)</p>

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
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">AS-SUNNAH</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
            <span className="text-xl font-amiri text-gold/40">سنن الصلاة</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {souna18.map((item, idx) => (
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
                  <div className="mt-6 md:mt-0 text-left md:text-right border-t md:border-t-0 border-white/5 pt-6 md:pt-0 min-w-[220px]">
                    <p className="font-amiri text-gold-light text-2xl md:text-4xl mb-2 dir-rtl group-hover:scale-110 transition-transform origin-right">
                      {item.ar}
                    </p>
                    <p className="text-white/30 text-[9px] uppercase tracking-widest font-black">
                      {item.tr}
                    </p>
                  </div>

                  {/* Accent visuel */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-8 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-r-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/d')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/f')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}