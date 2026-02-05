'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreProphete() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "4") || CHAPTERS[3];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const enseignements = [
    { fr: "Notre Prophète Mouhammadou Rassoû Loulahi (PSL), Service de Dieu, est son Messager qu’il a envoyé auprès de tout le monde." },
    { fr: "Tout ce qu’il dit, tout ce qu’il fait est conforme aux instructions divines." },
    { fr: "Celui qui en conteste une partie, si petite soit-elle, est un mécréant. Qui en retranche ou en rajoute tant soit peu est digne du plus grand mépris." },
    { fr: "S’il ne s’en repent pas, il sera précipité dans les feux de l’enfer. L’objet de sa mission est de nous révéler que nous devons nous soumettre à ses recommandations." },
    { fr: "La plus importante parmi celles-ci est la prière (cinq fois par jour)." }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND ORNAMENTAL */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-emerald-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="text-center mb-24 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-gold/30" />
              <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Chapitre IV</span>
              <span className="h-[1px] w-8 bg-gold/30" />
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6">
              MOUHAMMADOUNE <br />
              <span className="gold-gradient-text">RASSOUL LOULAHI</span>
            </h1>

            <div className="flex flex-col items-center gap-4 mb-10">
               <span className="text-4xl md:text-5xl font-amiri text-gold-light drop-shadow-sm">مُحَمَّدٌ رَسُولُ اللَّهِ</span>
               <span className="text-2xl font-amiri text-gold/60">ﷺ</span>
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
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Enregistrement</p>
                <p className="text-sm font-bold tracking-tight">
                  {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon'}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* CONTENT SECTIONS */}
        <div className="space-y-6">
          {enseignements.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all"
            >
              {/* Index discret */}
              <span className="absolute right-10 top-10 text-5xl font-black text-white/[0.02] group-hover:text-gold/[0.05] transition-colors pointer-events-none">
                {idx + 1}
              </span>

              <div className="relative z-10 max-w-2xl">
                <p className="text-lg md:text-2xl text-white/80 font-serif leading-relaxed italic group-hover:text-white transition-colors">
                  &quot;{item.fr}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRANSCRIPTION FINALE SOLENNELLE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-16 border-t border-white/5 text-center space-y-6"
        >
          <p className="text-4xl md:text-5xl font-amiri text-gold-light leading-loose">
            صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
          </p>
          <div className="h-[1px] w-12 bg-gold/30 mx-auto" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
            Paix et Bénédictions sur Lui
          </p>
        </motion.div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/3')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/5')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"
        >
          Chapitre V
        </button>
      </nav>
    </main>
  );
}