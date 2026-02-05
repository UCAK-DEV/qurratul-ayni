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

  const sectionsConseils = [
    { id: 'a', letter: "A", title: 'PRATIQUES INTERDITES', icon: 'block', ar: 'المحرمات', sub: ["Sifflements & Musique", "Médisance & Mensonge", "Gaspillage & Orgueil"] },
    { id: 'b', letter: "B", title: 'INTERDICTIONS FORMELLES', icon: 'gavel', ar: 'منوعات', sub: ["Respect des limites", "Règles de vie"] },
    { id: 'c', letter: "C", title: 'CAUSES DE PAUVRETÉ', icon: 'trending_down', ar: 'أسباب الفقر', sub: ["Habitudes à éviter", "Hygiène & Vie"] },
    { id: 'd', letter: "D", title: 'AISANCE MATÉRIELLE', icon: 'payments', ar: 'الغنى الحلال', sub: ["Litanies de richesse", "Invocations matinales"] },
    { id: 'e', letter: "E", title: 'SANTÉ & LONGÉVITÉ', icon: 'health_and_safety', ar: 'الصحة', sub: ["Secret du bien-être", "Longue vie"] },
    { id: 'f', letter: "F", title: 'SOUNNA & SALUTATIONS', icon: 'auto_awesome', ar: 'السنة', sub: ["Sunna du prophète", "Le Salam"] },
    { id: 'g', letter: "G", title: 'JOURS RECOMMANDÉS', icon: 'calendar_month', ar: 'الأيام المباركة', sub: ["Calendrier pieux", "Actes temporels"] },
    { id: 'h', letter: "H", title: 'REPENTIR & FIN DU MONDE', icon: 'history_edu', ar: 'التوبة', sub: ["Signes de l'Heure", "Retour à Dieu"] },
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-emerald-900/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="text-4xl font-amiri text-gold-light drop-shadow-sm">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
               <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/30" />
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Éthique & Vie — Chapitre XVII</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              CONSEILS <br /><span className="gold-gradient-text italic lowercase font-serif text-6xl md:text-9xl">pratiques</span>
            </h1>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-8 text-center md:text-justify">
                <p>
                  &quot;Nous rassemblons dans ce chapitre des conseils concernant certaines pratiques, dont la plupart sont interdites et peuvent entraîner la perte de la foi du musulman avant la fin de ses jours.&quot;
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-italic font-sans text-left">
                   {[
                     { t: "L’amour inconsidéré du Blanc", s: "(symbole de Satan)", icon: "warning" },
                     { t: "Vouloir rendre licite l’illicite", icon: "gavel" },
                     { t: "Contester la Charia", s: "(Jeûne, Prière, Zakat, Hajj)", icon: "language" },
                     { t: "Douter de l’unicité de Dieu", icon: "psychology" }
                   ].map((item, i) => (
                     <div key={i} className="p-6 rounded-2xl bg-red-950/10 border border-red-900/20 flex items-start gap-4">
                        <span className="material-symbols-rounded text-red-500">{item.icon}</span>
                        <div className="text-left">
                          <p className="text-sm font-bold text-white/90">{item.t}</p>
                          {item.s && <p className="text-white/40 text-[10px] mt-1">{item.s}</p>}
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleAudioAction} className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl">
              <span className={`material-symbols-rounded text-4xl ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>{isThisChapterPlaying ? 'pause_circle' : 'play_circle'}</span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/40">Écouter la leçon</p>
                <p className="text-sm font-bold tracking-tight">{isThisChapterPlaying ? 'Pause en cours' : 'Démarrer l\'audio'}</p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* GRID DES SECTIONS - STYLE COHÉRENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionsConseils.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => router.push(`/partie/17/${item.id}`)}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[340px] flex flex-col justify-between"
            >
              {/* LARGE BACKGROUND LETTER */}
              <span className="absolute -bottom-6 -right-4 text-[200px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-4 italic" 
                    style={{ WebkitTextStroke: '1px white' }}>
                {item.letter}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold group-hover:scale-110 transition-transform">
                      <span className="material-symbols-rounded text-2xl">{item.icon}</span>
                   </div>
                   <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
                </div>
                
                <span className="text-[10px] font-bold text-gold tracking-[0.3em] uppercase opacity-60">Section {item.letter}</span>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-4 mt-1 leading-tight uppercase">
                  {item.title}
                </h3>

                <ul className="space-y-2">
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