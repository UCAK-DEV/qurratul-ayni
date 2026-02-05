'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PrieresCondoleancesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "8") || CHAPTERS[7];
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VIII — Section D</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              PRIÈRES ET <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">condoléances</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الدعاء والتعزية</p>

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
          
          {/* 1. CONDUITE À TENIR ET PRATIQUES FUNÉRAIRES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Comportement et Aumônes</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">D</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed space-y-8 text-justify">
                <p>
                  Il est souhaitable de présenter ses condoléances à la famille du défunt et d’aider ses voisins, en leur fournissant de quoi manger, car ils n’ont pas le temps de s’en occuper. Il est formellement interdit de se rassembler dans la maison mortuaire, d’y tuer des bœufs ou autres animaux à n’en plus finir. Le mieux est de tout faire pour en finir le jour du décès. Il n’est pas du tout recommandé de célébrer l’anniversaire de sa mort en organisant des cérémonies funéraires.
                </p>
                <p>
                  On peut, à la limite, chaque fois que l’on pense à lui, faire des prières à son intention ou bien faire une aumône en sa faveur. Faire de l’aumône à leur intention et leur dédier des prières est une bonne chose ; cela leur est utile ainsi qu’aux auteurs de ces prières. La période pendant laquelle le mort a le plus besoin qu’on lui fasse quelque chose est celle qui s’étend du premier au troisième jour.
                </p>
              </div>
            </div>

            {/* LA PRIÈRE DES TROIS NUITS */}
            <div className="p-10 md:p-16 rounded-[4rem] bg-gold/[0.03] border border-gold/20 space-y-10">
              <div className="text-center space-y-4">
                <h3 className="text-gold font-black text-xs uppercase tracking-[0.4em]">La prière des trois premières nuits (Djouli)</h3>
                <div className="h-1 w-12 bg-gold mx-auto" />
              </div>
              <p className="text-white/70 font-serif italic text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Si l’on fait la prière (djouli) suivant à l’intention d’un mort dans la période qui s’étend de la première à la troisième nuit, le défunt obtiendra le pardon et la miséricorde du Tout-Puissant et beaucoup de bénédictions ; celui qui effectue la prière bénéficiera de beaucoup de bienfaits et verra avant sa mort sa demeure au Paradis.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Fatiha", "Ayatoul Koursiyou (1x)", "Aleykoum Moutakhassourou (1x)", "Likhlass (11x)"].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center flex items-center justify-center">
                    <span className="text-white/80 font-black text-[10px] uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-8 pt-8 border-t border-white/5">
                <p className="text-gold font-bold text-center text-sm italic underline">Après le salut final, on ajoute ce qui suit :</p>
                <div className="space-y-6 text-center">
                  <p className="font-serif text-white/90 text-lg md:text-xl italic">« allahouma inni saleytou hassihi salata wa tahlamou ma ouridou bihâ. Allahouma hab hâss e sawa baha ila khabri foulanine » (dire le nom à la place de foulanine).</p>
                  <p className="font-amiri text-2xl md:text-4xl text-gold-light leading-relaxed" dir="rtl">اللَّهُمَّ إِنِّي صَلَّيْتُ هَذِهِ الصَّلَاةَ وَتَعْلَمُ مَا أُرِيدُ بِهَا، اللَّهُمَّ هَبْ ثَوَابَهَا إِلَى قَبْرِ (فُلَانٍ)</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. LA TOMBE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Préservation de la tombe</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">القبر</span>
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
              <p>
                On ne doit pas construire sur une tombe ni l’entourer de quoi que ce soit. On doit la laisser exposée au soleil et à la pluie. Cependant, on peut planter un morceau de bois au pied et à la tête et c’est tout. Tout au plus, on peut entourer la tombe de pierres uniquement pour pouvoir l’identifier ou pour empêcher qu’on creuse dessus. Mais on ne doit écrire sur la tombe.
              </p>
              <div className="p-10 rounded-[3rem] bg-gold/[0.02] border-l-4 border-gold text-white/80 text-center">
                L’une des raisons pour lesquelles on ne doit pas construire sur la tombe est la suivante : un musulman dans une tombe non bâtie entend les appels à la prière ; si, par contre, la tombe est bâtie, il ne les entend pas.
              </div>
            </div>
          </section>

          {/* 3. VISITER LES CIMETIÈRES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Visiter les cimetières</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">زيارة القبور</span>
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 space-y-12 font-serif italic">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
                Visiter les cimetières est un acte souhaitable, mais les jours préférés à cet effet sont le vendredi, le jeudi et le samedi. Celui qui rend visite à ses parents défunts chaque vendredi se verra absous de ses péchés ; celui-ci doit être en état de pureté.
              </p>

              <div className="space-y-10 pt-12 border-t border-white/5">
                <h3 className="text-gold font-black text-center text-[10px] uppercase tracking-[0.4em]">Formule à dire une fois dans les cimetières</h3>
                <div className="space-y-10 max-w-5xl mx-auto text-center">
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    « Assalamou aleykoum diyara khawmine môminina wa innâ in chahalahou bikoume la lâ hikhôna yarahamou lahou moustakhdimîna mine koune wal moustakhirîna minna antoume lanâ faratoûne wa neuhnou lakoume tabah oume annassal lahou wahchatakoume wa amana raw hatakoume wa djah alal djanata mihadane baïnanâ wabaïnakoune, allahouma rabba hasihil arwahi albakhiyati wal adjis sadil bâliyatiwachou hourile moutamazikhati wal djoulodile mout takhati hati wal hizamine nakhiratil lati kharadjatt minna dounnya wa hiya bika mouminoune add khile aleyha rawhane minnka a salāmaneminni allahouma innaka tahlamou hadadahoume wa rahmatouka awsahou minn houme fakhfirlana wala houme. Allahouma ikhfirlouhoume warhamehoume wahfou anhhoume »
                  </p>
                  <p className="font-amiri text-2xl md:text-3xl text-gold-light leading-loose" dir="rtl">
                    السَّلَامُ عَلَيْكُمْ دِيَارَ قَوْمٍ مُؤْمِنِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَلَاحِقُونَ، يَرْحَمُ اللَّهُ الْمُسْتَقْدِمِينَ مِنْكُمْ وَالْمُسْتَأْخِرِينَ مِنَّا، أَنْتُمْ لَنَا فَرَطٌ وَنَحْنُ لَكُمْ تَبَعٌ، نَسْأَلُ اللَّهَ وَحْشَتَكُمْ وَآمَنَ رَوْعَتَكُمْ وَجَعَلَ الْجَنَّةَ مِهَادًا بَيْنَنَا وَبَيْنَكُمْ، اللَّهُمَّ رَبَّ هَذِهِ الْأَرْوَاحِ الْبَاقِيَةِ وَالْأَجْسَادِ الْبَالِيَةِ وَالشُّعُورِ الْمُتَمَزِّقَةِ وَالْجُلُودِ الْمُتَقَطِّعَةِ وَالْعِظَامِ النَّخِرَةِ الَّتِي خَرَجَتْ مِنَ الدُّنْيَا وَهِيَ بِكَ مُؤْمِنَةٌ أَدْخِلْ عَلَيْهَا رَوْحًا مِنْكَ وَسَلَامًا مِنِّي، اللَّهُمَّ إِنَّكَ تَعْلَمُ عَدَدَهُمْ وَرَحْمَتُكَ أَوْسَعُ مِنْهُمْ فَاغْفِرْ لَنَا وَلَهُمْ. اللَّهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَاعْفُ عَنْهُمْ.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                {[
                  { t: "Réciter :", desc: "« inna euhtaynakal kawsara » (11 fois)" },
                  { t: "Réciter :", desc: "« khoul houwalahou » (11 fois)" },
                  { t: "Réciter :", desc: "« ayatoul koursiyou » (1 fois)" }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 text-center space-y-2">
                    <span className="text-gold font-bold text-[10px] uppercase tracking-widest">{item.t}</span>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-[10px] text-white/30 tracking-tight pt-8 italic font-sans">
                À l’intention de tous ceux qui y reposent. Cela leur sera utile, ainsi qu’à celui qui a dit la prière.
              </p>
            </div>
          </section>

          {/* 4. VISITE PARTICULIÈRE ET FEMMES */}
          <section className="space-y-12 pb-20">
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg leading-relaxed text-white/70">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Visite particulière</h3>
                <p>Si l’on veut rendre visite à une tombe particulière, on se met devant la tombe au niveau des pieds. Si l’on doit prier pour le défunt, on dit la prière (gnane) ci-dessus et toute autre prière puisée dans le Coran et invocation sur le Prophète (PSL) à son intention.</p>
                <div className="p-6 rounded-2xl bg-gold/[0.03] border border-gold/10 text-base text-white/60">
                  S’il s’agit d’une personne de qui l’on espère obtenir des bienfaits en raison de sa baraka, on peut, après avoir imploré la grâce de Dieu sur lui, demander au Tout-Puissant d’exaucer vos vœux en son nom.
                </div>
              </div>
              <div className="p-10 rounded-[3rem] bg-red-950/[0.05] border border-red-900/20 flex flex-col justify-center items-center text-center space-y-8">
                <span className="material-symbols-rounded text-red-500 text-5xl">warning</span>
                <p className="text-white/80 font-black text-xl md:text-2xl uppercase tracking-tighter leading-tight">
                  Il n’est pas recommandé (daganoul) à la femme d’aller dans les cimetières, quel que soit son âge.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/8/c')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/9')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre IX</button>
      </nav>
    </main>
  );
}