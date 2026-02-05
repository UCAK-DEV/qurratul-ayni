'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PageAblutions() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const causesAnnulation = [
    { id: 1, fr: "Le pet.", ar: "خروج الريح" },
    { id: 2, fr: "Le fait d’aller à la selle.", ar: "الخروج إلى الغائط" },
    { id: 3, fr: "Le fait d’uriner.", ar: "التبول" },
    { id: 4, fr: "La sécrétion de liquide prostatique (Madji) consécutive à l’érection due à l’observation, à l’imagination ou à l’attouchement. Dans ce cas, il faut laver entièrement le sexe après avoir formulé l’intention. L’érection sans sécrétion n’annule pas l’ablution.", ar: "خروج المذي" },
    { id: 5, fr: "La sortie du « wadiyu », liquide gluant émis par l’homme sans plaisir.", ar: "خروج الودي" },
    { id: 6, fr: "La sécrétion du sperme due à une maladie, à la fatigue ou à l’incontinence. Si cette sortie s’accompagne d’une jouissance sexuelle, la purification par le lavage est obligatoire.", ar: "خروج المني" },
    { id: 7, fr: "La sécrétion du liquide précédant l’accouchement. En cas d’accouchement non accompagné de sang, le lavage est obligatoire. S’il est accompagné de sang, le lavage se fait après l’arrêt du saignement.", ar: "إفرازات ما قبل الولادة" },
    { id: 8, fr: "Crise d’épilepsie ou de folie.", ar: "نوبة صرع أو جنون" },
    { id: 9, fr: "L’évanouissement.", ar: "الإغماء" },
    { id: 10, fr: "L’ivresse.", ar: "السكر" },
    { id: 11, fr: "Le sommeil profond, même s’il est court, durant lequel une personne perd la sensation.", ar: "النوم العميق" },
    { id: 12, fr: "Le fait pour un homme majeur de toucher le corps, les cheveux, les ongles ou les habits d’une femme avec l’intention d’en jouir, qu’il y ait plaisir ou non.", ar: "لمس المرأة بشهوة" },
    { id: 13, fr: "Le baiser bouche à bouche entre homme et femme annule l’ablution, qu’il y ait jouissance ou non.", ar: "التقبيل من الفم" },
    { id: 14, fr: "Le fait pour un homme de toucher sa verge avec la paume, les doigts ou le contour de la main annule l’ablution.", ar: "مس الذكر" },
    { id: 15, fr: "En cas de doute avant ou pendant la prière, l’ablution doit être reprise.", ar: "الشك في الطهارة" }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre V — Section B</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LES <span className="gold-gradient-text italic font-serif lowercase">ablutions</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الوضوء</p>

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
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        {/* 1. OBLIGATION & MISE EN GARDE */}
        <section className="mb-32">
          <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">B</span>
            <div className="max-w-3xl space-y-8 relative z-10">
               <h2 className="text-gold text-[10px] tracking-[0.4em] font-bold uppercase">Avertissement</h2>
               <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-gold/30 pl-8">
                &quot;Toute personne majeure doit faire ses ablutions avant de prier ou de toucher le Saint Coran. Celui qui transgresse cette prescription de façon délibérée et sans excuse est digne du plus grand mépris.&quot;
               </p>
            </div>
          </div>
        </section>

        {/* 2. CAUSES D'ANNULATION GRID */}
        <section className="mb-32 space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Causes d'annulation</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
            <span className="text-xl font-amiri text-gold/40">نواقض الوضوء</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {causesAnnulation.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-gold/20 font-black text-3xl block mb-4">#{item.id}</span>
                  <p className="text-white/70 font-serif italic text-lg leading-snug mb-6">{item.fr}</p>
                </div>
                <p className="text-right font-amiri text-xl text-gold-light opacity-60" dir="rtl">{item.ar}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. LE SIWOU BLOCK */}
        <section className="mb-32">
          <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 space-y-12">
            <div className="flex justify-between items-center border-b border-gold/10 pb-6">
               <h3 className="text-gold font-black text-[10px] uppercase tracking-widest">Le Siwou (Lavage Intime)</h3>
               <span className="font-amiri text-3xl text-gold">الاستنجاء</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 font-serif italic text-lg text-white/70 leading-relaxed">
              <div className="space-y-6">
                <p>Consiste à laver proprement les parties intimes avec de l’eau non souillée avant de quitter les lieux.</p>
                <div className="p-8 rounded-2xl bg-black/40 border border-white/5">
                  <p className="text-gold text-[10px] uppercase font-bold mb-4 tracking-widest">Invocation d'entrée</p>
                  <p className="text-white mb-4">&quot;Bismilahi allahouma iniya a hons oubika minal khouboussi wal khabâ issi.&quot;</p>
                  <p className="font-amiri text-2xl text-gold-light" dir="rtl">بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-sm opacity-60">Il est méritoire d’entrer avec le pied gauche et de sortir avec le pied droit. Le « siwou » revêt une importance capitale pour la validité de la prière.</p>
                <div className="p-8 rounded-2xl bg-black/40 border border-white/5">
                  <p className="text-gold text-[10px] uppercase font-bold mb-4 tracking-widest">Invocation de sortie</p>
                  <p className="text-white mb-4">&quot;Bismilahi alhamdoulilahi lazi azhaba anil âzâ wa hâfâni.&quot;</p>
                  <p className="font-amiri text-2xl text-gold-light" dir="rtl">بِسْمِ اللَّهِ، الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRATIQUE PAS À PAS */}
        <section className="mb-32 space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Pratique de l'ablution</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
            <span className="text-xl font-amiri text-gold/40">صفة الوضوء</span>
          </div>
          <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.01] border border-white/5">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
               {[
                "Chercher de l’eau non souillée ; s’asseoir dans un lieu propre ; se tourner vers la Kaaba ; dire Bismillahi.",
                "Se laver les mains (3 fois) jusqu’aux poignets en commençant par la droite.",
                "Se rincer la bouche (3 fois).",
                "Aspirer l’eau par les narines et la rejeter (3 fois) : aspirer (droite), rejeter (gauche).",
                "Se laver le visage (3 fois) avec l’intention obligatoire.",
                "Se laver l’avant-bras droit, puis le gauche (3 fois chacun).",
                "Passer l’eau sur la tête du front à la nuque, puis retour.",
                "Se laver les oreilles intérieurement et extérieurement.",
                "Enfin se laver le pied droit (3 fois), puis le pied gauche."
               ].map((step, idx) => (
                 <div key={idx} className="flex gap-6 items-start group">
                   <span className="text-gold font-black opacity-20 text-3xl leading-none">{(idx+1)}</span>
                   <p className="text-lg text-white/70 group-hover:text-white transition-colors font-serif italic">{step}</p>
                 </div>
               ))}
            </div>
            
            {/* INVOCATION FINALE */}
            <div className="mt-20 p-12 rounded-[2.5rem] bg-gold/5 border border-gold/20 text-center space-y-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">Invocation après l'ablution</p>
              <p className="font-amiri text-3xl md:text-5xl text-gold-light leading-[1.8]" dir="rtl">
                أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. <br/>
                اللَّهُمَّ اجْعَلْنَا مِنَ التَّوَّابِينَ، وَاجْعَلْنَا مِنَ الْمُتَطَهِّرِينَ، وَاجْعَلْنَا مِنْ عِبَادِكَ الصَّالِحِينَ.
              </p>
              <div className="h-[1px] w-12 bg-gold/30 mx-auto" />
              <p className="text-sm text-gold/60 italic font-serif">&quot;Achadouane lahilaha illalah...&quot;</p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/5/a')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/5/c')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}