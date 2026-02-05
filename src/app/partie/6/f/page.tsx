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
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section F</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LA PRIÈRE DU <br /> <span className="gold-gradient-text italic font-serif lowercase">vendredi</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">صلاة الجمعة</p>

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

        <div className="space-y-32">
          
          {/* 1. L'OBLIGATION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'Obligation</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">وجوبها</span>
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">F</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-gold/30 pl-8">
                  C’est une obligation pour tout homme libre qui n’est pas en voyage ou qui n’est atteint d’aucune maladie grave de nature à l’empêcher de se rendre à la grande Mosquée ; ou encore qui n’habite pas à plus de 5,500 km de la mosquée. Tout homme frappé par cette obligation et qui ne la respecte pas, sans raison valable, est un impie, il est passible d’une correction, il n’est pas digne de foi. S’il ne s’en repent pas jusqu’à sa mort, il sera précipité dans les flammes de l’enfer.
                </p>
              </div>
            </div>
          </section>

          {/* 2. PRÉCAUTIONS ET INVOCATIONS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Préparatifs et Invocations</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest">Précaution à prendre</h3>
                <ul className="space-y-4 text-white/70 font-serif italic text-base leading-relaxed">
                  <li>• attendre que l’heure s’approche</li>
                  <li>• se purifier le corps sinon faire ses ablutions</li>
                  <li>• prendre soin de ses cheveux et poils</li>
                  <li>• porter des habits blancs et propres si possible et aller prier à l’intérieur de la mosquée</li>
                  <li>• ne pas se contenter de suivre l’Imam de chez soi ou à distance</li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="p-8 rounded-[2rem] bg-emerald-500/[0.02] border border-emerald-500/20 space-y-4">
                  <h4 className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">Entrée (Pied Droit)</h4>
                  <p className="font-amiri text-white text-xl dir-rtl leading-relaxed">بِسْمِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ، اللَّهُمَّ إِنِّي عَبْدُكَ وَزَائِرُكَ وَعَلَى كُلِّ مَزُورٍ حَقٌّ وَأَنْتَ خَيْرُ مَزُورٍ، فَأَسْأَلُكَ اللَّهُمَّ أَنْ تُنْقِذَنِي مِنَ النَّارِ وَأَنْ تُدْخِلَنِي الْجَنَّةَ بِغَيْرِ حِسَابٍ.</p>
                  <p className="text-white/40 text-[10px] italic font-serif">"Bismil lâhi allahouma iftahlî abwâba rahmatika allahouma inniya abdouka wa zâhirouka wa halâ kouli mazourine akhoune wa anta khaïrou mazourine fa as alouka allahouma ann tounkhzanî minan nâri wa ann toudhilanîl djannata bikhaïri hisâbine."</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-red-500/[0.02] border border-red-500/20 space-y-4">
                  <h4 className="text-red-400 font-bold text-[10px] uppercase tracking-widest">Sortie (Pied Gauche)</h4>
                  <p className="font-amiri text-white text-xl dir-rtl leading-relaxed">بِسْمِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ فَضْلِكَ، اللَّهُمَّ صُبَّ عَلَيَّ الْخَيْرَ صَبًّا وَلَا تَنْزِعْ عَنِّي صَالِحَ مَا أَعْطَيْتَنِي أَبَدًا وَلَا تَجْعَلْ دُعَائِي رَدًّا وَلَا تَجْعَلْ مَعِيشَتِي كَدًّا وَلَا تَجْعَلْنِي لِغَيْرِكَ عَبْدًا وَاجْعَلْ لِي يَا رَبِّ فِي الْأَرْضِ جَدًّا.</p>
                  <p className="text-white/40 text-[10px] italic font-serif">« Bismil lâhi allahouma iftahlî abwâba fadlika allahouma soubba haleyal khaïra sabbane walâ tanzih hannî sâliha mâ ahtaytanî abadane walâ tadj hale douhâ hî raddane walâ tadj hale mahichati kaddane wala tadj halnî li khaïrika abdane wadj halî ya rabbi fil ardi djaddane ».</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. COMPORTEMENT ET SERMON */}
          <section className="p-10 md:p-16 rounded-[3.5rem] bg-white/[0.01] border border-white/5 space-y-12">
            <h3 className="text-gold font-black text-[10px] uppercase tracking-[0.4em] text-center">La conduite à la Mosquée</h3>
            <div className="grid md:grid-cols-2 gap-16 font-serif italic text-lg text-white/70 leading-relaxed">
              <div className="space-y-8">
                <p>Une fois à l’intérieur de la Grande Mosquée, exécuter deux rakkas pour la saluer si l’Imam n’apparaît pas encore ; mais en présence de l’Imam, on ne peut faire que la prière obligatoire. Lorsqu’au moment où l’Imam apparaît l’on est en train de prier, on ne s’interrompt pas, on continue sa prière.</p>
                <p className="text-gold/60 border-t border-white/5 pt-8">Si au premier appel à la prière, on se trouve à l’intérieur de la mosquée, il est blâmable d’exécuter une prière traditionnelle. Si par contre au moment de ce premier appel, on n’est pas encore arrivé ou qu’on est au milieu de l’appel, on pourra faire autant de rakkas traditionnelles qu’on en désire, aussi longtemps que l’Imam n’est pas arrivé.</p>
              </div>
              <div className="p-10 rounded-3xl bg-gold/5 border border-gold/20 flex flex-col justify-center">
                <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest mb-6">Le Silence durant le Sermon</h4>
                <p>À l’apparition de l’Imam, on ne doit plus parler, on doit l’observer et écouter ce qu’il va dire. Si on n’arrive pas à l’entendre, on se tait et on l’observe. Si l’on éternue, on peut dire « Alhamdoulilahi rabil hâlamîna » à voix basse de manière à ne se faire entendre de personne. Si un autre éternue, ne lui dis rien. Pendant que l’Imam prononce son sermon, toute personne qui parle verra sa prière frappée de nullité.</p>
              </div>
            </div>
            <p className="text-center text-white/40 text-sm italic font-serif border-t border-white/5 pt-10">
              Toute prière effectuée à l’extérieur de la mosquée est nulle à moins que cette dernière soit remplie. L’on pourra alors se mettre au même niveau que les rangs et prier dans la cour de la mosquée ou dans les rues. Il est préférable de prier dans les premiers rangs. Si cela n’est pas possible, on essaye de le faire dans les rangs qui suivent, ainsi jusqu’à épuisement des rangs.
            </p>
          </section>

          {/* 4. CAS SPÉCIFIQUES ET FEMMES */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6 font-serif italic">
              <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest">Voyager le Vendredi</h4>
              <p className="text-white/70">Quiconque se trouve dans une localité où il y a une grande mosquée et qui doit aller à la prière du vendredi, n’a pas le droit de voyager le jour du vendredi sauf s’il le fait avant l’aube ; il n’a plus le droit d’en sortir avant d’avoir participé à la prière du vendredi à moins qu’il n’existe une mosquée dans la localité à laquelle il doit se rendre ou sur le chemin qui le mène à cette localité, il pourra alors prier dans cette éventuelle grande mosquée.</p>
              <div className="h-[1px] w-12 bg-white/10" />
              <p className="text-white/50 text-sm">Celui qui n’est pas frappé par l’obligation de se rendre à la grande mosquée doit (c’est méritoire) attendre qu’on ait fini de prier à la grande mosquée avant d’effectuer sa prière de l’après-midi (zohr) là où il se trouve.</p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-red-950/[0.05] border border-red-900/20 space-y-6 font-serif italic">
              <h4 className="text-red-400 font-bold text-[10px] uppercase tracking-widest">La femme à la Mosquée</h4>
              <p className="text-white/70">Pour la femme qui est vieille, laide, voûtée, portant des vêtements laids, il est méritoire d’aller prier à la mosquée. Une telle femme peut participer à la prière sur un mort comme elle peut aller à la prière à l’occasion des fêtes religieuses (hiit) ; tout cela à condition qu’elle soit vieille et très laide au point de laisser tout homme indifférent. En outre, elle ne devra pas prendre de parfum, elle devra se mettre derrière les hommes et couvrir toutes les parties de son corps à l’exception du visage et des paumes des mains. En dehors de ces cas-là, se rendre à la mosquée ou au cimetière ou à tout autre rassemblement d’hommes est blâmable chez la femme.</p>
              <div className="p-6 rounded-xl bg-red-900/10 border border-red-900/30">
                <p className="text-[10px] text-red-400/60 leading-relaxed tracking-tight">Toute femme qui transgresse cette prescription ne récoltera que des actes blâmables enregistrés par l’Ange... tous les anges qu’elle rencontre la maudissent : « que Dieu l’éloigne de ses grâces ».</p>
              </div>
            </div>
          </section>

          {/* 5. LITANIES ET BIENFAITS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Litanies et Bienfaits</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 text-center space-y-6">
                <p className="text-gold font-black text-[10px] uppercase tracking-widest">Pardon des péchés (100 fois)</p>
                <p className="font-amiri text-white text-2xl dir-rtl leading-relaxed">سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ، أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ</p>
                <p className="text-white/40 font-serif italic text-xs leading-relaxed">"Celui qui dit ce qui suit après la prière du vendredi avant de quitter le lieu de prière (100 fois), se verra pardonner cent mille péchés et pour ses parents 24.000 péchés."</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/10 text-center space-y-6">
                <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">Dettes et Pauvreté (70 fois)</p>
                <p className="font-amiri text-white text-2xl dir-rtl leading-relaxed">اللَّهُمَّ يَا غَنِيُّ يَا حَمِيدُ، يَا مُبْدِئُ يَا مُعِيدُ، يَا رَحِيمُ يَا وَدُودُ، أَغْنِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ وَبِفَضْلِكَ عَمَّنْ سِوَاكَ</p>
                <p className="text-white/40 font-serif italic text-xs leading-relaxed italic">« Allahouma ya khaniyou ya hamidou, ya moub diou ya mouhidou mahsiyatika wahakh nini bi fadlika hamane si wâka » (70 fois)</p>
              </div>
            </div>
          </section>

          {/* 6. RATTRAPAGE (MASPOUKH) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Rejoindre l'Imam (Maspoukh)</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">أحكام المسبوق</span>
            </div>
            <div className="space-y-8 p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 font-serif italic text-lg text-white/70 leading-relaxed">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 border-l border-gold/20 pl-8">
                  <p>Si l’on rejoint l’Imam au cours d’une prière avant qu’il ne se redresse des génuflexions, la rakka est acceptée. Mais si l’on arrive après les génuflexions, la rakka n’est pas comptabilisée. Si l’Imam est en avance et qu’on a comptabilisé deux rakkas, on doit dire « Allahou Akbar » en se levant. Mais si on a comptabilisé qu’une ou trois rakkas, on ne dit pas en se levant « Allahou Akbar ». Si l’on a participé pour moins d’une rakka, on doit dire « Allahou Akbar ».</p>
                  <p>Si au moment où l’on arrive, l’Imam entame la dernière rakka de la prière, on prononce la « takbir al liram », la formule d’entrée en prière, tout en continuant à marcher. Si l’Imam se baisse pour les génuflexions, on en fait de même sans s’arrêter jusqu’au rang (de prière) pour suivre l’Imam.</p>
                </div>
                <div className="space-y-6 border-l border-emerald-500/20 pl-8">
                  <p>Après le « salam », il s’acquitte des rakkas effectuées avant son arrivée. S’il ne s’agit pas de la dernière rakka, on doit continuer à marcher jusqu au rang de prière, on prononce la formule d’entrée en prière, on prie derrière l’Imam jusqu’à la fin. Toute rakka au roukou (génuflexions) duquel on n’a pas pris part ne compte pas. Chaque fois qu’on trouve l’Imam en position de génuflexions, on prononce le « takbir al ihram » (formule d’entrée) et on se met dans la même position que l’Imam tout en continuant sa marche vers les rangs de prière. Si l’Imam se redresse alors qu’on n’a pas atteint les rangs, on arrête la marche à ce moment précis pour terminer la rakka avec lui.</p>
                </div>
              </div>
              <div className="h-px bg-white/5 my-12" />
              <p>S’il ne s’agit pas de la dernière rakka et que l’Imam se redresse pour entamer une autre rakka, on pourra continuer à marcher jusqu’au rang et ensuite terminer sa prière. Mais il n’est pas permis de se lever d’une génuflexion et ensuite de reprendre sa marche vers les rangs de prière. On s’acquitte des rakkas effectuées avant notre arrivée de la même façon que l’Imam les a effectuées ; s’il les a effectuées en prononçant les sourates à voix haute ou à voix basse, on fait de même.</p>
              <p className="mt-8 text-white/50 text-sm">Si on arrive au moment où l’Imam se redresse de la génuflexion de la dernière rakka, cette prière-là nous n’y avons pas participé mais cela ne doit pas nous empêcher de suivre le reste de la prière jusqu’au « salam » (salut final). Alors on se relève et on prononce « takbir al ihram » (la formule d’entrée en prière) ; on fait la prière comme il se doit. Mais si l’Imam prosterne pour réparer une omission ou on rajoute « khabla » ou « bakhda », on ne doit pas le suivre si on n’a pas effectué avec lui au moins une rakka. Si on a effectué avec lui une rakka, on le suit. S’il s’agit de rajout « bakhda », on s’acquitte d’abord des rakkas dues jusqu au salam avant de se prosterner pour effectuer ladite réparation.</p>
            </div>
          </section>
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/e')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/g')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}