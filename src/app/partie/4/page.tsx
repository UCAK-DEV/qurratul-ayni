'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreProphete() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 4 dans le fichier central
  const chapterData = CHAPTERS.find(c => c.id === "4") || CHAPTERS[3];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const contenuIntegral = [
    {
      ar: "أشهد أن محمداً رسول الله، أرسله الله إلى كافة الناس بشيراً ونذيراً.",
      fr: "Je témoigne que Mouhammad est l'Envoyé de Dieu. Dieu l'a envoyé à toute l'humanité pour annoncer la bonne nouvelle et avertir."
    },
    {
      ar: "هو خاتم الأنبياء والمرسلين، لا نبي بعده.",
      fr: "Il est le sceau des prophètes et des messagers, aucun prophète ne viendra après lui."
    },
    {
      ar: "يجب الإيمان بكل ما جاء به من عند الله والاعتراف بصدقه.",
      fr: "Il est obligatoire de croire en tout ce qu'il a apporté de la part de Dieu et de reconnaître sa véracité absolue."
    },
    {
      ar: "طاعته من طاعة الله، ومحبته دليل على كمال الإيمان.",
      fr: "L'obéissance au Prophète est une obéissance à Dieu, et son amour est la preuve de la perfection de la foi."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block"
        >
          Khouratoul Ayni
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-bold gold-gradient-text leading-tight mb-10"
        >
          MOUHAMMADOUNE RASSOUL LOULAHI
        </motion.h1>

        {/* Bouton de Lecture Audio Professionnel */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-5 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      {/* Liste des Enseignements Bilingues */}
      <div className="max-w-6xl mx-auto space-y-10">
        {contenuIntegral.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/5 hover:border-gold/20 transition-all duration-700"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Texte Arabe */}
              <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                <p className="text-2xl md:text-5xl font-amiri text-gold-light leading-[1.8] dir-rtl">
                  {item.ar}
                </p>
              </div>
              
              <div className="hidden md:block w-[1px] h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent order-2" />
              
              {/* Texte Français */}
              <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                <p className="text-lg md:text-xl text-white/50 font-serif leading-relaxed italic">
                  "{item.fr}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation de bas de page */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/partie/3')} // Vers le chapitre précédent
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5')} // Vers le chapitre suivant
          className="px-10 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}