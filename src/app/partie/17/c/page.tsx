'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PratiquesPauvretePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-red-950/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVII — Section C</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              CAUSES DE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">la pauvreté</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">أسباب الفقر</p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAudioAction}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-20' : 'opacity-0'}`} />
              <span className="material-symbols-rounded text-4xl relative z-10 text-gold">
                {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
              </span>
              <span className="text-sm font-bold tracking-tight relative z-10 italic font-serif">
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        <div className="space-y-12">
          
          {/* GRILLE DES PRATIQUES */}
          <motion.section 
            {...fadeInUp}
            className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group shadow-2xl"
          >
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">C</span>
            
            <div className="relative z-10">
              <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em] mb-16 text-center">Pratiques pouvant entraîner la pauvreté</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 text-white/70 italic font-serif text-lg leading-relaxed">
                <div className="space-y-4">
                  {[
                    "brûler l’enveloppe de l’oignon, celle de l’ail",
                    "dormir couché sur le ventre",
                    "enlever des ordures la nuit ou les laisser dans sa chambre",
                    "enlever des ordures avec un morceau d’étoffe de coton",
                    "employer du sable ou du son pour se laver après avoir fini de manger",
                    "se laver dans le récipient où l’on vient de manger, même s’il n’y a plus rien",
                    "s’asseoir au pied d’une porte",
                    "s’adosser à la porte",
                    "se purifier par le lavage ou faire ses ablutions dans un endroit souillé",
                    "coudre des vêtements alors qu’on les porte",
                    "s’essuyer le visage avec ses habits",
                    "faire éclabousser l’eau dont on se lave les mains dans le repas qu’on va manger",
                    "poser le récipient contenant l’eau qui sert à se laver les mains à l’endroit où était placé le repas",
                    "porter les mains aux hanches",
                    "aller aux toilettes tout nu",
                    "manger ou dormir en état d’impureté majeure",
                    "se presser de sortir de la mosquée après la prière",
                    "tarder à se rendre à la mosquée",
                    "la paresse, le gaspillage",
                    "se montrer fainéant (s’abstenir de participer à une tâche commune)",
                    "acheter aux mendiants ce qu’on leur a donné en aumône",
                    "laisser ouvert un récipient contenant des mets",
                    "éteindre une lampe ou une bougie en soufflant dessus",
                    "maudire ses parents (père-mère) ou ses enfants",
                    "jeter un pou vivant à terre",
                    "laver la plante du pied avec la main droite",
                    "uriner dans un flaque d’eau",
                    "porter un pantalon en restant debout",
                    "mettre un turban en restant assis",
                    "manger avec deux doigts",
                    "traverser un troupeau ou un groupe de femmes"
                  ].map((text, i) => (
                    <motion.div key={i} className="flex gap-4 border-b border-white/[0.03] pb-3 hover:text-white transition-colors group/item">
                      <span className="text-gold/30 group-hover/item:text-gold transition-colors font-serif">•</span>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    "mettre des ventouses le septième jour du mois",
                    "donner de petits coups sur des dents avec ses doigts",
                    "prendre l’habitude de s’amuser avec sa barbe",
                    "se couper les ongles avec les dents",
                    "se promener nu sous le soleil ou au clair de lune",
                    "se soulager face à la Kaaba ou à la direction opposée, ou uriner en plein air",
                    "appuyer le menton sur la main",
                    "se montrer indifférent vis-à-vis de ce qui tombe du repas lorsqu’on mange",
                    "ne pas dire « Bismilahi » en mangeant ou en buvant",
                    "négliger la prière rituelle",
                    "la gourmandise",
                    "porter ses chaussures en commençant par le pied gauche",
                    "manger dans un couvercle retourné",
                    "porter ses poils sans les raser pendant une durée de 40 jours",
                    "ne pas enlever de sa chambre ou de sa mosquée les toiles d’araignée et les nids de guêpe",
                    "dormir entre l’appel à la prière de l’aube (fadiar) et le lever du soleil",
                    "se peigner les cheveux en restant debout",
                    "maudire le vent",
                    "refuser de donner du feu ou de prêter une aiguille, ou de donner de l’eau, de prêter un couvercle ou du sel",
                    "tromper quelqu’un dans une opération sur une question de poids ou de mesure",
                    "quémander sans être dans le besoin",
                    "stocker des denrées en vue d’une spéculation",
                    "l’adultère",
                    "se laver le mercredi et le samedi",
                    "se laver les mains sans avoir léché auparavant la main droite après avoir mangé",
                    "se servir du pantalon comme oreiller ou l’accrocher dans sa chambre",
                    "irriter des parents (père-mère)",
                    "épousseter son lit avec un vêtement",
                    "couper un arbre qui n’est pas mort sans en avoir besoin, surtout quand il s’agit du jujubier"
                  ].map((text, i) => (
                    <motion.div key={i} className="flex gap-4 border-b border-white/[0.03] pb-3 hover:text-white transition-colors group/item">
                      <span className="text-gold/30 group-hover/item:text-gold transition-colors font-serif">•</span>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/17/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/17/d')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}