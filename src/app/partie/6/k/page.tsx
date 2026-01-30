'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PrieresDesFetes() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "6") || CHAPTERS[5];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre VI — Section K
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-6xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LES PRIÈRES DES FÊTES <br /> « HIIT »
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

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* SECTION 1 : GÉNÉRALITÉS ET HORAIRES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Généralités</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">صلاة العيدين</h2>
          </div>
          
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <p className="text-lg md:text-xl text-white/80 font-serif italic leading-relaxed mb-8">
              "Ce sont des prières traditionnelles, mais elles ne concernent pas les femmes, l’esclave et le voyageur. À l’exception de La Mecque, on doit les effectuer en dehors des mosquées. On ne doit pas les effectuer en deux endroits distincts dans une même localité, sauf si le nombre de fidèles ne peut pas se contenir dans un endroit ; on doit alors aménager plusieurs endroits de prière ou prier à tour de rôle. On doit effectuer ces prières entre le moment où le soleil s’est complètement levé et le moment de la prière du « zohr » (tisbar). Après la prière du « zohr » (tisbar), on ne doit plus les effectuer et l’on ne doit pas non plus s’en acquitter ultérieurement en guise de réparation."
            </p>
            <p className="font-amiri text-gold-light text-2xl md:text-3xl dir-rtl leading-relaxed border-t border-white/5 pt-6">
              صلاة العيد سنة مؤكدة، ولا تجب على النساء والعبيد والمسافرين. وتؤدى في المصليات خارج المساجد إلا في مكة. ووقتها من شروق الشمس حتى الزوال، ولا تقضى إذا فات وقتها.
            </p>
          </div>
        </section>

        {/* SECTION 2 : DÉROULEMENT ET RAKKAS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Déroulement</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">كيفية الصلاة</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <p className="text-white/80 text-sm leading-relaxed">
                Elles se composent de deux rakkas que l’on prononce à haute voix. Elles ne sont précédées ni de l’appel (nodde) ni du rappel (likhâm). Dans la première raka, on dit sept (7) fois « alahou akbar », y compris le « armal » (formule d’entrée). Dans la deuxième raka, on dit six (6) fois « alahou akbar », y compris le « alahou akbar » que l’on prononce en se relevant. Ces « alahou akbar » ne sont pas accompagnés de la levée des mains vers les épaules, à l’exception du premier.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl border-t border-white/5 pt-4">
                ركعتان جهراً بلا أذان ولا إقامة. يكبر في الأولى سبعاً بتكبيرة الإحرام، وفي الثانية ستاً بتكبيرة القيام، ولا يرفع يديه إلا في الأولى.
              </p>
            </div>
            <div className="glass-card p-8 rounded-[2.5rem] border border-gold/20 space-y-6">
              <p className="text-white/80 text-sm leading-relaxed">
                En cas d’oubli, on doit l’effectuer et reprendre la récitation des sourates tant que l’on n’a pas fait la génuflexion. Après celle-ci, on continue la prière et l’on se prosterne en « khabla salam ». Il est méritoire de réciter la « fatiha » suivie de la sourate « sabihisma » dans la première raka, et la « fatiha » suivie de la sourate « wachamsi » dans la deuxième raka.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl border-t border-gold/10 pt-4">
                من نسي التكبير تداركه ما لم يركع، فإن ركع فات ويسجد للسهو قبلياً. يندب قراءة "سبح اسم" في الأولى و "الشمس" في الثانية.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 : LES SERMONS ET RECOMMANDATIONS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Sermons et Recommandations</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <p className="text-white/80 leading-relaxed">
              À l’occasion de la prière du « hiit », on prononce deux (2) sermons après la prière ; entre les deux sermons, on doit s’asseoir puis se relever avant de continuer. Pour chaque sermon, on prononce la formule « alahou akbar » un nombre de fois indéterminé. Il est recommandé à l’Imam d’entretenir les fidèles pendant ou après les sermons sur un sujet qui les intéresse, surtout les sujets ayant trait à la fête, que ce soit celle de la korité ou de la tabaski.
            </p>
            <p className="text-white/80 leading-relaxed">
              Il est méritoire de se laver ce jour après l’aube, mais avant l’heure de la prière. Il est méritoire de se parfumer, de porter de beaux habits et de bien entretenir ses cheveux. Il est méritoire d’aller à la prière à pied, dans la mesure du possible, plutôt que de se servir d’un moyen de locomotion. Il est méritoire également de louer Dieu sur le chemin des lieux de la prière ; une fois sur les lieux et avant l’arrivée de l’Imam, la louange préférée est la suivante : « alahou akbar ».
            </p>
            <p className="font-amiri text-gold-light text-2xl dir-rtl border-t border-white/5 pt-6 leading-relaxed">
              خطبتان بعد الصلاة يجلس بينهما. يندب الغسل والتطيب ولبس أحسن الثياب والمشي للمصلى والتكبير في الطريق.
            </p>
          </div>
        </section>

        {/* SECTION 4 : KORITÉ, TABASKI ET RETARDATAIRES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Pratiques Spécifiques</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gold/5 border border-gold/20 rounded-3xl space-y-4">
              <p className="text-white/70 text-sm leading-relaxed">
                Il est aussi recommandé, pour le retour, d’emprunter un chemin différent de celui de l’aller. Il est également recommandé, s’agissant de la korité, de goûter quelque chose avant d’aller prier ; s’agissant de la tabaski, par contre, d’observer le jeûne jusqu’au retour et de le rompre avec un morceau de foie de l’animal immolé. Il est méritoire, après le salut final de toute prière obligatoire, de prononcer trois (3) fois la formule « alahou akbar » à partir de la prière du « zohr » du jour de la tabaski jusqu’à celle du matin du quatrième jour.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl">
                يندب مخالفة الطريق في العودة. وفي الفطر يطعم قبل الخروج، وفي الأضحى يمسك حتى يطعم من كبده. والتكبير بعد الصلوات في الأضحى من ظهر يوم العيد لصبح اليوم الرابع.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
              <p className="text-white/70 text-sm leading-relaxed">
                Si l’on arrive en retard et que l’on trouve l’Imam en train de réciter les sourates de la prière, on doit dire sept (7) fois la formule « alahou akbar » avant de continuer la prière avec l’Imam. Si l’on arrive au moment de la génuflexion, la raka est valable. Si l’on arrive après la première raka, on continue avec l’Imam la deuxième raka jusqu au salut final, puis on s’acquitte de la raka qui nous a échappé. Si l’on rejoint l’Imam au moment du « tachahoude » (taya) ou de la prosternation, alors, dans ce cas, on termine le reste de la prière en compagnie de l’Imam, puis, après le salut final, on fait la prière telle que l’Imam l’a effectuée.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl">
                المسبوق يكبر سبعاً إذا وجد الإمام يقرأ. وتدرك الركعة بالركوع. ومن فاتته ركعة أتمها بعد سلام الإمام بصفتها.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button onClick={() => router.push('/partie/6/j')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <button onClick={() => router.push('/partie/7')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase font-black shadow-lg hover:scale-105 transition-all">Suivant</button>
      </div>
    </main>
  );
}