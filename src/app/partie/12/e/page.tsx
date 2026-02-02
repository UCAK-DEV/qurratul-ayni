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

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full" />
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XII — Section E</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Baptême</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal">العقيقة</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* 1. RÈGLES DU SACRIFICE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">1. Le Moment et l'Animal</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8 text-white/80 italic text-lg font-serif leading-relaxed">
            <p>
              Il est recommandé de lui donner un nom au septième jour de sa naissance et, à cette occasion, de sacrifier, de préférence, un bélier sans défaut, et qui n’a perdu l’usage d’aucun de ses membres, sans déformation aucune, qui n’est ni borgne, ni maigre, dont tous les organes sont entiers « ndiaadé woul », ou à défaut un bouc ou tout autre animal.
            </p>
            <div className="p-6 bg-white/[0.03] rounded-3xl border border-white/10 text-base leading-relaxed not-italic font-sans">
              <span className="text-gold font-black text-[10px] uppercase block mb-3 tracking-widest">Calcul du 7e jour :</span>
              On ne doit pas tenir compte du premier jour, si la naissance survient après l’aube. Si la naissance survient à l’aube, on doit compter cette aube.
            </div>
            <p>
              Le sacrifice peut se faire de la matinée jusqu’au coucher du soleil. On ne doit pas le faire avant le lever du soleil, ni après son coucher, au risque de faire perdre au sacrifice son but rituel. On doit donner le nom à l’enfant en même temps que l’on immole la bête.
            </p>
          </div>
        </section>

        {/* 2. RITUEL DU NOM - PREMIÈRE DOUA */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">2. Proclamation du Nom</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-10">
            <p className="text-white/70 italic text-lg font-serif">
              Avant de dire le nom, celui qui tient l'enfant doit prononcer ceci :
            </p>
            
            <div className="bg-gold/5 p-8 md:p-10 rounded-[2.5rem] border border-gold/20 space-y-8">
               <p className="font-amiri text-2xl md:text-4xl text-white text-right dir-rtl leading-[1.8]">
                 بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ، اللَّهُمَّ لَكَ الْحَمْدُ عَلَى مَا أَعْطَيْتَ وَأَوْلَيْتَ وَأَسْدَيْتَ، اللَّهُمَّ زِدْنَا وَلَا تَنْقُصْنَا، وَأَكْرِمْنَا وَلَا تُهِنَّا، وَأَعْطِنَا وَلَا تَحْرِمْنَا، وَآثِرْنَا وَلَا تُؤْثِرْ أَحَدًا عَلَيْنَا، وَبِاسْمِكَ الْكَافِي اكْفِنَا. اللَّهُمَّ اجْعَلْهُ بَرًّا تَقِيًّا، وَلَا تَجْعَلْهُ فَاجِرًا شَقِيًّا.
               </p>
               <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                 <p className="text-gold font-black text-[9px] uppercase tracking-widest mb-4">Transcription :</p>
                 <p className="text-white/70 italic font-serif text-base leading-relaxed">
                   « Bismi lahi rahmani rahimi alahouma lakal hamdou alâmâ ahtaïta wa awlaïta wa asdaïta alahouma zidnâ walâ tankhousnâ wa akrimnâ walâ touhinâ wa ahtinâ wala tahrimnâ wa assirnâ wala toûssir ahadane haleynâ wa bismikal kâfi ikfinâ. Alahouma adjhalhou barane, takhiyane walâ tadjhalhou fâdjirane chakhiyane »
                 </p>
               </div>
            </div>
            
            <div className="p-8 bg-white/[0.02] rounded-[2rem] border border-white/5 text-base italic text-white/50 leading-relaxed font-serif">
               Ensuite, il dira l’appel à la prière (Adhan) dans l’oreille droite, prononcera le nom, puis dira le ré-appel (Iqamat) dans l’oreille gauche.
            </div>
          </div>
        </section>

        {/* 3. BÉNÉDICTIONS FINALES - LONGUE SÉQUENCE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">3. Bénédictions de la Fontanelle</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {[
                 { t: "Yâ Barrou (يَا بَرُّ)", n: "7 fois" },
                 { t: "Yâ Rakhibou (يَا رَقِيبُ)", n: "7 fois" },
                 { t: "Yâ Rachidou (يَا رَشِيدُ)", n: "7 fois" }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <p className="font-amiri text-2xl text-gold mb-2">{item.t}</p>
                    <p className="text-white/40 text-[10px] uppercase font-black">{item.n}</p>
                 </div>
               ))}
            </div>

            {/* SÉQUENCE DE PROTECTIONS */}
            <div className="space-y-12 border-t border-white/5 pt-12">
               <div className="space-y-6">
                 <p className="font-amiri text-2xl md:text-3xl text-white text-right dir-rtl leading-relaxed">
                   أُعِيذُكَ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ (3 fois)
                 </p>
                 <p className="text-white/50 italic font-serif text-sm bg-white/5 p-4 rounded-xl">
                   « isouka bikalimâtil lahi tâmah mine koully chaïtanine wa hamah wa mine kouli aynine lâ mahh »
                 </p>
               </div>

               <div className="space-y-6">
                 <p className="font-amiri text-2xl md:text-3xl text-white text-right dir-rtl leading-relaxed">
                   بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ دَاءٍ يُؤْذِيكَ وَاللَّهُ يَشْفِيكَ، وَيُنْجِيكَ وَيَجْعَلُ الْبَرَكَةَ فِيكَ، أَنْبَتَكَ اللَّهُ نَبَاتًا حَسَنًا (3 fois)
                 </p>
                 <p className="text-white/50 italic font-serif text-sm bg-white/5 p-4 rounded-xl">
                   « bismil lahi arkhîka mine koully dâ ino yoûsika wa lahou yachfika, wa youndjîka wa yadjhaloul barakata fîka anbatakal lahou nabâtane hassanane »
                 </p>
               </div>

               {/* LA GRANDE DOUA FINALE */}
               <div className="bg-emerald-950/20 p-8 md:p-12 rounded-[3rem] border border-emerald-500/20 space-y-10">
                 <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] block text-center">Grande Doua de Protection et Longue Vie</span>
                 
                 <p className="font-amiri text-2xl md:text-4xl text-white text-right dir-rtl leading-[2]">
                   جَنَّبَكَ اللَّهُ الأَمَرَيْنِ وَأَذَاقَكَ طَعْمَ البَرْدَيْنِ وَوَقَاكَ شَرَّ الأَجْوَفَيْنِ وَعَمَّرَكَ بَيْنَ الوَالِدَيْنِ وَيَسَّرَ لَكَ الخَيْرَ حَيْثُمَا تَوَجَّهْتَ، مَتَّعَكَ اللَّهُ بِحُبِّهِ وَأَمَرَ بِطَاعَتِهِ وَكَلأَكَ بِحِفْظِهِ... زَوَّدَكَ اللَّهُ التَّقْوَى وَوَقَاكَ الرَّدَى وَبَارَكَ فِيكَ، أَسْتَوْدِعُ اللَّهَ دِينَكَ وَأَمَانَتَكَ وَخَوَاتِيمَ أَعْمَالِكَ.
                 </p>

                 <div className="h-px bg-emerald-500/20 w-full" />

                 <p className="font-amiri text-2xl md:text-4xl text-white text-right dir-rtl leading-[2]">
                   اللَّهُمَّ بَارِكْ لِي فِيمَا رَزَقْتَنِي وَأَنْبِتْهُ نَبَاتًا حَسَنًا وَاجْعَلْهُ مِنْ صَالِحِ الوَلَدِ وَأَعِنِّي عَلَى كَفَالَتِهِ حَتَّى يَبْلُغَ أَشُدَّهُ. اللَّهُمَّ اشْدُدْ بِهِ عَضُدِي وَكَثِّرْ بِهِ فِي صَالِحِي عَدَدِي... اللَّهُمَّ إِنِّي أَرْجُوكَ فِيهِ وَأَخَافُكَ عَلَيْهِ فَحَقِّقْ رَجَائِي فِيهِ وَآمِنْ خَوْفِي عَلَيْهِ.
                 </p>

                 <div className="p-8 bg-black/40 rounded-[2rem] border border-white/5">
                   <p className="text-emerald-400 font-black text-[9px] uppercase tracking-widest mb-6">Transcription de la Doua finale :</p>
                   <p className="text-white/60 italic font-serif text-sm leading-relaxed text-justify">
                     « dianabaka lahoul amaraïni wa azâ khaka tahmal labradaïni waw a khâka charal adj wa faïni wa hamaraka baïnal walidaïni wa yassara lakal khaïra aïchoumâ tawadiahta matahaka lahou bihoubi hî wa hamara bi tâhatihî wa kala ako bihifsihi... zawa daka lahou takhwâ wa wakhâkar radâ wa baraka fi ka astan dihoul lâha dînakâ wa amanataka wa khawâtima ahmâlika. Ala houma bâriklîfîmâ razakhtanî wa ane bithou nabâtane hassanane wadjhalhou mine salihil waladi... Alahouma ouchdoud bihî hadoudi... alahouma iniya ardiôka fihi wa akhâ fouka haleyhi fa hakhikh radiaî fihi wa amine khawfi haleyni inaka hala koully chaïne khadiroune »
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 4. RECOMMANDATIONS FINALES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Offrandes et Jumeaux</h3>
            <p className="text-white/60 italic font-serif text-base leading-relaxed">
              S’il s’agit de jumeaux, on doit trouver une bête pour chacun. Il est recommandé de donner en offrande l’équivalent du poids des cheveux de l’enfant en or ou en argent après l’avoir rasé. Une partie de la viande est consommée, l’autre donnée en offrande.
            </p>
          </div>

          <div className="p-10 rounded-[3rem] bg-red-950/10 border border-red-500/20 flex flex-col justify-center">
            <span className="material-symbols-rounded text-red-500 text-3xl mb-4">warning</span>
            <p className="text-white/70 italic font-serif text-base leading-relaxed">
              Il n’est pas recommandé de faire toucher à l’enfant du sang de l’animal immolé. Pour un mort-né, on donne un nom sans immoler d'animal.
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/12/d')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/12/f')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}