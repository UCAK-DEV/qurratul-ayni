'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SouratesEtVersetsPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 19 (index 18)
  const chapterData = CHAPTERS.find(c => c.id === "19") || CHAPTERS[18];

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
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-emerald-900/10 blur-[100px] md:blur-[120px] rounded-full" />
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XIX — Section C</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          SOURATES ET <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Versets</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">فضائل السور والآيات</p>

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
        
        {/* SECTION 1: LES BIENFAITS DES SOURATES */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-6">Sur quelques sourates et versets</h2>
          <div className="space-y-6 text-white/80 italic font-serif text-lg leading-relaxed">
            <p>Les sourates « Bakhara » et « Imrane » intercèderont auprès de Dieu le jour du Jugement en faveur de celui qui les lit régulièrement ici-bas.</p>
            <p>La lecture de la sourate « Bakhara » dans une chambre constitue un rempart contre satan et les djinns pendant une durée de 3 jours.</p>
            <p>La lecture des sourates « Bakhara » et « Imrane » pendant une nuit permettra à son auteur de faire partie des hommes les plus pieux sur terre.</p>
            <p>Si on lit la sourate « Imrane » le vendredi, tous les anges s’emploieront à prier (gnanal) pour nous jusqu’au coucher du soleil.</p>
            <p>La lecture du verset « Ayatoul koursiyou » (4 fois) équivaut à la lecture du Coran en entier.</p>
            <p>La lecture du dernier verset de la sourate « Imrane » pendant la nuit équivaut à passer la nuit à prier.</p>
          </div>
        </motion.section>

        {/* SECTION 2: LES SIX VERSETS IMPORTANTS */}
        <motion.section {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-8">
          <p className="text-white/80 italic font-serif text-lg leading-relaxed">Les six versets suivants ont la même importance que 1 000 autres versets, il s’agit de :</p>
          
          <div className="space-y-8">
            {[
              {
                fr: "1… Bismilahi rahmani rahimi sabbaha lilahi mafi samawati walardi wa houwa azizoul akimou",
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ"
              },
              {
                fr: "2… Leuhô moulkou samawati walardi youh yî wa youmîtou wa houwa hala koulli chaîne khadiroune",
                ar: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
              },
              {
                fr: "3… Houwalawalou walakhirou wazâhirou wa bâtinou wa houwa bi koulli chayine halimoune",
                ar: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ"
              },
              {
                fr: "4… Houwa leuzi khalakhas samawati walardi fi sitati ayâmine soumas tawa halal harchi yahlamou mâ yaloudiou filardi wama yahridiou mine hâ wama yannzilou mina samâ-i wamâ yahroudiou fîhâ wa houwa maahakoumo aïna mâ koutoume wa lahou bimâ tahmalôna bassîroune",
                ar: "هُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَى عَلَى الْعَرْشِ يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنْزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا وَهُوَ مَعَكُمْ أَيْنَ مَا كُنْتُمْ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ"
              },
              {
                fr: "5… Leuho moulkous samawati walardi wa ila lahi tourdiahoul oumôrou",
                ar: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ"
              },
              {
                fr: "6… yôtidioul laïla fi nahâri wa yôlidioun nahara fi laïli wa houwa halimou bizati soudouri",
                ar: "يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ وَهُوَ عَلِيمٌ بِذَاتِ الصُّدُورِ"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/20 p-6 rounded-2xl border-l-4 border-gold space-y-4">
                <p className="font-amiri text-2xl text-right text-white leading-loose">{item.ar}</p>
                <p className="text-gold/80 text-sm italic font-sans">{item.fr}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 3: RÉCITATIONS ÉQUIVALENTES */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6 italic font-serif text-lg leading-relaxed text-white/80">
          <p>La récitation de la sourate « Al kafirouna » (4 fois) ainsi que celle de la « Iza Dia-a » (4 fois) équivaut à la lecture entière du Coran.</p>
          <p>La récitation de la sourate « Hâdiyâti » ainsi que celle de « izazoulzilati » équivaut à la lecture de la moitié du Coran.</p>
          <p>La récitation de « likhlass » (3 fois) équivaut à la lecture du Coran en entier.</p>
          <p>La récitation des sourates « falahi » et « nassi » constitue le meilleur moyen de se protéger contre les maux.</p>
        </motion.section>

        {/* SECTION 4: PROTECTION MATIN ET SOIR */}
        <motion.section {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-emerald-950/10 border border-emerald-500/20 space-y-8">
          <p className="text-white/80 italic font-serif text-lg leading-relaxed">
            Celui qui prend l’habitude de faire le verset « koursiyou », la sourate « akhân » ainsi que les 3 versets suivants matin et soir sera préservé contre les dangers. Les 3 versets sont les suivants :
          </p>
          <div className="space-y-6">
            <div className="text-center space-y-4 bg-black/30 p-8 rounded-3xl border border-white/5">
              <p className="font-amiri text-3xl text-white leading-loose">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ <br />
                حم تَنْزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْعَلِيمِ <br />
                غَافِرِ الذَّنْبِ وَقَابِلِ التَّوْبِ شَدِيدِ الْعِقَابِ <br />
                ذِي الطَّوْلِ لَا إِلَهَ إِلَّا هُوَ إِلَيْهِ الْمَصِيرُ
              </p>
              <div className="text-gold/70 text-sm font-sans space-y-1">
                <p>« Bismilahi rahmani rahimi »</p>
                <p>« Himine tanziloul kitâbi mina lahi hazizil hikhâbi »</p>
                <p>« Khafiri zeunn-bi wa khabili tawbi chadidil hikhâbi »</p>
                <p>« Ztawli la ilaha ila houwa ileyhil massirou »</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 5: PAROLES PRÉFÉRABLES */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <p className="text-white/80 italic font-serif text-lg leading-relaxed">Au lieu de perdre son temps à dire des grossièretés ou à parler de tout et de rien, il est préférable de dire :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gold/5 rounded-3xl border border-gold/10 text-center space-y-4">
              <p className="font-amiri text-2xl text-white">سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ</p>
              <p className="text-gold text-xs font-black uppercase tracking-widest">soubhan lahi wabi hamdihi soubhana lahil hazimi</p>
            </div>
            <div className="p-8 bg-gold/5 rounded-3xl border border-gold/10 text-center space-y-4">
              <p className="font-amiri text-2xl text-white leading-relaxed">سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ</p>
              <p className="text-gold text-[10px] font-black uppercase tracking-widest">soubhana lahi wal hamdou lilahi wa la ilaha ila lahou wal lâhou akbar wala hawla wala kouwata ila bilâhi aliyil azimi</p>
            </div>
          </div>
          <p className="text-white/60 italic font-serif text-base pt-4">La répétition de ces versets est plus importante que tout ce qu’il y a dans ce bas monde, à plus forte raison que de dire des grossièretés.</p>
        </motion.section>

        {/* SECTION 6: PRÉSERVATION DE LA FOI */}
        <motion.section {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-red-950/10 border border-red-500/20 space-y-8">
          <p className="text-white font-bold text-lg">Toute personne qui veut être préservée contre la perte de la foi, contre les épreuves de la tombe, doit éviter ce qui suit :</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70 italic font-serif text-lg">
            <li className="flex gap-3"><span>•</span> regarder une femme tierce</li>
            <li className="flex gap-3"><span>•</span> mentir</li>
            <li className="flex gap-3"><span>•</span> calomnier</li>
            <li className="flex gap-3"><span>•</span> mettre en mal des personnes, les unes contre les autres</li>
            <li className="flex gap-3"><span>•</span> trahir quelqu’un</li>
            <li className="flex gap-3"><span>•</span> ne pas attendre l’écoulement complet de l’urine après la miction</li>
          </ul>
          <div className="pt-8 border-t border-white/5 space-y-6">
            <p className="text-white/80">On doit également s’acquitter régulièrement des cinq prières, invoquer souvent le nom d’Allah, invoquer le nom du Prophète, lire le Coran, donner l’aumône et dire chaque jour :</p>
            <div className="text-center space-y-4">
              <p className="font-amiri text-3xl text-white">السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ تَعَالَى وَبَرَكَاتُهُ</p>
              <p className="text-gold font-black text-xs uppercase tracking-[0.3em]">« Assalâmou aleyka ayouha nabiyou warahmatou lahi tahala wa barakatouhô » (100 fois)</p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 7: ABSOLUTION ET PARDON */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8 italic font-serif text-lg leading-relaxed text-white/80">
          <p>Celui qui lit ou (écrire) la sourate « doukh âni » la nuit sera basous. Celui qui lit ou récite « khoul houwa allahou » (100 fois) en un jour sera absous de (50 ans) de péchés.</p>
          <p>Celui qui lit la sourate « yassine » se verra pardonner tout ce qu’il a fait depuis son existence.</p>
          
          <div className="bg-white/5 p-8 rounded-3xl space-y-6 not-italic font-sans">
            <p className="text-gold font-bold text-base italic font-serif">Celui qui dit une seule fois le verset sera absous, il s’agit de :</p>
            <p className="font-amiri text-2xl text-center text-white leading-relaxed">سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ سُبْحَانَ ذِي الْعِزَّةِ وَالْجَبَرُوتِ سُبْحَانَ الْحَيِّ الَّذِي لَا يَمُوتُ سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ</p>
            <p className="text-gold/70 text-[10px] text-center uppercase font-black tracking-widest">« Soubhânazil moulki wal malakout soubhanazil wal diabarout soubhanal hayi leuzi lâyamôtou soubôhoune khoudossoune raboul mala-ikati warôhi ».</p>
          </div>

          <p>Celui qui prend l’habitude de dire « Allahouma anta rabi.. Jusqu’à illa anta » (1 fois) matin et soir) sera absous.</p>
          <p>Celui qui lit ou (récite) « lawa ansalnâ » jusqu’à « bakîmou » sera basous.</p>
          
          <div className="bg-white/5 p-8 rounded-3xl space-y-6 not-italic font-sans">
            <p className="text-gold font-bold text-base italic font-serif">Celui qui dit :</p>
            <p className="font-amiri text-2xl text-center text-white leading-relaxed uppercase">سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ عَدَدَ مَا عَلِمَ وَزِنَةَ مَا عَلِمَ وَمِلْءَ مَا عَلِمَ</p>
            <p className="text-gold/70 text-[10px] text-center uppercase font-black tracking-widest">« soubhana lahi wal hamdoulil ahi wala ilaha ila lahouwa alahou akbar wala hawla wala khouwata ila hil aliyil hâzimi hadada mâ halima wa mi hall mâ alline wazinata mâ halima » sera absous.</p>
          </div>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/19/b')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/19/d')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}