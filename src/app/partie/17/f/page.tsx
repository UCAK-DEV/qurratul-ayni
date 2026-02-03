'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SounnaPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 17
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
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
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_10px_#D4AF37]" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Section F</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LA <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Sounna</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">السنة النبوية</p>

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

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* 1. DEVOIRS ENVERS LE MUSULMAN */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8 italic font-serif text-lg leading-relaxed text-white/80">
          <ul className="space-y-6">
            <li>• Rendre visite à un musulman malade est une tradition pour un voisin, de même l’accompagner à sa dernière demeure s’il venait de mourir, et présenter ses condoléances à sa famille.</li>
            <li>• Féliciter son prochain lorsqu’il y a un événement heureux chez lui.</li>
            <li>• Compatir à ses peines le cas contraire.</li>
            <li className="space-y-4">
              <p>• Le saluer quand on le dépasse, quand on le rencontre, quand on le trouve dans un endroit en disant ceci :</p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="font-amiri text-2xl text-white text-right leading-relaxed dir-rtl mb-2">
                  السَّلامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ تَعَالَى وَبَرَكَاتُهُ
                </p>
                <p className="text-gold font-sans not-italic text-sm">« Assalamou haleykoum warahmatou lahi tahala wa barakatouhô ».</p>
              </div>
            </li>
            <li className="space-y-4">
              <p>• Il doit vous rendre le salut :</p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-right">
                <p className="font-amiri text-2xl text-white leading-relaxed dir-rtl mb-2">
                  وَعَلَيْكُمُ السَّلامُ وَرَحْمَةُ اللهِ تَعَالَى وَبَرَكَاتُهُ
                </p>
                <p className="text-gold font-sans not-italic text-sm dir-ltr">« Waleykoum salam warahmatou lahi tahala wa barakatouhi ».</p>
              </div>
            </li>
            <li>• Éviter tout ce dont on dit que l’abandon entraîne la longévité si cet abandon n’est pas contraire à la charia du bida.</li>
          </ul>
        </motion.section>

        {/* 2. DE LA SALUTATION (INTERDICTIONS) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6 px-4">
            <h2 className="text-xs font-black text-red-500 uppercase tracking-[0.4em] italic">De la Salutation</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="bg-red-950/5 p-8 md:p-12 rounded-[3rem] border border-red-500/10 space-y-6 text-white/60 italic font-serif text-base leading-relaxed">
            <p className="text-white/80 font-bold mb-4">Cependant, on ne doit pas saluer une femme tierce,</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <p>-ni quelqu’un qui est en train de prier, ni quelqu’un qui procède à l’appel à la prière,</p>
              <p>-ni celui qui procède au re-appel,</p>
              <p>-ni celui qui est en train de lire le Coran ou la tradition prophétique ou une documentation religieuse,</p>
              <p>-ni celui qui est en train d’enseigner,</p>
              <p>-celui qui prône au nom de Dieu,</p>
              <p>-celui qui évoque les noms de Dieu (Zikr),</p>
              <p>-celui qui prononce le sermon,</p>
              <p>-celui qui est en train de juger et celui qui l’écoute,</p>
              <p>-celui qui est en train de manger ou de boire,</p>
              <p>-celui qui est aux toilettes,</p>
              <p>-celui qui exhibe ses parties intimes,</p>
              <p>-celui qui s’amuse ou celui qui assiste à des jeux, celui qui l’écoute,</p>
              <p>-celui qui est au cinéma,</p>
              <p>-celui qui regarde la télé ou tout ce qui peut distraire,</p>
              <p>-celui qui fabrique des jouets ou celui qui les vend,</p>
              <p>-celui qui s’adonne à une séance divinatoire quelconque ou au maniement des cauris,</p>
              <p>-un mécréant,</p>
              <p>-un photographe,</p>
              <p>-celui qui reproduit une créature vivante,</p>
              <p>-celui qui prend de l’alcool,</p>
              <p>-celui qui fume,</p>
              <p>-celui qui se fait raser la barbe et celui qui la lui rase,</p>
              <p>-celle qui greffe les cheveux et celle qui le lui fait,</p>
              <p>-celle qui se tatoue les lèvres et celle qui le lui fait.</p>
            </div>
            <p className="pt-6 border-t border-red-500/10 text-white/40">
              On ne doit pas saluer aucune de ces personnes. Précisions cependant que le fait de ne pas saluer procède du respect à l’endroit de celui qui lit ou enseigne le Coran, du mépris à l’endroit de celui qui s’adonne à des interdits.
            </p>
          </motion.div>
        </section>

        {/* 3. APPARITION DU CROISSANT LUNAIRE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6 px-4">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.4em] italic">Apparition du Croissant Lunaire</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8 italic font-serif text-lg leading-relaxed text-white/70">
            <p>La tradition veut que celui qui aperçoit la Lune lors de son apparition dise ce qui suit :</p>
            
            <div className="space-y-8 text-right dir-rtl">
              <div className="space-y-2">
                <p className="font-amiri text-3xl text-gold">اللَّهُ أَكْبَرُ (٣ مَرَّاتٍ)</p>
                <p className="text-white/40 font-sans not-italic text-[10px] tracking-widest uppercase">« Allahou akbar » (3 fois)</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-amiri text-3xl text-white leading-relaxed">إِلَى خَيْرٍ وَرُشْدٍ رَبِّي وَرَبُّكَ اللَّهُ (٣ مَرَّاتٍ)</p>
                <p className="text-white/40 font-sans not-italic text-[10px] tracking-widest uppercase">« Ila khaïrine wa rouchdine rabi wa raboukal lahou » (3 fois)</p>
              </div>

              <div className="space-y-2">
                <p className="font-amiri text-2xl text-white leading-relaxed">اللَّهُمَّ لِلَّهِ الَّذِي خَلَقَنِي وَخَلَقَكَ وَصَوَّرَنِي وَصَوَّرَكَ وَقَدَّرَ مَنَازِلَ وَجَعَلَكَ آيَةً لِلْعَالَمِينَ (٣ مَرَّاتٍ)</p>
                <p className="text-white/40 font-sans not-italic text-[10px] tracking-widest uppercase">« Allahouma lilahi leuzi khalakhanî wa khalakhaka... » (3 fois)</p>
              </div>

              <div className="space-y-2">
                <p className="font-amiri text-2xl text-white leading-relaxed">اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالأَمْنِ وَالإِيمَانِ وَالإِسْلامِ وَالإِحْسَانِ وَالسَّلامَةِ وَالْعَافِيَةِ وَسِتْرِ الْجَمِيلِ وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضَى (٣ مَرَّاتٍ)</p>
                <p className="text-white/40 font-sans not-italic text-[10px] tracking-widest uppercase">« Allahouma ahilahô haleynâ... » (3 fois)</p>
              </div>

              <div className="space-y-2">
                <p className="font-amiri text-2xl text-white leading-relaxed">كُلُّ مَا يَشْغَلُ الْعَبْدَ عَنْ رَبِّهِ وَعَنْ عِبَادَتِهِ فَهُوَعَلَيْهِ مَشْؤُومٌ (٣ مَرَّاتٍ)</p>
                <p className="text-white/40 font-sans not-italic text-[10px] tracking-widest uppercase">« Koula mâyachkhaloul habda... » (3 fois)</p>
              </div>
            </div>

            <p className="bg-emerald-950/20 p-6 rounded-2xl border border-emerald-500/20 text-emerald-100">
              S’il s’agit du mois de Ramadan, il ajoute à cela la sourate « Al moulki », alors cela accroîtra ses chances d’acquisition de biens durant toute l’année.
            </p>
          </motion.div>
        </section>

        {/* 4. AUTRES RECOMMANDATIONS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6 px-4">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.4em] italic">Autres Recommandations</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8 italic font-serif text-lg leading-relaxed text-white/70">
            <ul className="space-y-4">
              <li>• Il est recommandé de se laver les mains avant de manger et d’utiliser la main droite sauf empêchement.</li>
              <li>• De dire ceci avant de commencer à manger : <span className="text-white not-italic font-sans text-sm block mt-2">« Bismilahi al mouzah sihi dadani »</span></li>
              <li>• Et dire après avoir mangé : <span className="text-white not-italic font-sans text-sm block mt-2">« Alhamdou lilahi al mousahihi al badani »</span>. On doit se laver les mains après et se gargariser.</li>
              <li className="bg-emerald-950/20 p-6 rounded-2xl border border-emerald-500/10">
                • Celui qui après le repas dit ce qui suit : <span className="text-white block mt-2">« Alhamdou lilahi atthamanî haza tahama wa razakha nîhi mine khaïri hawli minî wala khouwatine »</span> se verra absous de tous ses péchés sans exclusive.
              </li>
              <li>• Il est recommandé pour se moucher, pour se laver les parties intimes, pour enlever le sable de son front après la prière, de le faire avec la main gauche et de faire tout le reste avec la main droite.</li>
            </ul>

            <div className="pt-8 border-t border-white/5 space-y-6">
              <p className="not-italic font-sans text-gold font-bold text-xs uppercase tracking-widest">On doit toujours commencer par dire « Bismilahi » avant de faire quoi que ce soit, notamment pour :</p>
              <p>prendre quelque chose, poser quelque chose, recevoir quelque chose, s’asseoir, se lever, entrer dans une chambre ou en sortir, allumer ou éteindre une lampe, porter ou enlever des vêtements, des chaussures ou une coiffure, entrer ou sortir des toilettes ou d’une mosquée.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-italic font-sans text-sm">
                <div className="p-4 bg-white/5 rounded-xl">Il est bon d’entrer dans une mosquée par le pied droit et en sortir par le pied gauche.</div>
                <div className="p-4 bg-white/5 rounded-xl">S’il s’agit d’un lieu de toilettes, on entre par le pied gauche et on sort par le pied droit.</div>
                <div className="p-4 bg-white/5 rounded-xl">Il faut entrer ou sortir d’une maison ou d’une case toujours par le pied droit.</div>
                <div className="p-4 bg-gold/5 rounded-xl border border-gold/10">
                  Il est recommandé, lorsqu’on entre dans une chambre inoccupée, de dire ce qui suit : <span className="text-white">« Assalamou alyena ala ibadilahi salihîna »</span> et réciter la sourate « Koul houwa lahou ahadoune » (3 fois).
                </div>
              </div>
            </div>

            {/* HABITS NEUFS */}
            <div className="pt-8 border-t border-white/5 space-y-6">
              <p>• Il est recommandé avant de porter des habits neufs de réciter la « Fatiha » (1 fois) et « Ina an salnahou » (15 fois), et de souffler sur les habits, de jeter quelques gouttes d’eau et un peu de sable avant de les porter. On restera assis en les portant et on se lèvera après pour dire ceci :</p>
              <div className="bg-white/5 p-6 rounded-2xl italic font-serif">
                « Alhamdou lilahi leuzi kassânî haza sawba wa razakhanîhi mine khaïri hawline minî wala khouwatil alla houma iniya as alouka khaïrahô wa khaïra mâ souniha lahô ».
                <p className="not-italic text-sm text-white/40 mt-4">Si on fait cela, il se pourra que le Tout-Puissant nous laisse user ces habits en paix. En plus, on bénéficiera de la rémission de tous ses péchés.</p>
              </div>
            </div>

            {/* ÉTERNUEMENT ET BAILLEMENT */}
            <div className="pt-8 border-t border-white/5 space-y-6">
              <p>• Il est recommandé de dire ce qui suit chaque fois que l’on éternue : <span className="text-white">« Alhamdou lilahi rabil alamîna »</span> et celui qui l’entend de répondre ceci : <span className="text-white">« Yarhamoukal lahou »</span>, puis <span className="text-white">« Yakhfirou lahou lana wa lakounou wala yahdîkou moul lâhou wa youslihô bâ lakoune »</span>.</p>
              <p>• Il est recommandé de fermer sa bouche en baillant et de maudire Satan en disant : <span className="text-white">« Ahonzou bilahi mina chaïtani radjîme »</span>. Si on ferme la bouche avec la main droite, que ce soit avec la paume. S’il s’agit de la main gauche, que ce soit avec le revers de la main.</p>
            </div>
          </motion.div>
        </section>

        {/* 5. TOILETTE ET CORPS */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6 px-4">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.4em] italic">Hygiène et Toilette du Corps</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8 italic font-serif text-lg leading-relaxed text-white/70">
            <ul className="space-y-6">
              <li>• Il faut se couper les ongles chaque jeudi après-midi (17 heures), car les laisser pousser indéfiniment n’est pas recommandé ni pour la religion ni pour la santé.</li>
              <li>• La tradition veut que l’homme se rase la tête plutôt que d’entretenir les cheveux en les coiffant ou en y mettant des produits pour cheveux, ou en se contentant de les couper ou encore de les laisser pousser sans soin.</li>
              <li>• Quant aux poils de l’aisselle ainsi que ceux du bas-ventre, on doit les raser.</li>
              <li>• Les favoris, quant à eux, on peut les enlever.</li>
              <li>• En ce qui concerne les moustaches, on peut les tailler sans les enlever entièrement.</li>
              <li className="text-red-400 font-bold not-italic font-sans uppercase text-sm border-y border-red-500/20 py-4 tracking-widest">Il est strictement interdit de se raser la barbe ou de la tailler.</li>
              <li>• La femme peut entretenir ses cheveux en y appliquant des produits. Elle peut même les teindre, elle peut y appliquer tout ce qui les fait briller. Elle ne doit pas laisser pousser éventuellement une barbe, des favoris et des moustaches ; elle doit les raser.</li>
            </ul>
          </motion.div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17/e')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/17/g')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}