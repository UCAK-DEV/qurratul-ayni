'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PriereVoyageur() {
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
          Chapitre VI — Section H
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-6xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LA PRIÈRE DU VOYAGEUR <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">صلاة المسافر</span>
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
        
        {/* SECTION 1 : RÈGLES DE RÉDUCTION (71 KM) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Conditions de réduction</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">شروط قصر الصلاة</h2>
          </div>
          
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                <p className="text-2xl md:text-3xl font-amiri text-white leading-[1.8] dir-rtl">
                  من سافر سفراً غير منهي عنه شرعاً لمسافة تبلغ ٧١ كم، فإنه يجوز له، وفق السنة النبوية، قصر صلاة الظهر والعصر والعشاء إلى ركعتين، سواء كان السفر بمراحل أو دون توقف، وسواء كان ماشياً أو راكباً دابة أو سيارة أو طائرة، بشرط أن ينوي قطع المسافة المذكورة.
                </p>
              </div>
              <div className="hidden md:block w-[1px] h-24 bg-gold/10 order-2" />
              <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                <p className="text-lg text-white/60 font-serif italic leading-relaxed">
                  "Celui qui effectue un voyage non proscrit par la religion sur une distance égale à 71 km, celui-là peut, selon la tradition prophétique, ramener à deux rakkas les prières du « zohr » (tisbar), du « asr » (takoussane) et du « icha » (guéwé), que le voyage soit effectué par étapes ou sans arrêts, qu’il soit effectué à pied, à cheval, en auto ou par les airs, pourvu qu’il ait eu l’intention d’effectuer le nombre de kilomètres indiqué ci-dessus."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 : ÉTAPES ET INTENTIONS (4 JOURS) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Étapes et séjour</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>
          
          <div className="bg-gold/5 p-8 md:p-12 rounded-[3rem] border border-gold/20">
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Celui qui est à la recherche d’un bien perdu ne doit pas réduire ses prières s’il est certain de retourner une fois le bien retrouvé. Il en est de même pour celui qui marche sans but précis, comme rendre visite à des parents. Mais si la distance à effectuer est de 71 km, quel que soit le nombre d’étapes et la durée du trajet, il peut réduire le nombre de rakkas de ses prières. N’est pas concernée par cette règle toute escale où le voyageur a l’intention de passer au moins quatre (4) jours ; il en est de même si le voyageur a une épouse dans une escale. Quelle que soit la durée de l’étape, si l’intention d’y séjourner pendant quatre (4) jours n’a pas été formulée auparavant et si, par hasard, on y est retenu pour affaire, on ne doit pas réduire le nombre de rakkas de ses prières.
            </p>
            <div className="pt-8 border-t border-gold/10">
              <p className="font-amiri text-gold-light text-2xl md:text-3xl dir-rtl leading-relaxed">
                من كان يبحث عن ضالة فلا يقصر صلاته إذا كان متيقناً من العودة. وكذلك من مشى بلا هدف محدد. أما إذا بلغت المسافة ٧١ كم فله القصر. ولا يقصر من نوى الإقامة أربعة أيام فأكثر، أو من كانت له زوجة في ذلك المكان.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 : INTERACTION SÉDENTAIRE / VOYAGEUR */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Imamat et Distance</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">الإمامة والمسافة</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
              <p className="text-white/70 text-sm leading-relaxed">
                Un sédentaire peut prier derrière une personne en voyage, mais il est tenu de continuer sa prière après le « salam » du voyageur. Mais il n’est pas recommandable pour le voyageur de prier derrière un sédentaire, car alors il ne pourra réduire le nombre des rakkas conformément à la tradition.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl">
                يجوز للمقيم الصلاة خلف المسافر، ويتم صلاته بعد سلام المسافر. ولا يستحب للمسافر الصلاة خلف المقيم لأنه سيتم صلاته حينئذ.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
              <p className="text-white/70 text-sm leading-relaxed">
                Cette distance de 71 km à parcourir concerne le trajet aller et non le trajet aller et retour. On peut commencer la réduction à partir de quatre (4) kilomètres et demi de chez soi. On pourra effectuer des prières complètes au retour dès qu’on sera à quatre (4) kilomètres et demi de chez soi.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl">
                مسافة ٧١ كم هي للذهاب فقط. ويبدأ القصر بعد الخروج من العمران بمسافة ٤.٥ كم، ويتم الصلاة عند العودة عند نفس المسافة.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 : LIEUX ET BIENSÉANCE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Lieux et empêchements</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">أماكن الصلاة وآدابها</h2>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gold/10">
            <div className="space-y-8">
              <div className="border-b border-white/5 pb-8">
                <p className="text-white/75 text-sm md:text-base mb-4 leading-relaxed">
                  La prière à la mosquée est une obligation pour tout homme qui n’a pas d’empêchement. Celui qui a un empêchement peut prier dans un endroit exempt de souillure. Il est blâmable (sip) de prier dans un endroit où l’on se soulage (wourbeul), dans un lieu où l’on parque les chameaux et sur la « Kaaba ». On ne doit pas effectuer une obligation divine dans la Kaaba, mais on peut y faire une pratique surérogatoire.
                </p>
                <p className="font-amiri text-gold-light text-xl dir-rtl">
                  صلاة الجماعة في المسجد واجبة على كل رجل مستطيع. ويجوز الصلاة في أي مكان طاهر عند العذر. وتكره الصلاة في الأماكن القذرة أو مرابض الإبل أو فوق الكعبة، ولا تصلى الفريضة داخلها.
                </p>
              </div>

              <div className="border-b border-white/5 pb-8">
                <p className="text-white/75 text-sm md:text-base mb-4 leading-relaxed">
                  On ne doit pas prier en ayant en soi le besoin d’aller à la selle ou d’uriner ; on doit se soulage d’abord avant d’effectuer sa prière. On ne doit pas s’acquitter d’une prière derrière une autre personne après celle de l’Imam.
                </p>
                <p className="font-amiri text-gold-light text-xl dir-rtl">
                  لا صلاة مع مدافعة الأخبثين؛ بل يجب قضاء الحاجة أولاً. ولا يجوز إنشاء جماعة ثانية بعد صلاة الإمام.
                </p>
              </div>

              <div>
                <p className="text-white/75 text-sm md:text-base mb-4 leading-relaxed">
                  On ne doit pas non plus s’acquitter de la prière de zohr (tisbar) derrière quelqu’un qui effectue la prière de l’asr (takoussane). Mais on peut suivre quelqu’un qui s’acquitte des mêmes prières. Si l’on doit effectuer des prières en présence d’un plat et si l’on dispose d’un temps suffisant, on doit manger avant d’effectuer la prière.
                </p>
                <p className="font-amiri text-gold-light text-xl dir-rtl">
                  لا يصلى الظهر خلف من يصلي العصر، ويجوز خلف من يصلي نفس الصلاة. وإذا حضر الطعام، بدئ به قبل الصلاة إن اتسع الوقت.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button onClick={() => router.push('/partie/6/g')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <button onClick={() => router.push('/partie/6/i')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase font-black shadow-lg hover:scale-105 transition-all">Suivant</button>
      </div>
    </main>
  );
}