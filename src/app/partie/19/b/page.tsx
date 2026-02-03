'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LectureCoranDetail() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 18
  const chapterData = CHAPTERS.find(c => c.id === "18") || CHAPTERS[17];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans">
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVIII — Section B</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LECTURE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">DU CORAN</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter la lecture'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* DISPOSITIONS DE LECTURE */}
        <motion.section {...fadeInUp} className="space-y-6">
          <div className="bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6 text-white/80 font-serif italic text-lg md:text-xl leading-relaxed">
            <p>
              "Lire le Coran est une manière d’invoquer le nom d’Allah. Il faut s’efforcer d’en lire quelques sourates par jour, ne serait-ce que 3 « Izib », et ce sans interruption."
            </p>
            <p>
              "Il est recommandé à celui qui lit le Coran d’être en état de pureté totale en ce qui concerne son corps, les habits qu’on porte et l’endroit où on le lit. Il est tout aussi recommandé, en le faisant, de se tourner vers la Kaaba, d’y mettre du sérieux et de la rigueur, toute la foi et l’humilité requises ; il faut également réfléchir sur le sens des mots si l’on en est capable. On doit avoir dans l’esprit qu’on est devant Dieu, qu’on s’adresse à Lui et qu’Il nous voit. Il est recommandé, pour ce faire, d’en répartir la lecture dans la semaine ; la répartition peut se faire de la manière suivante :"
            </p>
          </div>
        </motion.section>

        {/* LE SOUBOUHOU */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Le Soubouhou</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { day: "le dimanche", surah: "de la sourate « bakhara » jusqu’à la sourate « nissah-i »" },
              { day: "le lundi", surah: "de la sourate « maa idati » jusqu’à la sourate « tawbati »" },
              { day: "le mardi", surah: "de la sourate « younoussa » jusqu’à la sourate « nahli »" },
              { day: "le mercredi", surah: "de la sourate « israa i » jusqu’à la sourate « fourkhane »" },
              { day: "le jeudi", surah: "de la sourate « chouharâ-i » jusqu’à la sourate « yassi »" },
              { day: "le vendredi", surah: "de la sourate « sâfati » jusqu’à la sourate « houdiourâte »" },
              { day: "le samedi", surah: "de la sourate « madjiidi » jusqu’à la sourate « nassi »" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 flex items-center gap-4">
                <span className="text-gold font-black text-xs uppercase w-24">{item.day}</span>
                <p className="text-white/60 font-serif italic text-sm md:text-base">{item.surah}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LA PROSTERNATION */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-emerald-500 uppercase tracking-widest italic leading-none">La Prosternation</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="bg-emerald-950/10 p-8 md:p-12 rounded-[3rem] border border-emerald-500/10 space-y-6 text-white/70 font-serif italic text-lg leading-relaxed">
            <p>
              "Pendant la lecture du Coran, la tradition veut que l’on se prosterne chaque fois que de besoin, de même que ceux qui écoutent, si ces derniers sont en état de pureté. Pour cette prosternation, on dit « Allahou Akbar » en se baissant et en se relevant, mais on ne récite pas le « Tachawoud » ni ne lève les bras."
            </p>
            <p>
              "La prosternation n’est pas recommandée dans le moment qui précède immédiatement le lever du soleil ; elle est formellement interdite lorsque le soleil commence à se lever, à se coucher, ainsi que pendant le sermon de l’Imam le vendredi. Au moment de la prosternation, il est recommandé de formuler des prières en rapport avec ce à quoi le verset fait allusion."
            </p>
          </motion.div>
        </section>

        {/* FORMULES DE PROSTERNATION */}
        <div className="space-y-4">
          {[
            { word: "« asdioudôna »", surah: "« lakh rafe »", prayer: "« sadiatou biwadji hinne zalîne li rabine dialîline sadiad toubi wadjihi yal fânî lirabiya l bâkhî sadiatou lilâhil leuzi khalakhani wasawrani wa chakha samhî wa bassari »" },
            { word: "« walâ sâlli »", surah: "« Rahdi »", prayer: "« la ilaha ila anta soubhanaka wa bihamdika rabi hamiltou sô ane wa zalamtou nafsi fatoub halaya inaka anta tawâbou rahîmou la ilaha ila anta soubhanaka wa bihamdika rabi hamiltou sô ane wa zalamtou nafsi fakh firlî inaka antal khafôrouz rahimoune lâ ilaha ila anta soubhanaka wa bihamdika rabî hamiltou sô ane wa zalamtou nafsi far hamni inaka anta arhamour râhimina »" },
            { word: "« mayoumarouna »", surah: "« Nahli »", prayer: "« Allahouma inaka tahlamou sirî hala niyatî fakh bal mahzirati wa tahlamou hâ diati fa ahtini souwli wa tahlamou mâ fî nafsi fakh firli zounôbi »" },
            { word: "« khouchou hanne »", surah: "« lissâi »", prayer: "« Allahouma idjhalnî mina l bâkînal khachi hîna laka »" },
            { word: "« wa boukiyane »", surah: "« Mariamou »", prayer: "« Allahouma adjhalni mine hibâdikal mounhami haley himous sâdjidîna lakal bâkina hinda tilawati ayâtika »" },
            { word: "« mâ yacha »", surah: "« Al Hadji »", prayer: "« rabana zalamna ane foussanâ wa ine lametakhfirlanâ wa tarkhamna lanakô na ne nâ minal khassirîna soubhanakal lâhouma wa bihamdika tabaraka ismouka wa tahala diadouka la ilaha ila anta zalamtou nafsi fakh firlî zounôbî fa inahô la yakh firou zounôba ila anta »" },
            { word: "« noufourane »", surah: "« al fourkhane »", prayer: "« Allahouma laka sadiadia sawâtdi wa khayâli wa bika âmana fou wâdi abô ou laka bî nihami wa akhtarifou laka bi zani halaya zalamtou nafsi fakh firli inaho lâ yakhfirou zounôba ila anta à honzou bihaf wika mine houkhô batika wa a honzou bi rahmatika mine mikhmatika wa a honzou biri dâka mine soukhtika wa a honzou bika minka la ouhsi sana ane haleyka, antakama asnaïta hala nafsika allahouma ourzoukhni hilmane yanfahouni wa hamalane yarfahouni »" },
            { word: "« azîmi »", surah: "« namli »", prayer: "« Sadiada wadjhî leuzi khalakh a hô wa sawara hô wa sakhala samhahô wa bassarahô bi lawli hi wa khouwatihi fatabaraka lahou ahzânou khâlikhîna »" },
            { word: "« la yasta kbirouna »", surah: "« sadjdati »", prayer: "« Allahouma idjal halnî mina sâdjidina liwadj hikal mousabihîna bi hamdika wa a houzou bika ane akôna minal moustakbirina ane amrika »" },
            { word: "« wa anaba »", surah: "« Dawouda »", prayer: "« Allahouma adjihal lî hâzi hîs sadjadata hindaka zouhrane wa ahzime lî bihâ adjirane wa dah hanî biha wizrane wa takhbalhâ mini kamâ takha baltahâ mine habdi ka dawouda haleyhi wa hala diamihil an biyaki wal moursalina assalatou wa sallame »" },
            { word: "« tahboudôna »", surah: "« fousilate »", prayer: "« Sadiadtou lilahi wahdahô la likhaïrihi allahouma ikhfirli bihâ koulla sanlin wa houta ha nî bihâ koulla wisri wa yassirlî bihâ koulla matlabin war fahli biha koulla zikrine wa daradjatine fi khouyouri daraïni âmine »" },
            { word: "« azimi »", surah: "« mamli »", prayer: "« Sadiada wadjhî leuzi khalakha hô wa sawara hô wa sakhaha samhahô wa bassarahô bilawli hi wa khouwatihi fatabaraka lahou ahzânou khâlikhîna »" },
          ].map((item, idx) => (
            <motion.div key={idx} {...fadeInUp} className="p-6 border-l-2 border-gold/30 bg-white/[0.01] rounded-r-3xl space-y-2">
              <span className="text-gold font-black text-[10px] uppercase tracking-widest">
                Si la prosternation se situe au niveau du mot {item.word} de la sourate {item.surah}, on dit ceci :
              </span>
              <p className="text-white/60 font-serif italic text-base leading-relaxed">{item.prayer}</p>
            </motion.div>
          ))}
        </div>

        {/* CONCLUSION */}
        <motion.div {...fadeInUp} className="bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6 text-white/80 font-serif italic text-lg leading-relaxed">
          <p>
            "Lorsqu’on aura terminé la lecture du Coran, on pourra solliciter au nom de Dieu tout ce que l’on désire."
          </p>
          <p>
            "Si la lecture du Coran est destinée à un mort, il faudra auparavant en formuler l’intention et prier pour qu’il lui fasse bénéficier des bienfaits liés à l’acte."
          </p>
        </motion.div>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/19/a')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/19/c')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}