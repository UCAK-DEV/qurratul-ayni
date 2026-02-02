'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreRamadan() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 10 (Le Ramadan)
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];

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
      sub: ["Majeurs et responsables", "Cas des voyageurs et malades"]
    },
    {
      letter: "C",
      title: "AUTRES ACTES BLAMABLES POUR QUI OBSERVE LE JEUNE",
      subtitle: "Précautions pour le jeûneur",
      ar: "أعمالٌ أخرى مذمومةٌ لمن يصوم",
      sub: ["Comportements à éviter", "Préservation du jeûne"]
    },
    {
      letter: "D",
      title: "DU PETIT DÉJEUNER DE L’AUBE OU « KHEUDE » PENDANT LE RAMADAN",
      subtitle: "Le repas de l'aube",
      ar: "وجبة السحور أو « خُودِي » خلال شهر رمضان",
      sub: ["Mérites du Kheude", "Limites temporelles"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative font-sans">
      {/* Effets de lumière et décoration de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          className="text-gold tracking-[0.8em] text-[10px] uppercase font-bold mb-6 block"
        >
          Quatrième Pilier — Fiqh
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]"
        >
          LE MOIS DE <br /><span className="gold-gradient-text">RAMADAN</span>
        </motion.h1>

        {/* Texte intégral de l'introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 text-white/50 font-serif italic text-lg leading-relaxed text-justify mb-12 bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/5"
        >
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
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/30 rounded-full text-gold font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:bg-gold/20 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="material-symbols-rounded text-2xl text-gold relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause' : 'play_arrow'}
          </span>
          <span className="relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter le chapitre'}
          </span>
        </motion.button>
      </div>

      {/* Grid des Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
        {sectionsRamadan.map((item, idx) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => router.push(`/partie/10/${item.letter.toLowerCase()}`)}
            className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden h-[300px] flex flex-col justify-between"
          >
            {/* Lettre en arrière-plan avec contour */}
            <span className="absolute -bottom-4 -right-2 text-[180px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.07] group-hover:-translate-y-4 group-hover:scale-110" 
                  style={{ WebkitTextStroke: '1px white' }}>
              {item.letter}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gold tracking-widest">{item.letter} — SECTION</span>
                <span className="font-amiri text-2xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:gold-gradient-text transition-all leading-tight">
                {item.title}
              </h3>
              <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest mt-1 mb-6">
                {item.subtitle}
              </p>

              <ul className="space-y-2">
                {item.sub.map((sub, sIdx) => (
                  <li key={sIdx} className="text-white/40 text-[13px] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/40 rounded-full" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Explorer <span className="material-symbols-rounded text-sm">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Persistante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/9')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/10/a')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Commencer
        </button>
      </div>
    </main>
  );
}