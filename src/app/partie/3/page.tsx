'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PageUnicite() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 3 pour l'audio
  const chapterData = CHAPTERS.find(c => c.id === "3") || CHAPTERS[2];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) {
      togglePlay();
    } else {
      setChapter(chapterData);
    }
  };

  const sectionsUnicite = [
    {
      fr: "Il n’y a de divinité que Dieu. Son règne est sans partage. C’est Lui qui décide de tout. C’est Lui qui fait, c’est Lui qui défait.",
      ar: "لا إله إلا الله، وحده لا شريك له في ملكه، هو الذي بيده ملكوت كل شيء، وهو الذي يفعل ويختار."
    },
    {
      fr: "Il n’a besoin de l’assistance de personne, il ne demande l’autorisation de personne. Il n’agit que par sa Propre Volonté en toute chose en raison de Son Omnipuissance, en raison de Son Omniscience, en raison de sa seule Volonté.",
      ar: "لا يحتاج إلى معونة أحد، ولا يستأذن أحداً، لا يتصرف إلا بمحض إرادته في كل شيء لقدرته المطلقة وعلمه الشامل ومشيئته وحده."
    },
    {
      fr: "Il ne fait recours à personne mais tout le monde a besoin de Lui. Il préexiste à tous et il est éternel. Il entend, il voit, il parle, mais Sa Perception est sans commune mesure avec celle des créatures.",
      ar: "لا يلجأ إلى أحد والكل محتاج إليه، هو الأول قبل كل شيء والباقي بعد كل شيء، يسمع ويرى ويتكلم، ولكن ليس كمثل إدراكه إدراك المخلوقات."
    },
    {
      fr: "Il ne ressemble à rien, à personne. Rien de ce que l’on peut imaginer ou concevoir par la pensée ou par la parole n’est semblable aux attributs de Dieu.",
      ar: "ليس كمثله شيء، ولا يشبه أحداً، وكل ما خطر ببالك فالله بخلاف ذلك، لا تدركه الأبصار ولا تصفه الألسن بما يماثل صفات المخلوقين."
    },
    {
      fr: "Il n’a point enfanté, Il n’a pas été enfanté. Il n’est le parent de personne. Toute créature est Son serviteur.",
      ar: "لم يلد ولم يولد، ولم يكن له كفواً أحد، ليس والداً لأحد والكل عبيد له وخاضعون لعظمته."
    },
    {
      fr: "Il connaît tout, Il n’ignore rien, Il est Omniprésent, Il a le don de l’ubiquité : la solitude ne doit pas nous faire oublier qu’Il est partout avec nous, qu’il est témoin de nos actes et de nos paroles.",
      ar: "يعلم كل شيء ولا يخفى عليه شيء، هو حاضر في كل مكان بعلمه، فلا تنسنا الوحدة أنه معنا أينما كنا، شهيد على أعمالنا وأقوالنا."
    },
    {
      fr: "Il les enregistre, n’en oublie aucun et nous les rétribuera en conséquence. Il connaît la pensée de chacun de nous, aussi nombreux que nous soyons, quelle que soit la diversité des idées émises.",
      ar: "يحصي أعمالنا ولا ينسى منها شيئاً وسيجزينا عليها، يعلم خائنة الأعين وما تخفي الصدور، مهما كثرت الخلائق وتنوعت الأفكار."
    },
    {
      fr: "Chacun de nous comparaîtra seul devant Lui et croira alors être Sa seule créature. Il est le Créateur, Il nous fait vivre par Sa Grâce, Il fait, Il répand ses bienfaits sur nous.",
      ar: "كل فرد سيمثل وحده بين يديه حتى يظن أنه خلقه وحده، هو الخالق يحيينا بفضله ويسبغ علينا نعمه ظاهرة وباطنة."
    },
    {
      fr: "C’est Lui qui met fin à notre existence et nous ressuscite sans aucun doute. Après nous avoir ressuscités, Il nous rassemblera en un jour, en un lieu et nous lui rendons compte de nos actes.",
      ar: "هو الذي يميتنا ثم يحيينا، ويبعثنا بلا شك، ليجمعنا في يوم معلوم ومقام واحد لنوفى أجورنا عما عملنا."
    },
    {
      fr: "Après examen de nos actes, Il nous enverra au paradis ou en enfer suivant que nos œuvres auront été bonnes ou mauvaises. Sa décision sera sans appel et chacun ne se préoccupera que de son propre sort.",
      ar: "فبناءً على أعمالنا، يكون المصير إما إلى الجنة أو إلى النار، حكمه عدل وقضاؤه لا يرد، وفي ذلك اليوم لا يهتم المرء إلا بنفسه."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-16 md:pt-28 pb-48 px-4 md:px-6">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-amiri text-xl md:text-2xl text-gold mb-4"
        >
          بسم الله الرحمن الرحيم
        </motion.p>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-6xl font-bold bg-gradient-to-b from-gold-light to-gold bg-clip-text text-transparent leading-tight mb-8"
        >
          DE L’UNICITÉ DE DIEU
        </motion.h1>

        {/* CONTRÔLE AUDIO */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-8 py-4 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-widest text-[10px] backdrop-blur-md transition-all hover:bg-gold/20 shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon'}
        </motion.button>
      </div>

      {/* CONTENU BILINGUE */}
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
        {sectionsUnicite.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            className="glass-card p-6 md:p-10 rounded-[2rem] border border-white/5 hover:border-gold/20 transition-all duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="order-1 md:order-2 text-right" dir="rtl">
                <p className="text-xl md:text-3xl font-amiri text-gold-light leading-[1.8]">
                  {item.ar}
                </p>
              </div>
              <div className="md:hidden h-[1px] w-12 bg-gold/20 mx-auto order-2" />
              <div className="order-3 md:order-1 border-l-2 md:border-l-0 border-gold/10 pl-4 md:pl-0">
                <p className="text-base md:text-lg text-white/60 font-serif leading-relaxed italic">
                  "{item.fr}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NAVIGATION */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[90%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/2')} 
          className="flex-1 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/4')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}