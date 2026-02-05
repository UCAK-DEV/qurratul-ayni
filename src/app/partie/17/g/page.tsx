'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function JoursRecommandesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];
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
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-red-950/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVII — Section G</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LES JOURS <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">recommandés</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الأيام المستحبة</p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <span className="material-symbols-rounded text-4xl text-gold">
                {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
              </span>
              <span className="text-sm font-bold tracking-tight italic font-serif text-white/80">
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        <div className="space-y-24">
          
          {/* 1. CALENDRIER DES JOURS PEU RECOMMANDÉS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Jours peu recommandés</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <motion.div {...fadeInUp} className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 font-serif italic text-lg text-white/80 leading-relaxed text-justify">
              <p>Il est des jours pendant lesquels il est peu recommandé de faire certaines choses :</p>
              <div className="p-10 rounded-[3rem] bg-red-950/[0.05] border border-red-900/20 shadow-sm space-y-8 not-italic font-sans text-sm">
                 <p className="text-red-400 font-bold uppercase tracking-widest text-center border-b border-red-900/10 pb-4">Liste des dates concernées</p>
                 <div className="grid md:grid-cols-2 gap-6 text-white/60">
                   <ul className="space-y-4">
                      <li>• Le 3ᵉ jour, le 5ᵉ jour, le 13ᵉ jour, le 16ᵉ jour, le 24ᵉ jour, le 26ᵉ jour de tout mois ainsi que le dernier mercredi de chaque mois.</li>
                      <li>• Le 12ᵉ jour du mouharam (tamxarit).</li>
                      <li>• Le 10ᵉ jour du digui gamou.</li>
                      <li>• Le 4ᵉ jour du gamou.</li>
                      <li>• Le 18ᵉ jour du raki gamou.</li>
                   </ul>
                   <ul className="space-y-4">
                      <li>• Le 12ᵉ jour du mamou koor et le 12ᵉ jour du ndéyi koor.</li>
                      <li>• Le 16ᵉ jour du baraxlou.</li>
                      <li>• Le 14ᵉ jour du ramadan.</li>
                      <li>• Le 2ᵉ jour du chawal (korité).</li>
                      <li>• Le 18ᵉ jour du digui tabaski et le 18ᵉ jour de tabaski.</li>
                   </ul>
                 </div>
              </div>

              <div className="space-y-8">
                <p>&quot;On évitera durant ces jours de voyager, d’étrenner un vêtement neuf ou non, de joindre une nouvelle maison ou de commencer d’entreprendre quelque chose, ainsi que de nouer un mariage ou de demander à sa femme de rejoindre le domicile conjugal, de se circoncire, de se raser.&quot;</p>
                <p>&quot;Les 15ᵉ et 28ᵉ jours de chaque mois sont des jours à éviter pour demander à sa femme de rejoindre le domicile conjugal et pour voyager.&quot;</p>
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4 text-base">
                  <p>• En plus de ces jours, on évitera de coudre et d’étrenner un vêtement les <strong>mardi</strong>.</p>
                  <p>• On ne se rase pas le <strong>dimanche, le mardi et le mercredi</strong>. On ne lave pas le linge le <strong>samedi et le mercredi</strong>, on ne se lave pas non plus pendant ces jours.</p>
                  <p>• On ne prend pas de congé d’un hôte ou d’un parent le <strong>dimanche et le mercredi</strong>. Il est préférable d’étrenner un vêtement ces jours-ci, le <strong>lundi, le mercredi, le jeudi et le vendredi</strong>.</p>
                  <p>• Il est préférable de se raser les jours suivants : Le <strong>lundi et le samedi</strong>, s’ils ne coïncident pas avec les jours cités ci-dessus (voir dates).</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 2. LE PREMIER JOUR DE L'AN (MOUHARRAM) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le premier jour de l'an</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed">
              <p className="text-center">Il est recommandé de réciter la prière suivante le 1er jour du mois de tamxarit (Mouharram) :</p>
              
              <div className="p-10 rounded-[3.5rem] bg-gold/[0.03] border border-gold/20 space-y-10 shadow-sm not-italic">
                <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                  بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا. اللَّهُمَّ أَنْتَ الأَبَدِيُّ القَدِيمُ الأَوَّلُ، وَعَلَى عَظِيمِ فَضْلِكَ وَكَرِيمِ جُودِكَ المُعَوَّلُ، وَهَذَا عَامٌ جَدِيدٌ قَدْ أَقْبَلَ، أَسْأَلُكَ العِصْمَةَ فِيهِ مِنَ الشَّيْطَانِ وَأَوْلِيَائِهِ وَجُنُودِهِ، وَالعَوْنَ عَلَى هَذِهِ النَّفْسِ الأَمَّارَةِ بِالسُّوءِ، وَالاشْتِغَالَ بِمَا يُقَرِّبُنِي إِلَيْكَ زُلْفَى يَا كَرِيمُ يَا ذَا الجَلالِ وَالإِكْرَامِ، وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا.
                </p>
                <div className="p-8 bg-black/40 rounded-3xl border border-white/5">
                  <span className="text-gold font-black text-[9px] uppercase tracking-[0.4em] block mb-4">Transcription (3 fois)</span>
                  <p className="text-white/40 text-xs leading-relaxed italic">« Bismilahi rahmani rahimi wasalla lahou hala sayidina mouhamadine wa alla alihi wa sahbihi wa salama taslimane allahouma antal abadiyoul khadimouhawalou wa hala hazîmi fadlika wa karamidi odikal mouhawalou wa hâzâ hâmoune diadîdoune khadakhbala as aloukal hismata fîhi mina chaytâni wa awliyâ îhi wa diounoudi hi wal hawna hala hâzihim nafsi lamârati hi sôhi wal istikhâla bimâ youkhari bounî ilaï ka zoulfayi yâ karîmou yasal dialâli wa likrâmi wa salla lahou hala seydina mouhamadine wa ala alihi wa sahbihi wa salama taslimane »</p>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5 space-y-12">
                <p>Celui qui récite le premier jour de l’an le verset « ayatoul koursiyou » (360 fois), précédé chaque fois de « Bismilahi rahmani rahimi », et qui après dit ce qui suit :</p>
                <div className="p-10 rounded-3xl bg-gold/[0.05] border border-gold/10 space-y-8 not-italic">
                  <p className="font-amiri text-2xl md:text-3xl text-gold-light text-right leading-relaxed" dir="rtl">اللَّهُمَّ يَا مُحَوِّلَ الأَحْوَالِ حَوِّلْ حَالِي إِلَى أَحْسَنِ الأَحْوَالِ بِحَوْلِكَ وَقُوَّتِكَ يَا عَزِيزُ يَا مُتَعَالِي</p>
                  <p className="text-white/50 text-center italic text-sm">« Allahouma yâ mouhawila ahwâli hawil hâli ila ahsâni alhwâli bihawlika wa khouwatika ya hazizou yâ moutahâli » et salla lahou ala sayidina mouhamadine wa ala alihi wa sahbihi wa salama taslimane.</p>
                </div>
                <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-100/80 text-center shadow-lg">
                  Dieu le préservera des calamités de l’année, de même que celui qui écrit « Bismilahi rahmani rahimi » (113 fois) et le porte, Dieu le préservera de toutes les calamités sa vie durant.
                </div>
              </div>
            </motion.div>
          </section>

          {/* 3. NUIT DU 9 AU 10 TAMXARIT */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Nuit du 9 au 10 Tamxarit</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 font-serif italic text-lg text-white/80 leading-relaxed text-justify">
              <p>Dans la nuit du 9 au 10 du mois de Tamxarit, celui qui, après ses ablutions, effectue 2 rakas, reste sur ses genoux face à la kibla (Kaaba) en récitant le verset « ayatoul koursiyou » (360 fois), précédé à chaque fois de « Bismilahi rahmani rahimi », puis dit ce qui suit :</p>
              
              <div className="space-y-12 not-italic">
                <div className="space-y-4">
                  <p className="font-amiri text-2xl text-white text-right" dir="rtl">قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَلِكَ فَلْيَفْرَحُوا هُوَ خَيْرٌ مِمَّا يَجْمَعُونَ</p>
                  <p className="text-gold-light italic text-sm">« Koul bi fadli lâhi wa bi rahmatihî fa bisālika fal yafrahô houwa khaïroune minā yadjmahôna » (48 fois).</p>
                </div>

                <div className="space-y-6 pt-10 border-t border-white/5">
                  <p className="text-white/60 text-center italic text-base">Ensuite il ajoute (12 fois) :</p>
                  <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">اللَّهُمَّ إِنَّ هَذِهِ لَيْلَةٌ جَدِيدَةٌ وَسَنَةٌ جَدِيدَةٌ فَأَعْطِنِي اللَّهُمَّ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَاصْرِفْ عَنِّي شَرَّهَا وَشَرَّ مَا فِيهَا وَشَرَّ فِتْنَتِهَا وَمُحْدَثَاتِهَا وَشَرَّ نَفْسِي وَالهَوَى وَالشَّيْطَانِ الرَّجِيمِ</p>
                  <p className="text-white/40 text-xs italic leading-relaxed">« Allahouma ina hazihi laylatoune diadidatoune wa sanatoune diadidatoune fa ahtini allahouma khaïraha wa khairama fîha wassîf hâni charahâ wa charama fihâ et charafit natiha wa mouhda châtihâ wa chara nafsi wal hawâ wa chaytanir radjimi »</p>
                </div>

                <div className="space-y-6 pt-10 border-t border-white/5">
                  <p className="font-amiri text-2xl text-white text-right" dir="rtl">سُبْحَانَ اللهِ وَالحَمْدُ للهِ وَلا إِلَهَ إِلا اللهُ وَاللهُ أَكْبَرُ وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللهِ العَلِيِّ العَظِيمِ</p>
                  <p className="text-white/40 text-xs italic">« Soubhana lahi wal hamdoulilahi wa lahi laha ila lahou wa lahou akbar wala hawla wala khouwata ila bilahi halyil hazîmi » (autant de fois).</p>
                </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-emerald-950/10 border border-emerald-500/20 text-center space-y-8">
                <p>&quot;Enfin, il prie sur le Prophète (P.S.L.) : « Sallalahou tahala haleyhi wa hala halini wa sahbihi wa salama taslimane » autant de fois qu’il le peut et il termine par des prières pour lui et pour tous les autres musulmans.&quot;</p>
                <p className="text-white font-bold border-t border-emerald-500/20 pt-8 italic">&quot;Dieu le protégera contre tous les maux de toute l’année.&quot;</p>
              </div>

              <div className="p-8 rounded-3xl bg-black/40 border border-white/5 text-center text-base">
                De même, celui qui écrit ce qui suit et le met dans de l’eau de pluie ou puisée d’un puits et en fait du « safara », celui qui boira de ce breuvage, Dieu le préservera de toutes les calamités possibles (voir annexe n° XVIII) : <br /><span className="text-gold font-black not-italic uppercase text-[10px] tracking-widest mt-4 block">Fatiha + ayatoul koursiyou + ikhlas + nasi</span>
              </div>
            </motion.div>
          </section>

          {/* 4. TAMXARIT (ACHOURA) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Yawmou Achoura</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>

            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed text-justify">
              <p className="text-center font-sans not-italic text-emerald-400 font-bold uppercase text-xs tracking-[0.2em] mb-8">Les 11 recommandations du 10e jour</p>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-white/60">
                {[
                  "Jeûner.", "Visiter les parents.", "Visiter un malade.",
                  "Prière de 4 rakas (Fatiha 1x + Koul allahou 15x).",
                  "Donner l’aumône.", "Se tailler les ongles.",
                  "Caresser la tête d’un orphelin.", "Mettre du kohl.",
                  "Visiter un savant.", "Réjouissances familiales.",
                  "Réciter « Koul houwa allahou » (1000 fois)."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 border-b border-white/[0.03] pb-2 not-italic font-sans text-sm">
                    <span className="text-emerald-500 font-black">{i+1}.</span> {item}
                  </div>
                ))}
              </div>

              <div className="p-10 rounded-[3.5rem] bg-black/60 border border-emerald-500/20 space-y-10 shadow-xl not-italic">
                 <p className="text-center text-xs uppercase tracking-[0.4em] text-emerald-400">Invocation Protectrice (70 fois)</p>
                 <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">حَسْبُنَا اللَّهُ وَنِعْمَ الوَكِيلُ نِعْمَ المَوْلَى وَنِعْمَ النَّصِيرُ</p>
                 <p className="text-white/40 text-center text-xs italic">« Hasbouna lahou wa nihmal wakiklou nihmal mawla wa nihman nassirou »</p>
                 
                 <div className="h-[1px] bg-white/5 w-full" />
                 
                 <p className="text-center text-xs uppercase tracking-[0.4em] text-emerald-400">Lire ensuite 7 fois :</p>
                 <p className="font-amiri text-xl md:text-2xl text-white/90 text-right leading-loose" dir="rtl">
                  سُبْحَانَ اللَّهِ مِلْءَ المِيزَانِ وَمُنْتَهَى العِلْمِ وَمَبْلَغَ الرِّضَا وَعَدَدَ النِّعَمِ وَزِنَةَ العَرْشِ لا مَلْجَأَ وَلا مَنْجَا مِنَ اللَّهِ إِلا إِلَيْهِ سُبْحَانَ اللَّهِ عَدَدَ الشَّفْعِ وَالوَتْرِ وَعَدَدَ كَلِمَاتِ اللَّهِ التَّامَّاتِ كُلِّهَا أَسْأَلُكَ السَّلامَةَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ العَلِيِّ العَظِيمِ وَهُوَ حَسْبِي وَنِعْمَ الوَكِيلُ نِعْمَ المَوْلَى وَنِعْمَ النَّصِيرُ وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا
                 </p>
                 <p className="text-white/30 text-[10px] text-center leading-relaxed">« Soubhana lahi mil almizani moun tahal hilmi... »</p>
              </div>
            </motion.div>
          </section>

          {/* 5. SAFAR ET CHAHBÂNE */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Safar & Chahbâne</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 not-italic">
              <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-8 flex flex-col group hover:border-gold/30 transition-all">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Dernier Mercredi de Safar</h3>
                <p className="text-white/60 font-serif italic text-base leading-relaxed flex-1 text-justify">
                  &quot;Effectuer 4 rakas : Fatiha 1x, Al Kaw sara 17x, Koul houwa allahou 5x, Falakhi 1x, Nassi 1x. Puis après le salut, invoquer Dieu 3 fois pour se préserver des calamités du mois (doua Chadidal khouwâ).&quot;
                </p>
              </motion.div>
              
              <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-8 flex flex-col group hover:border-gold/30 transition-all">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Nuit du 14 au 15 Chahbâne</h3>
                <p className="text-white/60 font-serif italic text-base leading-relaxed flex-1 text-justify">
                  &quot;Lire Yâcine 3 fois. 1er : Longévité. 2e : Protection contre les calamités. 3e : Indépendance matérielle. Suivi de l'invocation Yazal Mani (3 fois).&quot;
                </p>
              </motion.div>
            </div>
          </section>

          {/* 6. DERNIER JOUR DE L'AN */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-gold/[0.03] border border-gold/20 space-y-12 text-center relative overflow-hidden">
            <h2 className="text-gold font-black text-xs uppercase tracking-[0.4em]">Le dernier jour de l'an</h2>
            <p className="text-white/80 font-serif italic text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
               &quot;Pour le dernier jour de l’an, il est recommandé de dire cette invocation (3 fois) pour obtenir le pardon de l’année écoulée.&quot;
            </p>
            <div className="p-10 rounded-[3rem] bg-black/40 border border-white/5 space-y-8">
               <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ اللَّهُمَّ مَا عَمِلْتُ فِي هَذِهِ السَّنَةِ مِمَّا نَهَيْتَنِي عَنْهُ فَلَمْ أَتُبْ مِنْهُ وَلَمْ تَرْضَهُ... فَأَسْأَلُكَ اللَّهُمَّ يَا كَرِيمُ يَا ذَا الجَلالِ وَالإِكْرَامِ أَنْ تَتَقَبَّلَهُ مِنِّي...
               </p>
               <p className="text-white/40 text-xs italic">« Bismilahi rahmāni rahīmī allahouma mā hamiltou fī hāzihis sanati... »</p>
            </div>
          </motion.section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/17/f')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/17/h')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}