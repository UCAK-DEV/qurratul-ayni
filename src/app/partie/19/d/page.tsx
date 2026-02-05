'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function InvocationsWirdsCompletPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "19") || CHAPTERS[18];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden font-sans">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-950/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XIX — Section D</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              INVOCATIONS <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">& wirds</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الأدعية والأوراد</p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-20' : 'opacity-0'}`} />
              <span className="material-symbols-rounded text-4xl text-gold relative z-10">
                {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
              </span>
              <span className="text-sm font-bold tracking-tight relative z-10 italic font-serif text-white/80">
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        <div className="space-y-24">
          
          {/* SECTION 1: MÉRITES ET ACTES ÉQUIVALENTS */}
          <motion.section {...fadeInUp} className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-justify relative overflow-hidden group shadow-2xl">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">D</span>
            <div className="space-y-8 relative z-10">
              <p>&quot;On n’enregistrera jamais de péchés à celui qui prend l’habitude de dire le wird « Mouchabahatou acharatou » matin et soir (wird).&quot;</p>
              <p>&quot;Celui qui, debout au bord de la mer, se met à en compter les vagues jusqu’au nombre de 40 et qui, pour chaque vague, fait le « Takbir » (Allahou Akbar) sera absous.&quot;</p>
              <p>&quot;Celui qui guide un aveugle en lui tenant la canne sur quarante pas sera absous et rien ne l’empêchera d’aller au Paradis.&quot;</p>
              <p>&quot;Celui qui se donne la peine d’aider un musulman dans le besoin sera absous (de tous ses péchés) et sera préservé contre l’hypocrisie et contre l’enfer.&quot;</p>
              
              <div className="grid md:grid-cols-3 gap-6 not-italic font-sans text-center">
                 <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
                    <p className="text-gold font-black text-xl mb-1">100x</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Allahou Akbar</p>
                    <p className="text-white/70 text-xs italic">Sera absous.</p>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
                    <p className="text-gold font-black text-xl mb-1">100x</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Soubhana lahi</p>
                    <p className="text-white/70 text-xs italic">Équivaut à libérer 100 esclaves.</p>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
                    <p className="text-gold font-black text-xl mb-1">100x</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Al hamdou lilahi</p>
                    <p className="text-white/70 text-xs italic">Équivaut à l'aumône de 100 chameaux.</p>
                 </div>
              </div>

              <div className="p-10 rounded-[3.5rem] bg-gold/[0.03] border border-gold/10 space-y-8 shadow-sm not-italic text-center">
                <span className="text-gold font-bold text-[10px] uppercase tracking-widest block border-b border-gold/10 pb-4">Après le repas</span>
                <p className="font-amiri text-2xl md:text-3xl text-white leading-loose" dir="rtl">الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا الطَّعَامَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ</p>
                <p className="text-gold-light/60 font-serif italic text-sm">« Alhamdou lilahi leuzi att hamini hazat tahâma waraza khanihi mine khaï minî wala khouwatine »</p>
                <p className="text-white/40 text-xs italic font-serif uppercase tracking-widest">Sera absous (de tous ses péchés).</p>
              </div>

              <p className="border-l-4 border-gold/30 pl-8 bg-gold/[0.01] py-8 rounded-r-3xl">
                &quot;Il faut cependant noter qu’invoquer le nom du Prophète « sala lahou tahala aleyhi wa salame » a beaucoup plus d’intérêt que toutes ces prières. Invoquer le nom du Prophète, ne serait-ce qu’une fois sa vie, est une obligation divine. Plus on invoque son nom, plus on aura d’épouses au Paradis et plus on s’éloignera de l’enfer.&quot;
              </p>
            </div>
          </motion.section>

          {/* SECTION 2: QUELQUES LITANIES (INTÉGRALE 31 POINTS) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Recueil des Litanies</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <p className="text-white/40 italic font-serif text-center px-12">
              &quot;Les litanies sont si nombreuses qu’il est impossible de les énumérer. Cependant, en voici quelques-unes pour vous permettre d'en choisir celles qui vous conviennent :&quot;
            </p>

            <div className="grid gap-8">
              {/* Salatoul Ibrahimia */}
              <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-black/40 border border-white/5 space-y-8 shadow-sm">
                <div className="flex justify-between items-center border-b border-white/5 pb-6">
                   <span className="text-gold font-black text-[10px] uppercase">La plus complète (Tachaoude)</span>
                   <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-black text-xs">01</span>
                </div>
                <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                  اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                </p>
                <p className="text-white/30 font-serif italic text-xs leading-relaxed" dir="ltr">« Allahouma Sali alâ seydina mouhamadine wa alâ ali saydina mouhamadine kama sallayta ala ibrahima wa alâ ali ibrahima wa barik alâ saydina Mouhamadine wa ala seydina mouhamadine kama barakta ala ibrahima wa ala ali ibrahima fil âlamina inaka hamidoune madjidoune ».</p>
              </motion.div>

              {/* Litanies 2 à 8 : Courtes & Puissantes */}
              <div className="grid md:grid-cols-2 gap-8 font-serif italic text-white/70">
                {[
                   { t: "Intercession", ar: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَأَنْزِلْهُ الْمَقْعَدَ الْمُقَرَّبَ عِنْدَكَ يَوْمَ الْقِيَامَةِ", fr: "« Allahou salli ala sayidina Mouhamadine wa anezilhou almane zilal moukharaba... »", d: "Bénéficiera de l’intercession du Prophète (PSL)." },
                   { t: "Contre l'Enfer", ar: "اللَّهُمَّ صَلِّ عَلَى رُوحِ سَيِّدِنَا مُحَمَّدٍ فِي الْأَرْوَاحِ وَعَلَى جَسَدِهِ فِي الْأَجْسَادِ وَعَلَى قَبْرِهِ فِي الْقُبُورِ", fr: "« Allahouma salli alâ rôhi sayidina Mouhamadine fil arwâhi... »", d: "Celui qui dit cette prière n’ira pas en enfer." },
                   { t: "La meilleure prière", ar: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ فِي الْأَوَّلِينَ وَالْآخِرِينَ وَفِي الْمَلَأِ الْأَعْلَى إِلَى يَوْمِ الدِّينِ", fr: "« Allahouma salli alâ sayidina Mouhamadine... fil mala il lahla ila yawmiddini »", d: "Il n’y a pas meilleure prière que celle-ci." },
                   { t: "Nourrir son prochain", ar: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ وَصَلِّ عَلَى الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَالْمُسْلِمِينَ وَالْمُسْلِمَاتِ", fr: "« Allahouma salli alâ sayidina Mouhamadine abdika wa rassoulika... »", d: "Considéré comme celui qui a donné à manger à sa faim à son prochain." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-gold font-bold text-[9px] uppercase tracking-widest block opacity-50">{item.t}</span>
                      <p className="font-amiri text-xl text-white text-right leading-loose" dir="rtl">{item.ar}</p>
                    </div>
                    <p className="text-emerald-400 font-sans not-italic text-[10px] uppercase tracking-widest pt-4 border-t border-white/5">{item.d}</p>
                  </div>
                ))}
              </div>

              {/* Litanie 9: Les 70 Anges (Complet) */}
              <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-emerald-950/10 border border-emerald-500/20 space-y-8 shadow-sm">
                <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest block border-b border-emerald-500/10 pb-4 text-center">Les 70 Anges</span>
                <p className="font-amiri text-xl md:text-2xl text-white text-center leading-loose" dir="rtl">
                  اللَّهُمَّ يَا رَبَّ سَيِّدِنَا مُحَمَّدٍ وَآلِ سَيِّدِنَا مُحَمَّدٍ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِ سَيِّدِنَا مُحَمَّدٍ وَأَعْطِ سَيِّدِنَا مُحَمَّدًا الدَّرَجَةَ الرَّفِيعَةَ وَالْوَسِيلَةَ فِي الْجَنَّةِ. اللَّهُمَّ يَا رَبَّ سَيِّدِنَا مُحَمَّدٍ وَآلِ سَيِّدِنَا مُحَمَّدٍ اجْزِ سَيِّدِنَا مُحَمَّدًا صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ مَا هُوَ أَهْلُهُ
                </p>
                <p className="text-white/60 text-justify text-base italic border-t border-emerald-500/10 pt-8">
                  &quot;Cette prière permet d'affecter 70 anges qui enregistreront des bienfaits pendant 1000 jours au nom de celui qui la récite.&quot;
                </p>
              </motion.div>

              {/* Litanie 23: SALATOUL FATIHI (INTÉGRALE) */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-gold/[0.03] border border-gold/20 space-y-10 shadow-xl">
                 <h3 className="text-gold font-black text-sm uppercase tracking-[0.4em] text-center">SALATOUL FATIHI</h3>
                 <p className="font-amiri text-2xl md:text-4xl text-white text-center leading-loose" dir="rtl">
                  اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ وَالْخَاتِمِ لِمَا سَبَقَ نَاصِرِ الْحَقِّ بِالْحَقِّ وَالْهَادِي إِلَى صِرَاطِكَ الْمُسْتَقِيمِ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَعَلَى آلِهِ وَأَصْحَابِهِ حَقَّ قَدْرِهِ وَمِقْدَارِهِ الْعَظِيمِ
                 </p>
                 <div className="text-white/80 font-serif italic text-lg leading-relaxed text-justify space-y-6">
                    <p>« Allahouma salli wassalim wa bârrick hala sayidina wa mawlâna mouhamadine al fâtihi lima ouchlikha wal khâtimi limâ sabakha... »</p>
                    <p className="not-italic font-sans text-emerald-400 font-bold uppercase tracking-widest text-xs text-center border-t border-white/5 pt-8">
                       Celui qui la dit une seule fois dans sa vie ne sera pas jeté dans les feux de l’enfer.
                    </p>
                 </div>
              </motion.div>

              {/* Litanie 27: TASBIHATES (INTÉGRALE) */}
              <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-12 shadow-sm">
                <span className="text-gold font-bold text-[10px] uppercase tracking-widest block border-b border-white/5 pb-4 text-center">Les Tasbihâtes (Hautes Grâces)</span>
                <p className="font-amiri text-xl md:text-2xl text-white text-right leading-loose" dir="rtl">
                  سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ عَدَدَ مَا خَلَقَ اللَّهُ وَعَدَدَ مَا هُوَ خَالِقٌ...
                </p>
                <p className="text-white/40 text-justify text-sm italic pt-8 border-t border-white/5">
                  &quot;Un véridique avait vu en songe un autre véridique mort... Les « Tasbihâtes » se trouvent parmi les grades les plus élevés chez le Tout-Puissant.&quot;
                </p>
              </motion.div>

              {/* Litanie 31: LA GRANDE INVOCATION (TARBIYA) */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-black/60 border border-white/10 space-y-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/40" />
                <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest block">Éducation par le Prophète (Tarbiya)</span>
                <p className="font-amiri text-xl md:text-2xl text-white/90 leading-loose text-justify" dir="rtl">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ عَدَدَ مَا وَسِعَهُ عِلْمُ اللَّهِ... اللَّهُمَّ اجْعَلْهُ يَا رَبِّ رُوحًا لِذَاتِي مِنْ جَمِيعِ الْوُجُوهِ فِي الدُّنْيَا قَبْلَ الْآخِرَةِ يَا عَظِيمُ...
                </p>
                <div className="text-white/40 italic font-serif text-sm border-t border-white/5 pt-8 space-y-4 text-justify">
                  <p>&quot;Cette prière est plus importante que beaucoup d’autres... c’est le Prophète en personne qui éduquera (Tarbiya) celui qui la pratique régulièrement.&quot;</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CONCLUSION FINALE ET SCEAU DE L'OUVRAGE */}
          <motion.section {...fadeInUp} className="relative p-12 md:p-24 rounded-[5rem] bg-gold/[0.02] border-2 border-gold/10 text-center space-y-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
            
            <p className="max-w-3xl mx-auto font-serif italic text-xl md:text-2xl text-white/90 leading-relaxed">
              &quot;Il n’est pas possible de citer toutes les prières ; il suffit d’en choisir une, de la dire régulièrement et dans des conditions de pureté absolue avec tout le sérieux nécessaire ; on en tirera beaucoup de profits dans ce monde et dans l’autre.&quot;
            </p>
            
            <div className="pt-16 space-y-12">
                <p className="font-amiri text-3xl md:text-4xl text-gold-light leading-relaxed">
                  وَاَللَّهُ عَلَى مَا نَقُولُ وَكِيلٌ وَاَللَّهُ يَخْتَصُّ بِرَحْمَتِهِ مَنْ يَشَاءُ وَاَللَّهُ ذُو الْفَضْلِ الْعَظِيمِ <br />
                  سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ وَسَلَامٌ عَلَى الْمُرْسَلِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
                </p>
                <div className="inline-block px-16 py-4 border-y border-gold/20">
                  <span className="text-gold tracking-[1.5em] font-black text-sm uppercase">Louange à Allah — Fin de l'Ouvrage</span>
                </div>
            </div>
          </motion.section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/19/c')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Sommaire Principal</button>
      </nav>
    </main>
  );
}