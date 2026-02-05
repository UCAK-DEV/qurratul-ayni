'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PriereMortuairePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "8") || CHAPTERS[7];
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

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VIII — Section B</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LA PRIÈRE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">mortuaire</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">صلاة الجنازة</p>

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
          
          {/* RÈGLES GÉNÉRALES */}
          <section className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">B</span>
            <div className="max-w-4xl relative z-10">
              <p className="text-xl md:text-2xl text-white/80 font-serif italic leading-relaxed border-l-2 border-gold/30 pl-8">
                La prière comprend quatre (4) « kabar » (alahou akbar) pour lesquels on ne lève les bras qu’au cours du premier. S’il s’agit du corps d’un homme, on se place à la hauteur de sa ceinture ; s’il s’agit du corps d’une femme, on se place au niveau de ses épaules avant de prononcer la formule d’entrée en prière « alahou akbar », non sans avoir auparavant formulé intérieurement l’intention de prier sur ce (ou ces) mort.
              </p>
            </div>
          </section>

          {/* CAS 1: UN SEUL HOMME */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">S’il s’agit du corps d’un seul homme</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[4rem] bg-gold/[0.02] border border-gold/10 space-y-12 font-serif italic">
              <p className="text-lg text-white/60">Réciter après chacun des trois premiers « kabar » (alahou akbar), ce qui suit :</p>
              <div className="p-10 rounded-[3rem] bg-black/40 border border-white/5 space-y-8">
                <p className="text-white/90 text-lg leading-relaxed">« bismilahi rahmani alhamdoulilahi leuzi amâta wa hahya wa l hamdou lilahi leuzi youkh yi mowta lehoul azamatou wal kebreyahou wal moulkou wal khouderatou was sanahou wahouwa ala kouli cheyhine khadiroune alahouma sali was salime ala seydina mouhamadine wa ala ali seydina mouhamadine wa barik ala seydina mouhamadine wa ala ali seydina mouhamadine kana saleyta was salamta wa bâraka ala seydina Ibrahima wa ala ali seydina Ibrahima fil alamina innaka hamidoune madjidoune alahouma inna hou abdouka wa ibnou abdika wabnou amatika kâna yach hadou ann lahilala ila anta wah daka la charika laka wa anna seyda mouhamadane salalahou tahala aleyhi wa salama abdouka wa rassoulouka wa anta ahlamou bihi alahouma innakâna moukhsinane faz zid fi ikhsânihi wa innkana moussi ann fa tta djâwaz ann sayihatihi alahouma la tahrimna adjira hou wala taftin na bahdahou ».</p>
                <p className="font-amiri text-2xl md:text-3xl text-gold-light text-right leading-loose" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ، الْحَمْدُ لِلَّهِ الَّذِي أَمَاتَ وَأَحْيَا، وَالْحَمْدُ لِلَّهِ الَّذِي يُحْيِي الْمَوْتَى، لَهُ الْعَظَمَةُ وَالْكِبْرِيَاءُ وَالْمُلْكُ وَالْقُدْرَةُ وَالسَّنَاءُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ وَسَلَّمْتَ وَبَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ إِنَّهُ عَبْدُكَ وَابْنُ عَبْدِكَ وَابْنُ أَمَتِكَ كَانَ يَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ وَأَنَّ سَيِّدَنَا مُحَمَّدًا صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ عَبْدُكَ وَرَسُولُكَ وَأَنْتَ أَعْلَمُ بِهِ، اللَّهُمَّ إِنْ كَانَ مُحْسِنًا فَزِدْ فِي إِحْسَانِهِ وَإِنْ كَانَ مُسِيئًا فَتَجَاوَزْ عَنْ سَيِّئَاتِهِ، اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَا تَفْتِنَّا بَعْدَهُ.</p>
              </div>
              <p className="text-lg text-white/60">Après le quatrième (a) « kabar », on prononce ce qui suit :</p>
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 space-y-8">
                <p className="text-white/90 text-lg leading-relaxed">« Alahouma ikhfir li hayyinâ wa may yitinâ wa hâdirinâ wa khâibina wa sakhirina wakabîrinâ wazakarinâ wa ounzânâ innaka tahlamou motakhalabanâ wa maswânâ waliwâlidînâ walimane sabakhana bil îmani walill mouslimîna wal mouslimâti walil mominîna wal mominâti al hahyâ – i minehoume wal anwâti alahouma mane ahyaytahou minâ fa ahyihî ala îmini wa mane tawaf faytahou mine nâ fatawaf fahô ala islami wa as idna bilikhâ ika wa tayibnâ lil mawtî watayinhoulanâ wadj al fihi rahatanâ wa massarratanâ ».</p>
                <p className="font-amiri text-2xl md:text-3xl text-gold-light text-right leading-loose" dir="rtl">اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا، إِنَّكَ تَعْلَمُ مُتَقَلَّبَنَا وَمَثْوَانَا وَلِوَالِدَيْنَا وَلِمَنْ سَبَقَنَا بِالْإِيمَانِ وَلِلْمُسْلِمِينَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ الْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِيمَانِ وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِسْلَامِ وَأَسْعِدْنَا بِلِقَائِكَ وَطَيِّبْنَا لِلْمَوْتِ وَطَيِّبْهُ لَنَا وَاجْعَلْ فِيهِ رَاحَتَنَا وَمَسَرَّتَنَا.</p>
              </div>
              <p className="text-center text-white/40">Après quoi, on prononce le salut final.</p>
            </div>
          </section>

          {/* CAS 2 & 3: DEUX OU PLUSIEURS HOMMES */}
          <section className="grid md:grid-cols-2 gap-8 font-serif italic">
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6 text-white/70 text-lg leading-relaxed">
              <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">S’il s’agit de deux hommes</h3>
              <p>on prononce l’invocation ci-dessus depuis « Bismilahi rahmani rahimi » jusqu’à « hamidoune madjidoune » et l’on ajoute ceci :</p>
              <p className="text-white/40 text-sm italic">« Alahouma innahoumâ abdaka wabn â adbeyka wabnâ amateyka kânâ yach heudâni ann lahilaha ila anta wahdaka la charika laka wa anna seyidana mouhamadane salalahou tahala aleyhi was salama abdouka wa rasoulouka wa anta ahlamou bihimâ alahouma innkana moukhsineyni faz zid fi ikhsânihima wa innakânâ moussi ayni fata djâwaz ann seyi atihimâ alahouma la takhrim nâ adjirahoumâ walâ taftine nâ badahoumâ ».</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6 text-white/70 text-lg leading-relaxed">
              <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Plus de deux hommes</h3>
              <p>on répète ce qu’on avait dit à propos de la première prière jusqu’à « madjidoune » (sur un seul mort), avant d’ajouter ce qui suit :</p>
              <p className="text-white/40 text-sm italic">« Alahouma innahoum abîdouka wabnâou habîdika wabnâhou imâ ika kânô yach hadôna ann lâhilaha ilâ anta wahdaka la charika laka wa ana seyidina mouhamadane salalahou tahala aleyhi wa salama habdouka warassoulouka wa anta ahlamou bihim alahouma inn kana mouhsinîna fazid fi ihsanihim wa inkânô moussî înna fatadjâ waz ann seyi hâ tîhim. Alahouma la tahrimnâ adjra houme wâla taftinnâ bahdahoume ».</p>
            </div>
          </section>

          {/* CAS 4 & 10: ENFANTS (GARÇON / FILLETTE) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Cas des enfants</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/20" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg leading-relaxed">
              <div className="p-10 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/10 space-y-6">
                <h4 className="text-emerald-500 font-bold text-[10px] uppercase">S’il s’agit du corps d’un garçon</h4>
                <p className="text-white/70 italic text-sm">« Alahouma innahô abdouka wabnou kabdika wabnou amatika anta khalakhtahô warazakhtahô wa anta amataho wa anta touchtouhyihi. Alahouma fadj hal hou liwalidîhi salafane wazoukhrane wa farâtane wa sakhile bihi mawazinahoume wa ahzime bihi oudjôranhoume wala tahrimnâ wa iyâhoume adjrahou wala tarfinâ wa iyâhoume bahdaho. Alahouma al hikh hou bissâlihi salafil môminîna fi kafâ la ti ibrahima wa hâfihi minn fitnatil khabri wa minn azâbi djahanama ».</p>
                <p className="text-white/40 text-xs mt-4">Après le quatrième, on dit ceci : « alahouma ikhfirli aslâfinâ wa afrâtinâ... »</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/10 space-y-6">
                <h4 className="text-emerald-500 font-bold text-[10px] uppercase">S’il s’agit du corps d’une fillette</h4>
                <p className="text-white/70 italic text-sm">« Alahouma innaha amatouka wabnatou abdika wabnatou amatika anta khalakhtaha wazakhtaha wa anta amataha wa anta touhyiha. Alahouma fadjhalna liwalidihâ salafane wa soukhrane wa faratane wa sakhil biha mawazinahoume wa ahzime biha oudjôrahoume walâ tahrimnâ wa iyâhoume adjraha walâ taftinna wa iyâhoume bahdahâ. Alahouma al hikh hâ bissâlihi salafil môminina fî kafâlati ibrahima wa âfihâ minn fitnatile khabri wa min azâbi djahanama ».</p>
              </div>
            </div>
          </section>

          {/* CAS 7, 8 & 9: FEMMES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">S’il s’agit de femmes</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-10 font-serif italic text-lg text-white/70 leading-relaxed">
              <div className="space-y-6">
                <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Une seule femme</h4>
                <p className="text-white/80">« Alahouma inna hâ amatouka wabnatou abdika, wabnatou amatika kânat tach hadou ann lahilaha ilah anta wahdaka la charika laka wa anna seyidina mouhamadane salalahou tahala aleyhi was salama abdouka wa rassoulouka wa anta ahlamou bihâ. Alahouma inn kânat mouhsinatane fazid fî ihsâniha wa inn kânat moussîatane fatadjâ waze ann seyiâtihâ. Alahouma la tahrim a adjarahâ wala taftina bahdahâ ».</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                <div className="space-y-4">
                  <h4 className="text-gold font-bold text-[10px] uppercase">Deux femmes</h4>
                  <p className="text-white/50 text-sm leading-relaxed">« Alahouma inna houmâ amatâka wabnâtâ abdaïka wabnâtâ amataïka kânatâ tach hadâni ann lahilaha illa anta wahdaka lâcharikalaka wa anna seydina mouhamadane sallahou tahala aleyhi was salama habdouka wa rassoulouka wa anta ahlamou bihimâ. Alahouma innkânatâ namoufiri aïni fazid fi ihsânihimâ wa inn kânatâ moussîataïni fatadjâ waze hane seyiâtihima. Alahouma lâ tahrimnâ adjrahoumâ walâ taftina bahdahoumâ ».</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-gold font-bold text-[10px] uppercase">Plus de deux femmes</h4>
                  <p className="text-white/50 text-sm leading-relaxed">« Alahouma innahouna imâ ouka wa banâtou habîdika wa banâtou imâhika houna yach hadna ann lahilaha ila anta wahdaka la charika laka wa anna seyidana mouhamadane salalahou tahala aleyhi wa salama habdouka wa rassoulaka wa anta ahlamou bihina. Alahouma innkouna mouhsinatine fa zid fi ihsanihina wa inne kounna moussîâtine fatadjâ waze ann seyyiâtihina. Alahouma la tahrimnâ adjrahouna wala taftinâ bahdahounna ».</p>
                </div>
              </div>
            </div>
          </section>

          {/* RÉCAPITULATIF FINAUX ET TRANSPORT */}
          <section className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg leading-relaxed text-white/70">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10">
                <h4 className="text-gold font-bold text-[10px] uppercase mb-6 tracking-widest border-b border-white/5 pb-2">Mixité et Nombre</h4>
                <p className="mb-6">S’il s’agit de corps de grandes personnes et d’enfants, on prononce ce qu’on doit dire, s’il ne s’agit que de corps de grandes personnes.</p>
                <p>S’IL S’AGIT DE BEAUCOUP DE CORPS, on peut prier séparément sur chaque corps. Cependant, il est préférable de les réunir. Au moment de prier sur eux, il convient de mettre à côté de l’imam celui qu’on croit être le meilleur croyant.</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10">
                <h4 className="text-gold font-bold text-[10px] uppercase mb-6 tracking-widest border-b border-white/5 pb-2">Différence de sexes et Retard</h4>
                <p className="mb-6">S’IL S’AGIT DE CORPS DE PERSONNES DE SEXES DIFFÉRENTS, on met à côté de l’imam les personnes de sexe masculin, même s’il s’agit de garçons. S’il s’agit de corps de grandes personnes et de jeunes enfants, on met du côté de l’imam les corps des grandes personnes.</p>
                <p className="text-emerald-400/80">SI QUELQU’UN VIENT EN RETARD, il reprend les « kabar » (alahou akbar) effectués en son absence, après le salut final ; si le corps est toujours là, il doit réciter la prière.</p>
              </div>
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-gold/[0.02] border border-gold/10 space-y-12 font-serif italic leading-relaxed text-white/80">
              <h3 className="text-gold font-black text-center text-xs uppercase tracking-[0.4em]">LE TRANSPORT ET LE CORTÈGE</h3>
              <div className="space-y-8">
                <p>Si on doit porter le mort sur la tête, il est préférable que ce soit fait par quatre (4) personnes si possible, ou même moins de quatre (4) personnes. Il faut signaler qu’il n’est pas souhaitable que le nombre de personnes dépasse celui de quatre. Alors, celles qui sont du côté de la tête se mettent devant.</p>
                <p>Ceux des accompagnateurs qui sont à pied marchent devant le mort ; ceux qui utilisent un moyen de locomotion viennent derrière le mort.</p>
                <p>Peut faire partie de ce cortège une vieille femme, laide ou voûtée au point de laisser tout le monde indifférent ; elle devra se mettre derrière les hommes et ne pas s’être parfumée. Mais une femme un tant soit peu attirante n’a pas le droit de faire partie de ce cortège, même s’il s’agit d’une parente très proche.</p>
                <p className="font-bold border-t border-white/5 pt-8">On peut déplacer un corps vers un endroit différent de celui où il s’est éteint, pour une raison ou une autre, tant qu’on ne l’a pas enterré. S’il est déjà inhumé, on ne peut plus l’exhumer, surtout si l’on croit qu’il est en état de décomposition.</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/8/a')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/8/c')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}