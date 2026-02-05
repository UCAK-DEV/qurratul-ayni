'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function MenstruesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sectionsMenstrues = [
    {
      titreFr: "DÉFINITION ET CATÉGORIES",
      titreAr: "تعريف الحيض وأقسامه",
      content: [
        { fr: "C’est l’écoulement de sang propre à la femme de 9 ans au moins et de 70 ans au plus ; cet écoulement est périodique et non provoqué. On distingue là, trois (3) catégories de femmes : a. celle à qui cela vient d’arriver (la débutante), b. celle qui en est habituée, c. la femme enceinte." }
      ]
    },
    {
      titreFr: "1° - LA FEMME DÉBUTANTE",
      titreAr: "١ - المرأة المبتدئة",
      content: [
        { fr: "Pour la première, la durée de l’écoulement n’excède pas quinze jours ; si elle excède quinze jours, il ne s’agit plus de menstrues mais d’une maladie (istihada), alors la femme pourra se purifier, faire ses prières, jeûner éventuellement et reprendre ses rapports avec son mari." },
        { fr: "Si après une interruption les menstrues reprennent, la femme doit faire la somme des jours d’écoulement. Si cette somme excède quinze jours cela signifie qu’il ne s’agit plus de menstrues mais d’une maladie. Pendant les jours d’interruption, elle doit se purifier, prier et jeûner. Si la somme égale quinze, il s’agit bien de menstrues car 15 jours c’est la durée minimale de l’état de pureté d’une femme. Tout état de pureté de moins de 15 jours peut faire penser à une maladie mais si cela dure 15 jours de pureté, tout nouvel écoulement provient des menstrues." }
      ]
    },
    {
      titreFr: "2° - LA FEMME HABITUÉE",
      titreAr: "٢ - المرأة المعتادة",
      content: [
        { fr: "Si l’écoulement se manifeste plus longtemps que d’habitude, elle attend trois (3) jours au-delà desquels elle devra se laver, prier et jeûner. Cette attente n’est valable que si la durée totale n’excède pas 15 jours. Si la période habituelle est de 13 jours, elle attend 2 jours. Si elle est de 14 jours, elle attend 1 jour. Si elle est de 15 jours, elle n’attend pas, car il s’agit alors de maladie." }
      ]
    },
    {
      titreFr: "3° - LA FEMME ENCEINTE",
      titreAr: "٣ - المرأة الحامل",
      content: [
        { fr: "Rare avant les deux premiers mois. Entre le 2ème et le 6ème mois, l’écoulement ne peut excéder vingt (20) jours. Au-delà des 20 jours, elle doit se laver et reprendre ses obligations. S’il y a interruption et reprise sans que l’interruption ne dure 15 jours, elle fait la somme jusqu’à concurrence des 20 jours." },
        { fr: "Entre le sixième mois et le terme, l’écoulement ne peut excéder trente (30) jours. Si la durée excède 30 jours, il s’agit de maladie. En cas d'interruption de moins de 15 jours, elle additionne les jours d'écoulement jusqu'à concurrence de 30 jours. Pendant l'interruption, elle pratique ses actes d'adoration normalement." }
      ]
    },
    {
      titreFr: "SIGNES DE L'ARRÊT (PURETÉ)",
      titreAr: "علامات الطهر من الحيض",
      content: [
        { fr: "Il y a deux façons de reconnaître l’arrêt : 1. La siccité (lorsqu'un coton inséré ressort sec sans trace de sang neuf). 2. L’écoulement d’un liquide blanc (la glaire) semblable au sperme." },
        { fr: "La femme dont l’apparition de pertes blanches signale l’arrêt peut se purifier immédiatement. Celles dont la siccité précède les pertes blanches peuvent se purifier même si l'ordre s'inverse. Cependant, si la siccité est antérieure, elle doit attendre la fin du temps idéal (Mokhtar) d'une prière pour se purifier. Si les pertes blanches surviennent après cette attente, elle ne renouvelle pas son bain. Si elle n'a pas attendu le Mokhtar, elle doit recommencer la purification." }
      ]
    },
    {
      titreFr: "INTERDICTIONS ET ACTES PROHIBÉS",
      titreAr: "ما يحرم على الحائض",
      content: [
        { fr: "La femme en menstrues ne doit pas : Faire ses prières (pas de compensation), Jeûner (compensation obligatoire), Faire le tour de la Kaaba (Tawaf), Observer la retraite d'adoration (Itikaf), Avoir des rapports sexuels, Être répudiée (divorce), Entrer dans une mosquée. On ne doit pas flirter avec elle entre le nombril et les genoux." },
        { fr: "Elle ne doit toucher au Coran que pour l’enseigner ou l’étudier, mais elle peut le réciter de mémoire. Toutes les pratiques interdites le demeurent jusqu’à ce que la purification (Ghusl) soit faite après l'arrêt." }
      ]
    },
    {
      titreFr: "RÈGLES DES HORAIRES ET JEÛNE",
      titreAr: "أحكام الصلاة والصيام",
      content: [
        { fr: "Elle doit vérifier l'arrêt à chaque moment. Si l'arrêt intervient avant l'aurore et qu'elle peut faire une Rakka avant le lever du soleil, la prière du matin est obligatoire. Si elle survient le soir avec assez de temps pour 5 Rakkas avant le coucher, elle doit faire Zohr et Asr. Si elle peut faire 4 Rakkas, elle fait Zohr." },
        { fr: "En période de jeûne, elle doit vérifier l'arrêt avant l'aurore (Fajr). Si l'arrêt est avant le Fajr, elle jeûne. Si c'est après, elle ne jeûne pas. En cas d'interruption de moins de 15 jours, elle devra jeûner ce jour, retenir cette date et procéder plus tard à un jeûne de compensation." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre V — Section E</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LES <span className="gold-gradient-text italic font-serif lowercase">menstrues</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الحيض</p>

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
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon complète'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        {/* CONTENT SECTIONS */}
        <div className="space-y-32">
          {sectionsMenstrues.map((section, sIdx) => (
            <section key={sIdx} className="space-y-12">
              <div className="flex items-center gap-6">
                <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">{section.titreFr}</h2>
                <div className="h-[1px] flex-1 bg-white/5" />
                <span className="text-xl font-amiri text-gold/40">{section.titreAr}</span>
              </div>

              <div className="grid gap-6">
                {section.content.map((item, cIdx) => (
                  <motion.div 
                    key={cIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all font-serif italic text-lg md:text-xl text-white/70 leading-relaxed shadow-sm"
                  >
                    &quot;{item.fr}&quot;
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/5/d')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/5/f')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}