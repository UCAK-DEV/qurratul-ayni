'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SouratesEtVersetsPage() {
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

  const sixVersets = [
    {
      fr: "1… Bismilahi rahmani rahimi sabbaha lilahi mafi samawati walardi wa houwa azizoul akimou",
      ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ"
    },
    {
      fr: "2… Leuhô moulkou samawati walardi youh yî wa youmîtou wa houwa hala koulli chaîne khadiroune",
      ar: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
    },
    {
      fr: "3… Houwalawalou walakhirou wazâhirou wa bâtinou wa houwa bi koulli chayine halimoune",
      ar: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ"
    },
    {
      fr: "4… Houwa leuzi khalakhas samawati walardi fi sitati ayâmine soumas tawa halal harchi yahlamou mâ yaloudiou filardi wama yahridiou mine hâ wama yannzilou mina samâ-i wamâ yahroudiou fîhâ wa houwa maahakoumo aïna mâ koutoume wa lahou bimâ tahmalôna bassîroune",
      ar: "هُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَى عَلَى الْعَرْشِ يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنْزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا وَهُوَ مَعَكُمْ أَيْنَ مَا كُنْتُمْ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ"
    },
    {
      fr: "5… Leuho moulkous samawati walardi wa ila lahi tourdiahoul oumôrou",
      ar: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ"
    },
    {
      fr: "6… yôtidioul laïla fi nahâri wa yôlidioun nahara fi laïli wa houwa halimou bizati soudouri",
      ar: "يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ وَهُوَ عَلِيمٌ بِذَاتِ الصُّدُورِ"
    }
  ];

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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XIX — Section C</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              SOURATES ET <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">versets</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">فضائل السور والآيات</p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)}
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

        <div className="space-y-32">
          
          {/* 1. BIENFAITS DES SOURATES MAJEURES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Intercession & Rempart</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <motion.div {...fadeInUp} className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-justify relative overflow-hidden group shadow-2xl">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">C</span>
              <div className="space-y-10 relative z-10">
                <p>&quot;Les sourates « Bakhara » et « Imrane » intercèderont auprès de Dieu le jour du Jugement en faveur de celui qui les lit régulièrement ici-bas.&quot;</p>
                <p>&quot;La lecture de la sourate « Bakhara » dans une chambre constitue un rempart contre satan et les djinns pendant une durée de 3 jours.&quot;</p>
                <p>&quot;Si on lit la sourate « Imrane » le vendredi, tous les anges s’emploieront à prier (gnanal) pour nous jusqu’au coucher du soleil.&quot;</p>
                <div className="p-10 rounded-[3rem] bg-gold/[0.05] border border-gold/20 shadow-sm border-l-4 border-l-gold not-italic">
                  <p className="font-serif italic text-white/90">&quot;La lecture du verset « Ayatoul koursiyou » (4 fois) équivaut à la lecture du Coran en entier. La lecture du dernier verset de la sourate « Imrane » pendant la nuit équivaut à passer la nuit à prier.&quot;</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 2. LES SIX VERSETS DE PUISSANCE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Les Six Versets Majeurs</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <p className="text-white/40 italic font-serif text-center px-12">&quot;Ces six versets ont la même importance que 1 000 autres versets :&quot;</p>
            
            <div className="grid gap-6">
              {sixVersets.map((item, idx) => (
                <motion.div key={idx} {...fadeInUp} className="p-10 rounded-[3.5rem] bg-black/40 border border-white/5 space-y-8 shadow-sm">
                  <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">{item.ar}</p>
                  <p className="text-gold-light/60 font-serif italic text-sm text-left border-t border-white/5 pt-8" dir="ltr">{item.fr}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3. RÉCITATIONS ÉQUIVALENTES & PROTECTION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Équivalences spirituelles</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg text-white/70 leading-relaxed">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6">
                <p>&quot;La récitation de la sourate « Al kafirouna » (4 fois) ainsi que celle de la « Iza Dia-a » (4 fois) équivaut à la lecture entière du Coran.&quot;</p>
                <p>&quot;La récitation de la sourate « Hâdiyâti » ainsi que celle de « izazoulzilati » équivaut à la lecture de la moitié du Coran.&quot;</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-emerald-950/[0.05] border border-emerald-500/20 space-y-6">
                <p>&quot;La récitation de « likhlass » (3 fois) équivaut à la lecture du Coran en entier.&quot;</p>
                <p>&quot;La récitation des sourates « falahi » et « nassi » constitue le meilleur moyen de se protéger contre les maux.&quot;</p>
              </div>
            </div>
          </section>

          {/* 4. PROTECTION MATIN ET SOIR */}
          <section className="space-y-12">
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-gold/[0.03] border border-gold/20 space-y-10 shadow-xl">
               <p className="text-white/80 font-serif italic text-lg text-center">
                 &quot;Celui qui prend l’habitude de faire le verset « koursiyou », la sourate « akhân » ainsi que les 3 versets suivants matin et soir sera préservé contre les dangers :&quot;
               </p>
               <div className="space-y-10 not-italic">
                  <p className="font-amiri text-2xl md:text-4xl text-white text-center leading-loose" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ <br />
                    حم تَنْزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْعَلِيمِ <br />
                    غَافِرِ الذَّنْبِ وَقَابِلِ التَّوْبِ شَدِيدِ الْعِقَابِ <br />
                    ذِي الطَّوْلِ لَا إِلَهَ إِلَّا هُوَ إِلَيْهِ الْمَصِيرُ
                  </p>
                  <div className="text-gold-light/50 text-xs italic font-serif text-center border-t border-gold/10 pt-8 space-y-2">
                    <p>« Bismilahi rahmani rahimi »</p>
                    <p>« Himine tanziloul kitâbi mina lahi hazizil hikhâbi »</p>
                    <p>« Khafiri zeunn-bi wa khabili tawbi chadidil hikhâbi »</p>
                    <p>« Ztawli la ilaha ila houwa ileyhil massirou »</p>
                  </div>
               </div>
            </motion.div>
          </section>

          {/* 5. PAROLES PRÉFÉRABLES & FOI */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Préservation de la Foi</h2>
              <div className="h-[1px] flex-1 bg-red-900/10" />
            </div>

            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-red-950/[0.02] border border-red-900/20 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed">
              <p className="text-white font-bold not-italic text-center text-xl mb-8">&quot;Au lieu de perdre son temps à dire des grossièretés ou à parler de tout et de rien, il est préférable de dire :&quot;</p>
              <div className="grid md:grid-cols-2 gap-8 not-italic">
                 <div className="p-8 rounded-3xl bg-black/40 border border-white/5 space-y-4">
                    <p className="font-amiri text-xl text-white text-right" dir="rtl">سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ</p>
                    <p className="text-gold-light/40 text-xs italic uppercase">« soubhan lahi wabi hamdihi soubhana lahil hazimi »</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-black/40 border border-white/5 space-y-4 text-right">
                    <p className="font-amiri text-xl text-white leading-loose" dir="rtl">سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ</p>
                    <p className="text-gold-light/40 text-[10px] italic uppercase text-left leading-relaxed">« soubhana lahi wal hamdou lilahi wa la ilaha ila lahou wal lāhou akbar wala hawla wala kouwata ila bilāhi aliyil azimi »</p>
                 </div>
              </div>
              
              <div className="pt-12 border-t border-red-900/10">
                <p className="text-white/90 font-bold mb-8">Toute personne qui veut être préservée contre la perte de la foi, doit éviter ce qui suit :</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 not-italic font-sans text-xs uppercase tracking-widest text-red-400">
                  {["Regarder une femme tierce", "Mentir", "Calomnier", "Mettre en mal", "Trahir", "Négliger l'urine"].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-center">{item}</div>
                  ))}
                </div>
              </div>

              <div className="p-10 rounded-[3.5rem] bg-gold/[0.05] border border-gold/20 shadow-sm space-y-8 not-italic text-center">
                <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] block">Invocation journalière (100 fois)</span>
                <p className="font-amiri text-2xl md:text-3xl text-white leading-loose" dir="rtl">
                  السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ تَعَالَى وَبَرَكَاتُهُ
                </p>
                <p className="text-gold-light/60 font-serif italic text-base">« Assalâmou aleyka ayouha nabiyou warahmatou lahi tahala wa barakatouhô »</p>
              </div>
            </motion.div>
          </section>

          {/* SECTION 6: ABSOLUTION & PARDON */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Absolution & Pardon</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed text-justify">
              <p>&quot;Celui qui lit la sourate « doukh âni » la nuit sera basous. Celui qui lit la sourate « yassine » se verra pardonner tout ce qu’il a fait depuis son existence.&quot;</p>
              
              <div className="p-10 rounded-[3rem] bg-black/40 border border-white/5 space-y-8 text-right not-italic">
                <span className="text-gold font-bold text-[10px] uppercase tracking-widest block text-center mb-4">Absolution Immédiate</span>
                <p className="font-amiri text-xl md:text-2xl text-white leading-loose" dir="rtl">
                  سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ سُبْحَانَ ذِي الْعِزَّةِ وَالْجَبَرُوتِ سُبْحَانَ الْحَيِّ الَّذِي لَا يَمُوتُ سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ
                </p>
                <p className="text-white/30 text-[10px] italic font-serif text-left border-t border-white/10 pt-8" dir="ltr">
                  « Soubhānazil moulki wal malakout soubhanazil wal diabarout soubhanal hayi leuzi lāyamōtou soubōhoune khoudossoune raboul mala-ikati warōhi »
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 space-y-8 text-right not-italic">
                <p className="font-amiri text-xl md:text-2xl text-white leading-loose uppercase" dir="rtl">
                  سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ عَدَدَ مَا عَلِمَ وَزِنَةَ مَا عَلِمَ وَمِلْءَ مَا عَلِمَ
                </p>
                <p className="text-white/30 text-[10px] italic font-serif text-left border-t border-white/10 pt-8" dir="ltr">
                  « soubhana lahi wal hamdoulil ahi wala ilaha ila lahouwa alahou akbar wala hawla wala khouwata ila hil aliyil hāzimi hadada mā halima wa mi hall mā alline wazinata mā halima »
                </p>
              </div>
            </motion.div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/19/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/19/d')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Section D</button>
      </nav>
    </main>
  );
}