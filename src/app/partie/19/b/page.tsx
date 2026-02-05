'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LectureCoranPage() {
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

  const sadjdas = [
    { word: "« asdioudôna »", surah: "« lakh rafe »", ar: "سَجَدْتُ بِوَجْهِيَ الذَّلِيلِ لِرَبٍّ جَلِيلٍ، سَجَدْتُ بِوَجْهِيَ الْفَانِي لِرَبِّيَ الْبَاقِي، سَجَدْتُ لِلَّهِ الَّذِي خَلَقَنِي وَصَوَّرَنِي وَشَقَّ سَمْعِي وَبَصَرِي", tr: "« sadiatou biwadji hinne zalîne li rabine dialîline sadiad toubi wadjihi yal fânî lirabiya l bâkhî sadiatou lilâhil leuzi khalakhani wasawrani wa chakha samhî wa bassari »" },
    { word: "« walâ sâlli »", surah: "« Rahdi »", ar: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ وَبِحَمْدِكَ رَبِّي عَمِلْتُ سُوءًا وَظَلَمْتُ نَفْسِي فَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ...", tr: "« la ilaha ila anta soubhanaka wa bihamdika rabi hamiltou sô ane wa zalamtou nafsi fatoub halaya inaka anta tawâbou rahîmou... »" },
    { word: "« mayoumarouna »", surah: "« Nahli »", ar: "اللَّهُمَّ إِنَّكَ تَعْلَمُ سِرِّي وَعَلَانِيَتِي فَاقْبَلْ مَعْذِرَتِي وَتَعْلَمُ حَاجَتِي فَأَعْطِنِي سُؤْلِي وَتَعْلَمُ مَا فِي نَفْسِي فَاغْفِرْ لِي ذُنُوبِي", tr: "« Allahouma inaka tahlamou sirî hala niyatî fakh bal mahzirati wa tahlamou hâ diati fa ahtini souwli wa tahlamou mâ fî nafsi fakh firli zounôbi »" },
    { word: "« khouchou hanne »", surah: "« lissâi »", ar: "اللَّهُمَّ اجْعَلْنِي مِنَ الْبَاكِينَ الْخَاشِعِينَ لَكَ", tr: "« Allahouma idjhalnî mina l bâkînal khachi hîna laka »" },
    { word: "« wa boukiyane »", surah: "« Mariamou »", ar: "اللَّهُمَّ اجْعَلْنِي مِنْ عِبَادِكَ الْمُنْعَمِ عَلَيْهِمُ السَّاجِدِينَ لَكَ الْبَاكِينَ عِنْدَ تِلَاوَةِ آيَاتِكَ", tr: "« Allahouma adjhalni mine hibâdikal mounhami haley himous sâdjidîna lakal bâkina hinda tilawati ayâtika »" },
    { word: "« mâ yacha »", surah: "« Al Hadji »", ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ. سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ تَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ...", tr: "« rabana zalamna ane foussanâ wa ine lametakhfirlanâ wa tarkhamna lanakô na ne nâ minal khassirîna... »" },
    { word: "« noufourane »", surah: "« al fourkhane »", ar: "اللَّهُمَّ لَكَ سَجَدَ سَوَادِي وَخَيَالِي وَبِكَ آمَنَ فُؤَادِي، أَبُوءُ لَكَ بِنِعَمِي وَأَعْتَرِفُ لَكَ بِذَنْبِي... أَعُوذُ بِعَفْوِكَ مِنْ عُقُوبَتِكَ", tr: "« Allahouma laka sadiadia sawâtdi wa khayâli wa bika âmana fou wâdi abô ou laka bî nihami... »" },
    { word: "« azîmi »", surah: "« namli »", ar: "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ فَتَبَارَكَ اللهُ أَحْسَنُ الْخَالِقِينَ", tr: "« Sadiada wadjhî leuzi khalakh a hô wa sawara hô wa sakhala samhahô wa bassarahô bi lawli hi wa khouwatihi fatabaraka lahou ahzânou khâlikhîna »" },
    { word: "« la yasta kbirouna »", surah: "« sadjdati »", ar: "اللَّهُمَّ اجْعَلْنِي مِنَ السَّاجِدِينَ لِوَجْهِكَ الْمُسَبِّحِينَ بِحَمْدِكَ وَأَعُوذُ بِكَ أَنْ أَكُونَ مِنَ الْمُسْتَكْبِرِينَ عَنْ أَمْرِكَ", tr: "« Allahouma idjal halnî mina sâdjidina liwadj hikal mousabihîna bi hamdika wa a houzou bika ane akôna minal moustakbirina ane amrika »" },
    { word: "« wa anaba »", surah: "« Dawouda »", ar: "اللَّهُمَّ اجْعَلْ لِي هَذِهِ السَّجْدَةَ عِنْدَكَ ذُخْرًا وَأَعْظِمْ لِي بِهَا أَجْرًا وَضَعْ عَنِّي بِهَا وِزْرًا وَتَقَبَّلْهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ عَلَيْهِ السَّلَامُ", tr: "« Allahouma adjihal lî hâzi hîs sadjadata hindaka zouhrane wa ahzime lî bihâ adjirane... »" },
    { word: "« tahboudôna »", surah: "« fousilate »", ar: "سَجَدْتُ لِلَّهِ وَحْدَهُ لَا لِغَيْرِهِ، اللَّهُمَّ اغْفِرْ لِي بِهَا كُلَّ ذَنْبٍ وَاحْطُطْ عَنِّي بِهَا كُلَّ وِزْرٍ وَيَسِّرْ لِي بِهَا كُلَّ مَطْلَبٍ...", tr: "« Sadiadtou lilahi wahdahô la likhaïrihi allahouma ikhfirli bihâ koulla sanlin... »" },
    { word: "« azimi »", surah: "« mamli »", ar: "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ فَتَبَارَكَ اللهُ أَحْسَنُ الْخَالِقِينَ", tr: "« Sadiada wadjhî leuzi khalakha hô wa sawara hô wa sakhaha samhahô wa bassarahô... »" },
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 font-sans">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-950/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XIX — Section B</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LECTURE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">du coran</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">قراءة القرآن الكريم</p>

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

        <div className="space-y-24">
          
          {/* 1. DISPOSITIONS GÉNÉRALES */}
          <motion.section {...fadeInUp} className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-justify relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">B</span>
            <div className="space-y-8 relative z-10">
              <p>&quot;Lire le Coran est une manière d’invoquer le nom d’Allah. Il faut s’efforcer d’en lire quelques sourates par jour, ne serait-ce que 3 « Izib », et ce sans interruption.&quot;</p>
              <div className="p-10 rounded-[3rem] bg-gold/[0.05] border border-gold/20 shadow-sm border-l-4 border-l-gold">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest block mb-4 font-sans not-italic">États et pureté</span>
                &quot;Il est recommandé à celui qui lit le Coran d’être en état de pureté totale en ce qui concerne son corps, les habits qu’on porte et l’endroit où on le lit. Il est tout aussi recommandé, en le faisant, de se tourner vers la Kaaba, d’y mettre du sérieux et de la rigueur, toute la foi et l’humilité requises ; il faut également réfléchir sur le sens des mots si l’on en est capable. On doit avoir dans l’esprit qu’on est devant Dieu, qu’on s’adresse à Lui et qu’Il nous voit.&quot;
              </div>
            </div>
          </motion.section>

          {/* 2. LE SOUBOUHOU */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Soubouhou (Répartition)</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-4 not-italic font-sans text-sm">
              {[
                { d: "Dimanche", s: "de la sourate « bakhara » jusqu’à la sourate « nissah-i »" },
                { d: "Lundi", s: "de la sourate « maa idati » jusqu’à la sourate « tawbati »" },
                { d: "Mardi", s: "de la sourate « younoussa » jusqu’à la sourate « nahli »" },
                { d: "Mercredi", s: "de la sourate « israa i » jusqu’à la sourate « fourkhane »" },
                { d: "Jeudi", s: "de la sourate « chouharâ-i » jusqu’à la sourate « yassi »" },
                { d: "Vendredi", s: "de la sourate « sâfati » jusqu’à la sourate « houdiourâte »" },
                { d: "Samedi", s: "de la sourate « madjiidi » jusqu’à la sourate « nassi »" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-6 group hover:bg-white/10 transition-all">
                  <span className="text-gold font-black uppercase tracking-widest w-24">{item.d}</span>
                  <p className="text-white/60 font-serif italic text-base flex-1">{item.s}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. LA PROSTERNATION (SADJDA) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">La Prosternation Rituelle</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/10" />
            </div>
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-emerald-950/[0.03] border border-emerald-500/10 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed text-justify">
              <p>&quot;Pendant la lecture du Coran, la tradition veut que l’on se prosterne chaque fois que de besoin, de même que ceux qui écoutent, si ces derniers sont en état de pureté. Pour cette prosternation, on dit « Allahou Akbar » en se baissant et en se relevant, mais on ne récite pas le « Tachawoud » ni ne lève les bras.&quot;</p>
              <div className="p-8 rounded-3xl bg-red-950/[0.05] border border-red-900/20 text-center not-italic font-sans text-xs text-red-200/60 uppercase tracking-widest">
                Interdit : lever/coucher du soleil & sermon du vendredi.
              </div>
            </motion.div>
          </section>

          {/* 4. LES 12 DOU'ANS DE PROSTERNATION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Invocations de Prosternation</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="space-y-8">
              {sadjdas.map((item, idx) => (
                <motion.div key={idx} {...fadeInUp} className="p-10 rounded-[3.5rem] bg-black/40 border border-white/5 space-y-8 shadow-sm">
                  <div className="flex justify-between items-start border-b border-white/5 pb-6">
                    <span className="text-gold font-black text-[10px] uppercase tracking-widest">Si la prosternation est au mot {item.word} de la sourate {item.surah} :</span>
                    <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-black text-xs">{idx + 1}</span>
                  </div>
                  <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">{item.ar}</p>
                  <p className="text-white/30 font-serif italic text-sm text-left border-t border-white/5 pt-8" dir="ltr">{item.tr}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CONCLUSION SECTION */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-gold/[0.02] border border-gold/10 text-center space-y-8 pb-20">
             <div className="font-serif italic text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto space-y-8">
                <p>&quot;Lorsqu’on aura terminé la lecture du Coran, on pourra solliciter au nom de Dieu tout ce que l’on désire.&quot;</p>
                <div className="h-px bg-white/5 w-24 mx-auto" />
                <p className="text-white/40 text-base">
                  &quot;Si la lecture du Coran est destinée à un mort, il faudra auparavant en formuler l’intention et prier pour qu’il lui fasse bénéficier des bienfaits liés à l’acte.&quot;
                </p>
             </div>
          </motion.section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/19/a')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/19/c')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}