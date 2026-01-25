'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PageUnicite() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre (ID '3' ou 'unicite' selon votre data/chapters.ts)
  const chapterData = CHAPTERS.find(c => c.id === "3") || CHAPTERS[2];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) {
      togglePlay();
    } else {
      setChapter(chapterData);
    }
  };

  const contenuIntegral = [
    {
      ar: "لا إله إلا الله. ملكه لا شريك له. هو الذي يقرر كل شيء. هو الذي يفعل، وهو الذي يبطل.",
      fr: "IL N'Y A DE DIVINITÉ QUE DIEU. Son règne est sans partage. C'est Lui qui décide de tout. C'est Lui qui fait, c'est Lui qui défait. [cite: 151, 152]"
    },
    {
      ar: "لا يحتاج إلى مساعدة أحد، ولا يطلب إذن أحد. لا يتصرف إلا بمحض إرادته في كل شيء لعظمته وعلمه ومشيئته.",
      fr: "Il n'a besoin de l'assistance de personne, il ne demande l'autorisation de personne. Il n'agit que par sa Propre Volonté en toute chose en raison de Son Omnipuissance, en raison de Son Omniscience, en raison de sa seule Volonté. [cite: 152, 153]"
    },
    {
      ar: "لا يستعين بأحد ولكن الجميع محتاجون إليه. هو الأول والآخر. يسمع ويرى ويتكلم، ولكن إدراكه لا يقاس بإدراك المخلوقات.",
      fr: "Il ne fait recours à personne mais tout le monde a besoin de Lui. Il pré-existe à tous et il est éternel. Il entend, il voit, il parle, mais Sa Perception est sans commune mesure avec celle des créatures. [cite: 154, 155]"
    },
    {
      ar: "ليس كمثله شيء. لا يشبه أحداً. لا شيء مما يتصوره العقل أو يعبر عنه اللسان يشبه صفات الله.",
      fr: "Il ne ressemble à rien, à personne. Rien de ce que l'on peut imaginer ou concevoir par la pensée ou par la parole n'est semblable aux attributs de Dieu. [cite: 156]"
    },
    {
      ar: "لم يلد ولم يولد. ليس والداً لأحد. كل مخلوق هو عبده.",
      fr: "Il n'a point enfanté, Il n'a pas été enfanté. Il n'est le parent de personne. Toute créature est Son serviteur. [cite: 157]"
    },
    {
      ar: "يعلم كل شيء، ولا يخفى عليه شيء. هو حاضر في كل مكان. الوحدة لا يجب أن تنسينا أنه معنا في كل مكان.",
      fr: "Il connaît tout, Il n'ignore rien, Il est Omniprésent, Il a le don de l'ubiquité : la solitude ne doit pas nous faire oublier qu'Il est partout avec nous. [cite: 158]"
    },
    {
      ar: "هو شاهد على أعمالنا وأقوالنا، يسجلها ولا ينسى منها شيئاً وسيجزينا عليها.",
      fr: "Il est témoin de nos actes et de nos paroles, Il les enregistre, n'en oublie aucun et nous les rétribuera en conséquence. [cite: 158]"
    },
    {
      ar: "يعلم أفكار كل واحد منا، مهما كثرنا ومهما تنوعت الأفكار. كل واحد منا سيمثل وحده أمامه.",
      fr: "Il connaît la pensée de chacun de nous, aussi nombreux que nous soyons, quelle que soit la diversité des idées émises. Chacun de nous comparaîtra seul devant Lui et croira alors être Sa seule créature. [cite: 159, 160]"
    },
    {
      ar: "هو الخالق، يحيينا بفضله، ويفيض علينا بنعمه. هو الذي ينهي وجودنا ويبعثنا بلا شك.",
      fr: "Il est le Créateur, Il nous fait vivre par Sa Grâce, Il fait, Il répand ses bienfaits sur nous. C'est Lui qui met fin à notre existence et nous ressuscite sans aucun doute. [cite: 161, 162]"
    },
    {
      ar: "بعد البعث، سيجمعنا في يوم ومكان واحد لنحاسب على أعمالنا. بعد فحص الأعمال، سيرسلنا إلى الجنة أو النار.",
      fr: "Après nous avoir ressuscités, Il nous rassemblera en un jour, en un lieu et nous lui rendons compte de nos actes, chacun en ce qui le concerne. Après examen de nos actes, Il nous enverra au paradis ou en enfer suivant que nos œuvres auront été bonnes ou mauvaises. [cite: 163, 164]"
    },
    {
      ar: "قراره لا رجعة فيه، وكل واحد لن يهتم إلا بمصيره.",
      fr: "Sa décision sera sans appel et chacun ne se préoccupera que de son propre sort. [cite: 165]"
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Khouratoul Ayni
        </motion.span>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-7xl font-bold gold-gradient-text leading-tight mb-8">
          DE L'UNICITÉ DE DIEU
        </motion.h1>

        {/* Déclencheur Audio Premium */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-8 py-4 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-widest text-[10px] hover:bg-gold/20 transition-all shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter le chapitre'}
        </motion.button>
      </div>

      {/* Contenu textuel bilingue intégral */}
      <div className="max-w-6xl mx-auto space-y-10">
        {contenuIntegral.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/5 hover:border-gold/20 transition-all duration-700 shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Texte Arabe */}
              <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                <p className="text-2xl md:text-5xl font-amiri text-gold-light leading-[1.8] dir-rtl">
                  {item.ar}
                </p>
              </div>
              
              {/* Séparateur Central */}
              <div className="hidden md:block w-[1px] h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent order-2" />
              
              {/* Texte Français */}
              <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                <p className="text-lg md:text-xl text-white/50 font-serif leading-relaxed italic">
                  "{item.fr}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation de bas de page */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/partie/2')} // Vers le chapitre précédent
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/4')} // Vers le chapitre suivant
          className="px-10 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}