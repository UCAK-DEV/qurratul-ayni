'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ActeDegorgerPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "15") || CHAPTERS[14];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

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
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-emerald-900/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
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
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Fiqh Al-Dhabh — Chapitre XV</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              L’ACTE <br /><span className="gold-gradient-text italic lowercase font-serif">d'égorger</span>
            </h1>

            {/* INTEGRAL TEXT PRESERVATION */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-8">
                <p className="not-italic font-sans text-gold font-bold border-l-2 border-gold pl-4 text-sm md:text-base uppercase tracking-widest">
                  Seul le musulman jouissant de ses facultés mentales a le droit d’égorger.
                </p>
                <p>
                  &quot;La meilleure manière de s’y prendre est de coucher l’animal sur le côté gauche, la tête tournée vers la Qibla ou la Kaaba. S’il s’agit d’un mouton, on tire l’oreille droite le long du cou et on applique le couteau juste au bout de l’oreille. Si le mouton a des barbillons, on place le couteau entre ces derniers. On l’applique après avoir formulé intérieurement l’intention de rendre consommable la viande de l’animal en question par le moyen du geste que l’on va accomplir.&quot;
                </p>

                {/* Formules Rituelles intégrées */}
                <div className="p-10 rounded-[3rem] bg-gold/[0.05] border border-gold/20 space-y-10 text-center not-italic">
                    <div className="space-y-4">
                        <p className="font-amiri text-3xl md:text-4xl text-white">بِسْمِ اللهِ ... اللهُ أَكْبَرُ</p>
                        <p className="text-white/80 font-sans text-sm tracking-wide">
                            En appliquant le couteau, dire : <strong>« Bismilahi »</strong>. <br />
                            Quand le sang aura giclé, dire : <strong>« Allahou Akbar »</strong>.
                        </p>
                    </div>
                    <div className="h-px bg-gold/10 w-24 mx-auto" />
                    <div className="space-y-4">
                        <p className="font-amiri text-2xl md:text-3xl text-white dir-rtl leading-relaxed">رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ</p>
                        <p className="text-gold-light italic font-serif text-lg">
                            « Rabanna taqabbal minnâ innaka anta samî‘ou l-‘alîm »
                        </p>
                    </div>
                </div>

                <p>
                  &quot;Si, après avoir fait glisser le couteau et commencé à couper les carotides, on lève la main par inadvertance et qu’on se hâte de reprendre l’opération en portant de nouveau le couteau sur le cou de l’animal, la viande sera consommable. Si, par contre, on tarde à porter à nouveau le couteau sur le cou de l’animal, sans raison valable, la viande ne sera pas consommable.&quot;
                </p>

                <p className="p-8 bg-white/[0.03] rounded-3xl border-l-2 border-white/20">
                  &quot;Il faut noter qu’il ne faut pas sectionner le cou de l’animal. Le faire ne rend pas la viande impropre à la consommation, mais il vaut mieux ne pas procéder ainsi. Dans le cas du poulet, le couteau doit faire le tour complet du cou de manière à couper toutes les veines, sans toutefois sectionner le cou.&quot;
                </p>

                <div className="space-y-8">
                  <p>
                    &quot;Si l’on se dépêche d’égorger un animal malade au point qu’on craint de le voir mourir, sa viande sera consommable à condition que le sang gicle et que l’animal se débatte vigoureusement après l’opération. Si aucun de ces faits ne se produit, la viande ne sera pas consommable.&quot;
                  </p>
                  <div className="p-8 rounded-3xl bg-red-950/10 border border-red-900/20 text-red-100/70">
                    &quot;Il n’est pas utile d’égorger un animal blessé à mort, quelle que soit par ailleurs l’origine de la blessure. Il faut entendre par « blessé à mort » le fait que l’une des artères se trouvant de part et d’autre de la gorge soit coupée, ou la rate, l’éclatement de la boîte crânienne pour l’éparpillement des entrailles, ou encore que l’intestin soit transpercé.&quot;
                  </div>
                </div>

                <p>
                  &quot;Un taureau en furie qu’il n’est pas possible d’attraper et de maîtriser, on peut lui casser la patte sans le blesser à mort. Il n’est pas du tout recommandé de faire voir à un animal non encore égorgé un autre qui l’est déjà.&quot;
                </p>

                <div className="p-10 rounded-[3rem] bg-emerald-950/10 border border-emerald-500/20 space-y-6">
                  <h4 className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] text-center">Le cas du Chameau (Nahr)</h4>
                  <p>
                    &quot;Lorsqu’on égorge un animal par le côté supérieur du cou (chameau), on le laisse debout, face à la Kaaba, et on lui tord le cou du côté gauche. Si l’on redoute la force de l’animal, on attache la patte postérieure gauche quelque part, on dit « Bismilahi » avant de commencer l’opération proprement dite et on évite de lever la main avant d’en avoir fini avec l’opération.&quot;
                  </p>
                </div>

                <p className="text-center opacity-40">
                  &quot;Si l’on ne dispose pas du matériel requis pour une telle opération, on pourra égorger l’animal en question de manière classique. Par ailleurs, un animal destiné à être égorgé par la manière classique peut l’être par le côté extérieur du cou si l’on ne dispose pas de couteau.&quot;
                </p>
              </div>
            </div>

            {/* AUDIO CONTROL */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAudioAction}
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
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectionsEgorger.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => router.push(`/partie/15/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden h-[340px] flex flex-col justify-between"
            >
              <span className="absolute -bottom-8 -right-4 text-[220px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-6" 
                    style={{ WebkitTextStroke: '1px white' }}>
                {item.letter}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-black text-xs italic">
                       {item.letter}
                     </div>
                     <span className="text-[10px] font-bold text-gold tracking-[0.3em] uppercase opacity-60">Section</span>
                  </div>
                  <span className="font-amiri text-4xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-6 leading-tight uppercase">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.sub.map((sub, sIdx) => (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-sm flex items-center gap-3 transition-colors">
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Ouvrir l'étude <span className="material-symbols-rounded text-sm">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/14')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/15/a')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"
        >
          Commencer
        </button>
      </nav>
    </main>
  );
}