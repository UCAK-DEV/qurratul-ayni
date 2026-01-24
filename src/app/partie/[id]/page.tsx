'use client';
import React, { use } from 'react';
import { useAudio } from '@/context/AudioContext';
import { motion } from 'framer-motion';

// Simulation de base de données (devrait idéalement être dans un fichier séparé)
const DATA_STORE: Record<string, any> = {
  "1": {
    titleAr: "التوحيد",
    titleFr: "L'Unicité de Dieu",
    audioUrl: "/audio/unicite.mp3",
    content: [
      { ar: "لا معبود بحق إلا الله", fr: "Dieu est l'unique divinité." },
      { ar: "هو وحده المتصرف في كل شيء", fr: "C'est Lui qui décide de toute chose." }
    ]
  },
  // Ajoutez les IDs 2, 3, etc. ici
};

export default function PartPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { playTrack, currentTrack, isPlaying, togglePlay } = useAudio();
  
  const chapter = DATA_STORE[id] || DATA_STORE["1"]; // Fallback sur la partie 1

  const isCurrentPlaying = currentTrack?.url === chapter.audioUrl && isPlaying;

  const handlePlay = () => {
    if (currentTrack?.url === chapter.audioUrl) {
      togglePlay();
    } else {
      playTrack({ title: chapter.titleFr, url: chapter.audioUrl });
    }
  };

  return (
    <div className="min-h-screen bg-emerald-950 pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border-b border-gold/10 pb-12">
          <div className="text-center md:text-left">
            <h1 className="text-gold text-5xl mb-4 font-amiri">{chapter.titleAr}</h1>
            <h2 className="text-white text-2xl font-light">{chapter.titleFr}</h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlay}
            className="flex items-center gap-4 bg-gold text-emerald-900 px-8 py-4 rounded-full font-bold shadow-xl"
          >
            <span className="material-symbols-rounded text-3xl">
              {isCurrentPlaying ? 'pause' : 'play_arrow'}
            </span>
            {isCurrentPlaying ? 'En lecture' : 'Écouter l\'audio'}
          </motion.button>
        </div>

        <div className="space-y-12">
          {chapter.content.map((block: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl hover:bg-white/5 transition-colors"
            >
              <p className="text-arabic text-3xl leading-relaxed text-gold/90 text-right font-amiri">
                {block.ar}
              </p>
              <p className="text-white/70 text-lg leading-relaxed border-l border-gold/20 pl-6">
                {block.fr}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}