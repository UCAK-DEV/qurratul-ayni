'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function BaptemePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XII — Section E</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">baptême</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">العقيقة</p>

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
          
          {/* 1. LE MOMENT ET L'ANIMAL */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Moment et l'Animal</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">E</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed space-y-8 text-justify">
                <p>
                  Il est recommandé de lui donner un nom au septième jour de sa naissance et, à cette occasion, de sacrifier, de préférence, un bélier sans défaut, et qui n’a perdu l’usage d’aucun de ses membres, sans déformation aucune, qui n’est ni borgne, ni maigre, dont tous les organes sont entiers « ndiaadé woul », ou à défaut un bouc ou tout autre animal.
                </p>
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 not-italic font-sans text-sm border-l-4 border-l-gold">
                   <span className="text-gold font-black text-[10px] uppercase tracking-widest block mb-4">Calcul du 7e jour</span>
                   On ne doit pas tenir compte du premier jour, si la naissance survient après l’aube. Si la naissance survient à l’aube, on doit compter cette aube.
                </div>
                <p>
                  Le sacrifice peut se faire de la matinée jusqu’au coucher du soleil. On ne doit pas le faire avant le lever du soleil, ni après son coucher, au risque de faire perdre au sacrifice son but rituel. On doit donner le nom à l’enfant en même temps que l’on immole la bête.
                </p>
              </div>
            </div>
          </section>

          {/* 2. PROCLAMATION DU NOM */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Rite de proclamation</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
              <p className="text-center">Avant de dire le nom, celui qui tient l'enfant doit prononcer ceci :</p>
              
              <div className="p-10 rounded-[3.5rem] bg-gold/[0.05] border border-gold/20 space-y-10 shadow-sm">
                <p className="font-amiri text-2xl md:text-4xl text-white text-right leading-loose" dir="rtl">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ، اللَّهُمَّ لَكَ الْحَمْدُ عَلَى مَا أَعْطَيْتَ وَأَوْلَيْتَ وَأَسْدَيْتَ، اللَّهُمَّ زِدْنَا وَلَا تَنْقُصْنَا، وَأَكْرِمْنَا وَلَا تُهِنَّا، وَأَعْطِنَا وَلَا تَحْرِمْنَا، وَآثِرْنَا وَلَا تُؤْثِرْ أَحَدًا عَلَيْنَا، وَبِاسْمِكَ الْكَافِي اكْفِنَا. اللَّهُمَّ اجْعَلْهُ بَرًّا تَقِيًّا، وَلَا تَجْعَلْهُ فَاجِرًا شَقِيًّا.
                </p>
                <div className="space-y-6 pt-10 border-t border-gold/10">
                   <span className="text-gold font-black text-[9px] uppercase tracking-[0.4em]">Transcription intégrale</span>
                   <p className="text-white/90 italic md:text-xl leading-relaxed">
                    « Bismi lahi rahmani rahimi alahouma lakal hamdou alâmâ ahtaïta wa awlaïta wa asdaïta alahouma zidnâ walâ tankhousnâ wa akrimnâ walâ touhinâ wa ahtinâ wala tahrimnâ wa assirnâ wala toûssir ahadane haleynâ wa bismikal kâfi ikfinâ. Alahouma adjhalhou barane, takhiyane walâ tadjhalhou fâdjirane chakhiyane »
                  </p>
                </div>
              </div>
              
              <p className="text-center text-white/40 border-t border-white/5 pt-10">
                Ensuite, il dira l’appel à la prière (Adhan) dans l’oreille droite, prononcera le nom, puis dira le ré-appel (Iqamat) dans l’oreille gauche.
              </p>
            </div>
          </section>

          {/* 3. BÉNÉDICTIONS DE LA FONTANELLE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Protections finales</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 space-y-16 font-serif italic text-white/70">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-italic">
                {[
                  { ar: "يَا بَرُّ", fr: "Yâ Barrou", n: "7 fois" },
                  { ar: "يَا رَقِيبُ", fr: "Yâ Rakhibou", n: "7 fois" },
                  { ar: "يَا رَشِيدُ", fr: "Yâ Rachidou", n: "7 fois" }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center space-y-3">
                    <span className="font-amiri text-3xl text-gold-light block">{item.ar}</span>
                    <span className="text-white font-bold block">{item.fr}</span>
                    <span className="text-white/20 text-[9px] uppercase tracking-widest">{item.n}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-relaxed" dir="rtl">
                    أُعِيذُكَ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ (3 fois)
                  </p>
                  <p className="text-gold-light/60 text-sm">« isouka bikalimâtil lahi tâmah mine koully chaïtanine wa hamah wa mine kouli aynine lâ mahh »</p>
                </div>

                <div className="space-y-6 pt-10 border-t border-white/5">
                  <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-relaxed" dir="rtl">
                    بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ دَاءٍ يُؤْذِيكَ وَاللَّهِ يَشْفِيكَ، وَيُنْجِيكَ وَيَجْعَلُ الْبَرَكَةَ فِيكَ، أَنْبَتَكَ اللَّهُ نَبَاتًا حَسَنًا (3 fois)
                  </p>
                  <p className="text-gold-light/60 text-sm">« bismil lahi arkhîka mine koully dâ ino yoûsika wa lahou yachfika, wa youndjîka wa yadjhaloul barakata fîka anbatakal lahou nabâtane hassanane »</p>
                </div>

                <div className="p-10 rounded-[3.5rem] bg-emerald-950/10 border border-emerald-500/20 space-y-10">
                   <p className="font-amiri text-2xl md:text-4xl text-white text-right leading-loose" dir="rtl">
                    جَنَّبَكَ اللَّهُ الأَمَرَيْنِ وَأَذَاقَكَ طَعْمَ البَرْدَيْنِ وَوَقَاكَ شَرَّ الأَجْوَفَيْنِ وَعَمَّرَكَ بَيْنَ الوَالِدَيْنِ وَيَسَّرَ لَكَ الخَيْرَ حَيْثُمَا تَوَجَّهْتَ... زَوَّدَكَ اللَّهُ التَّقْوَى وَوَقَاكَ الرَّدَى وَبَارَكَ فِيكَ، أَسْتَوْدِعُ اللَّهَ دِينَكَ وَأَمَانَتَكَ وَخَوَاتِيمَ أَعْمَالِكَ.
                  </p>
                  <p className="font-amiri text-2xl md:text-4xl text-white text-right leading-loose border-t border-emerald-500/10 pt-10" dir="rtl">
                    اللَّهُمَّ بَارِكْ لِي فِيمَا رَزَقْتَنِي وَأَنْبِتْهُ نَبَاتًا حَسَنًا وَاجْعَلْهُ مِنْ صَالِحِ الوَلَدِ وَأَعِنِّي عَلَى كَفَالَتِهِ حَتَّى يَبْلُغَ أَشُدَّهُ. اللَّهُمَّ اشْدُدْ بِهِ عَضُدِي وَكَثِّرْ بِهِ فِي صَالِحِي عَدَدِي...
                  </p>
                  <div className="p-8 bg-black/40 rounded-3xl space-y-4">
                    <span className="text-emerald-400 font-black text-[9px] uppercase tracking-[0.4em]">Transcription de la Doua finale</span>
                    <p className="text-white/60 text-sm leading-relaxed">
                      « dianabaka lahoul amaraïni wa azā khaka tahmal labradaïni waw a khāka charal adj wa faïni wa hamaraka baïnal walidaïni wa yassara lakal khaïra aïchoumā tawadiahta matahaka lahou bihoubi hī wa hamara bi tāhatihī wa kala ako bihifsihi... zawa daka lahou takhwā wa wakhākar radā wa baraka fi ka astan dihoul lāha dīnakā wa amanataka wa khawātima ahmālika. Ala houma bāriklīfīmā razakhtanī wa ane bithou nabātane hassanane wadjhalhou mine salihil waladi... Alahouma ouchdoud bihī hadoudi... »
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. RECOMMANDATIONS FINALES */}
          <section className="space-y-12 pb-20">
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-white/70">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 leading-relaxed">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Offrandes et Jumeaux</h3>
                <p>S’il s’agit de jumeaux, on doit trouver une bête pour chacun. Il est recommandé de donner en offrande l’équivalent du poids des cheveux de l’enfant en or ou en argent après l’avoir rasé. Une partie de la viande est consommée, l’autre donnée en offrande.</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-red-950/[0.03] border border-red-900/20 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 text-red-500">
                  <span className="material-symbols-rounded">warning</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Interdiction rituelle</span>
                </div>
                <p>Il n’est pas recommandé de faire toucher à l’enfant du sang de l’animal immolé. Pour un mort-né, on donne un nom sans immoler d'animal.</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/12/d')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/12/f')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}