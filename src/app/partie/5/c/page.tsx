'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function TayamoumComplet() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const procedureSteps = [
    { fr: "Attendre le moment précis de la prière et effectuer la lustration pulvérale sur du sable non souillé ou sur une pierre naturelle, à l’exclusion du ciment, de la chaux éteinte, des carreaux, etc.", ar: "ينتظر دخول وقت الصلاة ويؤدى التيمم على تراب طاهر أو حجر طبيعي." },
    { fr: "Y bien appuyer les paumes sur le sable, les doigts tendus et bien joints.", ar: "يضرب الأرض بكفيه مع مد الأصابع وضمها جيدا." },
    { fr: "Bien frotter tout le visage en commençant par la main droite, sans enlever les grains de sable qui pourraient s’y trouver.", ar: "يمسح الوجه كله ابتداء باليد اليمنى دون إزالة ما قد يكون عليه من حبات الرمل." },
    { fr: "Formuler intérieurement à ce moment l’intention de faire tenir la lustration pulvérale lieu de grande ou de petite ablution en vue d’accomplir la prière.", ar: "ينوي بقلبه أن يكون التيمم قائما مقام الغسل أو الوضوء لأداء الصلاة." },
    { fr: "Remettre les paumes sur le sable en appuyant et en écartant légèrement les doigts.", ar: "يعيد ضرب الأرض بالكفين مع الضغط عليهما وتفريق الأصابع خفيفا." },
    { fr: "Placer le dos de la main droite dans la paume de la main gauche et frotter du bout des doigts jusqu’aux coudes.", ar: "يوضع ظهر اليد اليمنى في بطن اليد اليسرى ثم يمسح إلى المرفقين." },
    { fr: "Frotter ensuite l’intérieur de l’avant-bras jusqu’aux poignets.", ar: "يمسح باطن الساعد إلى الرسغين." },
    { fr: "Frotter l’intérieur du pouce droit avec l’intérieur du pouce gauche et faire de même pour la main gauche.", ar: "يمسح باطن الإبهام الأيمن بباطن الأيسر ويفعل مثل ذلك لليد اليسرى." },
    { fr: "Frotter les deux paumes et entrecroiser les doigts.", ar: "يمسح الكفين ويخلل الأصابع." }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre V — Section C</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LE <span className="gold-gradient-text italic font-serif lowercase">tayamoum</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">التيمم</p>

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

        <div className="space-y-24">
          {/* INTRODUCTION COMPLÈTE */}
          <section className="space-y-8">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 font-serif italic text-xl md:text-2xl text-white/80 leading-relaxed">
              <p className="mb-6">
                La lustration pulvérale est autorisée à celui qui veut effectuer sa prière ou lire ou écrire le Coran ou pour toute autre pratique similaire lorsqu’il est dans l’impossibilité totale de trouver l’eau pour se purifier (ablutions ou lavage).
              </p>
              <p>
                Elle intervient au début de l’heure prescrite pour la prière, si on est sûr et certain du manque d’eau. En cas de doute, elle intervient au milieu de l’intervalle de temps prescrit.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "a", text: "On peut pratiquer la lustration pulvérale au début de l’heure si on est certain de ne pas avoir de l’eau." },
                { label: "b", text: "Dans l’incertitude, on l’effectue au milieu de l’intervalle de temps prescrit ;" },
                { label: "c", text: "S’il y a toujours de l’espoir d’en trouver, on peut attendre jusqu’à la limite extrême." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-gold font-black mb-2 block uppercase text-xs">{item.label}.</span>
                  <p className="text-sm text-white/60 leading-relaxed italic">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gold/60 font-serif italic italic text-lg tracking-tight">
              &quot;Cependant, on ne doit sous aucun prétexte retarder les prières.&quot;
            </p>
          </section>

          {/* CAS DE MALADIE RÉINTÉGRÉ */}
          <section className="space-y-8">
             <div className="flex items-center gap-6">
                <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Cas de maladie</h2>
                <div className="h-[1px] flex-1 bg-white/5" />
                <span className="text-xl font-amiri text-gold/40">حالة المرض</span>
             </div>
             <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
                Si on souffre d’une maladie que l’eau est susceptible d’aggraver, on peut la faire chauffer ou y mettre du sel. Si malgré tous les risques d’aggravation de la maladie demeurent, on peut procéder à la lustration pulvérale.
             </div>
          </section>

          {/* PROCÉDURE INTÉGRALE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Comment pratiquer ?</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">كيفية التيمم</span>
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.01] border border-white/5 space-y-12">
              {procedureSteps.map((step, idx) => (
                <div key={idx} className="grid md:grid-cols-2 gap-8 border-b border-white/5 pb-8 last:border-0 group">
                  <div className="flex gap-6 items-start">
                    <span className="text-gold font-black opacity-20 text-3xl leading-none">{(idx+1).toString().padStart(2, '0')}</span>
                    <p className="text-lg text-white/70 group-hover:text-white transition-colors font-serif italic leading-relaxed">
                      {step.fr}
                    </p>
                  </div>
                  <p className="text-right font-amiri text-2xl text-gold-light/60 leading-relaxed" dir="rtl">{step.ar}</p>
                </div>
              ))}
            </div>
          </section>

          {/* RÈGLES D'UTILISATION (INTÉGRÉES À 100%) */}
          <section className="space-y-8">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Règles de validité</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid gap-6">
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-white/70 font-serif italic text-lg leading-relaxed">
                La lustration pulvérale ne peut servir qu’à une seule prière obligatoire. Cependant, on pourra s’en servir après pour une prière surérogatoire, pour lire le Coran ou pour toute autre pratique traditionnelle si l’intention en a été formulée.
              </div>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-white/70 font-serif italic text-lg leading-relaxed">
                Donc à chaque pratique obligatoire sa lustration pulvérale. Celui qui n’a pas d’eau et qui n’est ni malade, ni en déplacement, n’a le droit de pratiquer la lustration pulvérale en vue de prier sur un mort que lorsqu’il n’a que lui pour le faire. 
              </div>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-white/70 font-serif italic text-lg leading-relaxed">
                Il ne peut non plus procéder à la lustration pulvérale pour une prière surérogatoire qui n’est pas consécutive à une prière obligatoire. Celui qui pratique la lustration pulvérale pour lire le Coran ou pour toute autre pratique traditionnelle doit formuler intérieurement l’intention de s’en servir pour lire le Coran ou faire la pratique en question et s’y mettre immédiatement, faute de quoi, la lustration n’est plus valable.
              </div>
            </div>
          </section>

          {/* AVERTISSEMENT FINAL RÉINTÉGRÉ */}
          <section className="p-10 rounded-[3rem] bg-red-950/10 border border-red-900/20 text-center">
            <p className="text-red-400 font-bold mb-6 uppercase tracking-[0.4em] text-[10px]">Avertissement de l'Auteur</p>
            <p className="text-white/80 font-serif italic text-lg leading-relaxed max-w-4xl mx-auto border-b border-red-900/10 pb-8 mb-8">
              &quot;Mais celui qui pratique la lustration pulvérale en dehors des conditions énumérées ci-dessus, est digne du plus grand mépris ; la prière effectuée est nulle et doit être refaite ; celui-là ne peut en aucun cas servir ni d’imam, ni de témoin ; s’il ne s’en repent pas jusqu’à sa mort, il sera précipité en enfer.&quot;
            </p>
            <p className="font-amiri text-2xl text-red-400/60 leading-relaxed" dir="rtl">
              لكن من تيمم خارج الشروط المذكورة آنفا فهو جدير بأشد الاحتقار، وصلاته باطلة ويجب عليه إعادتها، ولا تصح له إمامة ولا شهادة، فإن لم يتب إلى الله حتى مات كان مآله إلى النار.
            </p>
          </section>

          {/* OBLIGATIONS ET TRADITIONS (INTÉGRALES) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/20 space-y-8">
              <h3 className="text-emerald-500 font-black text-[10px] uppercase tracking-widest border-b border-emerald-500/10 pb-4">8 Obligations (Farata)</h3>
              <ul className="space-y-4 text-white/60 font-serif italic text-base">
                <li>1. Formuler intérieurement l’intention</li>
                <li>2. Appuyer les mains sur le sol une première fois</li>
                <li>3. Frotter l’ensemble du visage</li>
                <li>4. Frotter entièrement les mains jusqu’aux poignets</li>
                <li>5. Veiller à la propreté du lieu (ou de la pierre)</li>
                <li>6. Respecter l’ordre établi avec rapidité</li>
                <li>7. Accomplir aussitôt après ce pourquoi on a fait la lustration</li>
                <li>8. Faire la lustration à l’heure prescrite</li>
              </ul>
            </div>

            <div className="p-12 rounded-[3rem] bg-gold/[0.02] border border-gold/20 space-y-8">
              <h3 className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-gold/10 pb-4">4 Traditions (Souna)</h3>
              <ul className="space-y-4 text-white/60 font-serif italic text-base">
                <li>1. Respecter l’ordre établi (recommencer en cas d'inversion)</li>
                <li>2. Poser les mains une deuxième fois</li>
                <li>3. Frotter les avant-bras à partir du poignet</li>
                <li>4. Frotter les différentes parties sans enlever la poussière</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/5/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/5/d')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}