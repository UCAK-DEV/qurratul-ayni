'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LaPriereRituelle() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section B</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LA PRIÈRE <br /> <span className="gold-gradient-text italic font-serif lowercase">rituelle</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الصلاة</p>

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
          
          {/* 1. LE LIKHÂME */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Likhâme (Appel immédiat)</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">الإقامة</span>
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-10">
              <p className="text-white/50 font-serif italic text-lg leading-relaxed border-l-2 border-gold/30 pl-8">
                &quot;Debout et face à la Kaaba, dira le « likhâme » : si l’on prie seul, le faire soi-même ; si l’on prie en groupe, qu’un membre du groupe s’en acquitte.&quot;
              </p>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-4">
                  {[
                    { t: "Alâhou akbarou (2 fois)", ar: "اللَّهُ أَكْبَرُ" },
                    { t: "Ach hadou ann lâhilaha ila lah", ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ" },
                    { t: "Ach hadou anna Mouhammadane Rassoulou lâ", ar: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ" },
                    { t: "Haya alas salâti haya alal falâhi khadd khâmati salâtoul", ar: "حَيَّ عَلَى الصَّلَاةِ حَيَّ عَلَى الْفَلَاحِ قَدْ قَامَتِ الصَّلَاةُ" },
                    { t: "Alahou akbarou (2 fois)", ar: "اللَّهُ أَكْبَرُ" },
                    { t: "Lâhilaha illalah", ar: "لَا إِلَهَ إِلَّا اللَّهُ" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-white/60 text-xs font-serif italic">{item.t}</span>
                      <span className="font-amiri text-gold-light text-xl" dir="rtl">{item.ar}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 rounded-3xl bg-gold/5 border border-gold/20 flex flex-col justify-center text-center space-y-6">
                  <p className="text-gold text-[10px] font-black uppercase tracking-widest">Réponse des auditeurs</p>
                  <p className="text-white/80 font-serif italic text-sm">&quot;Lorsque celui qui fait le likhâme dit : « khad khamatis salâtou », dire après lui :&quot;</p>
                  <p className="font-amiri text-gold-light text-2xl leading-relaxed" dir="rtl">أَقَامَهَا اللَّهُ وَأَدَامَهَا مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ إِنَّهُ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
                  <p className="text-white/40 text-[10px] italic">&quot;akhâmaha lâhou tabâraka wa tahala wa adâma ha mâdâmatis samawâtou wa lardou ina hô alla kouli ch aïhine khadiroune&quot;</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. INTENTION ET DÉBUT */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'Intention et le Début</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest">La Niyya (Intention)</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  &quot;Dire ensuite intérieurement son intention de s’acquitter de la prière obligatoire (préciser le moment) sur l’imitation de l’imam. Quant à l’imam, il dit son intention de diriger la prière collective. Quand on prie seul, dire intérieurement son intention de s’acquitter de la prière de tel moment.&quot;
                </p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest mb-6">Le Takbir d'Ouverture</h3>
                  <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                    &quot;Lever les bras à hauteur des épaules et les abaisser en disant : <span className="text-gold">« allahou akbar »</span>.&quot;
                  </p>
                </div>
                <div className="mt-8 p-6 bg-gold/5 rounded-2xl border border-gold/20 text-center">
                  <p className="text-4xl font-amiri text-gold-light">اللَّهُ أَكْبَرُ</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. RÈGLES DE RÉCITATION */}
          <section className="p-10 md:p-16 rounded-[3.5rem] bg-white/[0.01] border border-white/5 space-y-12">
            <div className="text-center">
              <h3 className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-12">Modalités de Récitation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-16 font-serif italic text-lg text-white/70 leading-relaxed">
              <div className="space-y-6 border-l border-gold/20 pl-8">
                <p className="text-gold text-[10px] font-black uppercase tracking-widest">Prière Seule</p>
                <p>&quot;Réciter la « fatiha » et une sourate de son choix dans les deux premiers rakkas, à voix basse le jour ; réciter la « fatiha » uniquement pour les deux derniers rakkas.&quot;</p>
              </div>
              <div className="space-y-6 border-l border-emerald-500/20 pl-8">
                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Derrière l'Imam</p>
                <p>&quot;Celui qui prie derrière un imam se tait quand ce dernier récite à haute voix. Si, par contre, l’imam récite à voix basse, le guidé doit réciter des sourates à voix basse comme s’il priait seul.&quot;</p>
              </div>
            </div>
          </section>

          {/* 4. MOUVEMENTS ET INVOCATIONS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Mouvements et Invocations</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="space-y-6">
              {[
                { 
                  m: "Génuflexion (Rukū‘)", 
                  t: "Au moment des génuflexions, dire « allahou akbar » et prononcer à voix basse (3 fois) :",
                  ar: "سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ",
                  tr: "soubhana rabial hazimi wa bihamdihi"
                },
                { 
                  m: "Redressement", 
                  t: "Quand on se redresse, dire (à haute voix) :",
                  ar: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
                  tr: "Sami allahou liman hamidah",
                  note: "Seul : ajouter « Allahouma rabana walakal hamdou ». Imam : s’en tient à la formule. Guidé : dit uniquement « Allahouma rabana walakal hamdou »."
                },
                { 
                  m: "Prosternation (Sujūd)", 
                  t: "Quand on se prosterne, dire à haute voix « allahou akbar » et prononcer à voix basse (3 fois) :",
                  ar: "سُبْحَانَ رَبِّيَ الْأَعْلَى اللَّهُمَّ اغْفِرْ لِي",
                  tr: "soubhana rabial leuhla allahouma ihkfirli"
                },
                { 
                  m: "Position Assise", 
                  t: "Au retour en position assise, dire à haute voix « allahou akbar » et dire intérieurement (1 fois) :",
                  ar: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَارْزُقْنِي وَاسْتُرْنِي وَاجْبُرْنِي وَاهْدِنِي وَاعْفُ عَنِّي وَعَافِنِي",
                  tr: "allahouma ikhfirli warhamni warzoukhni wastourni wadjbourni wa heuhdinî wah fouhani wa hâfini"
                }
              ].map((step, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:border-gold/20 transition-all">
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-5 space-y-4">
                      <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest">{step.m}</h4>
                      <p className="text-white/70 font-serif italic text-base md:text-lg">&quot;{step.t}&quot;</p>
                      {step.note && <p className="text-emerald-500/80 text-[10px] font-bold uppercase tracking-tight">{step.note}</p>}
                    </div>
                    <div className="md:col-span-7 text-right space-y-4">
                      <p className="font-amiri text-white text-2xl md:text-3xl leading-loose" dir="rtl">{step.ar}</p>
                      <p className="text-gold/40 text-[10px] font-black uppercase tracking-widest">{step.tr}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. LE TACHAHOUD */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Tachahoud</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid gap-8">
              <div className="p-10 md:p-16 rounded-[3.5rem] bg-white/[0.03] border border-white/10 space-y-10">
                <div className="flex justify-between items-center border-b border-white/5 pb-6">
                  <h3 className="text-gold font-black text-[10px] uppercase tracking-widest">Premier Tachahoud</h3>
                  <span className="text-white/20 font-black text-2xl">01</span>
                </div>
                <p className="font-amiri text-white text-2xl md:text-4xl dir-rtl leading-[2] text-right">
                  التَّحِيَّاتُ لِلَّهِ الزَّاكِيَاتُ لِلَّهِ الطَّيِّبَاتُ الصَّلَوَاتُ لِلَّهِ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ تَعَالَى وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَبْدُهُ وَرَسُولُهُ
                </p>
                <p className="text-white/40 font-serif italic text-sm leading-relaxed border-l-2 border-gold/20 pl-8">
                  &quot;Atahiyatou lilahi, azakiyatou lilahi atahibatous salawatou lilahi assalamou aleyka ayouhan nabiyou... ach hadou ann la ilaha ila lahou wahdahou la charika lahô wa ach hadou anna seydina mouhammadane... S’en arrêter là s’il s’agit du premier.&quot;
                </p>
              </div>

              <div className="p-10 md:p-20 rounded-[4rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-gold font-black text-[10px] uppercase tracking-[0.5em]">Tachahoud Final & Invocations</h3>
                  <div className="h-1 w-12 bg-gold mx-auto" />
                </div>
                <p className="font-amiri text-white text-2xl md:text-3xl dir-rtl leading-[2.2] text-right">
                  وَأَشْهَدُ أَنَّ الَّذِي جَاءَ بِهِ سَيِّدُنَا مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ حَقٌّ وَأَنَّ الْجَنَّةَ حَقٌّ وَأَنَّ النَّارَ حَقٌّ وَأَنَّ الصِّرَاطَ حَقٌّ وَأَنَّ السَّاعَةَ آتِيَةٌ لَا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَنْ فِي الْقُبُورِ، اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                </p>
                <p className="text-white/50 font-serif italic text-sm md:text-base leading-relaxed text-justify">
                  &quot;Pour le final, ajouter : wa ach hadou anna leuzi dia-abihi sayidina mouhamadoune... (Invocation d'Abraham)... Allahouma ikhfir lanâ mâ khadamnâ... Assalamou aleykoume wa rahmatou lahi tahanla wa barakatouhou assalamou aleynâ wa hanla ibadilahis salihîna. S’arrêter là et faire le « Salam ».&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 6. SALUT FINAL ET DHIKR */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Salut Final et Dhikr</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2.5rem] bg-emerald-500/[0.02] border border-emerald-500/10 space-y-4">
                <p className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">Règles du Salam</p>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  &quot;Dire « assalâmou aleykoume » (1 fois), à haute voix (Imam ou personne seule). Le « mamoune » (guidé) rend le Salam à l’imam et à toute personne à sa gauche.&quot;
                </p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-gold/[0.02] border border-gold/10 space-y-4">
                <p className="text-gold font-bold text-[10px] uppercase tracking-widest">Post-Prière</p>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  &quot;Dire « astahfiroulaha » (3 fois), puis : « Allahouma anta salâmou wa mine ka salâmou rabana wa add khilnâ dâra salami tabarakta watahaleyt a yazal dialâli wal ikrami » (3 fois).&quot;
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <p className="text-gold font-black text-xs">SOUBHANA LAHI</p>
                <p className="text-white/30 text-[10px] mt-1">(33 fois)</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <p className="text-gold font-black text-xs">ALHAMDOULILAH</p>
                <p className="text-white/30 text-[10px] mt-1">(33 fois)</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <p className="text-gold font-black text-xs">ALLAHOU AKBAR</p>
                <p className="text-white/30 text-[10px] mt-1">(33 fois)</p>
              </div>
            </div>
            <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center space-y-8">
               <p className="font-amiri text-gold-light text-2xl" dir="rtl">لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
               <p className="text-white/40 font-serif italic text-sm leading-relaxed max-w-2xl mx-auto">
                 &quot;Allahouma ini houkhadimou ilayka baïna yada kouli lamhatine wa nafsine wa lakhzatine... Allahouma akrim hâzihi loumata al mouhamadî yata... Allahouma makhfirouka aw sahoumine zounôbî...&quot;
               </p>
            </div>
          </section>

          {/* 7. VERSETS ET MÉRTITES (EXHAUSTIF) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Versets et Mérites</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-10 md:p-16 rounded-[3.5rem] bg-white/[0.03] border border-white/10 space-y-12">
              <div className="space-y-6">
                <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-gold/10 pb-4">Protections</h4>
                <p className="font-amiri text-white text-2xl leading-[2] text-right dir-rtl">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ... اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ... قُلْ هُوَ اللَّهُ أَحَدٌ... قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... قُلْ أَعُوذُ بِرَبِّ النَّاسِ...
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { m: "Conservation de la foi", d: "Prononcer les versets après chaque prière obligatoire (Allahouma innî as-alouka iman ne la yartadou...)." },
                  { m: "Prière du Matin (Sobh)", d: "10 fois 'Bismillah... la hawla...' après le Sobh = Abri contre 72 fléaux (Lèpre, Syphilis). Réciter 12 Ikhlas = 4 fois le Coran." },
                  { m: "Asr du Vendredi", d: "80 fois 'Allahouma salli... nabiyi loummiyi' avant de partir = 80 ans de péchés pardonnés et 80 ans d'adoration." },
                  { m: "Maghreb (Timis)", d: "Ajouter 6 rakkas après le Maghreb = Rémission de 50 ans de péchés et bienfaits de 12 années d'adoration." },
                  { m: "Le Salut du Maghreb", d: "Réciter 10 fois 'Allahouma salli... bihadadi koulli harfine' = Garder la foi jusqu'à la mort." },
                  { m: "Entre Maghreb et Icha", d: "Jeudi soir : 2 rakkas avec Fatiha et 15 Izazoul zilatil = Atténue l'agonie et préserve de la tombe." },
                  { m: "Après l'Icha (Guéwé)", d: "2 rakkas avec Sourate Sadjdati et Moulki = Préserve de l'interrogation des anges et transforme les péchés en bienfaits." }
                ].map((merit, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-6">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-gold font-bold text-[10px] uppercase">{merit.m}</p>
                      <p className="text-white/60 font-serif italic text-xs leading-relaxed">{merit.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 md:p-16 rounded-[3.5rem] bg-emerald-500/[0.02] border border-emerald-500/10 text-center space-y-12">
               <div className="space-y-6">
                  <h5 className="text-gold text-[10px] font-black uppercase tracking-widest">Invocation Entre Fadiar et Sobh</h5>
                  <p className="font-amiri text-white text-2xl dir-rtl leading-relaxed">« يَا حَيُّ يَا قَيُّومُ يَا بَدِيعَ السَّمَاوَاتِ وَالْأَرْضِ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ يَا اللَّهُ يَا اللَّهُ يَا اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ... » (40 fois)</p>
                  <p className="text-white/40 font-serif italic text-xs">&quot;Yâ hayou yâ khayyôumou... as-alouka ann touhyiya khalbî binôuri mahri fatika...&quot;</p>
               </div>
               <div className="h-px bg-white/5" />
               <div className="space-y-6">
                  <h5 className="text-gold text-[10px] font-black uppercase tracking-widest">Invocation pour une Agonie moins pénible</h5>
                  <p className="text-white/70 font-serif italic text-lg leading-relaxed max-w-3xl mx-auto">
                    &quot;Allahouma inniya ahdadtou likoul li hawline alkhâhou fîd dounyâ walâkhirati, lâ ilâha illal lahou, walikoulli heum mine wa khammine mâchâ allâhou, walikoulli nihmatine alhamdoulilahi... (suite)&quot;
                  </p>
               </div>
            </div>
          </section>
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/a')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/c')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}