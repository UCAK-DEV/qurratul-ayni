'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function MaladeMourant() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // On suppose que l'ID du chapitre est "7" dans votre fichier data/chapters.ts
  const chapterData = CHAPTERS.find(c => c.id === "7") || CHAPTERS[6];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 relative overflow-x-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Khouratoul Ayni — Chapitre VII
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 uppercase leading-tight"
        >
          LE MALADE MOURANT <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">المريض والمحتضر</span>
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
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* SECTION 1 : SOINS ET COMPORTEMENT */}
        <section className="space-y-10">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">QUE FAIRE SI L’ON EST MALADE ?</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-8">
            <p className="text-lg text-white/80 leading-relaxed font-serif italic">
              "En cas de maladie, on a le droit de se soigner, de prier pour son rétablissement ou de solliciter les prières d’un tiers, ou de prendre des médicaments, qu’ils soient des remèdes traditionnels comme le « sendiègne » ou le « rate » ou autres, qu’ils soient des remèdes de type occidental comme la nivaquine, des médicaments contre le rhume ou autres. Ce dont le malade n’a pas le droit, c’est de consulter un charlatan qui lui donnerait des produits et qui l’amènerait à donner du crédit à ce qu’il raconte. Cela est prohibé par la loi islamique. Quand un malade se trouve dans un état désespéré, il doit essayer de bien se conduire en actes et en paroles et de s’entraîner à maîtriser ses désirs dans le sens d’une conduite conforme à la charia."
            </p>
          </div>
        </section>

        {/* SECTION 2 : RELATIONS ET REPENTIR */}
        <section className="space-y-10">
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-gold/10">
            <p className="text-lg text-white/80 leading-relaxed">
              Évitant les disputes et les tiraillements pour les biens terrestres, il doit demander pardon à ses voisins, à ses femmes, à ses enfants, à ses amis comme à tous ceux avec qui il entretenait des relations, et cela à propos de tout ce qu’il a pu leur faire ou leur dire. Il doit également s’attendre à mourir à tout moment, considérant aussi chaque souffle comme étant le dernier, tout en priant le Tout-Puissant de lui accorder une fin heureuse.
            </p>
          </div>
        </section>

        {/* SECTION 3 : DEVOIRS ET VISITES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-[2.5rem] border border-emerald-500/20">
            <h3 className="text-emerald-500 font-black text-xs uppercase mb-6 tracking-widest">Devoirs du malade</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Il doit, en outre, redoubler d’efforts dans le sens du respect des cinq (5) prières et éviter toute souillure. Il doit s’entourer de ses proches parents, qui doivent se garder de manifester leur désespoir en pleurant.
            </p>
          </div>
          <div className="glass-card p-10 rounded-[2.5rem] border border-gold/20">
            <h3 className="text-gold font-black text-xs uppercase mb-6 tracking-widest">Visite aux malades</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Les parents ont le devoir de lui rendre visite durant son alitement. Il n’y a pas de jour préféré pour rendre visite à un malade. Si on rend visite à un malade qui n’est pas condamné et qu’on formule les prières suivantes en sa faveur, il sera rétabli.
            </p>
          </div>
        </section>

        {/* SECTION 4 : LES PRIÈRES DE RÉTABLISSEMENT */}
        <section className="bg-gold/5 p-10 md:p-16 rounded-[3rem] border border-gold/20 text-center">
          <h3 className="text-gold font-black text-xs uppercase tracking-[0.4em] mb-10">Invocation pour le malade</h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            <p className="font-amiri text-white text-2xl md:text-4xl dir-rtl leading-[2]">
              أسأل الله العظيم رب العرش العظيم أن يشفيك بشفائه
            </p>
            <p className="text-white/60 text-lg italic font-serif">
              « as aloulâ al hazima rabbalharchil azimi an yachfiyaka bi chifahihi » (7 fois)
            </p>
            <p className="text-white/40 text-xs mt-6">
              Si, par contre, le malade est condamné, celui qui a prononcé ces prières bénéficiera de beaucoup de bénédictions. On doit également l’inciter à aimer se repentir et l’aider à demeurer optimiste vis-à-vis du Créateur. Il lui est recommandé de toujours se parfumer et de porter des habits propres.
            </p>
          </div>
        </section>

        {/* SECTION 5 : RÉCITATIONS ET MÉRITES */}
        <section className="space-y-10">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">RÉCITATIONS PENDANT LA MALADIE</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
          </div>
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <p className="text-white/80 leading-relaxed mb-8">
              Celui qui récite pendant sa maladie : <br />
              <strong>« ayatoul koursiyou et law an hazalna heuzl khour ana »</strong> jusqu’à la fin de la sourate, plus trois (3) <strong>« likhlas »</strong> et <strong>« lahilaha ilâ anta, soubhanaka innikountou minazzalimina »</strong> quarante (40) fois, bénéficiera de beaucoup de bénédictions divines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                <p className="text-emerald-500 text-[10px] font-black uppercase mb-2">En cas de décès</p>
                <p className="text-white/60 text-xs">On ne sera pas inquiété dans la tombe, on gardera la foi jusqu’à la mort, on lui accordera les faveurs de celui qui est tombé dans les champs de bataille au cours d’une guerre sainte.</p>
              </div>
              <div className="p-6 bg-gold/5 rounded-2xl border border-gold/10">
                <p className="text-gold text-[10px] font-black uppercase mb-2">En cas de guérison</p>
                <p className="text-white/60 text-xs">Il se verra pardonner tous ses péchés, les premiers comme les derniers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 : L'AGONIE */}
        <section className="space-y-10">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">CONDUITE PENDANT L'AGONIE</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
          </div>
          <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-gold/10">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <h4 className="text-gold font-bold text-sm uppercase">Position du corps</h4>
                  <p className="text-white/70 text-sm">S’il semble être dans l’agonie, on le couche sur le côté droit, la face dirigée vers la Kaaba (khibla). Si cela n’est pas possible, on le couche sur le côté gauche. Si toutes ces éventualités sont exclues, on le couche sur le dos, les jambes dirigées vers la Kaaba.</p>
                </div>
                <div className="flex-1 space-y-4">
                  <h4 className="text-gold font-bold text-sm uppercase">La Shahada</h4>
                  <p className="text-white/70 text-sm">Il est recommandé de rester à son chevet et de prononcer constamment la formule « lahi laha ilalhou mouhamadoune rassouloulahi » de manière à la lui rappeler sans pour autant lui demander la répétition. S’il la reprend une seule fois, cela suffira, à condition qu’il n’y ajoute rien d’autre. Avant de le coucher, on doit s’efforcer de lui faire répéter ladite formule.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-gold font-bold text-sm uppercase">Besoins et Sourates</h4>
                  <p className="text-white/70 text-sm">Il est aussi méritoire de lui donner à boire de l’eau fraîche, mais s’il en exprime le besoin, cela devient obligatoire. Il est aussi recommandé de réciter la sourate « yacine » à son chevet et à haute voix, ainsi que la sourate « rahdi » à voix basse. Cela supprime la soif de l’agonie et adoucit la mort.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-gold font-bold text-sm uppercase">Pureté de l'environnement</h4>
                  <p className="text-white/70 text-sm">Il est aussi recommandé qu’on le mette en état de pureté et qu’on l’éloigne de toute souillure. Il est recommandé aux personnes en état de souillure (djanaba) de ne pas s’approcher de lui. Il est aussi recommandé d’éloigner les images représentant des êtres vivants, que ces images soient imprimées sur du papier ou du tissu. On doit également éloigner de son voisinage tout objet d’agrément ou de loisir comme la radio, la guitare ou un chien. Il est souhaitable que ses amis soient présents.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button onClick={() => router.push('/partie/6')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white transition-all">Chapitre Précédent</button>
        <button onClick={() => router.push('/partie/7/b')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase font-black shadow-lg hover:scale-105 transition-all">Suivant</button>
      </div>
    </main>
  );
}