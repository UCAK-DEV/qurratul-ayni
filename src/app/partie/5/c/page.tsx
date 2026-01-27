'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function TayamoumComplet() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Adaptation de l'ID pour la section C (Tayamoum)
  const chapterData = CHAPTERS.find(c => c.id === "8") || CHAPTERS[7];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sectionsInfo = [
    {
      content: [
        {
          fr: "La lustration pulvérale est autorisée à celui qui veut effectuer sa prière ou lire ou écrire le Coran ou pour toute autre pratique similaire lorsqu’il est dans l’impossibilité totale de trouver l’eau pour se purifier (ablutions ou lavage). Elle intervient au début de l’heure prescrite pour la prière, si on est sûr et certain du manque d’eau. En cas de doute, elle intervient au milieu de l’intervalle de temps prescrit.",
          ar: "التيمم جائز لمن أراد أداء الصلاة أو قراءة القرآن أو كتابته أو أي عبادة مشابهة، إذا كان في عجز تام عن العثور على الماء للتطهر به، سواء للوضوء أو الغسل. ويكون التيمم في أول وقت الصلاة إذا كان متيقنا من عدم وجود الماء، أما إذا كان في شك من ذلك فيكون التيمم في وسط الوقت المحدد للصلاة."
        },
        {
          fr: "a. On peut pratiquer la lustration pulvérale au début de l’heure si on est certain de ne pas avoir de l’eau.",
          ar: "يجوز التيمم في أول الوقت إذا تيقن من عدم وجود الماء."
        },
        {
          fr: "b. Dans l’incertitude, on l’effectue au milieu de l’intervalle de temps prescrit ;",
          ar: "وعند الشك يؤدى التيمم في وسط الوقت المحدد."
        },
        {
          fr: "c. S’il y a toujours de l’espoir d’en trouver, on peut attendre jusqu’à la limite extrême.",
          ar: "وإذا كان يرجو وجود الماء جاز له الانتظار إلى آخر الوقت."
        },
        {
          fr: "Cependant, on ne doit sous aucun prétexte retarder les prières.",
          ar: "ومع ذلك لا يجوز بحال من الأحوال تأخير الصلاة."
        }
      ]
    },
    {
      titreFr: "CAS DE MALADIE",
      titreAr: "حالة المرض",
      content: [
        {
          fr: "Si on souffre d’une maladie que l’eau est susceptible d’aggraver, on peut la faire chauffer ou y mettre du sel. Si malgré tous les risques d’aggravation de la maladie demeurent, on peut procéder à la lustration pulvérale.",
          ar: "وإذا كان يعاني من مرض يخشى أن يزيده الماء سوءا، جاز له تسخين الماء أو وضع الملح فيه. فإن استمرت مخافة تفاقم المرض رغم ذلك كله، جاز له التيمم."
        }
      ]
    }
  ];

  const sections2 = [
    {
      content: [
        {
          "fr": "La lustration pulvérale ne peut servir qu’à une seule prière obligatoire.",
          "ar": "التيمم لا يمكن أن يستخدم إلا لصلاة فرض واحدة."
        },
        {
          "fr": "Cependant, on pourra s’en servir après pour une prière surérogatoire, pour lire le Coran ou pour toute autre pratique traditionnelle si l’intention en a été formulée.",
          "ar": " ومع ذلك، يمكن استخدامه بعد ذلك لصلاة نافلة، أو لقراءة القرآن، أو لأي عبادة تقليدية أخرى إذا تم تحديد النية لذلك."
        },
        {
          "fr": "Donc à chaque pratique obligatoire sa lustration pulvérale. Celui qui n’a pas d’eau et qui n’est ni malade, ni en déplacement, n’a le droit de pratiquer la lustration pulvérale en vue de prier sur un mort que lorsqu’il n’a que lui pour le faire. Il ne peut non plus procéder à la lustration pulvérale pour une prière surérogatoire qui n’est pas consécutive à une prière obligatoire. Celui qui pratique la lustration pulvérale pour lire le Coran ou pour toute autre pratique traditionnelle doit formuler intérieurement l’intention de s’en servir pour lire le Coran ou faire la pratique en question et s’y mettre immédiatement, faute de quoi, la lustration n’est plus valable. La lustration pulvérale est autorisée à celui qui veut effectuer sa prière ou lire ou écrire le Coran ou pour toute autre pratique similaire lorsqu’il est dans l’impossibilité totale de trouver l’eau pour se purifier (ablutions ou lavage). Elle intervient au début de l’heure prescrite pour la prière, si on est sûr et certain du manque d’eau. En cas de doute, elle intervient au milieu de l’intervalle de temps prescrit. a. On peut pratiquer la lustration pulvérale au début de l’heure si on est certain de ne pas avoir de l’eau. b. Dans l’incertitude, on l’effectue au milieu de l’intervalle de temps prescrit ; c. S’il y a toujours de l’espoir d’en trouver, on peut attendre jusqu’à la limite extrême. Cependant, on ne doit sous aucun prétexte retarder les prières.",
          "ar": " لذا لكل عبادة فرضية لها تيممها الخاص. من لا يجد الماء وليس مريضا ولا مسافرا، لا يحق له التيمم لأداء صلاة على الميت إلا إذا لم يجد من يقوم بها إلا بنفسه. ولا يجوز له أيضا التيمم لصلاة نافلة ليست متتابعة لصلاة فرضية. من يقوم بالتيمم لقراءة القرآن أو لأي عبادة تقليدية أخرى يجب أن يحدد نيته داخليا لاستخدام التيمم للقراءة أو للعبادة المعنية ويباشرها فوراً، وإلا فإن التيمم يصبح غير صحيح. التيمم جائز لمن أراد أداء الصلاة أو قراءة القرآن أو كتابته أو أي عبادة مشابهة، إذا كان في عجز تام عن العثور على الماء للتطهر به (الوضوء أو الغسل). يكون التيمم في أول وقت الصلاة إذا كان متيقنا من عدم وجود الماء. في حالة الشك، يكون التيمم في وسط الوقت المحدد. أ. يجوز التيمم في أول الوقت إذا تيقن من عدم وجود الماء. ب. عند الشك، يؤدى التيمم في وسط الوقت المحدد؛ ج. إذا كان يرجو وجود الماء، يجوز له الانتظار إلى آخر الوقت. ومع ذلك، لا يجوز بحال من الأحوال تأخير الصلاة."
        }
      ]
    },
  ];

  return (
    <main className="pt-20 pb-40 px-6 md:px-12 lg:px-20 xl:px-0 min-h-screen bg-emerald-950-dynamic/10">
      
      {/* HEADER DE LUXE */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre V — Section C
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8"
        >
          LE TAYAMOUM (TIIM) <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">التيمم</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* SECTIONS BILINGUES MIROIR */}
        {sectionsInfo.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10">
            <div className="flex items-center gap-8">
              <h2 className="text-xl font-black text-gold uppercase tracking-tighter">{section.titreFr}</h2>
              <div className="h-[1px] flex-1 bg-gold/10" />
              <h2 className="text-2xl font-amiri text-gold-light">{section.titreAr}</h2>
            </div>

            <div className="grid gap-6">
              {section.content.map((item, cIdx) => (
                <motion.div 
                  key={cIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-gold/20 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                      <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8] dir-rtl">
                        {item.ar}
                      </p>
                    </div>
                    <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
                    <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                      <p className="text-lg text-white/50 font-serif italic leading-relaxed">
                        "{item.fr}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* AVERTISSEMENT FINAL */}
        <section className="bg-red-950/20 p-10 rounded-[3rem] border border-red-900/30 text-center">
            <p className="text-red-400 font-bold mb-4 uppercase tracking-widest text-xs">Avertissement</p>
            <p className="text-white/70 italic text-sm leading-relaxed max-w-3xl mx-auto">
                "Mais celui qui pratique la lustration pulvérale en dehors des conditions énumérées ci-dessus, est digne du plus grand mépris ; la prière effectuée est nulle et doit être refaite ; celui-là ne peut en aucun cas servir ni d’imam, ni de témoin ; s’il ne s’en repent pas jusqu’à sa mort, il sera précipité en enfer."
            </p>
            <p className="text-white/70 italic text-sm leading-relaxed max-w-3xl mx-auto">
                "لكن من تيمم خارج الشروط المذكورة آنفا فهو جدير بأشد الاحتقار، وصلاته باطلة ويجب عليه إعادتها، ولا تصح له إمامة ولا شهادة، فإن لم يتب إلى الله حتى مات كان مآله إلى النار."
            </p>
        </section>

        {/* COMMENT PRATIQUER (PROCÉDURE) */}
        <section className="space-y-10">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">COMMENT PRATIQUER ?</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">كيفية التيمم</h2>
          </div>

          
          <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-gold/10">
            <div className="space-y-8">
              {[
                {
                  fr: "Attendre le moment précis de la prière et effectuer la lustration pulvérale sur du sable non souillé ou sur une pierre naturelle, à l’exclusion du ciment, de la chaux éteinte, des carreaux, etc.",
                  ar: "ينتظر دخول وقت الصلاة ويؤدى التيمم على تراب طاهر أو حجر طبيعي مع استبعاد الإسمنت والجير المطفأ والبلاط ونحو ذلك."
                },
                {
                  fr: "Y bien appuyer les paumes sur le sable, les doigts tendus et bien joints.",
                  ar: "يضرب الأرض بكفيه مع مد الأصابع وضمها جيدا."
                },
                {
                  fr: "Bien frotter tout le visage en commençant par la main droite, sans enlever les grains de sable qui pourraient s’y trouver.",
                  ar: "يمسح الوجه كله ابتداء باليد اليمنى دون إزالة ما قد يكون عليه من حبات الرمل."
                },
                {
                  fr: "Formuler intérieurement à ce moment l’intention de faire tenir la lustration pulvérale lieu de grande ou de petite ablution en vue d’accomplir la prière.",
                  ar: "وينوي بقلبه في هذه اللحظة أن يكون التيمم قائما مقام الغسل أو الوضوء لأداء الصلاة."
                },
                {
                  fr: "Remettre les paumes sur le sable en appuyant et en écartant légèrement les doigts.",
                  ar: "ثم يعيد ضرب الأرض بالكفين مع الضغط عليهما وتفريق الأصابع تفريقا خفيفا."
                },
                {
                  fr: "Placer le dos de la main droite dans la paume de la main gauche et frotter du bout des doigts jusqu’aux coudes.",
                  ar: "يوضع ظهر اليد اليمنى في بطن اليد اليسرى ثم يمسح من أطراف الأصابع إلى المرفقين."
                },
                {
                  fr: "Frotter ensuite l’intérieur de l’avant-bras jusqu’aux poignets.",
                  ar: "ثم يمسح باطن الساعد إلى الرسغين."
                },
                {
                  fr: "Frotter l’intérieur du pouce droit avec l’intérieur du pouce gauche et faire de même pour la main gauche.",
                  ar: "ويمسح باطن الإبهام الأيمن بباطن الإبهام الأيسر ويفعل مثل ذلك لليد اليسرى."
                },
                {
                  fr: "Frotter les deux paumes et entrecroiser les doigts.",
                  ar: "ثم يمسح الكفين ويخلل الأصابع."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center group border-b border-white/5 pb-6 last:border-0">
                  {/* Numéro + texte français */}
                  <div className="flex gap-6 items-start flex-1">
                    <span className="text-gold font-black opacity-20 text-4xl">{idx + 1}</span>
                    <p className="text-white/70 group-hover:text-white transition-colors text-lg">{step.fr}</p>
                  </div>

                  {/* Texte arabe, limité à la moitié de l'écran */}
                  <p className="font-amiri text-gold-light text-2xl hidden md:block max-w-[50vw] text-right">
                    {step.ar}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTIONS BILINGUES MIROIR */}
        {sections2.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10">

            <div className="grid gap-6">
              {section.content.map((item, cIdx) => (
                <motion.div 
                  key={cIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-gold/20 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                      <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8] dir-rtl">
                        {item.ar}
                      </p>
                    </div>
                    <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
                    <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                      <p className="text-lg text-white/50 font-serif italic leading-relaxed">
                        "{item.fr}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* PRATIQUES OBLIGATOIRES ET TRADITIONNELLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* OBLIGATOIRES */}
          <div className="glass-card p-10 rounded-[2.5rem] border border-emerald-500/20">
             <div className="flex justify-between items-center mb-8 border-b border-emerald-500/10 pb-4">
                <h3 className="text-emerald-500 font-black text-xs uppercase tracking-widest">8 OBLIGATIONS (FARATA)</h3>
                <span className="font-amiri text-xl text-emerald-500/50">الفرائض</span>
             </div>
             <ul className="space-y-4 text-white/60 text-sm">
                <li>Les pratiques obligatoires de la lustration pulvérale sont au nombre de huit (8) et s’énumèrent ainsi qu’il suit :</li>
                <li>1. Formuler intérieurement d’abord l’intention afin de s’acquitter d’une prière ou de toute autre pratique.</li>
                <li>2. Appuyer les mains sur le sol une première fois.</li>
                <li>3. Frotter l’ensemble du visage.</li>
                <li>4. Frotter entièrement les mains jusqu’aux poignets.</li>
                <li>5. Veiller à la propreté du lieu (ou de la pierre).</li>
                <li>6. Respecter l’ordre établi avec rapidité pour éviter la nullité de la lustration.</li>
                <li>7. Accomplir aussitôt après ce pourquoi on a fait la lustration sous peine de nullité.</li>
                <li>8. Faire la lustration à l’heure prescrite pour la prière. Si on la fait avant, la prière est nulle.</li>
             </ul>
          </div>

          {/* TRADITIONNELLES */}
          <div className="glass-card p-10 rounded-[2.5rem] border border-gold/20">
             <div className="flex justify-between items-center mb-8 border-b border-gold/10 pb-4">
                <h3 className="text-gold font-black text-xs uppercase tracking-widest">4 TRADITIONS (SOUNA)</h3>
                <span className="font-amiri text-xl text-gold/50">السنن</span>
             </div>
             <ul className="space-y-4 text-white/60 text-sm">
                <li>Les pratiques traditionnelles sont au nombre de quatre (4) et s’énumèrent ainsi qu’il suit :</li>
                <li>1. Respecter l’ordre établi, recommencer si par mégarde, on intervient l’ordre.</li>
                <li>2. Poser les mains une deuxième fois.</li>
                <li>3. Frotter les avant-bras à partir du poignet.</li>
                <li>4. Frotter les différentes parties sans enlever la poussière.</li>
             </ul>
          </div>
        </div>
      </div>

      {/* Navigation de bas de page */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/partie/5/b')} 
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5/d')} 
          className="px-10 py-4 bg-gold text-emerald-950-dynamic rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}