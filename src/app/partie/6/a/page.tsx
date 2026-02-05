'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function NoddComplet() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "6") || CHAPTERS[5];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section A</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              L'APPEL À <br /> <span className="gold-gradient-text italic font-serif lowercase">la prière</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الأذان - النّدّ</p>

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
          
          {/* 1. INTRODUCTION : COUVERTURE DES PARTIES INTIMES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Prérequis : La couverture</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">A</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-gold/30 pl-8">
                  &quot;Après la purification du corps, des habits et des lieux de prière, il faut cacher au moins ses parties intimes, faute de quoi la prière n’est pas valable. S’il s’agit d’un homme, il doit se couvrir des épaules jusqu’aux genoux. Quant à la femme, elle doit se couvrir tout le corps à l’exception des paumes des mains et du visage. Toute partie devant être couverte et qui ne l’est pas chez l’homme ou la femme annule la prière ; réparation doit être faite alors immédiatement.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 2. LE NODD (STATUT ET DÉFINITION) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Définition et Statut</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6">
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  C’est une pratique traditionnelle (sounna) presque obligatoire pour toute mosquée ou pour tout rassemblement de personnes susceptibles d’en drainer d’autres. Pour celui qui a l’habitude d’annoncer l’heure de la prière, le faire devient pour lui une pratique traditionnelle (sounna), même s’il ne se trouve pas dans une mosquée.
                </p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6">
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  Il est méritoire pour une personner qui se trouve seule en brousse ou dans les champs d’appeler à la prière. Lorsqu’il y a des mosquées dans le même voisinage, l’appel à la prière devient pour chacune d’elles une pratique traditionnelle.
                </p>
              </div>
            </div>
            <div className="p-10 rounded-[3rem] bg-gold/5 border border-gold/10 text-center">
              <p className="max-w-3xl mx-auto text-white/80 font-serif italic text-lg leading-relaxed">
                Pour être valable, l’appel doit être effectué par un homme musulman jouissant de ses facultés mentales. L’appel à la prière effectué par une femme est blâmable. Il est préférable que le muezzin soit un homme qui ait de la retenue (masrur), ayant une bonne notion de l’heure, ayant une voix belle et forte, et soit en état de pureté (ablutions).
              </p>
            </div>
          </section>

          {/* 3. RÈGLES DU MUEZZIN */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Règles du Muezzin</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">آداب المؤذن</span>
            </div>
            <div className="space-y-6">
              {[
                "Durant l’appel, il ne doit pas parler, il ne doit pas saluer quelqu’un, ni répondre à une salutation ; il ne doit l’interrompre sous aucun prétexte.",
                "On ne doit pas appeler à la prière avant l’heure prescrite, sauf pour celle de l’aube (sobh).",
                "Pour cette dernière, il est méritoire de faire l’appel avant l’heure, notamment vers la fin de la sixième et dernière partie de la nuit."
              ].map((text, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex gap-8 items-center group hover:border-gold/20 transition-all">
                  <span className="text-gold font-black opacity-20 text-3xl">{(idx + 1).toString().padStart(2, '0')}</span>
                  <p className="text-lg text-white/70 group-hover:text-white transition-colors font-serif italic leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. SÉQUENCE DE L'APPEL */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Comment appeler à la prière ?</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3.5rem] bg-white/[0.01] border border-white/5">
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  {[
                    { fr: "Alahou akbar", ar: "اللَّهُ أَكْبَرُ", count: "2 fois", style: "Haute voix" },
                    { fr: "Hach hadou ann laa ilaaha ilal lâh", ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ", count: "2 fois", style: "Voix basse" },
                    { fr: "Hach hadou anna Mouhammadan Rassouloulah", ar: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", count: "2 fois", style: "Voix basse" },
                    { fr: "Hach hadou ann laa ilaaha ilal lâh", ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ", count: "2 fois", style: "Haute voix" },
                    { fr: "Hach hadou anna Mouhammadane Rassouloula", ar: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", count: "2 fois", style: "Haute voix" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 group">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-white/30 uppercase font-black tracking-widest">{item.style}</span>
                        <span className="text-white/80 font-serif italic italic text-lg">"{item.fr}"</span>
                      </div>
                      <div className="text-right">
                        <p className="font-amiri text-gold-light text-2xl" dir="rtl">{item.ar}</p>
                        <span className="text-gold/40 text-[10px] font-black">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-8">
                  {[
                    { fr: "Haya halas sala", ar: "حَيَّ عَلَى الصَّلَاةِ", count: "2 fois", style: "Haute voix" },
                    { fr: "Haya alal fala", ar: "حَيَّ عَلَى الْفَلَاحِ", count: "2 fois", style: "Haute voix" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-white/30 uppercase font-black tracking-widest">{item.style}</span>
                        <span className="text-white/80 font-serif italic text-lg">"{item.fr}"</span>
                      </div>
                      <div className="text-right">
                        <p className="font-amiri text-gold-light text-2xl" dir="rtl">{item.ar}</p>
                        <span className="text-gold/40 text-[10px] font-black">{item.count}</span>
                      </div>
                    </div>
                  ))}
                  <div className="p-8 rounded-2xl bg-gold/5 border border-gold/10 space-y-4">
                    <p className="text-gold text-[10px] font-black uppercase tracking-widest">Note pour le Sobh</p>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80 font-serif italic italic text-sm">"Has salâtou khaïroune mina nawmi"</p>
                      <p className="font-amiri text-gold-light text-xl" dir="rtl">الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ</p>
                    </div>
                    <p className="text-[9px] text-white/30 uppercase text-right italic font-black">2 fois - Haute voix</p>
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-white/80 font-serif italic">Allahou akbar (2 fois)</span>
                      <span className="font-amiri text-gold-light text-2xl">اللَّهُ أَكْبَرُ</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-serif italic">Lah ilaha ilal laa (1 fois)</span>
                      <span className="font-amiri text-gold-light text-2xl">لَا إِلَهَ إِلَّا اللَّهُ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. RÉPONSES ET INVOCATIONS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Réponses et Invocations</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[3.5rem] bg-white/[0.02] border border-white/10">
              <p className="text-white/50 text-sm italic text-center mb-16 max-w-2xl mx-auto font-serif">
                &quot;Pendant l’appel à la prière, il est méritoire de reprendre ce que dit le muezzin, seulement, au lieu de dire « haya halas salat » et « haya alal falah », il convient de dire...&quot;
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { trigger: "Au 1er et 2ème 'Laa ilaaha ilallah'", ar: "رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِسَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا وَرَسُولًا", fr: "Rabîtou bilahi rabane wa bil islami dînane wa bi seydina Mouhamadine salâlahou tahala aleyhi wa salama nabîyane wa rassoulane" },
                  { trigger: "Au 1er et 2ème 'Rassouloula'", ar: "مَرْحَبًا بِحَبِيبِي وَقُرَّةِ عَيْنِي سَيِّدِنَا مُحَمَّدِ ابْنِ عَبْدِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", fr: "Marhabane bihabibi wachourrati haïnî seydina Mouhamadine ibni habdilahi salalahou tahala aleyhi wa salama" },
                  { trigger: "Au 'Haya halas sala'", ar: "مَرْحَبًا بِالْقَائِلِينَ عَدْلًا مَرْحَبًا بِالصَّلَاةِ أَهْلًا وَسَهْلًا", fr: "Marhabane bilkhailina hadlane marhabane bi salâti wa heuhlane wa sheuhlane" },
                  { trigger: "Au 'Haya alal fala'", ar: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ", fr: "La hawla wala khouwata illa bilahil haliyil hazimi" },
                  { trigger: "Si muezzin dit (Sobh)", ar: "صَدَقْتَ وَبَرِرْتَ وَأَحْسَنْتَ", fr: "Sadakhta wa barirta wa ahsanta" }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-black/40 border border-white/5 space-y-4">
                    <p className="text-gold text-[10px] font-black uppercase tracking-widest">{item.trigger}</p>
                    <p className="font-amiri text-white text-2xl dir-rtl leading-relaxed">{item.ar}</p>
                    <p className="text-white/40 text-xs italic font-serif leading-relaxed">"{item.fr}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. INVOCATION FINALE */}
          <section className="p-10 md:p-20 rounded-[4rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center">
            <h3 className="text-gold font-black text-xs uppercase tracking-[0.5em] mb-12">Invocation à la fin de l'appel</h3>
            <div className="space-y-12 max-w-4xl mx-auto">
              <p className="font-amiri text-white text-3xl md:text-4xl dir-rtl leading-[2.2]">
                اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ الصَّادِقَةِ النَّافِعَةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ سَيِّدَنَا مُحَمَّدًا صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْوَسِيلَةَ وَالْفَضِيلَةَ وَالدَّرَجَةَ الرَّفِيعَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ. رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ. رَبَّنَا إِنَّكَ مَنْ تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنْصَارٍ. رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا. رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ. رَبَّنَا وَآتِنَا مَا وَعَدْتَنَا عَلَى رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ. لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ. كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ. اللَّهُمَّ أَنْتَ الَّذِي مَنَنْتَ عَلَيَّ بِهَذِهِ الشَّهَادَةِ وَمَا شَهِدْتُ بِهَا إِلَّا لَكَ وَلَا يَقْبَلُهَا غَيْرُكَ مِنِّي. اللَّهُمَّ فَاجْعَلْهَا لِي قُرْبَةً عِنْدَكَ وَحِجَابًا مِنْ نَارِكَ وَاغْفِرْ لِي وَلِوَالِدَيَّ وَلِكُلِّ مُؤْمِنٍ وَمُؤْمِنَةٍ بِرَحْمَتِكَ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.
              </p>
              <p className="text-white/50 text-sm md:text-base font-serif italic italic leading-relaxed text-justify">
                &quot;Alahouma raba hazihid dahwati at tâmmati as sâdikhati ann nafihati was salatil khahimati âti seydina Mouhammadane salalahou tahala aleyhi wa salama alwassîlata wal fadilata wa daradiat ar rafîhata wab ash houl makhama mahmoudal leuzi wa hat tahou rabana ma khalakhta heuza bâtilane. Soubhanaka fakhinâ azaba nâri. Rabana innaka man toudd khilin nâra fa khadd akh zeytahô wamâ lis zâlimina min ann sârine. Rabana innana samihna mounâ diyane younâ di lil imâni anna âminou bi rab bikoume fa âmanâ. Rabana fakhfir lana zounoubana wa kaffir anna sayiâtina wa tawaffana ma al abrari. Rabana wahâtina mâ wa attanâ ala roussoulika wala toukhzina yawmal khiyamati innaka la toukhlifoul mî hâda. Lah ilaha ilal lahou wah dahô la charika lahô. Koullou cheyh ine hâlikoune illa wadj heuhô. Alahouma ann tal leuzi manann ta aleya bi heuzihi ch chahaudati wama chahit toubiha illa laka walâ yata khabbalouha khayrouka minn ni. Alahouma fadjal hâ lî khourbatane indaka wa hidiabane minn nârika wakhfirli wali wâlideyya walikouli mouminina wa mouminatin bi rakhmatika innaka alâ kouli cheyhine khadiroune.&quot;
              </p>
              <div className="pt-12 border-t border-gold/10">
                <div className="inline-block p-6 rounded-2xl bg-gold/10">
                  <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2">Le Mérite promis</p>
                  <p className="text-white/70 text-sm italic font-serif">Celui qui fait cette invocation sera absous de tous ses péchés et ira au paradis sans tourments.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. ENTRÉE ET SORTIE DE LA MOSQUÉE */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/20 space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-rounded text-emerald-500 text-4xl">door_front</span>
                <h3 className="text-white font-black text-xs uppercase tracking-widest">Entrée à la mosquée <br/><span className="text-emerald-500/60 font-medium">(Pied Droit)</span></h3>
              </div>
              <p className="font-amiri text-white text-2xl dir-rtl leading-relaxed">بِسْمِ اللَّهِ اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ اللَّهُمَّ إِنِّي عَبْدُكَ وَزَائِرُكَ وَأَهْلُ كُلِّ مَزُورٍ حَقٌّ عَلَى مَنْ زَارَهُ وَأَنْتَ خَيْرُ مَزُورٍ فَأَسْأَلُكَ اللَّهُمَّ أَنْ تُجِيرَنِي مِنَ النَّارِ وَأَنْ تُدْخِلَنِي الْجَنَّةَ بِغَيْرِ حِسَابٍ</p>
              <p className="text-white/50 text-xs italic font-serif leading-relaxed border-l-2 border-emerald-500/20 pl-6">
                &quot;Bismilahi alahoumif tahli abwâba rahmatika alahouma iniya abdouka wazâirouka wah alâkouti mazourine akhoune wa anta khayrou mazourine fa hasalouka alahouma antoune khizanî mina nâri wa antoudd khilanil djanata bikhaïri hissabine.&quot;
              </p>
            </div>
            <div className="p-12 rounded-[3rem] bg-red-500/[0.02] border border-red-500/20 space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-rounded text-red-500 text-4xl">door_back</span>
                <h3 className="text-white font-black text-xs uppercase tracking-widest">Sortie de la mosquée <br/><span className="text-red-500/60 font-medium">(Pied Gauche)</span></h3>
              </div>
              <p className="font-amiri text-white text-2xl dir-rtl leading-relaxed">بِسْمِ اللَّهِ اللَّهُمَّ افْتَحْ لِي أَبْوَابَ فَضْلِكَ اللَّهُمَّ صُبَّ عَلَيَّ الْخَيْرَ صَبًّا وَلَا تَنْزِعْ عَنِّي صَالِحًا مَا أَعْطَيْتَنِي أَبَدًا وَلَا تَجْعَلْ دُونَكَ إِرَادَةً وَلَا تَجْعَلْ مَعِيشَتِي كَدًّا وَلَا تَجْعَلْنِي لِغَيْرِكَ عَبْدًا وَاجْعَلْ لِي يَا رَبِّ فِي الْأَرْضِ وِدًّا</p>
              <p className="text-white/50 text-xs italic font-serif leading-relaxed border-l-2 border-red-500/20 pl-6">
                &quot;Bismilahi alâhouma if tahli abwâba fadlika alâhouma souba aléyal khaïra sabane wala tanzi hani saliha mâ ahtaïtanî abadane walâ tadj hal douhâ îradane wala tadj hal mahîchatî kadane wala tadj hal ni likhaïrika habdane wadj hal lî yâ rabi fil ardi diadane.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Sommaire VI</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/b')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}