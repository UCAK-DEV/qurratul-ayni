'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function MaladeMourant() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "7") || CHAPTERS[6];
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Khouratoul Ayni — Chapitre VII</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LE MALADE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">mourant</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">المريض والمحتضر</p>

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
          
          {/* 1. SOINS ET COMPORTEMENT */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Que faire si l’on est malade ?</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">VII</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-gold/30 pl-8">
                  &quot;En cas de maladie, on a le droit de se soigner, de prier for son rétablissement ou de solliciter les prières d’un tiers, ou de prendre des médicaments, qu’ils soient des remèdes traditionnels comme le « sendiègne » ou le « rate » ou autres, qu’ils soient des remèdes de type occidental comme la nivaquine, des médicaments contre le rhume ou autres. Ce dont le malade n’a pas le droit, c’est de consulter un charlatan qui lui donnerait des produits et qui l’amènerait à donner du crédit à ce qu’il raconte. Cela est prohibé par la loi islamique. Quand un malade se trouve dans un état désespéré, il doit essayer de bien se conduire en actes et en paroles et de s’entraîner à maîtriser ses désirs dans le sens d’une conduite conforme à la charia.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 2. RELATIONS ET REPENTIR */}
          <section className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-center">
            <p className="max-w-4xl mx-auto">
              Évitant les disputes et les tiraillements pour les biens terrestres, il doit demander pardon à ses voisins, à ses femmes, à ses enfants, à ses amis comme à tous ceux avec qui il entretenait des relations, et cela à propos de tout ce qu’il a pu leur faire ou leur dire. Il doit également s’attendre à mourir à tout moment, considérant aussi chaque souffle comme étant le dernier, tout en priant le Tout-Puissant de lui accorder une fin heureuse.
            </p>
          </section>

          {/* 3. DEVOIRS ET VISITES */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-emerald-500/[0.02] border border-emerald-500/10 space-y-6 font-serif italic">
              <h3 className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">Devoirs du malade</h3>
              <p className="text-white/70 leading-relaxed">
                Il doit, en outre, redoubler d’efforts dans le sens du respect des cinq (5) prières et éviter toute souillure. Il doit s’entourer de ses proches parents, qui doivent se garder de manifester leur désespoir en pleurant.
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-gold/[0.02] border border-gold/20 space-y-6 font-serif italic">
              <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest">Visite aux malades</h3>
              <p className="text-white/70 leading-relaxed">
                Les parents ont le devoir de lui rendre visite durant son alitement. Il n’y a pas de jour préféré pour rendre visite à un malade. Si on rend visite à un malade qui n’est pas condamné et qu’on formule les prières suivantes en sa faveur, il sera rétabli.
              </p>
            </div>
          </section>

          {/* 4. LES PRIÈRES DE RÉTABLISSEMENT */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Invocation pour le malade</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-20 rounded-[4rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center space-y-12">
              <p className="font-amiri text-white text-3xl md:text-5xl dir-rtl leading-[2.2]">
                أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ
              </p>
              <p className="text-gold/60 font-serif italic text-lg md:text-xl tracking-widest leading-relaxed">
                « as aloulâ al hazima rabbalharchil azimi an yachfiyaka bi chifahihi » (7 fois)
              </p>
              <div className="h-[1px] w-12 bg-gold/20 mx-auto" />
              <p className="text-white/40 text-sm italic font-serif max-w-2xl mx-auto">
                Si, par contre, le malade est condamné, celui qui a prononcé ces prières bénéficiera de beaucoup de bénédictions. On doit également l’inciter à aimer se repentir et l’aider à demeurer optimiste vis-à-vis du Créateur. Il lui est recommandé de toujours se parfumer et de porter des habits propres.
              </p>
            </div>
          </section>

          {/* 5. RÉCITATIONS ET MÉRITES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Récitations et Bienfaits</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[3.5rem] bg-white/[0.03] border border-white/10 space-y-12 font-serif italic">
              <p className="text-white/80 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Celui qui récite pendant sa maladie : <strong>« ayatoul koursiyou et law an hazalna heuzl khour ana »</strong> jusqu’à la fin de la sourate, plus trois (3) <strong>« likhlas »</strong> et <strong>« lahilaha ilâ anta, soubhanaka innikountou minazzalimina »</strong> quarante (40) fois, bénéficiera de beaucoup de bénédictions divines.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2.5rem] bg-emerald-500/[0.02] border border-emerald-500/10 space-y-4">
                  <h4 className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">En cas de décès</h4>
                  <p className="text-white/60 text-base leading-relaxed">On ne sera pas inquiété dans la tombe, on gardera la foi jusqu’à la mort, on lui accordera les faveurs de celui qui est tombé dans les champs de bataille au cours d’une guerre sainte.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gold/[0.02] border border-gold/20 space-y-4">
                  <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest">En cas de guérison</h4>
                  <p className="text-white/60 text-base leading-relaxed">Il se verra pardonner tous ses péchés, les premiers comme les derniers.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. L'AGONIE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Conduite pendant l'agonie</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">ساعة الاحتضار</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8 font-serif italic text-lg text-white/70">
                <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Position et Paroles</h4>
                <p>S’il semble être dans l’agonie, on le couche sur le côté droit, la face dirigée vers la Kaaba (khibla). Si cela n’est pas possible, on le couche sur le côté gauche. Si toutes ces éventualités sont exclues, on le couche sur le dos, les jambes dirigées vers la Kaaba.</p>
                <p>Il est recommandé de rester à son chevet et de prononcer constamment la formule « lahi laha ilalhou mouhamadoune rassouloulahi » de manière à la lui rappeler sans pour autant lui demander la répétition. S’il la reprend une seule fois, cela suffira, à condition qu’il n’y ajoute rien d’autre. Avant de le coucher, on doit s’efforcer de lui faire répéter ladite formule.</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8 font-serif italic text-lg text-white/70">
                <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Besoins et Environnement</h4>
                <p>Il est aussi méritoire de lui donner à boire de l’eau fraîche, mais s’il en exprime le besoin, cela devient obligatoire. Il est aussi recommandé de réciter la sourate « yacine » à son chevet et à haute voix, ainsi que la sourate « rahdi » à voix basse. Cela supprime la soif de l’agonie et adoucit la mort.</p>
                <p>Il est aussi recommandé qu’on le mette en état de pureté et qu’on l’éloigne de toute souillure. Il est recommandé aux personnes en état de souillure (djanaba) de ne pas s’approcher de lui. Il est aussi recommandé d’éloigner les images représentant des êtres vivants, que ces images soient imprimées sur du papier ou du tissu. On doit également éloigner de son voisinage tout objet d’agrément ou de loisir comme la radio, la guitare ou un chien. Il est souhaitable que ses amis soient présents.</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/8')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre VIII</button>
      </nav>
    </main>
  );
}