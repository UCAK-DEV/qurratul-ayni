'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ConseilsPratiquesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const categories = [
    { id: 'a', title: 'PRATIQUES INTERDITES', icon: 'block', ar: 'المحرمات' },
    { id: 'b', title: 'INTERDICTIONS FORMELLES', icon: 'gavel', ar: 'منوعات' },
    { id: 'c', title: 'CAUSES DE PAUVRETÉ', icon: 'trending_down', ar: 'أسباب الفقر' },
    { id: 'd', title: 'AISANCE MATÉRIELLE', icon: 'payments', ar: 'الغنى الحلال' },
    { id: 'e', title: 'SANTÉ & LONGÉVITÉ', icon: 'health_and_safety', ar: 'الصحة' },
    { id: 'f', title: 'SOUNNA & SALUTATIONS', icon: 'auto_awesome', ar: 'السنة' },
    { id: 'g', title: 'JOURS RECOMMANDÉS', icon: 'calendar_month', ar: 'الأيام المباركة' },
    { id: 'h', title: 'REPENTIR & FIN DU MONDE', icon: 'history_edu', ar: 'التوبة' },
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-blue-900/5 blur-[100px] rounded-full" />
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
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Éthique & Vie — Chapitre XVII</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              CONSEILS <br /><span className="gold-gradient-text italic lowercase font-serif">pratiques</span>
            </h1>

            {/* INTEGRAL TEXT PRESERVATION */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-8">
                <p>
                  &quot;Nous rassemblons dans ce chapitre des conseils concernant certaines pratiques, dont la plupart sont interdites et peuvent entraîner la perte de la foi du musulman avant la fin de ses jours.&quot;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-italic font-sans">
                   {[
                     { t: "L’amour inconsidéré du Blanc", s: "(symbole de Satan)", icon: "warning" },
                     { t: "Vouloir rendre licite l’illicite", icon: "gavel" },
                     { t: "Contester la Charia", s: "(Jeûne, Prière, Zakat, Hajj)", icon: "language" },
                     { t: "Douter de l’unicité de Dieu", icon: "psychology" }
                   ].map((item, i) => (
                     <div key={i} className="p-6 rounded-2xl bg-red-950/10 border border-red-900/20 flex items-start gap-4 group hover:bg-red-900/20 transition-all">
                        <span className="material-symbols-rounded text-red-500">{item.icon}</span>
                        <div className="text-left">
                          <p className="text-sm font-bold text-white/90">{item.t}</p>
                          {item.s && <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{item.s}</p>}
                        </div>
                     </div>
                   ))}
                </div>
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
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Enseignement Vocal</p>
                <p className="text-sm font-bold tracking-tight">
                  {isThisChapterPlaying ? 'Mise en pause' : 'Démarrer l\'écoute'}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* GRID DES SECTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => router.push(`/partie/17/${cat.id}`)}
              className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col items-center text-center h-[260px] justify-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all mb-6">
                <span className="material-symbols-rounded text-3xl">{cat.icon}</span>
              </div>
              
              <div className="space-y-2">
                <span className="text-white/20 font-black text-[9px] uppercase tracking-[0.3em] block">Section {cat.id.toUpperCase()}</span>
                <h3 className="text-xs font-bold text-white group-hover:text-gold transition-colors leading-tight px-4 tracking-widest">{cat.title}</h3>
              </div>

              <span className="font-amiri text-3xl text-gold/10 absolute bottom-6 opacity-40 group-hover:text-gold/30 group-hover:opacity-100 transition-all">
                {cat.ar}
              </span>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                 <span className="material-symbols-rounded text-gold text-sm">north_east</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/16')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/17/a')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"
        >
          Commencer
        </button>
      </nav>
    </main>
  );
}