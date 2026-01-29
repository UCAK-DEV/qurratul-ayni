'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LaPriereRituelle() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre VI — Section B
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          La prière rituelle <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">الصلاة</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* SECTION 1 : LE LIKHÂME */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Le Likhâme (Appel immédiat)</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">الإقامة</h2>
          </div>
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <p className="text-white/70 text-sm mb-8 italic">
              "Debout et face à la Kaaba, dira le « likhâme » : si l’on prie seul, le faire soi-même ; si l’on prie en groupe, qu’un membre du groupe s’en acquitte."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                {[
                  { t: "Alâhou akbarou (2 fois)", ar: "الله أكبر" },
                  { t: "Ach hadou ann lâhilaha ila lah", ar: "أشهد أن لا إله إلا الله" },
                  { t: "Ach hadou anna Mouhammadane Rassoulou lâ", ar: "أشهد أن محمداً رسول الله" },
                  { t: "Haya alas salâti haya alal falâhi khadd khâmati salâtoul", ar: "حي على الصلاة حي على الفلاح قد قامت الصلاة" },
                  { t: "Alahou akbarou (2 fois)", ar: "الله أكبر" },
                  { t: "Lâhilaha illalah", ar: "لا إله إلا الله" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/60 text-xs italic">{item.t}</span>
                    <span className="font-amiri text-gold text-lg">{item.ar}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gold/5 p-6 rounded-2xl border border-gold/20">
                <p className="text-[10px] text-gold font-black uppercase mb-3">Réponse des auditeurs</p>
                <p className="text-white/80 text-sm italic mb-4">"Lorsque celui qui fait le likhâme dit : « khad khamatis salâtou », dire après lui :"</p>
                <p className="font-amiri text-white text-xl dir-rtl leading-relaxed">« أخا مها الله تبا ر كا و تعا لى و أ دا مها ما د ا مت السما و ا ت و لا ر ض إ نّا هو على كل شيء قد ير »</p>
                <p className="text-gold-light/50 text-[10px] mt-2 italic">"akhâmaha lâhou tabâraka wa tahala wa adâma ha mâdâmatis samawâtou wa lardou ina hô alla kouli ch aïhine khadiroune"</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 : INTENTION ET RÉCITATION */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">L'Intention et le Début</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
              <h3 className="text-gold font-bold text-xs uppercase mb-4 tracking-widest">La Niyya (Intention)</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                "Dire ensuite intérieurement son intention de s’acquitter de la prière obligatoire (préciser le moment) sur l’imitation de l’imam. Quant à l’imam, il dit son intention de diriger la prière collective. Quand on prie seul, dire intérieurement son intention de s’acquitter de la prière de tel moment."
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
              <h3 className="text-gold font-bold text-xs uppercase mb-4 tracking-widest">Le Takbir d'Ouverture</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                "Lever les bras à hauteur des épaules et les abaisser en disant : <span className="text-gold italic">« allahou akbar »</span>."
              </p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-gold font-amiri text-2xl text-center">اللَّهُ أَكْبَرُ</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 : LES RÈGLES DE RÉCITATION */}
        <section className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gold/10">
          <h3 className="text-gold font-black text-xs uppercase tracking-[0.2em] mb-8 text-center">Détails des Rakkas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-white/70 leading-relaxed">
            <div className="space-y-4">
              <p className="border-l-2 border-gold/30 pl-4">
                <span className="text-white font-bold block mb-1">Prière Seule :</span>
                Réciter la « fatiha » et une sourate de son choix dans les deux premiers rakkas, à voix basse le jour ; réciter la « fatiha » uniquement pour les deux derniers rakkas.
              </p>
            </div>
            <div className="space-y-4">
              <p className="border-l-2 border-emerald-500/30 pl-4">
                <span className="text-white font-bold block mb-1">Derrière l'Imam :</span>
                Celui qui prie derrière un imam se tait quand ce dernier récite à haute voix. Si, par contre, l’imam récite à voix basse, le guidé doit réciter des sourates à voix basse comme s’il priait seul.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 : MOUVEMENTS ET INVOCATIONS SÉQUENTIELLES */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Mouvements et Invocations</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>
          <div className="space-y-6">
            {[
              { 
                m: "Génuflexion (Rukū‘)", 
                t: "Au moment des génuflexions, dire « allahou akbar » et prononcer à voix basse (3 fois) :",
                ar: "سبحان ربي العظيم وبحمده",
                tr: "soubhana rabial hazimi wa bihamdihi"
              },
              { 
                m: "Redressement", 
                t: "Quand on se redresse, dire (à haute voix) :",
                ar: "سمع الله لمن حمده",
                tr: "Sami allahou liman hamidah",
                note: "Seul : ajouter « Allahouma rabana walakal hamdou ». Imam : s’en tient à la formule. Guidé : dit uniquement « Allahouma rabana walakal hamdou »."
              },
              { 
                m: "Prosternation (Sujūd)", 
                t: "Quand on se prosterne, dire à haute voix « allahou akbar » et prononcer à voix basse (3 fois) :",
                ar: "سبحان ربي الأعلى اللهم اغفر لي",
                tr: "soubhana rabial leuhla allahouma ihkfirli"
              },
              { 
                m: "Position Assise", 
                t: "Au retour en position assise, dire à haute voix « allahou akbar » et dire intérieurement (1 fois) :",
                ar: "اللهم اغفر لي وارحمني وارزقني واسترني واجبرني واهدني واعف عني وعافني",
                tr: "allahouma ikhfirli warhamni warzoukhni wastourni wadjbourni wa heuhdinî wah fouhani wa hâfini"
              }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-6 md:p-8 rounded-[2rem] border border-white/5 group hover:border-gold/20 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <h4 className="text-gold font-bold text-[10px] uppercase mb-2 tracking-widest">{step.m}</h4>
                    <p className="text-white/70 text-sm italic mb-3">"{step.t}"</p>
                    {step.note && <p className="text-emerald-400 text-[10px] font-bold mb-3">{step.note}</p>}
                    <p className="text-gold-light/60 text-[11px] font-medium uppercase">{step.tr}</p>
                  </div>
                  <div className="text-right w-full md:w-auto">
                    <p className="font-amiri text-white text-2xl md:text-3xl leading-relaxed dir-rtl">{step.ar}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 : LES TACHAHOUDS */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Le Tachahoud</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Premier Tachahoud */}
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
              <h3 className="text-gold font-bold text-xs uppercase mb-6 tracking-widest border-b border-white/5 pb-2 inline-block">Premier Tachahoud</h3>
              <p className="font-amiri text-white text-2xl dir-rtl leading-relaxed text-right mb-6">
                « التحيات لله الزكيات لله الطيبات الصلوات لله السلام عليك أيها النبي ورحمة الله تعالى وبركاته السلام علينا وعلى عباد الله الصالحين أشهد أن لا إله إلا الله وحده لا شريك له وأشهد أن سيدنا محمداً صلى الله عليه وسلم عبده ورسوله »
              </p>
              <div className="p-4 bg-white/5 rounded-xl text-white/50 text-[11px] font-serif italic border-l-2 border-gold/30">
                "Atahiyatou lilahi, azakiyatou lilahi atahibatous salawatou lilahi assalamou aleyka ayouhan nabiyou... ach hadou ann la ilaha ila lahou wahdahou la charika lahô wa ach hadou anna seydina mouhammadane... S’en arrêter là s’il s’agit du premier."
              </div>
            </div>

            {/* Tachahoud Final */}
            <div className="bg-gold/5 p-8 md:p-12 rounded-[3rem] border border-gold/10">
              <h3 className="text-gold font-bold text-xs uppercase mb-6 tracking-widest text-center">Tachahoud Final & Invocations</h3>
              <div className="space-y-8">
                <p className="font-amiri text-white text-xl md:text-2xl dir-rtl leading-[1.8] text-right">
                  « وأشهد أن الذي جاء به سيدنا محمد صلى الله عليه وسلم حق وأن الجنة حق وأن النار حق وأن الصراط حق وأن الساعة آتية لا ريب فيها وأن الله يبعث من في القبور، اللهم صل على سيدنا محمد وعلى آل سيدنا محمد كما صليت على سيدنا إبراهيم وعلى آل سيدنا إبراهيم وبارك على سيدنا محمد وعلى آل سيدنا محمد كما باركت على سيدنا إبراهيم وعلى آل سيدنا إبراهيم في العالمين إنك حميد مجيد... »
                </p>
                <div className="h-px w-24 bg-gold/20 mx-auto" />
                <p className="text-white/60 text-[12px] italic leading-relaxed text-justify font-serif">
                  "Pour le final, ajouter : wa ach hadou anna leuzi dia-abihi sayidina mouhamadoune... (Invocation d'Abraham)... Allahouma ikhfir lanâ mâ khadamnâ... Assalamou aleykoume wa rahmatou lahi tahanla wa barakatouhou assalamou aleynâ wa hanla ibadilahis salihîna. S’arrêter là et faire le « Salam »."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 : LE SALUT ET APRÈS LA PRIÈRE */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Salut Final et Dhikr</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-6 bg-white/5 rounded-2xl border-l-2 border-emerald-500">
                  <p className="text-white font-bold text-sm mb-2 uppercase">Règles du Salam</p>
                  <p className="text-white/60 text-xs italic leading-relaxed">
                    Dire « assalâmou aleykoume » (1 fois), à haute voix (Imam ou personne seule). Le « mamoune » (guidé) rend le Salam à l’imam et à toute personne à sa gauche.
                  </p>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border-l-2 border-gold">
                  <p className="text-white font-bold text-sm mb-2 uppercase">Immédiatement après</p>
                  <p className="text-white/60 text-xs italic leading-relaxed">
                    Dire « astahfiroulaha » (3 fois), puis : « Allahouma anta salâmou wa mine ka salâmou rabana wa add khilnâ dâra salami tabarakta watahaleyt a yazal dialâli wal ikrami » (3 fois).
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
               <div className="p-4 bg-gold/10 rounded-xl text-gold font-black text-xs uppercase">Soubhana lahi (33)</div>
               <div className="p-4 bg-gold/10 rounded-xl text-gold font-black text-xs uppercase">Alhamdoulilah (33)</div>
               <div className="p-4 bg-gold/10 rounded-xl text-gold font-black text-xs uppercase">Allahou akbar (33)</div>
            </div>

            <div className="bg-emerald-950/40 p-8 rounded-3xl border border-white/5 text-center">
               <p className="font-amiri text-gold-light text-xl mb-4">« لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير » (1 fois)</p>
               <p className="font-amiri text-white text-xl md:text-2xl leading-relaxed text-right dir-rtl">
                "Allahouma ini houkhadimou ilayka baïna yada kouli lamhatine wa nafsine wa lakhzatine... Allahouma akrim hâzihi loumata al mouhamadî yata... Allahouma makhfirouka aw sahoumine zounôbî..."
               </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 : LES VERSETS PROTECTEURS ET MÉRTITES (EXHAUSTIF) */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Versets, Protections et Mérites</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Ayatoul Koursiyou & Fatiha */}
            <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-10">
               <div className="space-y-4">
                  <h4 className="text-gold font-bold text-xs uppercase tracking-widest border-b border-gold/10 pb-2">Al-Fatiha & Ayatoul Koursiyou</h4>
                  <p className="font-amiri text-white text-2xl leading-[2] text-right dir-rtl">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ الرَّحْمَنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ... <br />
                    اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...
                  </p>
               </div>
               
               <div className="space-y-6">
                  <h4 className="text-gold font-bold text-xs uppercase tracking-widest border-b border-gold/10 pb-2">Les Protections Finales</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-white/5 rounded-2xl"><span className="text-[10px] text-gold uppercase block mb-2">Al-Ikhlas (112)</span><p className="font-amiri text-lg text-right">قُلْ هُوَ اللَّهُ أَحَدٌ...</p></div>
                    <div className="p-4 bg-white/5 rounded-2xl"><span className="text-[10px] text-gold uppercase block mb-2">Al-Falaq (113)</span><p className="font-amiri text-lg text-right">قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ...</p></div>
                    <div className="p-4 bg-white/5 rounded-2xl"><span className="text-[10px] text-gold uppercase block mb-2">An-Nas (114)</span><p className="font-amiri text-lg text-right">قُلْ أَعُوذُ بِرَبِّ النَّاسِ...</p></div>
                  </div>
               </div>
            </div>

            {/* Liste Exhaustive des Mérites */}
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
              <h3 className="text-gold font-black text-[10px] uppercase mb-8 tracking-[0.3em] text-center">Table des Bienfaits et Mérites</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { m: "Conservation de la foi", d: "Prononcer les versets après chaque prière obligatoire (Allahouma innî as-alouka iman ne la yartadou...)." },
                  { m: "Prière du Matin (Sobh)", d: "10 fois 'Bismillah... la hawla...' après le Sobh = Abri contre 72 fléaux (Lèpre, Syphilis). Réciter 12 Ikhlas = 4 fois le Coran." },
                  { m: "Asr du Vendredi", d: "80 fois 'Allahouma salli... nabiyi loummiyi' avant de partir = 80 ans de péchés pardonnés et 80 ans d'adoration." },
                  { m: "Maghreb (Timis)", d: "Ajouter 6 rakkas après le Maghreb = Rémission de 50 ans de péchés et bienfaits de 12 années d'adoration." },
                  { m: "Le Salut du Maghreb", d: "Réciter 10 fois 'Allahouma salli... bihadadi koulli harfine' = Garder la foi jusqu'à la mort." },
                  { m: "Entre Maghreb et Icha", d: "Jeudi soir : 2 rakkas avec Fatiha et 15 Izazoul zilatil = Atténue l'agonie et préserve de la tombe." },
                  { m: "Après l'Icha (Guéwé)", d: "2 rakkas avec Sourate Sadjdati et Moulki = Préserve de l'interrogation des anges et transforme les péchés en bienfaits." }
                ].map((merit, idx) => (
                  <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl flex gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-gold font-bold text-xs uppercase mb-1">{merit.m}</p>
                      <p className="text-white/60 text-[12px] leading-relaxed italic">{merit.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Invocations Spéciales */}
            <div className="bg-emerald-950/40 p-8 md:p-12 rounded-[3rem] border border-gold/10">
               <div className="space-y-8">
                  <div className="text-center">
                    <h5 className="text-gold text-[10px] font-black uppercase mb-4 tracking-widest">Invocation Entre Fadiar et Sobh</h5>
                    <p className="font-amiri text-white text-xl dir-rtl leading-relaxed">
                      « يا حي يا قيوم يا بديع السموات والأرض يا ذا الجلال والإكرام يالله يالله يالله لا إله إلا أنت سبحانك إني كنت من الظالمين... » (40 fois)
                    </p>
                    <p className="text-white/40 text-[10px] mt-4 italic">"Yâ hayou yâ khayyôumou... as-alouka ann touhyiya khalbî binôuri mahri fatika..."</p>
                  </div>
                  
                  <div className="h-px bg-white/5" />

                  <div className="text-center">
                    <h5 className="text-gold text-[10px] font-black uppercase mb-4 tracking-widest">Invocation pour une Agonie moins pénible</h5>
                    <p className="text-white/80 text-sm italic font-serif leading-relaxed px-4">
                      "Allahouma inniya ahdadtou likoul li hawline alkhâhou fîd dounyâ walâkhirati, lâ ilâha illal lahou, walikoulli heum mine wa khammine mâchâ allâhou, walikoulli nihmatine alhamdoulilahi... (suite)"
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/6/a')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/6/c')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}