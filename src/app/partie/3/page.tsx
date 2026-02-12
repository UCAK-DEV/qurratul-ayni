'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { getSupabaseClient } from '@/utils/supabase';
import { Chapter } from '@/data/chapters';

export default function PageUnicite() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const [chapterData, setChapterData] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapter = async () => {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('chapters')
        .select('*')
        .eq('id', '3')
        .single();

      if (error) {
        console.error('Error fetching chapter:', JSON.stringify(error, null, 2));
      } else {
        console.log('Fetched Chapter Data:', data); // Add this log
        setChapterData(data);
      }
      setLoading(false);
    };

    fetchChapter();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-[#010302] text-white flex items-center justify-center">Loading...</div>;
  }

  if (!chapterData) {
    return <div className="min-h-screen bg-[#010302] text-white flex items-center justify-center">Chapter not found.</div>;
  }
  
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) {
      togglePlay();
    } else {
      console.log('Setting chapter in AudioContext:', chapterData); // Add this log
      setChapter(chapterData);
    }
  };

  const sectionsUnicite = [
    { fr: "Il n’y a de divinité que Dieu. Son règne est sans partage. C’est Lui qui décide de tout. C’est Lui qui fait, c’est Lui qui défait." },
    { fr: "Il n’a besoin de l’assistance de personne, il ne demande l’autorisation de personne. Il n’agit que par sa Propre Volonté en toute chose en raison de Son Omnipuissance, en raison de Son Omniscience, en raison de sa seule Volonté." },
    { fr: "Il ne fait recours à personne mais tout le monde a besoin de Lui. Il préexiste à tous et il est éternel. Il entend, il voit, il parle, mais Sa Perception est sans commune mesure avec celle des créatures." },
    { fr: "Il ne ressemble à rien, à personne. Rien de ce que l’on peut imaginer ou concevoir par la pensée ou par la parole n’est semblable aux attributs de Dieu." },
    { fr: "Il n’a point enfanté, Il n’a pas été enfanté. Il n’est le parent de personne. Toute créature est Son serviteur." },
    { fr: "Il connaît tout, Il n’ignore rien, Il est Omniprésent, Il a le don de l’ubiquité : la solitude ne doit pas nous faire oublier qu’Il est partout avec nous, qu’il est témoin de nos actes et de nos paroles." },
    { fr: "Il les enregistre, n’en oublie aucun et nous les rétribuera en conséquence. Il connaît la pensée de chacun de nous, aussi nombreux que nous soyons, quelle que soit la diversité des idées émises." },
    { fr: "Chacun de nous comparaîtra seul devant Lui et croira alors être Sa seule créature. Il est le Créateur, Il nous fait vivre par Sa Grâce, Il fait, Il répand ses bienfaits sur nous." },
    { fr: "C’est Lui qui mettre fin à notre existence et nous ressuscite sans aucun doute. Après nous avoir ressuscités, Il nous rassemblera en un jour, en un lieu et nous lui rendons compte de nos actes." },
    { fr: "Après examen de nos actes, Il nous enverرا au paradis ou en enfer suivant que nos œuvres auront été bonnes ou mauvaises. Sa décision sera sans appel et chacun ne se préoccupera que de son propre sort." }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[40vh] bg-gradient-to-b from-gold/10 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-amiri text-4xl text-gold-light mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
            </p>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-10">
              DE L’<span className="gold-gradient-text">UNICITÉ</span> <br />
              DE DIEU
            </h1>

            {/* AUDIO CONTROL BOX */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAudioAction}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-40' : 'opacity-0'}`} />
                <span className={`material-symbols-rounded text-4xl relative z-10 ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>
                  {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
                </span>
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Lecture Audio</p>
                <p className="text-sm font-bold tracking-tight">
                  {isThisChapterPlaying ? 'Pause en cours' : 'Écouter l’enseignement'}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* CONTENT GRID */}
        <div className="space-y-4">
          {sectionsUnicite.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
            >
              <span className="absolute left-8 top-8 text-6xl font-black text-white/[0.03] group-hover:text-gold/[0.05] transition-colors -z-10">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic text-center">
                  &quot;{item.fr}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STICKY NAVIGATION */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/2')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/4')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 transition-all shadow-lg shadow-gold/20"
        >
          Chapitre IV
        </button>
      </nav>
    </main>
  );
}