'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function CelebrationMariagePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 12 (Le Mariage)
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full" />
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XII — Section B</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LA CÉLÉBRATION <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl">DU MARIAGE</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10">عقد النكاح</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        <section className="text-center max-w-3xl mx-auto border-b border-white/5 pb-12">
          <p className="text-white/60 italic text-xl leading-relaxed font-serif">
            "Le mariage proprement dit doit se faire de la manière suivante :"
          </p>
        </section>

        {/* 1. LE KILIFA DE LA FILLE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">S’il s’agit du « Kilifa » de la fille</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-10">
            <p className="text-white/80 italic text-lg font-serif">
              Il doit réciter le « fatiha » trois (3) fois, ensuite dire ce qui suit :
            </p>
            
            <div className="bg-white/[0.03] border-l-4 border-gold p-8 md:p-10 rounded-r-[2.5rem] space-y-8">
              <div className="space-y-4 text-right dir-rtl">
                <p className="font-amiri text-3xl md:text-4xl text-white leading-relaxed">
                  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ. يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً وَاتَّقُوا اللهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللهَ كَانَ عَلَيْكُمْ رَقِيبًا...
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-gold font-black text-[9px] uppercase tracking-[0.3em] mb-4">Transcription intégrale (3 fois) :</p>
                <p className="text-white/70 text-base italic font-serif leading-relaxed">
                  « bismil lahi rahmani rahimi ya ayou hann nassou itakhou rabakoumoul lezi khalakhakoum minn nafsinn wâhidatinn wa khalakha minn hâ zawdiahâ wa bassaminn houmâ ridialann kassîrann wa nissa ann wa takhoul lâhal alezi tassa alôna bihi wa larhâma inalâha kâna aleykoum rakhi sifâna was salâtou wa salâmou wala rassolilahi annâ bahdou fa inni khad zawaddjitou foulânana foulânata ala barakatil lâhi wa chourôtihi wa ala sadâkhi mislahâ »
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-amiri text-2xl md:text-3xl text-gold-light leading-relaxed text-right dir-rtl">
                  وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ أَوْ تَسْرِيحٌ بِإِحْسَانٍ
                </p>
                <p className="text-white/50 text-[11px] font-medium italic border-t border-white/5 pt-4">
                  Puis dire ceci (1 fois) : « wa artou fa inn sâkoum bimùahrôfine aw tassrîhoune bi issânine »
                </p>
              </div>
            </div>
            
            <div className="p-8 bg-white/[0.02] rounded-3xl border border-white/5 italic font-serif leading-relaxed">
              <p className="text-white/60">
                <span className="text-gold font-bold not-italic font-sans text-xs uppercase tracking-widest block mb-2">En cas de représentation :</span>
                Si le « Kilifa » se fait représenter par une tierce personne, celle-ci, après avoir dit « wa chourôtihi », ajoutera ceci : <span className="text-gold font-bold">« bi isni walî yihâ » (بِإِذْنِ وَلِيِّهَا)</span> avant d’ajouter « wa ala sadakhi mislihâ ».
              </p>
            </div>
          </div>
        </section>

        {/* 2. LE KILIFA DU MARIÉ */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">Le « Kilifa » du marié</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <p className="text-white/70 italic text-lg font-serif leading-relaxed">
              Il dit ce que doit dire le « Kilifa » de la mariée jusqu’ « amâ bahdou » avant d’ajouter ceci :
            </p>
            <div className="bg-gold/5 p-8 md:p-10 rounded-[2.5rem] border border-gold/10 space-y-6">
               <p className="font-amiri text-2xl md:text-3xl text-white dir-rtl text-right">
                 فَإِنِّي قَدْ قَبِلْتُ نِكَاحَهَا عَلَى بَرَكَةِ اللهِ وَشُرُوطِهِ وَعَلَى صَدَاقِ مِثْلِهَا
               </p>
               <p className="text-white/60 italic font-serif text-lg border-t border-gold/10 pt-6">
                 « fa inni khad khabiltou nikâhaheu ala barakatil lâhi wa chourôtihi wa alâ sadakhi mislihâ ».
               </p>
            </div>
            <p className="text-base border-l-2 border-gold/30 pl-8 italic text-white/50 font-serif leading-relaxed">
              <span className="text-gold font-bold not-italic font-sans text-xs uppercase tracking-widest block mb-2">En cas de représentation :</span>
              S’il se fait représenter, le représentant jusqu’à « nikâaha » ajoutera <span className="text-gold font-bold">« liwalikî » (لِوَلِيِّي)</span> avant de dire « ala barakatil lâhi » jusqu’à la fin.
            </p>
          </div>
        </section>

        {/* 3. TÉMOINS ET AUDIENCE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-10">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">S’il y a des témoins</h3>
            <div className="space-y-8">
               <div className="pb-6 border-b border-white/5">
                 <p className="text-white/40 text-[9px] uppercase mb-4 tracking-widest">Deux témoins :</p>
                 <p className="font-amiri text-2xl text-white text-right dir-rtl mb-2">قَدْ شَهِدْنَا عَلَى ذٰلِكَ</p>
                 <p className="text-white/80 font-bold italic font-serif text-lg leading-none">« had chahina ala zâlika »</p>
               </div>
               <div>
                 <p className="text-white/40 text-[9px] uppercase mb-4 tracking-widest">S’il y en a d'autres :</p>
                 <p className="font-amiri text-2xl text-white text-right dir-rtl mb-2">وَنَحْنُ مَعَكُمَا عَلَى ذٰلِكَ مِنَ الشَّاهِدِينَ</p>
                 <p className="text-white/80 font-bold italic font-serif text-lg leading-tight">« wa nahnou maha koumâ ala zâlika mina châhidina »</p>
               </div>
            </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-emerald-950/10 border border-emerald-500/20 flex flex-col justify-between">
            <div>
              <h3 className="text-emerald-400 font-black text-[10px] uppercase mb-8 tracking-widest">4. Invocations de l'assistance</h3>
              <p className="text-white/60 italic text-sm font-serif leading-relaxed mb-8">
                Il est recommandé à tous ceux qui sont présents de dire, à l’intention des mariés, des invocations du genre :
              </p>
              <p className="font-amiri text-2xl md:text-3xl text-white text-right dir-rtl leading-relaxed mb-6">
                بَارَكَ اللهُ لِكُلِّ مِنْكُمَا فِي صَاحِبِهِ، وَجَمَعَ بَيْنَكُمَا بِخَيْرٍ، وَأَخْرَجَ مِنْكُمَا ذُرِّيَّةً طَيِّبَةً تَحْمِلُ الصَّالِحَ، آمِينَ
              </p>
            </div>
            <p className="text-white/90 font-bold italic font-serif text-base leading-relaxed p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
              « bâraka lahou likouline minn koumâ fis sa ibihi wa diamaha baïna koumâ bi khaïrine wa akhradia minn koumâ zouriyatann tayibatann tahmalous saliha âmine ».
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/12/a')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/12/c')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}