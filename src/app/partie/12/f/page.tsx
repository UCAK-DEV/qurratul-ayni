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
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-emerald-900/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XII — Section F</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              QUELQUES <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">remèdes</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">علاج الطفل</p>

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

        <div className="space-y-32">
          
          {/* 1. GÉNÉRALITÉS ET PROTECTIONS */}
          <motion.section {...fadeInUp} className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">F</span>
            <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed border-l-2 border-gold/30 pl-8">
              Il est recommandé également à celui qui fait des prières pour un enfant de dire cela matin et soir et de le lui souffler dessus. Si on fait porter à un nouveau-né la sourate 1, il sera préservé contre beaucoup de maux.
            </div>
          </motion.section>

          {/* 2. MAUX COURANTS (FICHES DE SOINS) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Maux courants & Diagnostics</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { t: "Pustules purulentes", d: "On écrira ce qui suit et on en fera un breuvage qu’il boira avec sa mère (Voir annexe n° III) avec la sourate « fatiha » dont on sépare les lettres. On peut écrire cela à l’intention d’une femme enceinte sans séparer les lettres de la fatiha." },
                { t: "Fièvre (Paludisme)", d: "On écrit ces mots qu’on lui fait porter au cou (Voir annexe n° VI) comme gris-gris. On le récite 3 fois le matin et le soir et on le souffle sur son corps." },
                { t: "Vomissements", d: "On écrit sur un morceau d’étoffe blanche ce qui suit et on le lui fait porter au poignet de la main droite (Voir annexe n° VII)." },
                { t: "Sommeil difficile", d: "Si l’enfant n’arrive pas à dormir la nuit, ou si son sommeil est entrecoupé de réveils brutaux, on lui fait porter ce qui suit (Voir annexe n° VIII)." }
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 font-serif italic text-lg text-white/70 leading-relaxed group hover:border-gold/20 transition-all shadow-sm">
                  <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4 not-italic">{item.t}</h3>
                  <p>{item.d}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3. SOINS NATURELS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Soins Naturels</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { t: "Toux & Coqueluche", d: "Lait frais de chèvre (chauffé si nécessaire) + une cuillérée de miel matin et soir." },
                 { t: "Otite / Mal d'oreille", d: "Mettre dans l'oreille du blanc d’œuf ou du « diwounior » chauffé légèrement." },
                 { t: "Mal de Ventre", d: "Écrit (Annexe I) + « nânâ » trempé dans l’eau le matin. Uriner avant le lit, éviter de boire la nuit." }
               ].map((item, idx) => (
                 <motion.div key={idx} {...fadeInUp} className="p-8 rounded-[2.5rem] bg-emerald-950/[0.03] border border-emerald-500/10 space-y-4 shadow-sm group hover:bg-emerald-950/10 transition-all">
                    <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest border-b border-emerald-500/10 pb-2 block">{item.t}</span>
                    <p className="text-white/60 text-base italic font-serif leading-relaxed">{item.d}</p>
                 </motion.div>
               ))}
            </div>
          </section>

          {/* 4. DÉVELOPPEMENT ET POUSSÉE DENTAIRE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Développement & Croissance</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-16 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
              <div className="space-y-8">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest not-italic">Le goût du sable</h3>
                <p>Écrit (Annexe X) sur du pain à avaler + Viande de jeune poulet bien cuite + laxatif « laïdour » + miel.</p>
              </div>
              <div className="p-10 rounded-[3.5rem] bg-gold/[0.05] border border-gold/20 space-y-10 shadow-sm not-italic">
                <div className="text-center space-y-4">
                  <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em]">Poussée Dentaire (Rituel)</span>
                  <p className="font-amiri text-2xl md:text-4xl text-white leading-relaxed" dir="rtl">
                    آيَةُ الْكُرْسِيِّ (١٠ مَرَّاتٍ) + لِإِيلَافِ قُرَيْشٍ (٣ مَرَّاتٍ)
                  </p>
                </div>
                <p className="text-white/80 font-serif italic text-lg leading-relaxed text-center">
                  Réciter Ayatoul Koursiyou (10x) suivi de Li ilafi (3x) matin et soir et souffler dans la bouche. Frictionner les gencives avec un mélange de cerveau de mouton, miel et dax.
                </p>
                <p className="text-white/40 text-sm text-center border-t border-gold/10 pt-8 italic font-serif">
                  Note : On peut aussi préparer un breuvage de mil « souna » (pilé et grillé) avec du sucre pour l'enfant et la maman.
                </p>
              </div>
            </div>
          </section>

          {/* 5. MAUX DE TÊTE & CONJONCTIVITE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Traitements par la Lumière</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-16 font-serif italic text-white/70">
              <div className="space-y-10">
                <p className="text-center text-lg">Poser la main sur la tête et dire (3 fois) :</p>
                <div className="p-10 rounded-[3rem] bg-black/40 border border-gold/20 space-y-8 shadow-sm">
                  <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                    بِسْمِ اللَّهِ خَيْرِ الأَسْمَاءِ، بِسْمِ اللَّهِ رَبِّ الأَرْضِ وَالسَّمَاءِ، بِسْمِ اللَّهِ بَرَكَةً وَشِفَاءً، بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                  </p>
                  <p className="text-gold-light/80 italic md:text-xl border-t border-gold/10 pt-8">
                    « Bismilahi khayril asmâni bismilahi rabil ardi wa sama bismilahi barakatoune wa chifâ oune Bismilahi alazi la yadourou maha ismichichay oune fil lardi wa lafi samâ-i wa houwa samihoul halimou »
                  </p>
                </div>
              </div>

              <div className="space-y-10 pt-16 border-t border-white/5">
                <p className="text-center text-lg italic">Suivi du verset de la Lumière (1 fois) :</p>
                <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-relaxed" dir="rtl">
                  اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ... فِي بُيُوتٍ أَذِنَ اللَّهُ أَن تُرْفَعَ... ارْتَفِعْ أَيُّهَا الْوَجَعُ بِلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ.
                </p>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-white/40 text-sm leading-relaxed">
                    « Alahou nourou samawati wa lardi... jusqu'à... irtafih ayouhal wadiahou bilâ hawla wala khouwata ila bilahi haliyil hazime » (Ajouter Law anzalna... jusqu'à azizoul hakimou).
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-16 border-t border-white/5 not-italic">
                <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 flex flex-col group hover:border-gold/30 transition-all shadow-sm">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-white/5 pb-4 mb-4">Conjonctivite (Yeux)</span>
                  <p className="font-amiri text-2xl text-white text-right mb-4" dir="rtl">يَا نَاظِرَيَّ بِيَنْقُوبٍ أُعِيذُهُمَا... إِذْ جَاءَ الْبَشِيرُ بِهِ حَقِّ يُوسُفَ اذْهَبْ أَيُّهَا الرَّمَدُ</p>
                  <p className="text-white/60 font-serif italic text-sm leading-relaxed flex-1">
                    « Yâ nâziraya bi yankhôbine... ishab ayouhâl ramadou » (Souffler dans les yeux + Annexe X + Annexe XII).
                  </p>
                </div>
                
                <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 flex flex-col group hover:border-gold/30 transition-all shadow-sm">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-white/5 pb-4 mb-4">Maux de dents</span>
                  <p className="text-white/70 font-serif italic text-lg leading-relaxed flex-1">
                    Fumée de corail + poudre de henné pilé au miel appliquée sur la dent. Ou écrire (Annexe XIII) sur du pain, mastiquer et jeter à un chien. Gargarisme au vinaigre salé tiède.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. TABLEAU RÉCAPITULATIF FINAL */}
          <section className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-serif italic text-white/70">
               {[
                 { t: "Borom Bopp", d: "Écrire Fatiha + « Allahou nourou... » (Annexe XIV) en breuvage." },
                 { t: "Le « Gadam »", d: "Porter le gris-gris de l'Annexe XVI." },
                 { t: "Diarrhée & Dysenterie", d: "Jaune d'œuf cuit dans du vinaigre. Pour dysenterie : lait de vache chaud + se couvrir." },
                 { t: "Constipation", d: "Lait de brebis avec un peu de sel." }
               ].map((item, idx) => (
                 <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                    <span className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] not-italic">{item.t}</span>
                    <p className="text-base leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>

            {/* REMÈDE UNIVERSEL */}
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-emerald-950/10 border border-emerald-500/20 space-y-12 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
               <h3 className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em] relative z-10">Remède Universel contre toute maladie</h3>
               <p className="text-white/80 font-serif italic text-lg md:text-xl leading-relaxed relative z-10 max-w-3xl mx-auto">
                 S'isoler dans un endroit propre, faire ses ablutions et exécuter 2 rakkas. Après le salut final, dire :
               </p>
               <div className="space-y-8 relative z-10">
                  <p className="font-amiri text-4xl text-white" dir="rtl">يَا مَانِعُ (١٦١ مَرَّةً)</p>
                  <p className="font-amiri text-2xl md:text-4xl text-emerald-400 leading-relaxed" dir="rtl">
                    امْنَعْ عَنِّي هَذَا الْمَرَضَ وَامْنَعْنِي مِنْهُ بِفَضْلِكَ وَجُودِكَ وَكَرَمِكَ
                  </p>
                  <div className="p-8 bg-black/40 rounded-3xl border border-white/5">
                    <p className="text-white/60 text-sm italic font-serif leading-relaxed">
                      « Imnah minî hâzal marada wam nahnî minhou bi fadlika wadjôdika wakaramika »
                    </p>
                  </div>
               </div>
               <p className="text-emerald-500 font-bold uppercase text-[10px] tracking-widest pt-4 relative z-10">Quelle que soit la maladie, on en sera guéri.</p>
            </motion.div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/12/e')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/12/g')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}