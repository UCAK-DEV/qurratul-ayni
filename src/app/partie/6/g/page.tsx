'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PrieresNonEffectuees() {
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
          Chapitre VI — Section G
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-6xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LES PRIÈRES OBLIGATOIRES <br /> NON EFFECTUÉES
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
        
        {/* SECTION 1: RÈGLES GÉNÉRALES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-gold/20" />
            <h2 className="text-sm font-black text-gold uppercase tracking-[0.3em]">Règles de rattrapage</h2>
            <div className="h-px flex-1 bg-gold/20" />
          </div>
          
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <div className="flex flex-col gap-8">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed">
                  "Pour ces prières, on doit s’en acquitter comme il est recommandé de les effectuer. S’il s’agit des prières que doit effectuer un voyageur, celui-ci doit s’en acquitter selon les prescriptions édictées à cet effet. S’il s’agit de la prière d’un sédentaire, il doit s’en acquitter conformément aux prescriptions édictées au sédentaire."
                </p>
                <p className="font-amiri text-gold-light text-2xl md:text-3xl dir-rtl leading-relaxed border-t border-white/5 pt-6">
                  بالنسبة لهذه الصلوات، يجب قضاؤها كما هو مستحب أداؤها. فإذا كانت صلاة مسافر، قضاها وفق أحكام السفر. وإذا كانت صلاة مقيم، قضاها وفق أحكام المقيم.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gold/5 p-8 rounded-3xl border border-gold/20">
              <p className="text-white/80 leading-relaxed mb-4">
                Si, au moment d’une prière, les prières non effectuées n’excèdent pas le nombre de quatre, on doit préalablement s’acquitter de ces prières avant d’effectuer la prière du moment. Si les prières non effectuées excèdent le nombre de quatre, alors on doit effectuer la prière du moment avant de s’acquitter des prières omises.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl">
                إذا كانت الفوائت أربعاً فأقل عند دخول وقت صلاة، وجب قضاؤها قبل صلاة الوقت. أما إذا زادت عن أربع، فيبدأ بصلاة الوقت أولاً ثم يقضي ما فاته.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <p className="text-white/80 leading-relaxed mb-4">
                Celui qui ne se souvient plus du nombre de prières qu’il a omises doit s’acquitter d’un nombre de prières dont il peut être certain qu’il égale le nombre qu’il doit.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl">
                من لم يتذكر عدد الصلوات التي فاتته، وجب عليه قضاء عدد من الصلوات حتى يتيقن من براءة ذمته.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: RETARD IMPORTANT ET PRIORITÉS */}
        <section className="space-y-8">
          <div className="bg-emerald-900/20 p-8 md:p-12 rounded-[3rem] border border-emerald-500/20">
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Si le nombre de prières atteint celui de plusieurs années, si bien qu’il n’est pas possible de s’en acquitter d’une seule traite ni d’en connaître le nombre, il devra alors s’en acquitter chaque jour d’un nombre égal à celui de five (5) jours. Cela lui fera chaque année l’équivalent de cinq années de prière. Et ce, jusqu’à ce qu’il soit certain d’avoir effectué au moins le nombre de prières qu’il doit.
            </p>
            <p className="font-amiri text-gold-light text-2xl dir-rtl border-t border-emerald-500/10 pt-6">
              إذا بلغت الفوائت سنوات عديدة بحيث لا يمكن قضاؤها دفعة واحدة ولا يعرف عددها، وجب عليه قضاء صلوات خمسة أيام في كل يوم. وبذلك يقضي في كل سنة ما يعادل خمس سنوات، حتى يتيقن من أداء ما عليه.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-sm text-white/70">
                Celui qui doit des prières obligatoires ne doit pas effectuer des prières surérogatoires, sauf la « chafa » et la « witr » ou les prières de la « Tabaski » (soleil-lune). Négliger les prières que l’on doit est d’ailleurs blâmable chez une personne majeure (mukalaf). Celui qui a un empêchement pour effectuer des prières doit s’en acquitter dès que l’empêchement cesse d’exister.
              </p>
              <p className="font-amiri text-gold-light text-lg dir-rtl">
                من عليه فوائت لا يتنفل إلا بالشفع والوتر وصلاة العيد. وإهمال القضاء مكروه في حق المكلف، ويجب القضاء فور زوال العذر.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-red-950/20 rounded-2xl border border-red-500/20">
              <p className="text-sm text-white/70">
                Il est interdit d’effectuer une prière surérogatoire entre la prière du « asr » (takoussane) et celle du Maghreb (timis) ; il est aussi interdit d’effectuer des prières surérogatoires le matin avant que le soleil ait parcouru la longueur d’une manche de l’hilaire.
              </p>
              <p className="font-amiri text-gold-light text-lg dir-rtl">
                يُمنع التنفل بعد صلاة العصر حتى المغرب، وكذلك في الصباح قبل شروق الشمس بمقدار رمح.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: RÉPARATION (PROSTERNATIONS) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Réparation des erreurs</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">سجود السهو</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[2.5rem] border border-emerald-500/20">
              <h3 className="text-emerald-500 font-black text-xs uppercase mb-4 tracking-widest">L'Omission (Khabla Salam)</h3>
              <p className="text-white/80 text-sm mb-4">
                Celui qui commet une erreur par omission au cours de sa prière doit se prosterner deux (2) fois après le « tachaoude » et avant le salut final. C’est cela la prosternation dite du « khabla salam ».
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl">
                من نقص في صلاته سجد سجدتين بعد التشهد وقبل السلام، وهو ما يسمى بالسجود القبلي.
              </p>
            </div>
            <div className="glass-card p-8 rounded-[2.5rem] border border-gold/20">
              <h3 className="text-gold font-black text-xs uppercase mb-4 tracking-widest">Le Rajout (Bakhda Salam)</h3>
              <p className="text-white/80 text-sm mb-4">
                Si l’erreur provient d’un rajout, on doit effectuer deux (2) prosternations après le salut final, réciter à nouveau le tachaoude et le salut final. C’est cela la prosternation dite du « bakhda salam ».
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl">
                إذا كانت الزيادة في الصلاة، سجد سجدتين بعد السلام ثم يتشهد ويسلم، وهو السجود البعدي.
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
            <p className="text-white/90 italic mb-4">
              "Celui qui se trompe à la fois par omission et par rajout doit se prosterner pour réparer avant le salut final (« khabla salam »)."
            </p>
            <p className="font-amiri text-gold-light text-2xl dir-rtl">
              من اجتمع له نقص وزيادة سجد قبل السلام.
            </p>
          </div>
        </section>

        {/* SECTION 4: CAS PARTICULIERS (STATION DEBOUT / DÉFAILLANCES) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Situations particulières</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gold/10">
            <div className="space-y-10">
              <div className="flex flex-col xl:flex-row gap-6 border-b border-white/5 pb-8">
                <p className="text-white/75 text-sm md:text-base flex-1">
                  Si l’on est sur le point de se lever après les deux premières rakkas et que l’on se souvient qu’on n’a pas encore prononcé le « tachaoude », on se rassoit pour le prononcer si les mains et les genoux n’ont pas encore quitté le sol ; on n’aura pas à se prosterner en guise de réparation. Dans le cas où les mains ou les jambes ont déjà quitté le sol, on continue la prière pour se prosterner en « khabla salam » avant le salut final. Si l’on se met debout puis revient à la position assise après, on se prosterne en « bakhda salam ». Si l’on n’atteint pas la station debout mais que l’on revient à la position assise, on continue sa prière sans devoir la réparer.
                </p>
                <p className="font-amiri text-gold-light text-xl xl:max-w-[40%] dir-rtl">
                  من قام من ركعتين ونسي التشهد: إن لم تفارق يداه وركبتاه الأرض جلس ولا سجود عليه. وإن فارقتهما استمر في صلاته وسجد قبل السلام. وإن استتم قائماً ثم رجع سجد بعد السلام.
                </p>
              </div>

              <div className="flex flex-col xl:flex-row gap-6 border-b border-white/5 pb-8">
                <p className="text-white/75 text-sm md:text-base flex-1">
                  Celui qui fait le « salam » après les deux rakkas et se rappelle, ou qu’on lui rappelle, qu’il n’a pas terminé sa prière, doit se relever et continuer sa prière, après quoi il se prostenera en « bakhda salam ».
                </p>
                <p className="font-amiri text-gold-light text-xl xl:max-w-[40%] dir-rtl">
                  من سلم من ركعتين نسياناً ثم تذكر، قام فأتم صلاته وسجد بعد السلام.
                </p>
              </div>

              <div className="flex flex-col xl:flex-row gap-6">
                <p className="text-white/75 text-sm md:text-base flex-1">
                  Celui qui a des défaillances qui l’amènent à commettre des erreurs chaque fois qu’il prie, celui-là essaie de ne pas tenir compte de la nature de l’erreur ; il continue sa prière pour effectuer toujours les prosternations du « bakhda salam ».
                </p>
                <p className="font-amiri text-gold-light text-xl xl:max-w-[40%] dir-rtl">
                  من استنكحه السهو (كثر عليه) فإنه يلهو عنه ولا يصلحه، ويسجد بعد السلام دائماً.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button onClick={() => router.push('/partie/6/f')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <button onClick={() => router.push('/partie/6/h')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase font-black shadow-lg hover:scale-105 transition-all">Suivant</button>
      </div>
    </main>
  );
}