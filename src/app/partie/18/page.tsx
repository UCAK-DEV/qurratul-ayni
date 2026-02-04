'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { nuit: "1ère Nuit", rakas: "12", recit: [{name: "Fatiha", count: 1}, {name: "Inna Anzalnahou", count: 2}, {name: "Al Kâfirouna", count: 2}, {name: "Ikhlass", count: 2}], recompense: "Dieu le sauvera à jamais de l’enfer et exaucera tous ses vœux formulés à la suite de cette prière." },
    { nuit: "Nuit du 1 au 2", rakas: "6", recit: [{name: "Fatiha", count: 1}, {name: "Inna Ahtaïnakal", count: 10}], recompense: "Absous de tous ses péchés avant de quitter les lieux. Avantages de 1000 grands pèlerinages, 1000 Oumra, offrande de 1000 Dereumes, visite à 1000 malades, accompagnement de 1000 morts et lecture de tout le Coran. Bénédictions supérieures à 70 ans de dévotions." },
    { nuit: "Nuit du 2 au 3", rakas: "6", recit: [{name: "Fatiha", count: 1}, {name: "Inna Anzahbahou", count: 4}, {name: "Khoul ya Ayouhal Kâfirouna", count: 4}], recompense: "Avantages de 1000 esclaves affranchis, 1000 repas de rupture de jeûne, habiller 1000 démunis, nourrir 1000 affamés. Bénédictions égales au nombre d'espèces volantes. Avantages des grands saints et martyrs. Aucune épreuve dans la tombe." },
    { nuit: "Nuit du 3 au 4", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Khoul ya Ayouhal Kâfirouna", count: 3}], recompense: "Avantages de 1000 personnes acquittées de leurs dévotions. Absous de tous ses péchés avant de quitter le lieu." },
    { nuit: "Nuit du 4 au 5", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Alam Nasraa", count: 1}, {name: "Khoul Houwa Allahou", count: 3}], recompense: "Considéré comme ayant fait le Hajj et l'Oumra 100 fois. Préservé de la pauvreté, biens multipliés. Chaque lettre crée 2 anges pour effacer les péchés et noter des bienfaits pendant un an. Faveurs du martyr à la mort, pas d'affres de la mort, portes du paradis ouvertes dans la tombe." },
    { nuit: "Nuit du 5 au 6", rakas: "2", recit: [{name: "Fatiha", count: 1}, {name: "Khoul Houwa Allahou", count: 12}], recompense: "Considéré comme ayant fait 1000 rakas au Maqam Ibrahim et 1000 à la Mecque, aumône de 5000 F et nourrir 1000 affamés. Vœux exaucés. Mort en martyr, tombe comme jardin d'Eden. Ressuscité auréolé de lumière, beauté du soleil, accès au Paradis sans jugement parmi les Prophètes." },
    { nuit: "Nuit du 6 au 7", rakas: "6", recit: [{name: "Fatiha", count: 1}, {name: "Khoul ya Ayouhal Kâfirouna", count: 7}, {name: "Khoul Houwa Allahou", count: 7}], recompense: "Bienfaits pour chaque verset. Considéré comme ayant donné 1000 dinars en aumône. Vœux exaucés. Bénédictions égales au nombre de jours de l'existence terrestre. Une grande maison au Paradis pour chaque lettre." },
    { nuit: "Nuit du 7 au 8", rakas: "2", recit: [{name: "Fatiha", count: 1}, {name: "Khoul Houwa Allahou", count: 12}], recompense: "Pour chaque lettre, bénédictions de 1000 ans de dévotions. Considéré comme ayant nourri, abreuvé et habillé tous les musulmans pendant 70 ans. Bénédictions de 1000 esclaves affranchis. Vœux exaucés, traversée du Siraat comme un éclair, sauvetage de 70 personnes de l'enfer." },
    { nuit: "Nuit du 8 au 9", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Tabatt Yada", count: 3}, {name: "Khoul Houwa Allahou", count: 1}], recompense: "Bénédictions de ceux qui acceptent les décrets divins et manifestent leur reconnaissance. Avantages de la lecture intégrale du Coran. 70 ans de dévotions (jeûne le jour, prière la nuit). 2 anges effacent les péchés jusqu'au Jugement. Entrée dans l'un des 8 paradis au choix sans jugement." },
    { nuit: "Nuit du 9 au 10", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Ayatoul Koursiyou", count: 1}, {name: "Inna Anzalnahou", count: 12}], recompense: "Absous de tous les péchés sans exception. Bénédictions de 50 hommes de Dieu véridiques et de 70 martyrs. Goûtera aux fruits du Paradis avant sa mort. Sauvetage de 70 personnes de l'enfer." },
    { nuit: "Nuit du 10 au 11", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Inna Anzalnahou", count: 7}, {name: "Al Kâfirouna", count: 7}, {name: "Ikhlass", count: 7}], recompense: "Dire 70x La hawla... et 70x Salatou ala Nabi après le salut. Absous sans exception. Faveurs d'un an de dévotion par verset, 1000 esclaves libérés, 1000 dinars d'aumône, nourrir et habiller 1000 démunis. Préservé des calamités, djinns et affres de la mort. Paradis sans jugement." },
    { nuit: "Nuit du 11 au 12", rakas: "10", recit: [{name: "Fatiha", count: 1}, {name: "Khoul Houwa Allahou", count: 6}], recompense: "8000 épouses au Paradis, vie avec le Prophète. Faveurs de l'étude du Tawrat, Zabour et Coran. Absous de tous péchés (même comme les vagues de la mer). Bénédictions de 70 ans de dévotions. 1000 esclaves libérés. Sauvetage de l'enfer pour autant de personnes désirées." },
    { nuit: "Nuit du 12 au 13", rakas: "2", recit: [{name: "Fatiha", count: 1}, {name: "Khoul Houwa Allahou", count: 5}], recompense: "Grande maison au Paradis avec 7 chambres en or, 1000 lits par chambre avec une épouse dans chaque. Bénédictions de 20 ans de jeûne et de 1000 rakas effectués." },
    { nuit: "Nuit du 13 au 14", rakas: "8", recit: [{name: "Fatiha", count: 1}, {name: "Isa Djaha", count: 7}], recompense: "Considéré comme ayant donné 1000 dinars, affranchi 1000 esclaves et nourri 1000 affamés. Prières et jeûne agréés. Préservé des maux d'ici-bas et de l'au-delà. Sauvetage de l'enfer pour autant de personnes voulues sans jugement." },
    { nuit: "Nuit du 14 au 15", rakas: "6", recit: [{name: "Fatiha", count: 1}, {name: "Isa Djaha", count: 1}, {name: "Khoul Houwa Allahou", count: 1}], recompense: "Prières et jeûne agréés. Péchés convertis en bienfaits. Une grande cité au Paradis pour chaque lettre. Considéré comme ayant nourri les musulmans du monde entier." },
    { nuit: "Nuit du 15 au 16", rakas: "2", recit: [{name: "Fatiha", count: 1}, {name: "Iza Zoulzilati", count: 10}], recompense: "Beaucoup de bénédictions. Absous de tous les péchés. Délivré de l'angoisse et des calamités des deux mondes. Préservé de la pauvreté, acquisition de biens multipliée. Paradis en compagnie des illustres créatures." },
    { nuit: "Nuit du 16 au 17", rakas: "2", recit: [{name: "Fatiha", count: 1}, {name: "Inna Anzalnahou", count: 2}, {name: "Khoul Houwa Allahou", count: 1}], recompense: "Bénédictions au nombre de tous les croyants. Guérison des maladies, acquittement des dettes, fin de l'angoisse et préservation de l'enfer." },
    { nuit: "Nuit du 17 au 18", rakas: "10", recit: [{name: "Fatiha", count: 1}, {name: "Sabi Hisma", count: 1}, {name: "Al Kâfirouna", count: 1}, {name: "Ikhlass", count: 1}], recompense: "Comme s'il possédait et dépensait toutes les richesses terrestres pour Dieu. Grande cité au Paradis par lettre. 70 ans de devoirs accomplis (jeûne et prière). 100 lectures du Coran, 100 Hajj, 100 Oumra. Vision de sa demeure au Paradis avant de mourir." },
    { nuit: "Nuit du 18 au 19", rakas: "6", recit: [{name: "Fatiha", count: 1}, {name: "Ikhlass", count: 7}], recompense: "Le Paradis est la récompense. Préservé de toute peur. Vœux exaucés. Satan l'évitera. Gardera la foi jusqu'à la fin. Parmi les premiers à entrer au Paradis." },
    { nuit: "Nuit du 19 au 20", rakas: "8", recit: [{name: "Fatiha", count: 1}, {name: "Inna Anzalnahou", count: 1}, {name: "Khoul Houwa Allahou", count: 3}], recompense: "Bénédictions de tous les hommes ayant fait le bien. Absous de tous les péchés sans exception. Préservé de l'obscurité de la tombe. Paradis en compagnie du Prophète Muhammad (PSL)." },
    { nuit: "Nuit du 20 au 21", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Khoul Houwa Allahou", count: 20}], recompense: "Comme s'il possédait et dépensait tous les biens de la planète pour Dieu. Comme s'il avait lu Tawrat, Injil, Zabour et Coran. Pur de ses péchés comme au jour de sa naissance." },
    { nuit: "Nuit du 21 au 22", rakas: "2", recit: [{name: "Fatiha", count: 1}, {name: "Sabi Hisma", count: 3}, {name: "Inna Anzalnahou", count: 3}, {name: "Ikhlass", count: 3}, {name: "Falakhi", count: 3}, {name: "Nassi", count: 3}], recompense: "Dieu bâtira 70 cités, chaque cité 1000 maisons, chaque maison 1000 chambres en or/argent, chaque chambre 1000 lits, chaque lit 1000 épouses." },
    { nuit: "Nuit du 22 au 23", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Iza Diaha Nassourou Lahi", count: 5}, {name: "Khoul Houwa Allahou", count: 5}], recompense: "Absous de tous les péchés. 2 anges enregistrent des bienfaits pendant un an. S'il meurt entre-temps, bénédiction du martyr. Ressuscité avec la beauté du soleil, traversée du Siraat comme l'éclair." },
    { nuit: "Nuit du 23 au 24", rakas: "6", recit: [{name: "Fatiha", count: 1}, {name: "Khoul Houwa Allahou", count: 3}], recompense: "Ira au Paradis sans être jugé." },
    { nuit: "Nuit du 24 au 25", rakas: "8", recit: [{name: "Fatiha", count: 1}, {name: "Khoul Houwa Allahou", count: 4}], recompense: "Absous de tous les péchés avant de quitter la prière. Ne connaîtra jamais les épreuves divines." },
    { nuit: "Nuit du 25 au 26", rakas: "10", recit: [{name: "Fatiha", count: 1}, {name: "Al Khârihatou", count: 1}, {name: "Khoul Houwa Allahou", count: 5}], recompense: "Se repentir après la prière. Préservé de l'enfer. Considéré comme ayant jeûné toute son existence. Bénédictions au nombre des étoiles et des feuilles d'arbres. Escorté au Paradis par les anges Djibril, Mikaël, Izrafil et Israfil." },
    { nuit: "Nuit du 26 au 27", rakas: "12", recit: [{name: "Fatiha", count: 1}, {name: "Inna Anzalnahou", count: 10}], recompense: "Bénédictions au nombre des jours de l'existence terrestre. Ressuscité parmi les Prophètes." },
    { nuit: "Nuit du 27 au 28", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Watiini", count: 5}, {name: "Al Kâfirouna", count: 5}, {name: "Ikhlass", count: 5}], recompense: "Se repentir après la prière : absous de tous ses péchés." },
    { nuit: "Nuit du 28 au 29", rakas: "4", recit: [{name: "Fatiha", count: 1}, {name: "Watiini", count: 5}, {name: "Al Kâfirouna", count: 5}, {name: "Ikhlass", count: 5}], recompense: "Se repentir après la prière : absous de tous ses péchés." },
    { nuit: "Nuit du 29 au 30", rakas: "6", recit: [{name: "Fatiha", count: 1}, {name: "Khoul Houwa Allahou", count: 11}], recompense: "Une maison sera bâtie à son intention au Paradis." }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans">
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

      {/* ACCORDION DES NAFILAS */}
      <div className="max-w-4xl mx-auto space-y-4 relative z-10">
        {nafilas.map((item, index) => (
          <AccordionItem key={index} item={item} />
        ))}
      </div>
    </main>
  );
}

const AccordionItem = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="glass-card rounded-[2rem] border border-white/5 overflow-hidden group"
    >
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <span className={`text-gold font-black text-[10px] uppercase tracking-widest bg-gold/5 px-3 py-1 rounded-full border border-gold/10 transition-colors ${isOpen ? 'bg-gold/20' : ''}`}>
            {item.nuit}
          </span>
          <span className={`text-white font-bold text-sm hidden sm:inline ${isOpen ? 'text-gold' : ''}`}>{item.rakas} rakas</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-white/40 text-xs font-mono hidden sm:inline transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            Détails
          </span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <span className="material-symbols-rounded text-white/40 group-hover:text-gold transition-colors">
              expand_more
            </span>
          </motion.div>
        </div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 space-y-6">
              <div className="p-6 bg-black/20 rounded-xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-rounded text-white/40 text-xl">auto_stories</span>
                  <h3 className="text-white/40 font-black text-[9px] uppercase tracking-widest">Récitation recommandée</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.recit.map((sourate: any, i: number) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      <span className="text-white font-bold text-xs">{sourate.name}</span>
                      <span className="text-gold bg-gold/10 font-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full">{sourate.count}x</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-emerald-900/10 rounded-xl border border-emerald-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-rounded text-emerald-400 text-xl">workspace_premium</span>
                  <h3 className="text-emerald-400 font-black text-[9px] uppercase tracking-widest">Récompense & Bienfaits</h3>
                </div>
                <p className="text-white/60 font-serif italic text-sm leading-relaxed">
                  {item.recompense}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};