'use client';
import React, { use } from 'react';
import { useAudio } from '@/context/AudioContext';
import { motion } from 'framer-motion';

const DATA_STORE: Record<string, any> = {
  "1": {
    titleAr: "التوحيد",
    titleFr: "L'Unicité de Dieu",
    audioUrl: "/audio/unicite.mp3",
    content: [
      { ar: "لا معبود بحق إلا الله", fr: "Nul n'est digne d'adoration en dehors de Dieu." },
      { ar: "هو وحده المتصرف في كل شيء", fr: "C'est Lui le Régisseur souverain de toute chose." }
    ]
  }
};

export default function PartPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { playTrack, currentTrack, isPlaying, togglePlay } = useAudio();
  const chapter = DATA_STORE[id] || DATA_STORE["1"];
  const isCurrentPlaying = currentTrack?.url === chapter.audioUrl && isPlaying;

  return (
    <div className="min-h-screen pt-40 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header de la partie */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-amiri text-gold mb-6 drop-shadow-2xl"
          >
            {chapter.titleAr}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-serif text-white/80 italic"
          >
            {chapter.titleFr}
          </motion.h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => isCurrentPlaying ? togglePlay() : playTrack({ title: chapter.titleFr, url: chapter.audioUrl })}
            className="mt-10 flex items-center gap-4 bg-white/5 border border-gold/30 px-10 py-4 rounded-full hover:bg-gold hover:text-emerald-950 transition-all duration-500"
          >
            <span className="material-symbols-rounded">{isCurrentPlaying ? 'pause' : 'play_circle'}</span>
            <span className="font-bold tracking-widest uppercase text-sm">Écouter l'enseignement</span>
          </motion.button>
        </div>

        {/* Versets / Blocs de texte */}
        <div className="space-y-8">
          {chapter.content.map((block: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] p-10 md:p-16 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <p className="text-arabic text-4xl md:text-5xl leading-[1.8] text-right text-gold/90 group-hover:text-gold transition-colors">
                  {block.ar}
                </p>
                <p className="text-white/60 text-xl leading-relaxed font-light border-l border-gold/10 pl-10">
                  {block.fr}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}