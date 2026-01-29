'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PriereDuVendrediSectionF() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "13") || CHAPTERS[12];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre VI — Section F
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LA PRIERE DU VENDREDI <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">صلاة الجمعة</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10 text-sm md:text-base leading-relaxed">
        
        {/* SECTION 1 : L'OBLIGATION ET LES RISQUES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">L'Obligation</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">وجوبها</h2>
          </div>
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <p className="text-white/80 leading-relaxed text-justify mb-6">
              C’est une obligation pour tout homme libre qui n’est pas en voyage ou qui n’est atteint d’aucune maladie grave de nature à l’empêcher de se rendre à la grande Mosquée ; ou encore qui n’habite pas à plus de 5,500 km de la mosquée. Tout homme frappé par cette obligation et qui ne la respecte pas, sans raison valable, est un impie, il est passible d’une correction, il n’est pas digne de foi. S’il ne s’en repent pas jusqu’à sa mort, il sera précipité dans les flammes de l’enfer.
            </p>
          </div>
        </section>

        {/* SECTION 2 : PRÉCAUTIONS ET INVOCATIONS D'ENTRÉE/SORTIE */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">Précaution à prendre</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
               <ul className="space-y-4 text-white/70 italic text-sm list-none">
                  <li className="flex gap-4"><span className="text-gold font-black">•</span> attendre que l’heure s’approche</li>
                  <li className="flex gap-4"><span className="text-gold font-black">•</span> se purifier le corps sinon faire ses ablutions</li>
                  <li className="flex gap-4"><span className="text-gold font-black">•</span> prendre soin de ses cheveux et poils</li>
                  <li className="flex gap-4"><span className="text-gold font-black">•</span> porter des habits blancs et propres si possible et aller prier à l’intérieur de la mosquée</li>
                  <li className="flex gap-4"><span className="text-gold font-black">•</span> ne pas se contenter de suivre l’Imam de chez soi ou à distance</li>
               </ul>
            </div>
            <div className="space-y-6">
               <div className="bg-emerald-950/40 p-6 rounded-2xl border border-emerald-500/20">
                  <p className="text-emerald-400 font-bold text-[10px] uppercase mb-4 tracking-widest flex justify-between">
                    <span>Entrée (Pied Droit)</span>
                    <span className="font-amiri text-lg">دخول المسجد</span>
                  </p>
                  <p className="font-amiri text-white text-xl dir-rtl leading-relaxed mb-3">
                    بِسْمِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ، اللَّهُمَّ إِنِّي عَبْدُكَ وَزَائِرُكَ وَعَلَى كُلِّ مَزُورٍ حَقٌّ وَأَنْتَ خَيْرُ مَزُورٍ، فَأَسْأَلُكَ اللَّهُمَّ أَنْ تُنْقِذَنِي مِنَ النَّارِ وَأَنْ تُدْخِلَنِي الْجَنَّةَ بِغَيْرِ حِسَابٍ.
                  </p>
                  <p className="text-white/40 text-[10px] italic leading-relaxed">
                    "Bismil lâhi allahouma iftahlî abwâba rahmatika allahouma inniya abdouka wa zâhirouka wa halâ kouli mazourine akhoune wa anta khaïrou mazourine fa as alouka allahouma ann tounkhzanî minan nâri wa ann toudhilanîl djannata bikhaïri hisâbine."
                  </p>
               </div>
               <div className="bg-red-950/20 p-6 rounded-2xl border border-red-500/20">
                  <p className="text-red-400 font-bold text-[10px] uppercase mb-4 tracking-widest flex justify-between">
                    <span>Sortie (Pied Gauche)</span>
                    <span className="font-amiri text-lg">خروج من المسجد</span>
                  </p>
                  <p className="font-amiri text-white text-xl dir-rtl leading-relaxed mb-3">
                    بِسْمِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ فَضْلِكَ، اللَّهُمَّ صُبَّ عَلَيَّ الْخَيْرَ صَبًّا وَلَا تَنْزِعْ عَنِّي صَالِحَ مَا أَعْطَيْتَنِي أَبَدًا وَلَا تَجْعَلْ دُعَائِي رَدًّا وَلَا تَجْعَلْ مَعِيشَتِي كَدًّا وَلَا تَجْعَلْنِي لِغَيْرِكَ عَبْدًا وَاجْعَلْ لِي يَا رَبِّ فِي الْأَرْضِ جَدًّا.
                  </p>
                  <p className="text-white/40 text-[10px] italic leading-relaxed">
                    « Bismil lâhi allahouma iftahlî abwâba fadlika allahouma soubba haleyal khaïra sabbane walâ tanzih hannî sâliha mâ ahtaytanî abadane walâ tadj hale douhâ hî raddane walâ tadj hale mahichati kaddane wala tadj halnî li khaïrika abdane wadj halî ya rabbi fil ardi djaddane ».
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 : ACTIONS À LA MOSQUÉE */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">La conduite à la Mosquée</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">آداب حضور المسجد</h2>
          </div>
          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-white/70 text-sm italic border-l-2 border-gold/30 pl-6 leading-relaxed text-justify">
                  Une fois à l’intérieur de la Grande Mosquée, exécuter deux rakkas pour la saluer si l’Imam n’apparaît pas encore ; mais en présence de l’Imam, on ne peut faire que la prière obligatoire. Lorsqu’au moment où l’Imam apparaît l’on est en train de prier, on ne s’interrompt pas, on continue sa prière.
                </p>
                <p className="text-white/70 text-sm italic border-l-2 border-gold/30 pl-6 leading-relaxed text-justify">
                  Si au premier appel à la prière, on se trouve à l’intérieur de la mosquée, il est blâmable d’exécuter une prière traditionnelle. Si par contre au moment de ce premier appel, on n’est pas encore arrivé ou qu’on est au milieu de l’appel, on pourra faire autant de rakkas traditionnelles qu’on en désire, aussi longtemps que l’Imam n’est pas arrivé.
                </p>
            </div>
            
            <div className="bg-gold/5 p-8 rounded-2xl border border-gold/10">
              <p className="text-white/90 font-bold mb-4 uppercase text-xs tracking-widest text-center">Le Silence durant le Sermon</p>
              <p className="text-white/60 text-sm leading-relaxed text-justify italic">
                À l’apparition de l’Imam, on ne doit plus parler, on doit l’observer et écouter ce qu’il va dire. Si on n’arrive pas à l’entendre, on se tait et on l’observe. Si l’on éternue, on peut dire « Alhamdoulilahi rabil hâlamîna » à voix basse de manière à ne se faire entendre de personne. Si un autre éternue, ne lui dis rien. Pendant que l’Imam prononce son sermon, toute personne qui parle verra sa prière frappée de nullité.
              </p>
            </div>

            <p className="text-white/50 text-xs italic text-center font-serif px-8">
              Toute prière effectuée à l’extérieur de la mosquée est nulle à moins que cette dernière soit remplie. L’on pourra alors se mettre au même niveau que les rangs et prier dans la cour de la mosquée ou dans les rues. Il est préférable de prier dans les premiers rangs. Si cela n’est pas possible, on essaye de le faire dans les rangs qui suivent, ainsi jusqu’à épuisement des rangs.
            </p>
          </div>
        </section>

        {/* SECTION 4 : LE VOYAGE ET LES FIDÈLES SPÉCIFIQUES */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">Règles de Voyage et Mérites</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-4">
              <h4 className="text-gold font-bold text-xs uppercase tracking-widest">Voyager le Vendredi</h4>
              <p className="text-white/70 text-sm italic leading-relaxed text-justify">
                Quiconque se trouve dans une localité où il y a une grande mosquée et qui doit aller à la prière du vendredi, n’a pas le droit de voyager le jour du vendredi sauf s’il le fait avant l’aube ; il n’a plus le droit d’en sortir avant d’avoir participé à la prière du vendredi à moins qu’il n’existe une mosquée dans la localité à laquelle il doit se rendre ou sur le chemin qui le mène à cette localité, il pourra alors prier dans cette éventuelle grande mosquée.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-4 text-justify">
               <h4 className="text-gold font-bold text-xs uppercase tracking-widest">Enfants et Cas particuliers</h4>
               <p className="text-white/60 text-[13px] italic">
                 Celui qui n’est pas frappé par l’obligation de se rendre à la grande mosquée doit (c’est méritoire) attendre qu’on ait fini de prier à la grande mosquée avant d’effectuer sa prière de l’après-midi (zohr) là où il se trouve.
               </p>
               <p className="text-white/60 text-[13px] italic border-t border-white/5 pt-4">
                 Pour l’enfant en état de purification qui ne soit pas enclin aux jeux, il est méritoire d’aller à la prière du vendredi. Pour l’esclave auquel son maître n’a pas confié du travail qui l’empêche de se rendre à la mosquée, il est méritoire d’y aller pour prier.
               </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 : CONCERNANT LES FEMMES */}
        <section className="bg-red-950/20 p-8 md:p-12 rounded-[3rem] border border-red-900/30 space-y-8">
           <h3 className="text-red-400 font-black text-xs uppercase tracking-widest text-center">La femme à la Mosquée</h3>
           <div className="space-y-6 max-w-5xl mx-auto">
              <p className="text-white/70 text-sm leading-relaxed text-justify italic font-serif">
                Pour la femme qui est vieille, laide, voûtée, portant des vêtements laids, il est méritoire d’aller prier à la mosquée. Une telle femme peut participer à la prière sur un mort comme elle peut aller à la prière à l’occasion des fêtes religieuses (hiit) ; tout cela à condition qu’elle soit vieille et très laide au point de laisser tout homme indifférent. En outre, elle ne devra pas prendre de parfum, elle devra se mettre derrière les hommes et couvrir toutes les parties de son corps à l’exception du visage et des paumes des mains. En dehors de ces cas-là, se rendre à la mosquée ou au cimetière ou à tout autre rassemblement d’hommes est blâmable chez la femme.
              </p>
              <div className="bg-black/40 p-8 rounded-2xl border border-red-500/20 text-center">
                <p className="text-red-500 font-bold text-[10px] uppercase mb-4 tracking-widest">Mise en garde</p>
                <p className="text-white/50 text-xs italic leading-relaxed max-w-3xl mx-auto">
                  Toute femme qui transgresse cette prescription ne récoltera que des actes blâmables enregistrés par l’Ange depuis le moment où elle sort de sa chambre jusqu’à son retour. En outre, tous les anges qu’elle rencontre, le sol sur lequel elle marche, le ciel qui l’abrite ainsi que les étoiles et tout ce qu’elle trouve sur son passage, sont impatients de la voir punie et la maudissent : « que Dieu l’éloigne de ses grâces », que Dieu nous en garde.
                </p>
              </div>
           </div>
        </section>

        {/* SECTION 6 : LITANIES ET BIENFAITS DU VENDREDI */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">Bienfaits et Litanies</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">أذكار الجمعة</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-gold/10 flex flex-col justify-between">
               <p className="text-[10px] text-gold font-black uppercase mb-4 tracking-[0.2em]">Pardon des péchés (100 fois)</p>
               <p className="font-amiri text-white text-xl dir-rtl leading-relaxed text-right mb-4">
                 « سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ، أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ »
               </p>
               <p className="text-white/50 text-xs italic font-serif italic italic">
                 "Celui qui dit ce qui suit après la prière du vendredi avant de quitter le lieu de prière (100 fois), se verra pardonner cent mille péchés et pour ses parents 24.000 péchés."
               </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-gold/10 flex flex-col justify-between">
               <p className="text-[10px] text-gold font-black uppercase mb-4 tracking-[0.2em]">Protection Hebdomadaire (7 fois)</p>
               <div className="text-center mb-4">
                 <p className="text-white/70 font-bold uppercase italic text-sm">Fatiha + Ikhlas + Falaq + Nass</p>
               </div>
               <p className="text-white/50 text-xs italic font-serif italic italic italic">
                 "De même celui qui récite après la prière du vendredi, avant de déplier ses jambes (7 fois), sera protégé de tous les maux jusqu’au vendredi suivant."
               </p>
            </div>
          </div>

          <div className="bg-emerald-950/40 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8 text-center">
             <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Pour les Dettes et la Pauvreté (70 fois)</h4>
             <p className="font-amiri text-white text-2xl md:text-3xl dir-rtl leading-relaxed">
               « اللَّهُمَّ يَا غَنِيُّ يَا حَمِيدُ، يَا مُبْدِئُ يَا مُعِيدُ، يَا رَحِيمُ يَا وَدُودُ، أَغْنِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ وَبِفَضْلِكَ عَمَّنْ سِوَاكَ »
             </p>
             <p className="text-gold-light/40 text-[10px] uppercase tracking-widest italic font-medium italic">
                « Allahouma ya khaniyou ya hamidou, ya moub diou ya mouhidou mahsiyatika wahakh nini bi fadlika hamane si wâka » (70 fois)
             </p>
             <div className="h-px bg-white/5 w-24 mx-auto" />
             <p className="text-white/60 text-sm italic font-serif italic italic italic italic">
                "Celui qui récite ses invocations après chaque prière de vendredi ou après celle du matin, Dieu lui permettra de payer ses dettes et le préservera de la pauvreté. De même la récitation de la sourate « kafi » le vendredi te met en rapport direct avec la Kaaba et purifie ton cœur jusqu’au vendredi suivant."
             </p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5">
             <p className="text-white/70 text-sm italic italic">
                Celui qui dit « Astakhfiroulaha leuzi lahilaha ila houwal hayal khayouma wa at toubou ileyhi » trois fois avant la prière du matin de vendredi (sobh) se verra pardonner tous ses péchés.
             </p>
          </div>
        </section>

        {/* SECTION 7 : REJOINDRE L'IMAM ET RATTRAPAGE */}
        <section className="space-y-10 pb-20">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">Rejoindre l'Imam (Maspoukh)</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">أحكام المسبوق</h2>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-12">
             <div className="space-y-6">
                <h4 className="text-gold font-bold text-xs uppercase border-b border-gold/10 pb-2">Règle de validation de la Rakka</h4>
                <p className="text-white/70 italic border-l-2 border-emerald-500/30 pl-6 leading-relaxed text-justify">
                   Si l’on rejoint l’Imam au cours d’une prière avant qu’il ne se redresse des génuflexions, la rakka est acceptée. Mais si l’on arrive après les génuflexions, la rakka n’est pas comptabilisée. Si l’Imam est en avance et qu’on a comptabilisé deux rakkas, on doit dire « Allahou Akbar » en se levant. Mais si on a comptabilisé qu’une ou trois rakkas, on ne dit pas en se levant « Allahou Akbar ». Si l’on a participé pour moins d’une rakka, on doit dire « Allahou Akbar ».
                </p>
             </div>

             <div className="space-y-6">
                <h4 className="text-gold font-bold text-xs uppercase border-b border-gold/10 pb-2">Arrivée en fin de prière</h4>
                <p className="text-white/70 italic border-l-2 border-gold/30 pl-6 leading-relaxed text-justify italic">
                   Si au moment où l’on arrive, l’Imam entame la dernière rakka de la prière, on prononce la « takbir al liram », la formule d’entrée en prière, tout en continuant à marcher. Si l’Imam se baisse pour les génuflexions, on en fait de même sans s’arrêter jusqu’au rang (de prière) pour suivre l’Imam. Après le « salam », il s’acquitte des rakkas effectuées avant son arrivée. S’il ne s’agit pas de la dernière rakka, on doit continuer à marcher jusqu’au rang de prière, on prononce la formule d’entrée en prière, on prie derrière l’Imam jusqu’à la fin.
                </p>
                <div className="bg-gold/5 p-6 rounded-2xl border border-gold/20">
                   <p className="text-gold-light font-bold text-xs uppercase mb-2 italic">Important : La règle du Roukou</p>
                   <p className="text-white/60 text-xs italic">
                     Toute rakka au roukou (génuflexions) duquel on n’a pas pris part ne compte pas. Chaque fois qu’on trouve l’Imam en position de génuflexions, on prononce le « takbir al ihram » (formule d’entrée) et on se met dans la même position que l’Imam tout en continuant sa marche vers les rangs de prière. Si l’Imam se redresse alors qu’on n’a pas atteint les rangs, on arrête la marche à ce moment précis pour terminer la rakka avec lui. S’il ne s’agit pas de la dernière rakka et que l’Imam se redresse pour entamer une autre rakka, on pourra continuer à marcher jusqu’au rang et ensuite terminer sa prière. Mais il n’est pas permis de se lever d’une génuflexion et ensuite de reprendre sa marche vers les rangs de prière.
                   </p>
                </div>
             </div>

             <div className="space-y-6">
                <h4 className="text-emerald-400 font-bold text-xs uppercase border-b border-emerald-500/10 pb-2">Comment s'acquitter des Rakkas manquées</h4>
                <p className="text-white/70 italic leading-relaxed text-justify italic font-serif italic italic">
                   On s’acquitte des rakkas effectuées avant notre arrivée de la même façon que l’Imam les a effectuées ; s’il les a effectuées en prononçant les sourates à voix haute ou à voix basse, on fait de même. Si on arrive au moment où l’Imam se redresse de la génuflexion de la dernière rakka, cette prière-là nous n’y avons pas participé mais cela ne doit pas nous empêcher de suivre le reste de la prière jusqu’au « salam » (salut final). Alors on se relève et on prononce « takbir al ihram » (la formule d’entrée en prière) ; on fait la prière comme il se doit.
                </p>
                <div className="p-6 bg-red-950/10 rounded-2xl border border-red-500/20 mt-4">
                   <p className="text-red-400 font-bold text-[10px] uppercase mb-2 italic">Note sur la Réparation (Khabla/Bakhda)</p>
                   <p className="text-white/50 text-xs italic italic">
                    Mais si l’Imam prosterne pour réparer une omission ou on rajoute « khabla » ou « bakhda », on ne doit pas le suivre si on n’a pas effectué avec lui au moins une rakka. Si on a effectué avec lui une rakka, on le suit. S’il s’agit de rajout « bakhda », on s’acquitte d’abord des rakkas dues jusqu’au salam avant de se prosterner pour effectuer ladite réparation.
                   </p>
                </div>
             </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/6/e')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/6/g')} 
          className="flex-[1.5] py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}