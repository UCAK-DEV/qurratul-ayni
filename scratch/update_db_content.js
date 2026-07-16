/**
 * Script de mise à jour Supabase :
 * 1. Corrections textuelles (fautes) dans la Page 3
 * 2. Enrichissement des pages 2, 5-a, 5-b, 5-e, 5-f
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) env[parts[0].trim()] = parts.slice(1).join('=').trim();
});

const supabase = createClient(env['NEXT_PUBLIC_SUPABASE_URL'], env['NEXT_PUBLIC_SUPABASE_ANON_KEY']);

// ─── PAGE 3 — Corrections + Enrichissement ───────────────────────────────────
const page3_blocks = [
  {
    type: "arabic_call",
    content: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ"
  },
  {
    type: "text_block",
    content: [
      "Il n'y a de divinité que Dieu. Son règne est sans partage. C'est Lui qui décide de tout. C'est Lui qui fait, c'est Lui qui défait.",
      "Il n'a besoin de l'assistance de personne, il ne demande l'autorisation de personne. Il n'agit que par sa Propre Volonté en toute chose, en raison de Son Omnipuissance, de Son Omniscience et de sa seule Volonté.",
      "Il ne fait recours à personne mais tout le monde a besoin de Lui. Il préexiste à tous et il est éternel. Il entend, il voit, il parle, mais Sa Perception est sans commune mesure avec celle des créatures.",
      "Il ne ressemble à rien, à personne. Rien de ce que l'on peut imaginer ou concevoir par la pensée ou par la parole n'est semblable aux attributs de Dieu. Il n'a point enfanté, Il n'a pas été enfanté. Il n'est le parent de personne. Toute créature est Son serviteur.",
      "Il connaît tout, Il n'ignore rien, Il est Omniprésent. La solitude ne doit pas nous faire oublier qu'Il est partout avec nous, qu'il est témoin de nos actes et de nos paroles. Il les enregistre, n'en oublie aucun et nous les rétribuera en conséquence.",
      "Il connaît la pensée de chacun de nous, aussi nombreux que nous soyons, quelle que soit la diversité des idées émises. Chacun de nous comparaîtra seul devant Lui et croira alors être Sa seule créature.",
      "Il est le Créateur, Il nous fait vivre par Sa Grâce, Il répand ses bienfaits sur nous. C'est Lui qui met fin à notre existence et nous ressuscite sans aucun doute.",
      "Après nous avoir ressuscités, Il nous rassemblera en un jour, en un lieu et nous lui rendrons compte de nos actes, chacun en ce qui le concerne.",
      "Après examen de nos actes, Il nous enverra au paradis ou en enfer suivant que nos œuvres auront été bonnes ou mauvaises. Sa décision sera sans appel et chacun ne se préoccupera que de son propre sort."
    ]
  }
];

// ─── PAGE 5-a — Purification : ajout invocation post-purification ─────────────
const page5a_blocks = [
  {
    type: "text_block",
    content: [
      "Parmi les différentes sortes de purification, la plus importante est celle du corps (janâba) lorsqu'elle s'impose. Toute personne majeure doit se purifier chaque fois que de besoin. Celui qui nie cette obligation est un mécréant ; celui qui s'y refuse consciemment sans motif valable est un impie et n'a aucune crédibilité. S'il ne s'en repent pas, il sera précipité dans les feux de l'enfer."
    ]
  },
  {
    type: "procedure",
    titleFr: "Raisons d'une purification",
    titleAr: "موجبات الغسل",
    content: [
      "1° L'éjaculation : consécutive à un grand plaisir ressenti à l'état de veille ou de sommeil. Celui qui constate du sperme sur ses habits après le réveil, sans s'être aperçu de son écoulement, doit se purifier et reprendre toutes les prières accomplies avant cette constatation.",
      "2° Rapports sexuels : après les rapports sexuels, les deux personnes majeures doivent se purifier même s'il n'y a pas eu éjaculation.",
      "3° Menstrues : une femme en période menstruelle doit se purifier après l'arrêt du saignement, quelle qu'en soit la quantité.",
      "4° Accouchement : la purification est obligatoire en cas d'accouchement, même si celui-ci n'est pas accompagné de saignement."
    ]
  },
  {
    type: "procedure",
    titleFr: "Comment se purifier ?",
    titleAr: "كيفية الغسل",
    content: [
      "Se procurer de l'eau exempte de toute souillure, incolore, inodore et sans saveur.",
      "Se mettre dans un endroit décent et propre, se tourner vers l'Est (Kaaba) et dire « Bismillahi ».",
      "Se laver la main droite jusqu'au poignet trois fois, puis laver la main gauche de la même façon.",
      "Laver les parties souillées.",
      "Laver proprement le sexe et formuler intérieurement l'intention de se purifier conformément aux recommandations divines.",
      "Procéder à l'ablution complète en retardant le lavage des pieds.",
      "Prendre de l'eau dans les mains et la passer sur les cheveux de la nuque vers le front.",
      "Se laver la tête trois fois en veillant à faire pénétrer l'eau partout.",
      "Laver les deux oreilles intérieurement et extérieurement en commençant par la droite.",
      "Laver la nuque et le cou.",
      "Laver le côté droit du corps de l'épaule jusqu'au genou, puis procéder de même pour le côté gauche.",
      "Se laver entièrement le dos, puis la poitrine et le ventre.",
      "Enfin, laver les deux pieds jusqu'aux chevilles."
    ]
  },
  {
    type: "comparison",
    content: [
      {
        titleFr: "Les Obligations (Farata)",
        titleAr: "الفراض",
        items: [
          "1. Formuler intérieurement l'intention",
          "2. L'observance de l'ordre indiqué",
          "3. Mouiller le corps intégralement",
          "4. Se rincer le corps avec la main si possible ou tout autre moyen",
          "5. Mouiller la tête jusqu'au cuir chevelu (défaire les tresses si nécessaire)"
        ]
      },
      {
        titleFr: "Les Traditions (Souna)",
        titleAr: "السنن",
        items: [
          "1. Commencer par laver les mains",
          "2. Se rincer la bouche",
          "3. Faire pénétrer l'eau dans les narines en aspirant",
          "4. Faire sortir l'eau en soufflant par le nez",
          "5. Faire passer l'eau par les oreilles avec précaution"
        ]
      }
    ]
  }
];

// ─── PAGE 5-b — Ablutions : ajout invocation post-ablution ───────────────────
const page5b_blocks = [
  {
    type: "quote",
    content: [
      "Toute personne majeure doit faire ses ablutions avant de prier ou de toucher le Saint Coran. Quiconque conteste cette obligation est un mécréant. Celui qui transgresse cette prescription de façon délibérée et sans excuse est digne du plus grand mépris. S'il ne s'en repent pas avant sa mort, il sera précipité irrémédiablement en enfer."
    ]
  },
  {
    type: "procedure",
    titleFr: "Causes d'annulation",
    titleAr: "نواقض الوضوء",
    content: [
      "1. Le pet.",
      "2. Le fait d'aller à la selle.",
      "3. Le fait d'uriner.",
      "4. La sécrétion de liquide prostatique (Madji), consécutive à l'érection. On doit laver le sexe entièrement. L'érection sans sécrétion n'annule pas l'ablution.",
      "5. La sortie du « wadiyu » (liquide gluant) émis par l'homme et non accompagné de plaisir.",
      "6. La sécrétion du sperme due à une maladie, la fatigue ou l'incontinence. Si accompagnée de jouissance, la purification par lavage est obligatoire.",
      "7. La sécrétion du liquide précédant l'accouchement.",
      "8. Crise d'épilepsie ou de folie.",
      "9. L'évanouissement.",
      "10. L'ivresse.",
      "11. Le sommeil profond, si court soit-il (durant lequel un objet tenu pourrait tomber sans qu'on s'en aperçoive).",
      "12. Toucher une femme par un homme majeur avec l'intention d'en jouir, qu'il y trouve ou non du plaisir.",
      "13. Le baiser bouche à bouche entre homme et femme, qu'il soit suivi ou non de jouissance.",
      "14. Toucher sa verge par la paume, les doigts ou le contour de la main.",
      "15. Doute sur la validité de l'ablution avant la prière."
    ]
  },
  {
    type: "split_text",
    content: [
      {
        label: "Le Siwou (Lavage Intime)",
        quote: "Bismilahi allahouma iniya a hons oubika minal khouboussi wal khabâ issi.",
        paragraphs: [
          "Consiste à laver proprement les parties intimes avec de l'eau non souillée, non altérée dans sa couleur, sa saveur et son odeur, avant de quitter les lieux de toilettes.",
          "Il est méritoire d'introduire le pied gauche en entrant dans les toilettes et de sortir par le pied droit. Il est indispensable d'attendre que l'urètre soit totalement vidé avant de procéder au lavage. C'est seulement après le Siwou que l'on doit procéder à l'ablution."
        ]
      }
    ]
  },
  {
    type: "procedure",
    titleFr: "Pratique de l'ablution",
    titleAr: "صفة الوضوء",
    content: [
      "Chercher de l'eau non souillée et s'asseoir dans un lieu propre face à la Kaaba.",
      "Dire « Bismillahi » et se rincer la bouche.",
      "Se laver les mains (3 fois) jusqu'aux poignets, en commençant par la main droite.",
      "Se rincer la bouche (3 fois).",
      "Aspirer l'eau par les narines avec la main droite et la rejeter en soufflant avec la main gauche (3 fois).",
      "Se laver le visage (3 fois) en formulant intérieurement l'intention de faire l'ablution.",
      "Se laver l'avant-bras droit, puis l'avant-bras gauche (chacun 3 fois jusqu'aux coudes).",
      "Faire passer l'eau sur la tête du front à la nuque, puis de la nuque au front.",
      "Se laver les oreilles intérieurement et extérieurement.",
      "Enfin, se laver le pied droit (3 fois), puis le pied gauche de la même façon."
    ]
  },
  {
    type: "split_text",
    content: [
      {
        label: "Invocation post-ablution",
        arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
        translation: "J'atteste qu'il n'y a de divinité que Dieu, Seul, sans associé, et j'atteste que Muhammad est Son serviteur et Son Messager.",
        paragraphs: [
          "Après l'ablution, lever la tête vers le ciel et prononcer : « Achadouane lahilaha illalah wahdahô la charika lahô wa ach hadou annas seydina Mouhamadane sala lahô tahala aleyhi wassalama. Abdouho wa rassoulouhou — Alahouma adj halna minattawa bîna wadj halna minal moutatakhirina wadj halna mine ibâdika sahilina wa add khilnâ fil djanati wa bahidna mina nâri — Alahouma sali ala seydina Mouhamadine wa alla ali seydina Mouhamadine wa salim. »"
        ]
      }
    ]
  }
];

// ─── PAGE 5-e — Menstrues : ajout règles de jeûne ────────────────────────────
const page5e_blocks = [
  {
    type: "split_text",
    content: [
      {
        label: "DÉFINITION ET CATÉGORIES",
        paragraphs: [
          "C'est l'écoulement de sang propre à la femme de 9 ans au moins et de 70 ans au plus. Cet écoulement est périodique et non provoqué. On distingue trois catégories de femmes : a) celle à qui cela vient d'arriver pour la première fois, b) celle qui en est habituée, c) la femme enceinte."
        ]
      },
      {
        label: "1° - LA FEMME DÉBUTANTE",
        paragraphs: [
          "Pour la première, la durée de l'écoulement n'excède pas quinze jours. Si elle excède quinze jours, il ne s'agit plus de menstrues mais d'une maladie : la femme pourra se purifier, faire ses prières, jeûner et reprendre ses rapports avec son mari.",
          "Si les menstrues reprennent après une interruption, elle fait la somme des jours d'écoulement. Si cette somme excède quinze jours, il s'agit d'une maladie. Quinze jours constituent la durée minimale de l'état de pureté d'une femme."
        ]
      },
      {
        label: "2° - LA FEMME HABITUÉE",
        paragraphs: [
          "Si l'écoulement se manifeste plus longtemps que d'habitude, elle attend trois (3) jours supplémentaires au-delà desquels elle devra se laver, faire ses prières, jeûner et reprendre ses rapports. Cette attente n'est valable que si la durée totale de l'écoulement n'excède pas quinze (15) jours.",
          "• Si la période dure habituellement 13 jours, l'attente sera de 2 jours. • Si elle dure habituellement 14 jours, l'attente sera de 1 jour. • Si la durée habituelle est de 15 jours, elle n'attend pas, même en cas de non-interruption."
        ]
      },
      {
        label: "3° - LA FEMME ENCEINTE",
        paragraphs: [
          "L'écoulement de sang est rare chez la femme enceinte. Entre le 2ème et le 6ème mois, l'écoulement ne peut excéder vingt (20) jours. Au-delà des 20 jours, il s'agit d'une maladie. Entre le 6ème mois et le terme, l'écoulement ne peut excéder trente (30) jours."
        ]
      },
      {
        label: "SIGNES DE L'ARRÊT",
        paragraphs: [
          "Il y a deux façons de reconnaître l'arrêt des menstrues : 1. Lorsqu'après introduction d'un morceau d'étoffe ou de coton dans le sexe, on constate qu'il n'y a pas de trace de sang neuf. 2. Lorsqu'on constate l'écoulement d'un liquide blanc semblable au sperme.",
          "La femme doit se purifier immédiatement après la siccité du sexe, ou après l'apparition de pertes blanches selon son habitude."
        ]
      },
      {
        label: "INTERDICTIONS",
        paragraphs: [
          "La femme en période de menstrues ne doit pas : faire ses prières (et n'est pas tenue de les refaire après), jeûner (mais doit les compenser), faire le tour de la Kaaba, observer la retraite d'adoration, avoir des rapports sexuels, être répudiée, entrer dans une mosquée.",
          "Elle ne doit pas toucher au Coran que pour l'enseigner ou l'étudier, mais peut le réciter de mémoire."
        ]
      },
      {
        label: "EN PÉRIODE DE JEÛNE",
        paragraphs: [
          "La femme doit vérifier l'arrêt des menstrues avant l'aurore (fadiar). Si l'arrêt survient avant l'aurore, elle doit jeûner. Si l'arrêt survient après l'aurore, elle ne doit pas jeûner ce jour. Si elle ne sait pas si l'arrêt a eu lieu avant ou après l'aurore, elle devra jeûner ce jour, retenir cette date et procéder plus tard à un jeûne de compensation."
        ]
      }
    ]
  }
];

// ─── PAGE 5-f — Lochies : ajout recommandations grossesse ────────────────────
const page5f_blocks = [
  {
    type: "split_text",
    content: [
      {
        label: "DÉFINITION ET DURÉE",
        paragraphs: [
          "L'accouchement s'accompagne de sang. Ce saignement peut être simultané ou postérieur à l'accouchement, mais n'est jamais antérieur à celui-ci. Si le saignement est antérieur à l'accouchement, si petit soit-il, il s'agit des menstrues.",
          "La durée maximale des lochies n'excède jamais soixante (60) jours. Si elle dépasse soixante jours, il ne s'agit plus de lochies mais d'une maladie. La femme doit alors se purifier, faire ses prières, jeûner et reprendre ses rapports sexuels."
        ]
      },
      {
        label: "CAS D'INTERRUPTION",
        paragraphs: [
          "S'il y a interruption et reprise des lochies et que cette interruption reste inférieure à quinze (15) jours, elle décompte les jours de saignement jusqu'à concurrence de soixante (60) jours.",
          "Si la durée de l'interruption égale quinze (15) jours, il ne s'agit plus de lochies ni de maladie, mais de menstrues."
        ]
      },
      {
        label: "OBLIGATIONS ET PRATIQUES",
        paragraphs: [
          "La femme en période de lochies et la femme en période de menstrues sont astreintes aux mêmes interdits, obligations et pratiques.",
          "Il est méritoire pour ces deux femmes, après purification, d'introduire un morceau d'étoffe ou de coton parfumé dans le vagin à trois (3) reprises afin de faire disparaître toute odeur et toute humidité. C'est une pratique méritoire, non une obligation.",
          "Il est aussi méritoire pour une femme après accouchement d'observer quarante (40) jours après purification avant de reprendre ses rapports sexuels. C'est également méritoire, non obligatoire."
        ]
      },
      {
        label: "RECOMMANDATIONS POUR LA GROSSESSE",
        paragraphs: [
          "Il est recommandé à la femme enceinte d'éviter un excès d'activités, de soulever des poids lourds, de lever la main pour toucher des choses trop élevées, et de consommer des aliments amers ou acides.",
          "Si la durée de la grossesse n'atteint pas six (6) mois, elle ne doit pas se purger. Si elle atteint six (6) mois, elle peut utiliser une décoction légère de plante laxative (laydour).",
          "Si la durée de la grossesse n'atteint pas quatre (4) mois, elle ne doit pas prendre de nivaquines. Si elle atteint quatre (4) mois, elle peut en prendre à raison d'un (1) comprimé par jour jusqu'à l'accouchement.",
          "Il est recommandé à la femme enceinte de limiter ses rapports sexuels, surtout aux 2e, 3e, 5e, 7e et 9e mois de grossesse, car les rapports lui sont préjudiciables durant ces périodes."
        ]
      }
    ]
  }
];

async function upsert(id, blocks) {
  const { error } = await supabase
    .from('pages')
    .update({ blocks })
    .eq('id', id);
  
  if (error) {
    console.error(`❌ Erreur pour page ${id}:`, error.message);
  } else {
    console.log(`✅ Page ${id} mise à jour avec succès.`);
  }
}

async function main() {
  console.log("🚀 Démarrage des mises à jour Supabase...\n");

  await upsert('3', page3_blocks);
  await upsert('5-a', page5a_blocks);
  await upsert('5-b', page5b_blocks);
  await upsert('5-e', page5e_blocks);
  await upsert('5-f', page5f_blocks);

  console.log("\n✅ Toutes les mises à jour terminées !");
}

main().catch(console.error);
