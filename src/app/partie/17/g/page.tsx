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
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_10px_#D4AF37]" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Section G</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LES JOURS <br />
          <span className="gold-gradient-text italic text-2xl md:text-6xl uppercase tracking-normal">Recommandés</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">الأيام المستحبة</p>

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

      <div className="max-w-5xl mx-auto space-y-12 relative z-10 font-serif italic text-lg leading-relaxed text-white/80">
        
        {/* 1. JOURS PEU RECOMMANDÉS */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] not-italic font-sans mb-8">Jours peu recommandés</h2>
          <p>Il est des jours pendant lesquels il est peu recommandé de faire certaines choses :</p>
          <p className="font-bold text-white">Ces jours sont :</p>
          <ul className="space-y-2 list-disc ml-6">
            <li>Le 3ᵉ jour, le 5ᵉ jour, le 13ᵉ jour, le 16ᵉ jour, le 24ᵉ jour, le 26ᵉ jour de tout mois ainsi que le dernier mercredi de chaque mois.</li>
            <li>Le 12ᵉ jour du mouharam (tamxarit).</li>
            <li>Le 10ᵉ jour du digui gamou.</li>
            <li>Le 4ᵉ jour du gamou.</li>
            <li>Le 18ᵉ jour du raki gamou.</li>
            <li>Le 12ᵉ jour du mamou koor et le 12ᵉ jour du ndéyi koor.</li>
            <li>Le 16ᵉ jour du baraxlou.</li>
            <li>Le 14ᵉ jour du ramadan.</li>
            <li>Le 2ᵉ jour du chawal (korité).</li>
            <li>Le 18ᵉ jour du digui tabaski.</li>
            <li>Le 18ᵉ jour de tabaski.</li>
          </ul>
          <p className="bg-red-950/10 p-6 rounded-2xl border border-red-500/10">
            On évitera durant ces jours de voyager, d’étrenner un vêtement neuf ou non, de joindre une nouvelle maison ou de commencer d’entreprendre quelque chose, ainsi que de nouer un mariage ou de demander à sa femme de rejoindre le domicile conjugal, de se circoncire, de se raser.
          </p>
          <p>Les 15ᵉ et 28ᵉ jours de chaque mois sont des jours à éviter pour demander à sa femme de rejoindre le domicile conjugal et pour voyager.</p>
          <p>En plus de ces jours, on évitera de coudre et d’étrenner un vêtement les mardi.</p>
          <p>On ne se rase pas le dimanche, le mardi et le mercredi. On ne lave pas le linge le samedi et le mercredi, on ne se lave pas non plus pendant ces jours.</p>
          <p>On ne prend pas de congé d’un hôte ou d’un parent le dimanche et le mercredi. Il est préférable d’étrenner un vêtement ces jours-ci, le lundi, le mercredi, le jeudi et le vendredi.</p>
          <p>Il est préférable de se raser les jours suivants : Le lundi et le samedi, s’ils ne coïncident pas avec les jours cités ci-dessus (voir dates).</p>
        </motion.section>

        {/* 2. LE PREMIER JOUR DE L'AN */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] not-italic font-sans">Le premier jour de l'an</h2>
          <p>Il est recommandé de réciter la prière suivante le 1er jour du mois de tamxarit (Mouharram) :</p>
          
          <div className="space-y-6">
            <p className="font-amiri text-2xl text-white text-right leading-relaxed dir-rtl">
              بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا. اللَّهُمَّ أَنْتَ الأَبَدِيُّ القَدِيمُ الأَوَّلُ، وَعَلَى عَظِيمِ فَضْلِكَ وَكَرِيمِ جُودِكَ المُعَوَّلُ، وَهَذَا عَامٌ جَدِيدٌ قَدْ أَقْبَلَ، أَسْأَلُكَ العِصْمَةَ فِيهِ مِنَ الشَّيْطَانِ وَأَوْلِيَائِهِ وَجُنُودِهِ، وَالعَوْنَ عَلَى هَذِهِ النَّفْسِ الأَمَّارَةِ بِالسُّوءِ، وَالاشْتِغَالَ بِمَا يُقَرِّبُنِي إِلَيْكَ زُلْفَى يَا كَرِيمُ يَا ذَا الجَلالِ وَالإِكْرَامِ، وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl text-sm text-white/50">
              « Bismilahi rahmani rahimi wasalla lahou hala sayidina mouhamadine wa alla alihi wa sahbihi wa salama taslimane allahouma antal abadiyoul khadimouhawalou wa hala hazîmi fadlika wa karamidi odikal mouhawalou wa hâzâ hâmoune diadîdoune khadakhbala as aloukal hismata fîhi mina chaytâni wa awliyâ îhi wa diounoudi hi wal hawna hala hâzihim nafsi lamârati hi sôhi wal istikhâla bimâ youkhari bounî ilaï ka zoulfayi yâ karîmou yasal dialâli wa likrâmi wa salla lahou hala seydina mouhamadine wa ala alihi wa sahbihi wa salama taslimane » (3 fois).
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/5">
            <p>Celui qui récite le premier jour de l’an le verset « ayatoul koursiyou » (360 fois), précédé chaque fois de « Bismilahi rahmani rahimi », et qui après dit ce qui suit :</p>
            <p className="font-amiri text-2xl text-white text-right dir-rtl">اللَّهُمَّ يَا مُحَوِّلَ الأَحْوَالِ حَوِّلْ حَالِي إِلَى أَحْسَنِ الأَحْوَالِ بِحَوْلِكَ وَقُوَّتِكَ يَا عَزِيزُ يَا مُتَعَالِي</p>
            <p className="text-white/60">« Allahouma yâ mouhawila ahwâli hawil hâli ila ahsâni alhwâli bihawlika wa khouwatika ya hazizou yâ moutahâli » et salla lahou ala sayidina mouhamadine wa ala alihi wa sahbihi wa salama taslimane.</p>
            <p className="bg-emerald-950/20 p-6 rounded-2xl text-emerald-100">Dieu le préservera des calamités de l’année, de même que celui qui écrit « Bismilahi rahmani rahimi » (113 fois) et le porte, Dieu le préservera de toutes les calamités sa vie durant.</p>
          </div>
        </motion.section>

        {/* 3. NUIT DU 9 AU 10 TAMXARIT */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] not-italic font-sans">La nuit du 9 au 10 du mois de Tamxarit</h2>
          <p>Dans la nuit du 9 au 10 du mois de Tamxarit, celui qui, après ses ablutions, effectue 2 rakas, reste sur ses genoux face à la kibla (Kaaba) en récitant le verset « ayatoul koursiyou » (360 fois), précédé à chaque fois de « Bismilahi rahmani rahimi », puis dit ce qui suit :</p>
          
          <p className="font-amiri text-2xl text-white text-right dir-rtl">قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَلِكَ فَلْيَفْرَحُوا هُوَ خَيْرٌ مِمَّا يَجْمَعُونَ</p>
          <p className="text-white/60">« Koul bi fadli lâhi wa bi rahmatihî fa bisâlika fal yafrahô houwa khaïroune minâ yadjmahôna » (48 fois).</p>

          <p>Ensuite il ajoute :</p>
          <p className="font-amiri text-2xl text-white text-right dir-rtl leading-relaxed">اللَّهُمَّ إِنَّ هَذِهِ لَيْلَةٌ جَدِيدَةٌ وَسَنَةٌ جَدِيدَةٌ فَأَعْطِنِي اللَّهُمَّ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَاصْرِفْ عَنِّي شَرَّهَا وَشَرَّ مَا فِيهَا وَشَرَّ فِتْنَتِهَا وَمُحْدَثَاتِهَا وَشَرَّ نَفْسِي وَالهَوَى وَالشَّيْطَانِ الرَّجِيمِ</p>
          <p className="text-white/60 text-sm">« Allahouma ina hazihi laylatoune diadidatoune wa sanatoune diadidatoune fa ahtini allahouma khaïraha wa khairama fîha wassîf hâni charahâ wa charama fihâ et charafit natiha wa mouhda châtihâ wa chara nafsi wal hawâ wa chaytanir radjimi » (12 fois).</p>

          <p>Et encore :</p>
          <p className="font-amiri text-2xl text-white text-right dir-rtl">سُبْحَانَ اللهِ وَالحَمْدُ للهِ وَلا إِلَهَ إِلا اللهُ وَاللهُ أَكْبَرُ وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللهِ العَلِيِّ العَظِيمِ</p>
          <p className="text-white/60">« Soubhana lahi wal hamdoulilahi wa lahi laha ila lahou wa lahou akbar wala hawla wala khouwata ila bilahi halyil hazîmi » autant de fois.</p>

          <p>Enfin, il prie sur le Prophète (P.S.L.) : « Sallalahou tahala haleyhi wa hala halini wa sahbihi wa salama taslimane » autant de fois qu’il le peut et il termine par des prières pour lui et pour tous les autres musulmans. Dieu le protégera contre tous les maux de toute l’année.</p>
          <p>De même, celui qui écrit ce qui suit et le met dans de l’eau de pluie ou puisée d’un puits et en fait du « safara », celui qui boira de ce breuvage, Dieu le préservera de toutes les calamités possibles (voir annexe n° XVIII) : « Fatiha + ayatoul koursiyou + ikhlas + nasi ».</p>
        </motion.section>

        {/* 4. TAMXARIT (ACHOURA) */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] not-italic font-sans">TAMXARIT (YAWMOU ACHOURA)</h2>
          <p>Il est recommandé, à partir du 10ᵉ jour de la Tamxarit, de :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 list-decimal ml-6">
              <li>Jeûner.</li>
              <li>Développer les liens de parenté en rendant visite aux parents.</li>
              <li>Rendre visite à un malade.</li>
              <li>Effectuer une prière comprenant 4 rakas, pour chacun d’eux, réciter la « Fatiha » (1 fois) et « Koul allahou » (15 fois).</li>
              <li>Donner de l’aumône.</li>
              <li>Se tailler les ongles.</li>
            </ul>
            <ul className="space-y-2 list-decimal ml-6">
              <li value={7}>Caresser la tête d’un orphelin musulman.</li>
              <li>Mettre du kohl autour des yeux.</li>
              <li>Rendre visite à un savant musulman.</li>
              <li>Créer la réjouissance des membres de sa famille par des repas somptueux.</li>
              <li>Réciter la sourate « Koul houwa allahou » (1000 fois).</li>
            </ul>
          </div>
          <p>Dire 70 fois les paroles suivantes :</p>
          <p className="font-amiri text-2xl text-white text-right dir-rtl">حَسْبُنَا اللَّهُ وَنِعْمَ الوَكِيلُ نِعْمَ المَوْلَى وَنِعْمَ النَّصِيرُ</p>
          <p className="text-white/60">« Hasbouna lahou wa nihmal wakiklou nihmal mawla wa nihman nassirou »</p>
          <p>puis lire 7 fois le texte suivant :</p>
          <p className="font-amiri text-xl text-white text-right dir-rtl leading-relaxed">سُبْحَانَ اللَّهِ مِلْءَ المِيزَانِ وَمُنْتَهَى العِلْمِ وَمَبْلَغَ الرِّضَا وَعَدَدَ النِّعَمِ وَزِنَةَ العَرْشِ لا مَلْجَأَ وَلا مَنْجَا مِنَ اللَّهِ إِلا إِلَيْهِ سُبْحَانَ اللَّهِ عَدَدَ الشَّفْعِ وَالوَتْرِ وَعَدَدَ كَلِمَاتِ اللَّهِ التَّامَّاتِ كُلِّهَا أَسْأَلُكَ السَّلامَةَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ العَلِيِّ العَظِيمِ وَهُوَ حَسْبِي وَنِعْمَ الوَكِيلُ نِعْمَ المَوْلَى وَنِعْمَ النَّصِيرُ وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا</p>
          <p className="text-white/40 text-xs">« Soubhana lahi mil almizani moun tahal hilmi wa mablakhar rida wa hadada nihami wa zinatal harchi lamaldia wala mandia mina lahi ila ileyhi soubhanalahî hadada chafhi wal watri wa hadada kalimmâti lahi tâmâti koulihâ as aloukas sallamata birahmati ka ya ar hamar râhimina wala hawla wala khouwata ila bilahi halyil hazime wa houwa hasbî wa nihmal wakilou nihmal mawla wa nihman nassirou et sala lahou hala sayidina mouhamadine wa ala alihi wa sahbihi wa salama taslimane ».</p>
        </motion.section>

        {/* 5. DERNIER MERCREDI DE SAFAR */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] not-italic font-sans">LE DERNIER MERCREDI DU MOIS DE SAFAR (ALARBA KARÉ)</h2>
          <p>Le dernier mercredi du mois de diggi gamou (Safar), il est recommandé : D’effectuer 4 rakas pour chacun d’eux, réciter la « Fatiha » (1 fois) suivie de la sourate « Al kaw sara » (17 fois), la sourate « Koul houwa allahou » (5 fois), suivie de la sourate « Falakhi » et la sourate « Nassi » (1 fois chacune).</p>
          <p>Après le salut final, on dit (3 fois) l’invocation :</p>
          <p className="font-amiri text-xl text-white text-right dir-rtl leading-relaxed">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ اللَّهُمَّ يَا شَدِيدَ القُوَى وَيَا شَدِيدَ المِحَالِ يَا عَزِيزُ يَا مَنْ ذَلَّتْ لِعِزَّتِكَ جَمِيعُ خَلْقِكَ اكْفِنِي شَرَّ جَمِيعِ خَلْقِكَ يَا مُحْسِنُ يَا مُجْمِلُ يَا مُنْعِمُ يَا مُتَفَضِّلُ يَا مُكَرِّمُ يَا مَنْ لا إِلَهَ إِلا أَنْتَ ارْحَمْنِي بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ. اللَّهُمَّ بِسِرِّ الحَسَنِ وَأَخِيهِ وَجَدِّهِ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ وَأَبِيهِ وَأُمِّهِ وَبَنِيهِ اكْفِنِي شَرَّ هَذَا اليَوْمِ وَمَا يَنْزِلُ فِيهِ يَا كَافِيَ المُهِمَّاتِ وَيَا دَافِعَ البَلاءِ فَسَيَكْفِيكَهُمُ اللَّهُ وَهُوَ السَّمِيعُ العَلِيمُ وَحَسْبُنَا اللَّهُ وَنِعْمَ الوَكِيلُ نِعْمَ المَوْلَى وَنِعْمَ النَّصِيرُ</p>
          <p className="text-white/40 text-xs">« Bismilahi rahmani rahimi allahouma yâ chadidal khouwâ wa yâ chadidal mihâli yâ azizou yâ manezalat li hizatika diamihou khalkhi ka ikfinî chara diamihi khalkhika yâ mouhsinou yâ moudjmîlou yâ mounhimou yâ moutafadilou yâ moukarimou yâ mane la ilaha ila anta irhamini birahmatika yâ aswa hamar rahimina... »</p>
          <p className="font-amiri text-xl text-white text-right dir-rtl leading-relaxed italic">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ هَذَا الشَّهْرِ وَمِنْ كُلِّ شِدَّةٍ وَبَلاءٍ وَبَلِيَّةٍ الَّتِي قَدَّرْتَ فِيهِ يَا دَهْرِيُّ يَا دَيْهُورُ يَا دَيْهَارُ يَا كَانُ يَا كَيْنُونُ يَا أَبَدِيُّ يَا دَهْرِيُّ يَا مُبْدِئُ يَا مُعِيدُ يَا ذَا العَرْشِ المَجِيدِ أَنْتَ تَفْعَلُ مَا تُرِيدُ</p>
          <p className="font-amiri text-xl text-white text-right dir-rtl leading-relaxed italic">اللَّهُمَّ احْرُسْ نَفْسِي وَأَهْلِي وَمَالِي وَأَوْلادِي وَدُنْيَايَ الَّتِي ابْتَلَيْتَنِي بِصُحْبَتِهَا بِحُرْمَةِ الأَبْرَارِ بِحُرْمَتِكَ يَا عَزِيزُ يَا غَفَّارُ يَا كَرِيمُ يَا سَتَّارُ وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا</p>
        </motion.section>

        {/* 6. NUIT DU 14 AU 15 CHAHBÂNE */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] not-italic font-sans">LA NUIT DU 14 AU 15 DU MOIS DE CHAHBÂNE</h2>
          <p>La nuit du 14 au 15 du mois de baraxlou (Chabanne), il est recommandé de lire la sourate « Yâcine » (3 fois).</p>
          <ul className="space-y-2 list-disc ml-6">
            <li>Pour le premier « Yâcine », formuler le vœu que Dieu nous accorde une longue vie.</li>
            <li>Pour le deuxième, qu’il nous protège contre toutes les calamités.</li>
            <li>Pour le troisième, qu’il nous accorde suffisamment de biens afin de nous rendre totalement indépendants des autres.</li>
          </ul>
          <p>Après cela, on dit (3 fois) l’invocation suivante :</p>
          <p className="font-amiri text-xl text-white text-right dir-rtl leading-relaxed">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ اللَّهُمَّ يَا ذَا المَنِّ وَلا يُمَنُّ عَلَيْهِ يَا ذَا الجَلالِ وَالإِكْرَامِ يَا ذَا الطَّوْلِ وَالإِنْعَامِ يَا مَنْ لا إِلَهَ إِلا أَنْتَ ظَهْرَ اللاجِئِينَ وَجَارَ المُسْتَجِيرِينَ وَمَأْمَنَ الخَائِفِينَ. اللَّهُمَّ إِنْ كُنْتَ كَتَبْتَنِي عِنْدَكَ فِي أُمِّ الكِتَابِ شَقِيًّا أَوْ مَحْرُومًا أَوْ مَطْرُودًا أَوْ مُقَتَّرًا عَلَيَّ رِزْقِي وَثَبِّتْنِي عِنْدَكَ فِي أُمِّ الكِتَابِ سَعِيدًا مَرْزُوقًا مُوَفَّقًا لِلْخَيْرَاتِ فَإِنَّكَ قُلْتَ وَقَوْلُكَ الحَقُّ فِي كِتَابِكَ المُنْزَلِ عَلَى لِسَانِ نَبِيِّكَ المُرْسَلِ يَمْحُو اللَّهُ مَا يَشَاءُ وَيُثْبِتُ وَعِنْدَهُ أُمُّ الكِتَابِ. إِلَهِي بِالتَّجَلِّي الأَعْظَمِ فِي لَيْلَةِ النِّصْفِ مِنْ شَعْبَانَ المُكَرَّمِ الَّتِي فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ وَيُبْرَمُ اكْشِفْ عَنِّي مِنَ البَلاءِ مَا أَعْلَمُ وَمَا لا أَعْلَمُ وَاغْفِرْ لِي مَا أَنْتَ بِهِ أَعْلَمُ وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا</p>
          <p className="text-white/40 text-xs">« Bismilahi rahmani rahimi allahouma yazal mani wala youmanou haleyhi yasal dialali wa likrami... »</p>
        </motion.section>

        {/* 7. DERNIER JOUR DE L'AN */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8 pb-12">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] not-italic font-sans">LE DERNIER JOUR DE L’AN</h2>
          <p>Pour le dernier jour de l’an, il est recommandé de dire cette invocation (3 fois) :</p>
          <p className="font-amiri text-xl text-white text-right dir-rtl leading-relaxed">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ اللَّهُمَّ مَا عَمِلْتُ فِي هَذِهِ السَّنَةِ مِمَّا نَهَيْتَنِي عَنْهُ فَلَمْ أَتُبْ مِنْهُ وَلَمْ تَرْضَهُ وَنَسِيتُهُ وَلَمْ تَنْسَهُ وَحَلُمْتَ عَلَيَّ بَعْدَ قُدْرَتِكَ عَلَى عُقُوبَتِي وَدَعَوْتَنِي إِلَى التَّوْبَةِ مِنْهُ بَعْدَ جَرَاءَتِي عَلَى مَعْصِيَتِكَ إِنِّي أَسْتَغْفِرُكَ مِنْهُ فَاغْفِرْ لِي وَمَا عَمِلْتُ فِيهَا مِمَّا تَرْضَاهُ وَوَعَدْتَنِي عَلَيْهِ الثَّوَابَ فَأَسْأَلُكَ اللَّهُمَّ يَا كَرِيمُ يَا ذَا الجَلالِ وَالإِكْرَامِ أَنْ تَتَقَبَّلَهُ مِنِّي وَلا تَقْطَعْ رَجَائِي مِنْكَ يَا كَرِيمُ وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا</p>
          <p className="text-white/40 text-xs">« Bismilahi rahmâni rahîmî allahouma mâ hamiltou fî hâzihis sanati mimâ nahaïtanî hanhou... »</p>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17/f')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/17/h')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}