'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreRamadan() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const sectionsRamadan = [
    {
      letter: "A",
      title: "QU’EST-CE QUE LE JEÛNE ?",
      subtitle: "Définition et essence",
      ar: "ما هو الصوم؟",
      sub: ["Nature de l'abstinence", "Intention (Niyyah)"]
    },
    {
      letter: "B",
      title: "QUI DOIT JEÛNER ?",
      subtitle: "Les conditions d'obligation",
      ar: "من يجب عليه الصوم؟",
      sub: ["Majeurs et responsables", "Cas des voyageurs"]
    },
    {
      letter: "C",
      title: "ACTES BLAMABLES",
      subtitle: "Précautions rituelles",
      ar: "المكروهات",
      sub: ["Comportements à éviter", "Préservation du jeûne"]
    },
    {
      letter: "D",
      title: "PETIT DÉJEUNER DE L’AUBE",
      subtitle: "Le repas du « Kheude »",
      ar: "السحور",
      sub: ["Mérites du repas", "Limites temporelles"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-emerald-900/10 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="text-4xl font-amiri text-gold-light drop-shadow-sm">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
               <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/30" />
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Quatrième Pilier — Chapitre X</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              LE MOIS DE <br /><span className="gold-gradient-text">RAMADAN</span>
            </h1>

            {/* INTEGRAL TEXT PRESERVATION */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  "L’observation du jeûne pendant ce mois est une obligation divine pour toute personne majeure. Celui qui le conteste est un mécréant. Qui s’y refuse est un impie, s’il le fait exprès, sans empêchement. S’il ne s’en repent pas jusqu’à sa mort, il sera précipité dans les feux de l’enfer."
                </p>
                <p>
                  "Le jeûne doit commencer si l’on aperçoit effectivement le croissant lunaire le vingt-neuvième (29e) jour du mois de « barakhlou ». À défaut de cela, on attend que ce mois ait trente jours révolus. Si quelqu’un aperçoit le croissant lunaire de manière indubitable et sans témoins, que les gens jeûnent ou ne jeûnent pas, lui, il est tenu d’observer le jeûne. S’il ne le fait pas pour le simple plaisir de vouloir jeûner en même temps que tout le monde, il devra jeûner après pour compenser ce jour ; il devra également une réparation ou « kafâra » pour ce jour omis."
                </p>
                <p>
                  "Si l’on aperçoit le croissant lunaire au vingt-neuvième jour du mois de ramadan, on ne devra pas manifester qu’on n’a pas jeûné. Si on le fait voir, on commet une faute aux yeux de la charia, à moins qu’on ait une autre raison qui nous dispense du jeûne. Avant de commencer à observer le jeûne ou de mettre un terme au jeûne (korité), la communauté doit s’assurer que deux personnes dont tout le monde connaît la bonne foi ont dit avoir aperçu le croissant lunaire, ou qu’un groupe d’individus qui ne peuvent pas mentir de connivence ont dit l’avoir aperçu."
                </p>
                <p>
                  "Dans ce cas-là, on doit observer le jeûne s’il s’agit du début du ramadan ou rompre le jeûne, s’il s’agit de la fin du ramadan, ou encore célébrer la tabaski s’il s’agit d’elle. Quant aux astronomes ou ceux qui confectionnent les calendriers, on ne doit pas se référer à eux pour ce qui concerne l’apparition du croissant lunaire. Si la lune n’est pas aperçue dans un pays donné, alors qu’elle l’est dans un autre pays lointain, les habitants du pays où on ne l’a pas aperçue n’ont pas le droit d’observer le jeûne en se fondant sur le fait que le croissant a été aperçu dans un pays lointain."
                </p>
                <p>
                  "Les habitants d’un pays doivent se contenter d’observer le croissant lunaire sur leur territoire sans tenir compte d’un croissant lunaire qui serait aperçu dans un pays lointain. Une fois, les habitants des Hijaz n’ont pas aperçu le croissant, alors que ceux du Yémen l’avaient aperçu. Quand on l’a dit à Seyidina Omar, il a déclaré : « nous ne sommes pas dans la même région »."
                </p>
                <p>
                  "Si on n’a pas aperçu le croissant lunaire le premier jour de son observation du mois de « barakhlou » et que le lendemain, au milieu du jour, on se rend compte qu’il était réellement apparu, on doit observer le jeûne le reste du jour et on devra payer ce jour. Si le cas se présente pour la korité, on doit rompre le jeûne aussitôt et effectuer la prière de la korité si cela est arrivé avant la prière du zohr (tisbar). Si cela est arrivé à l’heure de la prière du zohr, celle de la korité est révolue et elle ne sera pas effectuée en guise de rattrapage."
                </p>
              </div>
            </div>

            {/* AUDIO CONTROL */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-40' : 'opacity-0'}`} />
                <span className={`material-symbols-rounded text-4xl relative z-10 ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>
                  {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
                </span>
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Écouter la leçon</p>
                <p className="text-sm font-bold tracking-tight">
                  {isThisChapterPlaying ? 'Mise en pause' : 'Démarrer l\'audio'}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* GRID DES SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionsRamadan.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => router.push(`/partie/10/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden h-[340px] flex flex-col justify-between"
            >
              {/* LARGE BACKGROUND LETTER */}
              <span className="absolute -bottom-6 -right-4 text-[200px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-4" 
                    style={{ WebkitTextStroke: '1px white' }}>
                {item.letter}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold text-gold tracking-[0.3em] uppercase opacity-60">Section {item.letter}</span>
                  <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  {item.subtitle}
                </p>

                <ul className="space-y-3">
                  {item.sub.map((sub, sIdx) => (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-sm flex items-center gap-3 transition-colors">
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Ouvrir l'étude <span className="material-symbols-rounded text-sm">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/9')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/10/a')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"
        >
          Commencer
        </button>
      </nav>
    </main>
  );
}