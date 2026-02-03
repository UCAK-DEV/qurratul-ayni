'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ActeDegorgerPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 15
  const chapterData = CHAPTERS.find(c => c.id === "15") || CHAPTERS[14];

  const sectionsEgorger = [
    { 
      letter: "A", 
      title: "LE CHASSEUR", 
      ar: "الصياد", 
      sub: ["Règles de la chasse", "Usage des armes et chiens"] 
    },
    { 
      letter: "B", 
      title: "TABASKI (AÏD AL-ADHA)", 
      ar: "عيد الأضحى", 
      sub: ["Sacrifice rituel", "Conditions de l'animal"] 
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 blur-[120px] rounded-full opacity-30" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XV — Fiqh Al-Dhabh</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]"
        >
          L’ACTE <br /><span className="gold-gradient-text italic">D’ÉGORGER</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold/80 block mb-12 drop-shadow-2xl text-center">أحكام الذبح</p>

        {/* Texte intégral de l'introduction - Rigueur et Méthode */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8 text-white/60 font-serif italic text-lg leading-relaxed text-justify mb-16 bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5"
        >
          <p className="not-italic font-sans text-gold font-bold border-l-2 border-gold pl-4 text-base">
            Seul le musulman jouissant de ses facultés mentales a le droit d’égorger.
          </p>
          <p>
            "La meilleure manière de s’y prendre est de coucher l’animal sur le côté gauche, la tête tournée vers la Qibla ou la Kaaba. S’il s’agit d’un mouton, on tire l’oreille droite le long du cou et on applique le couteau juste au bout de l’oreille. Si le mouton a des barbillons, on place le couteau entre ces derniers. On l’applique après avoir formulé intérieurement l’intention de rendre consommable la viande de l’animal en question par le moyen du geste que l’on va accomplir."
          </p>

          {/* Formules Rituelles */}
          <div className="bg-gold/5 p-8 rounded-3xl border border-gold/10 space-y-6 text-center">
             <div className="space-y-2">
                <p className="font-amiri text-3xl text-white">بِسْمِ اللهِ ... اللهُ أَكْبَرُ</p>
                <p className="text-white/80 font-sans not-italic text-sm">
                  En appliquant le couteau, dire : <strong>« Bismilahi »</strong>. <br />
                  Quand le sang aura giclé, dire : <strong>« Allahou Akbar »</strong>.
                </p>
             </div>
             <div className="h-px bg-gold/10 w-24 mx-auto" />
             <div className="space-y-4">
                <p className="font-amiri text-2xl text-white dir-rtl leading-relaxed">رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ</p>
                <p className="text-white/60 italic text-sm">
                  Ensuite on enlève la main tenant le couteau et on dit : <br />
                  « Rabanna taqabbal minnâ innaka anta samî‘ou l-‘alîm »
                </p>
             </div>
          </div>

          <p>
            "Si, après avoir fait glisser le couteau et commencé à couper les carotides, on lève la main par inadvertance et qu’on se hâte de reprendre l’opération en portant de nouveau le couteau sur le cou de l’animal, la viande sera consommable. Si, par contre, on tarde à porter à nouveau le couteau sur le cou de l’animal, sans raison valable, la viande ne sera pas consommable."
          </p>

          <p className="bg-white/5 p-6 rounded-2xl border-l-4 border-white/20">
            "Il faut noter qu’il ne faut pas sectionner le cou de l’animal. Le faire ne rend pas la viande impropre à la consommation, mais il vaut mieux ne pas procéder ainsi. Dans le cas du poulet, le couteau doit faire le tour complet du cou de manière à couper toutes les veines, sans toutefois sectionner le cou."
          </p>

          <div className="space-y-6">
            <p>
              "Si l’on se dépêche d’égorger un animal malade au point qu’on craint de le voir mourir, sa viande sera consommable à condition que le sang gicle et que l’animal se débatte vigoureusement après l’opération. Si aucun de ces faits ne se produit, la viande ne sera pas consommable."
            </p>
            <p className="text-red-400/80">
              "Il n’est pas utile d’égorger un animal blessé à mort, quelle que soit par ailleurs l’origine de la blessure. Il faut entendre par « blessé à mort » le fait que l’une des artères se trouvant de part et d’autre de la gorge soit coupée, ou la rate, l’éclatement de la boîte crânienne pour l’éparpillement des entrailles, ou encore que l’intestin soit transpercé."
            </p>
          </div>

          <p>
            "Un taureau en furie qu’il n’est pas possible d’attraper et de maîtriser, on peut lui casser la patte sans le blesser à mort. Il n’est pas du tout recommandé de faire voir à un animal non encore égorgé un autre qui l’est déjà."
          </p>

          <div className="bg-emerald-950/20 p-8 rounded-3xl border border-emerald-500/20 space-y-4">
             <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Le cas du Chameau (Nahr)</h4>
             <p>
               "Lorsqu’on égorge un animal par le côté supérieur du cou (chameau), on le laisse debout, face à la Kaaba, et on lui tord le cou du côté gauche. Si l’on redoute la force de l’animal, on attache la patte postérieure gauche quelque part, on dit « Bismilahi » avant de commencer l’opération proprement dite et on évite de lever la main avant d’en avoir fini avec l’opération."
             </p>
          </div>

          <p>
            "Si l’on ne dispose pas du matériel requis pour une telle opération, on pourra égorger l’animal en question de manière classique. Par ailleurs, un animal destiné à être égorgé par la manière classique peut l’être par le côté extérieur du cou si l’on ne dispose pas de couteau."
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:bg-gold/20 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="material-symbols-rounded text-2xl text-gold relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause' : 'play_arrow'}
          </span>
          <span className="relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter l\'enseignement'}
          </span>
        </motion.button>
      </div>

      {/* Grid des Sections */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {sectionsEgorger.map((item, idx) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => router.push(`/partie/15/${item.letter.toLowerCase()}`)}
            className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-[300px]"
          >
            <span className="absolute -bottom-8 -right-4 text-[200px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-6 group-hover:scale-110" 
                  style={{ WebkitTextStroke: '1px white' }}>
              {item.letter}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-black text-[10px] italic">
                     {item.letter}
                   </div>
                   <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Section</span>
                </div>
                <span className="font-amiri text-3xl text-gold/30 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              
              <h3 className="text-2xl font-black text-white tracking-tighter group-hover:gold-gradient-text transition-all leading-tight mb-6 uppercase">
                {item.title}
              </h3>

              <ul className="space-y-2">
                {item.sub.map((sub, sIdx) => (
                  <li key={sIdx} className="text-white/40 text-[13px] flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold/40 rounded-full" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Explorer <span className="material-symbols-rounded text-sm">arrow_right_alt</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Persistante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6 font-sans">
        <button 
          onClick={() => router.push('/partie/14')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/15/a')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
        >
          Commencer
        </button>
      </div>
    </main>
  );
}