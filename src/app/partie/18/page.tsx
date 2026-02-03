'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function NafilasRamadanPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "18") || CHAPTERS[17];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const nafilas = [
    { nuit: "1ère Nuit", rakas: "12", Recit: "Fatiha + Inna Anzalnahou (2x) + Al Kâfirouna (2x) + Ikhlass (2x)", recompense: "Dieu le sauvera à jamais de l’enfer et exaucera tous ses vœux formulés à la suite de cette prière." },
    { nuit: "Nuit du 1 au 2", rakas: "6", Recit: "Fatiha + Inna Ahtaïnakal (10x)", recompense: "Absous de tous ses péchés avant de quitter les lieux. Avantages de 1000 grands pèlerinages, 1000 Oumra, offrande de 1000 Dereumes, visite à 1000 malades, accompagnement de 1000 morts et lecture de tout le Coran. Bénédictions supérieures à 70 ans de dévotions." },
    { nuit: "Nuit du 2 au 3", rakas: "6", Recit: "Fatiha + Inna Anzahbahou (4x) + Khoul ya Ayouhal Kâfirouna (4x)", recompense: "Avantages de 1000 esclaves affranchis, 1000 repas de rupture de jeûne, habiller 1000 démunis, nourrir 1000 affamés. Bénédictions égales au nombre d'espèces volantes. Avantages des grands saints et martyrs. Aucune épreuve dans la tombe." },
    { nuit: "Nuit du 3 au 4", rakas: "4", Recit: "Fatiha + Khoul ya Ayouhal Kâfirouna (3x)", recompense: "Avantages de 1000 personnes acquittées de leurs dévotions. Absous de tous ses péchés avant de quitter le lieu." },
    { nuit: "Nuit du 4 au 5", rakas: "4", Recit: "Fatiha + Alam Nasraa (1x) + Khoul Houwa Allahou (3x)", recompense: "Considéré comme ayant fait le Hajj et l'Oumra 100 fois. Préservé de la pauvreté, biens multipliés. Chaque lettre crée 2 anges pour effacer les péchés et noter des bienfaits pendant un an. Faveurs du martyr à la mort, pas d'affres de la mort, portes du paradis ouvertes dans la tombe." },
    { nuit: "Nuit du 5 au 6", rakas: "2", Recit: "Fatiha + Khoul Houwa Allahou (12x)", recompense: "Considéré comme ayant fait 1000 rakas au Maqam Ibrahim et 1000 à la Mecque, aumône de 5000 F et nourrir 1000 affamés. Vœux exaucés. Mort en martyr, tombe comme jardin d'Eden. Ressuscité auréolé de lumière, beauté du soleil, accès au Paradis sans jugement parmi les Prophètes." },
    { nuit: "Nuit du 6 au 7", rakas: "6", Recit: "Fatiha + Khoul ya Ayouhal Kâfirouna (7x) + Khoul Houwa Allahou (7x)", recompense: "Bienfaits pour chaque verset. Considéré comme ayant donné 1000 dinars en aumône. Vœux exaucés. Bénédictions égales au nombre de jours de l'existence terrestre. Une grande maison au Paradis pour chaque lettre." },
    { nuit: "Nuit du 7 au 8", rakas: "2", Recit: "Fatiha + Khoul Houwa Allahou (12x)", recompense: "Pour chaque lettre, bénédictions de 1000 ans de dévotions. Considéré comme ayant nourri, abreuvé et habillé tous les musulmans pendant 70 ans. Bénédictions de 1000 esclaves affranchis. Vœux exaucés, traversée du Siraat comme un éclair, sauvetage de 70 personnes de l'enfer." },
    { nuit: "Nuit du 8 au 9", rakas: "4", Recit: "Fatiha + Tabatt Yada (3x) + Khoul Houwa Allahou (1x)", recompense: "Bénédictions de ceux qui acceptent les décrets divins et manifestent leur reconnaissance. Avantages de la lecture intégrale du Coran. 70 ans de dévotions (jeûne le jour, prière la nuit). 2 anges effacent les péchés jusqu'au Jugement. Entrée dans l'un des 8 paradis au choix sans jugement." },
    { nuit: "Nuit du 9 au 10", rakas: "4", Recit: "Fatiha + Ayatoul Koursiyou (1x) + Inna Anzalnahou (12x)", recompense: "Absous de tous les péchés sans exception. Bénédictions de 50 hommes de Dieu véridiques et de 70 martyrs. Goûtera aux fruits du Paradis avant sa mort. Sauvetage de 70 personnes de l'enfer." },
    { nuit: "Nuit du 10 au 11", rakas: "4", Recit: "Fatiha + Inna Anzalnahou (7x) + Al Kâfirouna (7x) + Ikhlass (7x)", recompense: "Dire 70x La hawla... et 70x Salatou ala Nabi après le salut. Absous sans exception. Faveurs d'un an de dévotion par verset, 1000 esclaves libérés, 1000 dinars d'aumône, nourrir et habiller 1000 démunis. Préservé des calamités, djinns et affres de la mort. Paradis sans jugement." },
    { nuit: "Nuit du 11 au 12", rakas: "10", Recit: "Fatiha + Khoul Houwa Allahou (6x)", recompense: "8000 épouses au Paradis, vie avec le Prophète. Faveurs de l'étude du Tawrat, Zabour et Coran. Absous de tous péchés (même comme les vagues de la mer). Bénédictions de 70 ans de dévotions. 1000 esclaves libérés. Sauvetage de l'enfer pour autant de personnes désirées." },
    { nuit: "Nuit du 12 au 13", rakas: "2", Recit: "Fatiha + Khoul Houwa Allahou (5x)", recompense: "Grande maison au Paradis avec 7 chambres en or, 1000 lits par chambre avec une épouse dans chaque. Bénédictions de 20 ans de jeûne et de 1000 rakas effectués." },
    { nuit: "Nuit du 13 au 14", rakas: "8", Recit: "Fatiha + Isa Djaha (7x)", recompense: "Considéré comme ayant donné 1000 dinars, affranchi 1000 esclaves et nourri 1000 affamés. Prières et jeûne agréés. Préservé des maux d'ici-bas et de l'au-delà. Sauvetage de l'enfer pour autant de personnes voulues sans jugement." },
    { nuit: "Nuit du 14 au 15", rakas: "6", Recit: "Fatiha + Isa Djaha + Khoul Houwa Allahou", recompense: "Prières et jeûne agréés. Péchés convertis en bienfaits. Une grande cité au Paradis pour chaque lettre. Considéré comme ayant nourri les musulmans du monde entier." },
    { nuit: "Nuit du 15 au 16", rakas: "2", Recit: "Fatiha + Iza Zoulzilati (10x)", recompense: "Beaucoup de bénédictions. Absous de tous les péchés. Délivré de l'angoisse et des calamités des deux mondes. Préservé de la pauvreté, acquisition de biens multipliée. Paradis en compagnie des illustres créatures." },
    { nuit: "Nuit du 16 au 17", rakas: "2", Recit: "Fatiha + Inna Anzalnahou (2x) + Khoul Houwa Allahou", recompense: "Bénédictions au nombre de tous les croyants. Guérison des maladies, acquittement des dettes, fin de l'angoisse et préservation de l'enfer." },
    { nuit: "Nuit du 17 au 18", rakas: "10", Recit: "Fatiha + Sabi Hisma (1x) + Al Kâfirouna (1x) + Ikhlass (1x)", recompense: "Comme s'il possédait et dépensait toutes les richesses terrestres pour Dieu. Grande cité au Paradis par lettre. 70 ans de devoirs accomplis (jeûne et prière). 100 lectures du Coran, 100 Hajj, 100 Oumra. Vision de sa demeure au Paradis avant de mourir." },
    { nuit: "Nuit du 18 au 19", rakas: "6", Recit: "Fatiha + Ikhlass (7x)", recompense: "Le Paradis est la récompense. Préservé de toute peur. Vœux exaucés. Satan l'évitera. Gardera la foi jusqu'à la fin. Parmi les premiers à entrer au Paradis." },
    { nuit: "Nuit du 19 au 20", rakas: "8", Recit: "Fatiha + Inna Anzalnahou (1x) + Khoul Houwa Allahou (3x)", recompense: "Bénédictions de tous les hommes ayant fait le bien. Absous de tous les péchés sans exception. Préservé de l'obscurité de la tombe. Paradis en compagnie du Prophète Muhammad (PSL)." },
    { nuit: "Nuit du 20 au 21", rakas: "4", Recit: "Fatiha + Khoul Houwa Allahou (20x)", recompense: "Comme s'il possédait et dépensait tous les biens de la planète pour Dieu. Comme s'il avait lu Tawrat, Injil, Zabour et Coran. Pur de ses péchés comme au jour de sa naissance." },
    { nuit: "Nuit du 21 au 22", rakas: "2", Recit: "Fatiha + Sabi Hisma (3x) + Inna Anzalnahou (3x) + Ikhlass (3x) + Falakhi (3x) + Nassi (3x)", recompense: "Dieu bâtira 70 cités, chaque cité 1000 maisons, chaque maison 1000 chambres en or/argent, chaque chambre 1000 lits, chaque lit 1000 épouses." },
    { nuit: "Nuit du 22 au 23", rakas: "4", Recit: "Fatiha + Iza Diaha Nassourou Lahi (5x) + Khoul Houwa Allahou (5x)", recompense: "Absous de tous les péchés. 2 anges enregistrent des bienfaits pendant un an. S'il meurt entre-temps, bénédiction du martyr. Ressuscité avec la beauté du soleil, traversée du Siraat comme l'éclair." },
    { nuit: "Nuit du 23 au 24", rakas: "6", Recit: "Fatiha + Khoul Houwa Allahou (3x)", recompense: "Ira au Paradis sans être jugé." },
    { nuit: "Nuit du 24 au 25", rakas: "8", Recit: "Fatiha + Khoul Houwa Allahou (4x)", recompense: "Absous de tous les péchés avant de quitter la prière. Ne connaîtra jamais les épreuves divines." },
    { nuit: "Nuit du 25 au 26", rakas: "10", Recit: "Fatiha + Al Khârihatou (1x) + Khoul Houwa Allahou (5x)", recompense: "Se repentir après la prière. Préservé de l'enfer. Considéré comme ayant jeûné toute son existence. Bénédictions au nombre des étoiles et des feuilles d'arbres. Escorté au Paradis par les anges Djibril, Mikaël, Izrafil et Israfil." },
    { nuit: "Nuit du 26 au 27", rakas: "12", Recit: "Fatiha + Inna Anzalnahou (10x)", recompense: "Bénédictions au nombre des jours de l'existence terrestre. Ressuscité parmi les Prophètes." },
    { nuit: "Nuit du 27 au 28", rakas: "4", Recit: "Fatiha + Watiini (5x) + Al Kâfirouna (5x) + Ikhlass (5x)", recompense: "Se repentir après la prière : absous de tous ses péchés." },
    { nuit: "Nuit du 28 au 29", rakas: "4", Recit: "Fatiha + Watiini (5x) + Al Kâfirouna (5x) + Ikhlass (5x)", recompense: "Se repentir après la prière : absous de tous ses péchés." },
    { nuit: "Nuit du 29 au 30", rakas: "6", Recit: "Fatiha + Khoul Houwa Allahou (11x)", recompense: "Une maison sera bâtie à son intention au Paradis." }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-emerald-900/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_10px_#D4AF37]" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVIII</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LES NAFILAS <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">du Ramadan</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">نوافل شهر رمضان</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter les enseignements'}
        </motion.button>
      </div>

      {/* GRID DES NAFILAS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 px-2">
        {nafilas.map((item, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ delay: index * 0.05 }}
            className="glass-card p-6 md:p-8 rounded-[2.5rem] border border-white/5 flex flex-col h-full hover:border-gold/20 transition-all duration-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-gold font-black text-[10px] uppercase tracking-widest bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                {item.nuit}
              </span>
              <div className="text-right">
                <span className="text-white font-black text-2xl tracking-tighter">{item.rakas}</span>
                <span className="text-white/30 text-[10px] uppercase ml-2">rakas</span>
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <h3 className="text-white/40 font-black text-[9px] uppercase tracking-widest">Récitation recommandée :</h3>
              <p className="text-white font-sans font-bold text-sm leading-relaxed group-hover:text-gold transition-colors italic">
                "{item.Recit}"
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 mt-auto">
              <h3 className="text-emerald-400 font-black text-[9px] uppercase tracking-widest mb-3">Récompense & Bienfaits :</h3>
              <p className="text-white/60 font-serif italic text-sm leading-relaxed">
                "{item.recompense}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17/h')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/19')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}