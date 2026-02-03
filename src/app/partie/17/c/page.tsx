'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PratiquesPauvretePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 17
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Section C</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          CAUSES DE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">La Pauvreté</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">أسباب الفقر</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* GRILLE DES PRATIQUES */}
        <motion.div 
          {...fadeInUp}
          className="glass-card p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl"
        >
          <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.3em] mb-12 text-center">Pratiques pouvant entraîner la pauvreté :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 text-white/70 italic font-serif text-lg leading-relaxed">
            <ul className="space-y-4">
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> brûler l’enveloppe de l’oignon, celle de l’ail</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> dormir couché sur le ventre</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> enlever des ordures la nuit ou les laisser dans sa chambre</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> enlever des ordures avec un morceau d’étoffe de coton</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> employer du sable ou du son pour se laver après avoir fini de manger</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se laver dans le récipient où l’on vient de manger, même s’il n’y a plus rien</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> s’asseoir au pied d’une porte</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> s’adosser à la porte</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se purifier par le lavage ou faire ses ablutions dans un endroit souillé</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> coudre des vêtements alors qu’on les porte</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> s’essuyer le visage avec ses habits</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> faire éclabousser l’eau dont on se lave les mains dans le repas qu’on va manger</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> poser le récipient contenant l’eau qui sert à se laver les mains à l’endroit où était placé le repas</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> porter les mains aux hanches</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> aller aux toilettes tout nu</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> manger ou dormir en état d’impureté majeure</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se presser de sortir de la mosquée après la prière</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> tarder à se rendre à la mosquée</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> la paresse, le gaspillage</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se montrer fainéant (s’abstenir de participer à une tâche commune)</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> acheter aux mendiants ce qu’on leur a donné en aumône</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> laisser ouvert un récipient contenant des mets</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> éteindre une lampe ou une bougie en soufflant dessus</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> maudire ses parents (père-mère) ou ses enfants</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> jeter un pou vivant à terre</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> laver la plante du pied avec la main droite</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> uriner dans un flaque d’eau</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> porter un pantalon en restant debout</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> mettre un turban en restant assis</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> manger avec deux doigts</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> traverser un troupeau ou un groupe de femmes</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> mettre des ventouses le septième jour du mois</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> donner de petits coups sur des dents avec ses doigts</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> prendre l’habitude de s’amuser avec sa barbe</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se couper les ongles avec les dents</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se promener nu sous le soleil ou au clair de lune</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se soulager face à la Kaaba ou à la direction opposée, ou uriner en plein air</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> appuyer le menton sur la main</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se montrer indifférent vis-à-vis de ce qui tombe du repas lorsqu’on mange</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> ne pas dire « Bismilahi » en mangeant ou en buvant</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> négliger la prière rituelle</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> la gourmandise</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> porter ses chaussures en commençant par le pied gauche</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> manger dans un couvercle retourné</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> porter ses poils sans les raser pendant une durée de 40 jours</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> ne pas enlever de sa chambre ou de sa mosquée les toiles d’araignée et les nids de guêpe</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> dormir entre l’appel à la prière de l’aube (fadiar) et le lever du soleil</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se peigner les cheveux en restant debout</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> maudire le vent</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> refuser de donner du feu ou de prêter une aiguille, ou de donner de l’eau, de prêter un couvercle ou du sel</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> tromper quelqu’un dans une opération sur une question de poids ou de mesure</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> quémander sans être dans le besoin</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> stocker des denrées en vue d’une spéculation</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> l’adultère</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se laver le mercredi et le samedi</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se laver les mains sans avoir léché auparavant la main droite après avoir mangé</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> se servir du pantalon comme oreiller ou l’accrocher dans sa chambre</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> irriter des parents (père-mère)</li>
              <li className="flex gap-4 border-b border-white/5 pb-2"><span>•</span> épousseter son lit avec un vêtement</li>
              <li className="flex gap-4 pb-2"><span>•</span> couper un arbre qui n’est pas mort sans en avoir besoin, surtout quand il s’agit du jujubier</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17/b')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/17/d')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}