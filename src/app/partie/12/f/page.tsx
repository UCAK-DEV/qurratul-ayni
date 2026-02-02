'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function RemedesEnfantPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-emerald-900/10 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XII — Section F</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          QUELQUES <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Remèdes</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">علاج الطفل</p>

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

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* 1. GÉNÉRALITÉS ET PROTECTIONS */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6">
          <p className="text-white/80 italic text-lg font-serif">
            Il est recommandé également à celui qui fait des prières pour un enfant de dire cela matin et soir et de le lui souffler dessus. Si on fait porter à un nouveau-né la sourate 1, il sera préservé contre beaucoup de maux.
          </p>
        </motion.section>

        {/* 2. MAUX COURANTS (GRILLE DE DIAGNOSTIC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Pustules purulentes</h3>
            <p className="text-white/70 italic font-serif text-base leading-relaxed">
              On écrira ce qui suit et on en fera un breuvage qu’il boira avec sa mère (Voir annexe n° III) avec la sourate « fatiha » dont on sépare les lettres. On peut écrire cela à l’intention d’une femme enceinte sans séparer les lettres de la fatiha.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Fièvre (Paludisme)</h3>
            <p className="text-white/70 italic font-serif text-base leading-relaxed">
              On écrit ces mots qu’on lui fait porter au cou (Voir annexe n° VI) comme gris-gris. On le récite 3 fois le matin et le soir et on le souffle sur son corps.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Vomissements</h3>
            <p className="text-white/70 italic font-serif text-base leading-relaxed">
              On écrit sur un morceau d’étoffe blanche ce qui suit et on le lui fait porter au poignet de la main droite (Voir annexe n° VII).
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Sommeil difficile</h3>
            <p className="text-white/70 italic font-serif text-base leading-relaxed">
              Si l’enfant n’arrive pas à dormir la nuit, ou si son sommeil est entrecoupé de réveils brutaux, on lui fait porter ce qui suit (Voir annexe n° VIII).
            </p>
          </motion.div>
        </div>

        {/* 3. SOINS NATURELS (COQUELUCHE, OTITE, VENTRE) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-emerald-400 uppercase tracking-widest italic leading-none">Soins Naturels</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-emerald-500/10 space-y-4">
                <span className="text-emerald-400 font-bold text-xs uppercase">Toux & Coqueluche</span>
                <p className="text-white/60 text-sm italic font-serif">Lait frais de chèvre (chauffé si nécessaire) + une cuillérée de miel matin et soir.</p>
             </div>
             <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-emerald-500/10 space-y-4">
                <span className="text-emerald-400 font-bold text-xs uppercase">Otite / Mal d'oreille</span>
                <p className="text-white/60 text-sm italic font-serif">Mettre dans l'oreille du blanc d’œuf ou du « diwounior » chauffé légèrement.</p>
             </div>
             <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-emerald-500/10 space-y-4">
                <span className="text-emerald-400 font-bold text-xs uppercase">Mal de Ventre</span>
                <p className="text-white/60 text-sm italic font-serif">Écrit (Annexe I) + « nânâ » trempé dans l’eau le matin. Uriner avant le lit, éviter de boire la nuit.</p>
             </div>
          </div>
        </section>

        {/* 4. POUSSÉE DENTAIRE ET GOÛT DU SABLE */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">Développement de l'enfant</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
               <span className="text-gold font-bold text-xs uppercase block mb-4">Goût du sable</span>
               <p className="text-white/70 italic font-serif mb-4">Écrit (Annexe X) sur du pain à avaler + Viande de jeune poulet bien cuite + laxatif « laïdour » + miel.</p>
            </div>

            <div className="p-6 bg-gold/5 rounded-2xl border border-gold/20 space-y-6">
               <span className="text-gold font-bold text-xs uppercase block mb-2">Poussée Dentaire (Rituel)</span>
               <p className="font-amiri text-2xl text-white text-right dir-rtl">آية الكرسي (١٠ مرات) + لِإِيلافِ قُرَيْشٍ (٣ مرات)</p>
               <p className="text-white/70 italic font-serif">Réciter Ayatoul Koursiyou (10x) suivi de Li ilafi (3x) matin et soir et souffler dans la bouche. Frictionner les gencives avec un mélange de cerveau de mouton, miel et dax.</p>
               <div className="pt-4 border-t border-gold/10 text-sm text-gold/60">
                 Note : On peut aussi préparer un breuvage de mil « souna » (pilé et grillé) avec du sucre pour l'enfant et la maman.
               </div>
            </div>
          </div>
        </motion.section>

        {/* 5. MAUX DE TÊTE (INVOCATIONS LONGUES) */}
        <motion.section {...fadeInUp} className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Maux de Tête & Lumière</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-10">
            <p className="text-white/70 italic text-lg font-serif">Poser la main sur la tête et dire (3 fois) :</p>
            <div className="bg-gold/5 p-8 rounded-3xl border border-gold/10 space-y-6">
              <p className="font-amiri text-2xl md:text-3xl text-white text-right dir-rtl leading-relaxed">
                بِسْمِ اللَّهِ خَيْرِ الأَسْمَاءِ، بِسْمِ اللَّهِ رَبِّ الأَرْضِ وَالسَّمَاءِ، بِسْمِ اللَّهِ بَرَكَةً وَشِفَاءً، بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
              </p>
              <p className="text-white/50 text-sm italic font-serif">« Bismilahi khayril asmâni bismilahi rabil ardi wa sama bismilahi barakatoune wa chifâ oune Bismilahi alazi la yadourou maha ismichichay oune fil lardi wa lafi samâ-i wa houwa samihoul halimou »</p>
            </div>

            <div className="space-y-6">
              <p className="text-white/70 italic font-serif">Suivi du verset de la Lumière (1 fois) :</p>
              <p className="font-amiri text-xl md:text-2xl text-white text-right dir-rtl leading-[2]">
                اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ... فِي بُيُوتٍ أَذِنَ اللَّهُ أَن تُرْفَعَ... ارْتَفِعْ أَيُّهَا الْوَجَعُ بِلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ.
              </p>
              <p className="text-white/50 text-xs italic font-serif p-4 bg-white/5 rounded-xl">
                « Alahou nourou samawati wa lardi... jusqu'à... irtafih ayouhal wadiahou bilâ hawla wala khouwata ila bilahi haliyil hazime » (Ajouter Law anzalna... jusqu'à azizoul hakimou).
              </p>
            </div>
          </div>
        </motion.section>

        {/* 6. CONJONCTIVITE & DENTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Conjonctivite (Yeux)</h3>
            <p className="font-amiri text-2xl text-white text-right dir-rtl">يَا نَاظِرَيَّ بِيَنْقُوبٍ أُعِيذُهُمَا... إِذْ جَاءَ الْبَشِيرُ بِهِ حَقِّ يُوسُفَ اذْهَبْ أَيُّهَا الرَّمَدُ</p>
            <p className="text-white/50 text-xs italic font-serif">« Yâ nâziraya bi yankhôbine... ishab ayouhâl ramadou » (Souffler dans les yeux + Annexe X + Annexe XII).</p>
          </motion.div>

          <motion.div {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Maux de dents</h3>
            <p className="text-white/60 text-sm italic font-serif">Fumée de corail + poudre de henné pilé au miel appliquée sur la dent. Ou écrire (Annexe XIII) sur du pain, mastiquer et jeter à un chien. Gargarisme au vinaigre salé tiède.</p>
          </motion.div>
        </section>

        {/* 7. AUTRES REMÈDES SPÉCIFIQUES (TABLEAU RÉCAPITULATIF) */}
        <motion.section {...fadeInUp} className="bg-emerald-950/10 border border-emerald-500/20 rounded-[3rem] p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-emerald-400 font-bold text-xs uppercase mb-4">Maux d'oreilles (Borom Bopp)</h4>
              <p className="text-white/60 text-sm italic font-serif">Écrire Fatiha + « Allahou nourou... » (Annexe XIV) en breuvage.</p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold text-xs uppercase mb-4">Le « Gadam »</h4>
              <p className="text-white/60 text-sm italic font-serif">Porter le gris-gris de l'Annexe XVI.</p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold text-xs uppercase mb-4">Diarrhée & Dysenterie</h4>
              <p className="text-white/60 text-sm italic font-serif">Jaune d'œuf cuit dans du vinaigre. Pour dysenterie : lait de vache chaud + se couvrir.</p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold text-xs uppercase mb-4">Constipation</h4>
              <p className="text-white/60 text-sm italic font-serif">Lait de brebis avec un peu de sel.</p>
            </div>
          </div>
        </motion.section>

        {/* 8. REMÈDE UNIVERSEL (FINAL) */}
        <motion.section {...fadeInUp} className="bg-gold/5 border border-gold/20 rounded-[3rem] p-10 md:p-14 space-y-8 text-center">
          <h2 className="text-gold font-black text-sm uppercase tracking-[0.4em]">Remède Universel contre toute maladie</h2>
          <p className="text-white/70 italic font-serif text-lg leading-relaxed">
            S'isoler dans un endroit propre, faire ses ablutions et exécuter 2 rakkas. Après le salut final, dire :
          </p>
          <div className="space-y-6">
            <p className="font-amiri text-3xl text-white">يَا مَانِعُ (١٦١ مرة)</p>
            <p className="font-amiri text-2xl md:text-3xl text-gold-light dir-rtl">
              امْنَعْ عَنِّي هَذَا الْمَرَضَ وَامْنَعْنِي مِنْهُ بِفَضْلِكَ وَجُودِكَ وَكَرَمِكَ
            </p>
            <p className="text-white/50 text-sm italic font-serif">
              « Imnah minî hâzal marada wam nahnî minhou bi fadlika wadjôdika wakaramika »
            </p>
          </div>
          <p className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest pt-4">Quelle que soit la maladie, on en sera guéri.</p>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/12/e')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/12/g')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}