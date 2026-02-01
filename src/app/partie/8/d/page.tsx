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

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre VIII — Section D
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          PRIÈRES ET <br />
          <span className="gold-gradient-text">CONDOLÉANCES</span>
        </motion.h1>

        <motion.button
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* SECTION 1: CONDUITE À TENIR */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">PRIÈRES ET CONDOLÉANCES</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic">
            <p>
              Il est souhaitable de présenter ses condoléances à la famille du défunt et d’aider ses voisins, en leur fournissant de quoi manger, car ils n’ont pas le temps de s’en occuper. Il est formellement interdit de se rassembler dans la maison mortuaire, d’y tuer des bœufs ou autres animaux à n’en plus finir. Le mieux est de tout faire pour en finir le jour du décès. Il n’est pas du tout recommandé de célébrer l’anniversaire de sa mort en organisant des cérémonies funéraires.
            </p>
            <p>
              On peut, à la limite, chaque fois que l’on pense à lui, faire des prières à son intention ou bien faire une aumône en sa faveur. Faire de l’aumône à leur intention et leur dédier des prières est une bonne chose ; cela leur est utile ainsi qu’aux auteurs de ces prières. La période pendant laquelle le mort a le plus besoin qu’on lui fasse quelque chose est celle qui s’étend du premier au troisième jour.
            </p>
            
            <div className="bg-white/5 p-8 rounded-3xl border border-gold/20 space-y-4">
              <h3 className="text-gold font-black text-xs uppercase tracking-widest">La prière des trois premières nuits (Djouli)</h3>
              <p className="text-sm">Si l’on fait la prière (djouli) suivant à l’intention d’un mort dans la période qui s’étend de la première à la troisième nuit, le défunt obtiendra le pardon et la miséricorde du Tout-Puissant et beaucoup de bénédictions ; celui qui effectue la prière bénéficiera de beaucoup de bienfaits et verra avant sa mort sa demeure au Paradis.</p>
              <p className="text-sm font-bold text-white">Cette prière (djouli) compte deux rakkas avec dans chacune :</p>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-black uppercase tracking-widest text-center">
                <li className="p-3 bg-black/40 rounded-xl border border-white/5 italic">Fatiha</li>
                <li className="p-3 bg-black/40 rounded-xl border border-white/5 italic">Ayatoul Koursiyou (1x)</li>
                <li className="p-3 bg-black/40 rounded-xl border border-white/5 italic">Aleykoum Moutakhassourou (1x)</li>
                <li className="p-3 bg-black/40 rounded-xl border border-white/5 italic">Likhlass (11x)</li>
              </ul>
              <div className="pt-4 space-y-3">
                <p className="text-xs font-bold underline">Après le salut final, on ajoute ce qui suit :</p>
                <p className="font-serif text-white">« allahouma inni saleytou hassihi salata wa tahlamou ma ouridou bihâ. Allahouma hab hâss e sawa baha ila khabri foulanine » (dire le nom à la place de foulanine).</p>
                <p className="font-amiri text-xl text-gold-light text-right" dir="rtl">اللهم إني صليتُ هذه الصلاة وتعلم ما أريدُ بها، اللهم هب ثوابها إلى قبر (فلان)</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: LA TOMBE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">LA TOMBE</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6 text-white/70 italic text-sm leading-relaxed">
            <p>
              On ne doit pas construire sur une tombe ni l’entourer de quoi que ce soit. On doit la laisser exposée au soleil et à la pluie. Cependant, on peut planter un morceau de bois au pied et à la tête et c’est tout. Tout au plus, on peut entourer la tombe de pierres uniquement pour pouvoir l’identifier ou pour empêcher qu’on creuse dessus. Mais on ne doit écrire sur la tombe.
            </p>
            <p className="font-bold text-white/90 border-l-4 border-gold pl-6 py-2">
              L’une des raisons pour lesquelles on ne doit pas construire sur la tombe est la suivante : un musulman dans une tombe non bâtie entend les appels à la prière ; si, par contre, la tombe est bâtie, il ne les entend pas.
            </p>
          </div>
        </section>

        {/* SECTION 3: VISITER LES CIMETIÈRES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">VISITER LES CIMETIÈRES</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-gold/20 space-y-8 italic">
            <p className="text-sm">
              Visiter les cimetières est un acte souhaitable, mais les jours préférés à cet effet sont le vendredi, le jeudi et le samedi. Celui qui rend visite à ses parents défunts chaque vendredi se verra absous de ses péchés ; celui-ci doit être en état de pureté. 
            </p>
            
            <div className="space-y-6">
              <h3 className="text-gold font-black text-xs uppercase tracking-widest text-center">Formule à dire une fois dans les cimetières :</h3>
              <p className="font-serif text-white text-center leading-relaxed">
                « Assalamou aleykoum diyara khawmine môminina wa innâ in chahalahou bikoume la lâ hikhôna yarahamou lahou moustakhdimîna mine koune wal moustakhirîna minna antoume lanâ faratoûne wa neuhnou lakoume tabah oume annassal lahou wahchatakoume wa amana raw hatakoume wa djah alal djanata mihadane baïnanâ wabaïnakoune, allahouma rabba hasihil arwahi albakhiyati wal adjis sadil bâliyatiwachou hourile moutamazikhati wal djoulodile mout takhati hati wal hizamine nakhiratil lati kharadjatt minna dounnya wa hiya bika mouminoune add khile aleyha rawhane minnka a salāmaneminni allahouma innaka tahlamou hadadahoume wa rahmatouka awsahou minn houme fakhfirlana wala houme. Allahouma ikhfirlouhoume warhamehoume wahfou anhhoume »
              </p>
              <p className="font-amiri text-xl md:text-2xl text-gold-light text-center leading-loose" dir="rtl">
                السلام عليكم ديار قوم مؤمنين، وإنا إن شاء الله بكم للاحقون، يرحم الله المستقدمين منكم والمستأخرين منا، أنتم لنا فرط ونحن لكم تبع، نسأل الله وحشتكم وآمن روعتكم وجعل الجنة مهاداً بيننا وبينكم، اللهم رب هذه الأرواح الباقية والأجساد البالية والشعور المتمزقة والجلود المتقطعة والعظام النخرة التي خرجت من الدنيا وهي بك مؤمنة أدخل عليها روحاً منك وسلاماً مني، اللهم إنك تعلم عددهم ورحمتك أوسع منهم فاغفر لنا ولهم. اللهم اغفر لهم وارحمهم واعف عنهم.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              <div className="p-4 bg-white/5 rounded-2xl text-center">
                <p className="text-gold font-bold text-[10px] uppercase mb-2">Puis réciter :</p>
                <p className="text-xs">« inna euhtaynakal kawsara » (11 fois)</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl text-center">
                <p className="text-gold font-bold text-[10px] uppercase mb-2">Puis réciter :</p>
                <p className="text-xs">« khoul houwalahou » (11 fois)</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl text-center">
                <p className="text-gold font-bold text-[10px] uppercase mb-2">Puis réciter :</p>
                <p className="text-xs">« ayatoul koursiyou » (1 fois)</p>
              </div>
            </div>
            <p className="text-center text-[10px] opacity-40">À l’intention de tous ceux qui y reposent. Cela leur sera utile, ainsi qu’à celui qui a dit la prière.</p>
          </div>
        </section>

        {/* SECTION 4: VISITE PARTICULIÈRE ET FEMMES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">VISITE PARTICULIÈRE</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 italic">
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-4 text-sm leading-relaxed">
              <p>Si l’on veut rendre visite à une tombe particulière, on se met devant la tombe au niveau des pieds. Si l’on doit prier pour le défunt, on dit la prière (gnane) ci-dessus et toute autre prière puisée dans le Coran et invocation sur le Prophète (PSL) à son intention.</p>
              <p className="p-4 bg-gold/5 rounded-xl border border-gold/10 text-xs">
                S’il s’agit d’une personne de qui l’on espère obtenir des bienfaits en raison de sa baraka, on peut, après avoir imploré la grâce de Dieu sur lui, demander au Tout-Puissant d’exaucer vos vœux en son nom.
              </p>
            </div>

            <div className="bg-red-950/20 p-8 rounded-[2.5rem] border border-red-500/20 flex flex-col justify-center items-center text-center space-y-4">
              <span className="material-symbols-rounded text-red-500 text-4xl">warning</span>
              <p className="text-sm font-bold text-white uppercase tracking-widest leading-relaxed">
                Il n’est pas recommandé (daganoul) à la femme d’aller dans les cimetières, quel que soit son âge.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/8/c')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/9')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}