'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function CasDivorcePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "13") || CHAPTERS[12];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-red-900/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XIII — Section B</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LES CAS DE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Divorce</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">أقسام الطلاق</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l&apos;enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* 1. RÉCAPITULATIF DES CAS */}
        <motion.section {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16 border-b border-white/5 pb-12">
          <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.3em] mb-8">Il existe 3 (trois) cas de divorce :</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            <span className="text-gold font-serif italic text-lg">1. Le titre provisoire (fayeli)</span>
            <span className="text-gold font-serif italic text-lg">2. Le titre expiatoire</span>
            <span className="text-gold font-serif italic text-lg">3. Le divorce irréversible</span>
          </div>
        </motion.section>

        {/* 2. DÉTAILS DES TYPES DE DIVORCE */}
        <div className="space-y-12">
          {/* TYPE 1: FAYELI */}
          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-black italic">1</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Le divorce à titre provisoire (fayeli)</h3>
            </div>
            <p className="text-white/70 italic font-serif text-lg leading-relaxed">
              &quot;C’est le divorce qui n’est pas prononcé 3 (trois) fois et qui n’a pas été l’objet d’une demande de la part de la femme ; le mari peut reprendre sa femme sans avoir besoin de renouveler le mariage si toutefois la période de retraite légale n’est pas épuisée. Si par contre cette période expire, le divorce est consommé. Il ne peut être réparé que par un autre acte de mariage et le versement d’une autre dot.&quot;
            </p>
          </motion.div>

          {/* TYPE 2: EXPIATOIRE */}
          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-black italic">2</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Le divorce à titre expiatoire</h3>
            </div>
            <div className="space-y-6 text-white/70 italic font-serif text-lg leading-relaxed">
              <p>
                &quot;Le divorce demandé est celui exigé par la femme, que cette dernière ait ou non donné de l’argent. Le divorce légal (charia) est aussi expiatoire. C’est lorsque le mari a un comportement anormal vis-à-vis de sa femme au point que le divorce s’impose au vu de la charia.&quot;
              </p>
              <div className="p-6 bg-emerald-950/20 rounded-2xl border border-emerald-500/20">
                <p>
                  &quot;N’est pas considéré dans ce cas lorsque le divorce intervient à la suite d’un serment ou si le mari n’a pas de quoi nourrir sa femme. Dans ces cas, si celui qui avait juré sur l’honneur accepte de faire marche arrière, alors que la période de retraite légale n’est pas épuisée, la femme peut revenir chez elle. Ainsi, si le mari arrive à obtenir de quoi nourrir sa femme, toujours pendant la période de retraite légale, cette dernière peut retourner chez elle.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* TYPE 3: IRRÉVERSIBLE */}
          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-red-500/10">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-black italic">3</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Le divorce irréversible</h3>
            </div>
            <div className="space-y-6 text-white/70 italic font-serif text-lg leading-relaxed">
              <p className="font-bold text-white">
                &quot;C’est quand le divorce est prononcé 3 fois ou une seule fois avec la ferme intention d’en finir. Ce divorce ne peut être réparé.&quot;
              </p>
              <p>
                &quot;Le mari ne pourra reprendre cette femme que lorsque cette femme aura épuisé la durée de sa retraite légale, qu’elle aura contracté un autre mariage, qu’elle aura rompu celui-ci, et qu’elle aura épuisé la retraite légale consécutive à la rupture du dernier mariage. Toutefois, ce dernier mariage ne doit pas être contracté par un tiers en vue de permettre le retour de la femme avec son premier mari. La femme, quant à elle, peut se remarier dans ce but précis, tout comme le premier mari peut faire des démarches dans ce sens.&quot;
              </p>
              <div className="p-6 bg-red-950/20 rounded-2xl border border-red-500/20 text-red-100">
                &quot;C’est le second mari qui ne doit pas tremper dans cette combine. Il est interdit à deux hommes de rivaliser chez une même femme. Il est tout aussi interdit de courtiser une femme pendant sa retraite légale. Si le mariage a lieu pendant cette période, ce ménage sera frappé d’inceste à jamais.&quot;
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. DISPOSITIONS SUR L'ATTENTE ET LA DISPARITION */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">Dispositions Spécifiques</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8 text-white/60 italic font-serif text-base leading-relaxed">
            <p>
              &quot;Une femme en période de retraite légale ne doit pas aller loin de chez elle, encore moins passer la nuit ailleurs que chez elle. S’il s’agit de la période de viduité, tous ces interdits frappent la femme qui, en plus, ne doit en aucune manière porter des bijoux ou de beaux habits ; elle ne doit pas non plus se parfumer ; elle peut cependant entretenir ses cheveux au moyen d’une pommade non parfumée, cela pour en empêcher la chute.&quot;
            </p>
            <p>
              &quot;Une femme que son mari abandonne délibérément sans aucune raison, mais par simple refus de l’entretenir, cette femme peut aller consulter son père ou son représentant afin d’obtenir le divorce : ce divorce sera irréversible. Si le mari revient et veut reprendre sa femme, il pourra l’épouser à nouveau s’il ne la trouve pas mariée à un autre homme, et ce avec le consentement de la femme, mais on ne devra pas l’obliger à le faire.&quot;
            </p>
            
            {/* CAS DU MARI DISPARU */}
            <div className="bg-gold/5 p-8 rounded-3xl border border-gold/10 space-y-6">
               <h4 className="text-gold font-black text-[10px] uppercase tracking-widest">Le Mari Disparu ou Absent</h4>
               <p>
                 &quot;Une femme dont le mari a disparu sans laisser de traces, une femme dont on sait que le mari se trouve dans une localité déterminée mais n’en revient pas et n’envoie rien à sa femme faute de moyen ou par empêchement, une femme dont on ne sait si le mari est en vie ou non, chacune de ces femmes doit attendre le retour de son mari pendant une durée de 4 ans, à condition que la femme se trouve dans un pays musulman, que le mari lui ait laissé de quoi nourrir (en nature ou en espèce) et que la femme soit sûre de pouvoir lui rester fidèle.&quot;
               </p>
               <p>
                 &quot;Si la femme ne se trouve pas dans un pays musulman, elle attendra aussi longtemps qu’elle le croira en vie. Toutefois, l’attente ne s’impose que si le mari a laissé à la femme suffisamment de nourriture, une maison où habiter et que la femme soit sûre de pouvoir lui rester fidèle. Si la femme n’est pas sûre de pouvoir lui rester fidèle, et que le mari ne lui a pas laissé de quoi se nourrir, se vêtir et un logement, elle pourra recouvrer la liberté aux yeux de la charia dès qu’elle ne se sentira plus en mesure d’attendre.&quot;
               </p>
            </div>

            {/* VIDUITÉ À L'INSU */}
            <p>
              &quot;Si le mari meurt à l’insu de sa femme, la période de viduité commence dès que la femme apprend le décès du mari ; elle n’observera que le reste de la durée légale (en tenant compte de la date réelle du décès). Si, au moment où la femme apprend le décès, la durée légale de la viduité est épuisée, elle en sera dispensée.&quot;
            </p>
          </div>
        </section>

        {/* CONCLUSION FINALE DU LIVRE */}
        <motion.section {...fadeInUp} className="bg-gold/5 border-2 border-gold/20 rounded-[4rem] p-10 md:p-16 space-y-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          
          <h2 className="text-gold font-black text-sm md:text-xl uppercase tracking-[0.5em]">Conclusion & Prière</h2>
          
          <div className="max-w-3xl mx-auto space-y-8 text-white italic font-serif text-xl leading-relaxed">
            <p>
              &quot;Certes, le divorce n’est pas interdit en soi, mais il ne doit être prononcé qu’en cas de nécessité absolue ; il ne doit pas être prononcé sous l’emprise de la colère ni par légèreté.&quot;
            </p>
            <p>
              &quot;Savoir supporter est un moyen, entre autres, qui nous permet d’éviter de tels travers et de s’abstenir de regarder intensément l’autre sexe. Celui qui ne le fait pas est toujours exposé à des difficultés. D’ailleurs, Allah le Tout-Puissant a recommandé cette pratique à l’homme et à la femme dans le Saint Coran.&quot;
            </p>
            <p className="text-white/60">
              &quot;Il (Dieu) connaît le genre humain mieux que quiconque. Il est plus attentif à notre sort, donc nous devons nous efforcer au respect de cette recommandation à tout moment.&quot;
            </p>
            <div className="space-y-4 pt-8">
               <p className="text-gold font-bold">&quot;Que le Tout-Puissant nous assiste dans l’observation de cette recommandation et nous réserve une fin heureuse.&quot;</p>
               <p className="font-amiri text-5xl text-gold pt-4 tracking-normal">آمِينَ</p>
               <p className="text-white/40 text-sm uppercase tracking-[0.3em]">&laquo; Amine &raquo;</p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/13/a')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/14')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}