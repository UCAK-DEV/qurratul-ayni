'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ActesDurantPriere() {
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
          Chapitre VI — Section I
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-6xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          DE CERTAINS ACTES <br /> DURANT LA PRIÈRE
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
        
        {/* SECTION : CERTAINS ACTES BLÂMABLES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-red-400 uppercase tracking-tighter">CERTAINS ACTES BLÂMABLES</h2>
            <div className="h-px flex-1 bg-red-500/20" />
            <h2 className="text-2xl font-amiri text-red-400">المكروهات في الصلاة</h2>
          </div>
          
          <div className="bg-red-950/10 p-8 md:p-12 rounded-[2.5rem] border border-red-500/20">
            <div className="flex flex-col gap-8">
              <p className="text-lg md:text-xl text-white/80 font-serif italic leading-relaxed">
                "Il est blâmable (sip) de prononcer les formules « ahonzou billahi mina cheytânir radjîmi » et « bismilahir rahmânir rahîmi » dans une prière surérogatoire. Il est blâmable de se prosterner sur un turban enroulé ou sur la manche d’un vêtement si l’on n’a pas d’empêchement. De même, il est blâmable de prier avec quelque chose dans la bouche ou d’avoir noué quelque chose à la manche de son vêtement, ou de réciter du Coran lors d’une génuflexion, de faire des souhaits ou de penser à une chose qui ne nous rapproche pas de Dieu, de jouer avec sa barbe ou sa bague, de regarder à gauche et à droite, de prendre la position de quelqu’un qui appuie la main sur sa hanche (djatou), de fermer les yeux, d’entrecroiser ses doigts ou de faire craquer les articulations de ses doigts."
              </p>
              <p className="font-amiri text-red-300/80 text-2xl md:text-3xl dir-rtl leading-relaxed border-t border-red-500/10 pt-6">
                يكره التعوذ والبسملة في الفريضة، كما يكره السجود على كور العمامة أو كم الثوب لغير ضرورة. ويكره الصلاة بشيء في الفم، أو عقد شيء في الكم، أو قراءة القرآن في الركوع، أو تمني الأماني، أو التفكير في أمور الدنيا، أو العبث باللحية أو الخاتم، والالتفات، والتحصر، وتغميض العينين، وتشبيك الأصابع أو فرقعتها.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION : CERTAINS ACTES MÉRITOIRES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-emerald-400 uppercase tracking-tighter">CERTAINS ACTES MÉRITOIRES</h2>
            <div className="h-px flex-1 bg-emerald-500/20" />
            <h2 className="text-2xl font-amiri text-emerald-400">المندوبات في الصلاة</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Paragraphe 1 : Salam et Amine */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
              <p className="text-white/80 leading-relaxed">
                Il est méritoire de tourner la tête vers le côté droit pendant le salut final « salam ». Il est aussi méritoire de réciter le « khounaute ». Il est aussi méritoire pour le guidé de dire « amiine » pendant les prières récitées à haute voix après la « waladaline » de l’Imam. Mais on ne doit dire « amiine » que si l’on entend l’Imam et non sous prétexte que celui-ci a peut-être prononcé « waladaline ». Il est aussi méritoire pour l’Imam de dire « amine » lors d’une prière à voix basse, ou pour quelqu’un qui prie seul s’il effectue une prière à voix haute ou à voix basse. Dans tous les cas, il est méritoire de le dire à voix basse.
              </p>
              <p className="font-amiri text-gold-light text-2xl dir-rtl leading-relaxed border-t border-white/5 pt-4">
                يندب التيامن عند السلام، وقراءة القنوت، والتأمين للمأموم في الجهرية خلف الإمام، وللإمام في السرية، وللمنفرد مطلقاً، ويكون التأمين سراً.
              </p>
            </div>

            {/* Paragraphe 2 : Takbir et Mouvements */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
              <p className="text-white/80 leading-relaxed">
                Il est méritoire, après le « takbir » ou formule d’entrée, de baisser les bras, mais sans fermer les poings. Il est aussi méritoire d’accompagner chacune des opérations de la prière de « alahou akbar », mais après le premier « tachahoude » qui suit les deux rakkas, il faut attendre de s’être complètement redressé avant de dire « alahou akbar ». Le mamoune (guidé) doit, après le premier « tachahoude », attendre que l’Imam se redresse complètement et qu’il ait prononcé « alahou akbar » pour se lever et se redresser complètement à son tour avant de dire lui aussi « alahou akbar ».
              </p>
              <p className="font-amiri text-gold-light text-2xl dir-rtl leading-relaxed border-t border-white/5 pt-4">
                يندب السدل في الصلاة، والتكبير عند كل خفض ورفع، إلا في القيام من الركعتين فيكون بعد الاستواء قائماً.
              </p>
            </div>

            {/* Paragraphe 3 : Position des mains et membres */}
            <div className="bg-gold/5 p-8 rounded-3xl border border-gold/20 space-y-6">
              <p className="text-white/80 leading-relaxed">
                Il est méritoire, durant le « tachahoude », de poser les mains sur les genoux, de plier les doigts de la main droite à l’exception du pouce et de l’index, et de remuer légèrement l’index de la droite vers la gauche. Il est méritoire, chez l’homme, d’écarter les jambes plutôt que de les joindre, d’éloigner le ventre des cuisses, et les coudes de ses côtés. Par contre, la femme doit joindre tous ses membres.
              </p>
              <p className="font-amiri text-gold-light text-2xl dir-rtl leading-relaxed border-t border-gold/10 pt-4">
                يندب وضع اليدين على الفخذين في التشهد، وعقد أصابع اليمنى إلا السبابة والإبهام مع تحريك السبابة. ويندب للرجل تجافي الأعضاء، بينما تنضم المرأة.
              </p>
            </div>

            {/* Paragraphe 4 : Mamoune et changement de place */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
              <p className="text-white/80 leading-relaxed">
                Le mamoune (guidé), s’il est seul, doit se mettre à la droite de l’Imam, légèrement en retrait. S’il y a parmi les guidés des femmes, elles devront se mettre derrière les hommes et se garder de porter des parures susceptibles de faire du bruit, et se garder également de se parfumer. Il est méritoire de changer de place après une prière obligatoire si l’on veut effectuer une prière surérogatoire, qu’il s’agisse de l’Imam ou d’un mamoune (guidé), que ce soit à la mosquée ou ailleurs.
              </p>
              <p className="font-amiri text-gold-light text-2xl dir-rtl leading-relaxed border-t border-white/5 pt-4">
                يقف المأموم الواحد عن يمين الإمام قليلاً، والنساء خلف الرجال بلا زينة ولا طيب. ويندب تغيير المكان للنفل بعد الفريضة.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button onClick={() => router.push('/partie/6/h')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <button onClick={() => router.push('/partie/6/j')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase font-black shadow-lg hover:scale-105 transition-all">Suivant</button>
      </div>
    </main>
  );
}