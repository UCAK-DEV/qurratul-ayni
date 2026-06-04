import { PageContent } from '@/types/content';

export const PAGES_CONTENT: Record<string, PageContent> = {
  "1": {
    id: "1",
    chapterId: "1",
    titleFr: "NOTES SUR L'AUTEUR",
    titleAr: "ملاحظات عن المؤلف",
    blocks: [
      {
        type: 'bio_header',
        content: {
          image: "/author.jpg",
          years: "1918 — 1991",
          name: "Cheikh Abo Madyana Shouhaïbou Mbacké",
          sections: [
            "Mieux connu sous le nom de Serigne Shouhaïbou MBACKÉ, il fut l'un des remarquables soufis et érudits de la Muridiyyah.",
            "Il fut très tôt attaché à son illustre père, Cheikh Ahmadou Bamba, qui lui inculqua les valeurs islamiques fondamentales et la rigueur spirituelle.",
            "Il apprit et mémorisa le Coran très jeune auprès de son oncle Cheikh Hamzatou Diakhaté, avant de poursuivre ses études de droit islamique et de théologie.",
            "Sa vie durant, il s'est consacré à l'éducation coranique à Touba, laissant une œuvre immense dont Khouratoul Ayni est le joyau."
          ]
        }
      }
    ]
  },
  "3": {
    id: "3",
    chapterId: "3",
    titleFr: "DE L’UNICITÉ DE DIEU",
    titleAr: "التوحيد",
    basmala: true,
    blocks: [
      {
        type: 'text_block',
        content: [
          "Il n’y de divinité que Dieu. Son règne est sans partage. C’est Lui qui décide de tout. C’est Lui qui fait, c’est Lui qui défait.",
          "Il n’a besoin de l’assistance de personne, il ne demande l’autorisation de personne. Il n’agit que par sa Propre Volonté en toute chose en raison de Son Omnipuissance, en raison de Son Omniscience, en raison de sa seule Volonté.",
          "Il ne fait recours à personne mais tout le monde a besoin de Lui. Il préexiste à tous et il est éternel. Il entend, il voit, il parle, mais Sa Perception est sans commune mesure avec celle des créatures.",
          "Il ne ressemble à rien, à personne. Rien de ce que l’on peut imaginer ou concevoir par la pensée ou par la parole n’est semblable aux attributs de Dieu.",
          "Il n’a point enfanté, Il n’a pas été enfanté. Il n’est le parent de personne. Toute créature est Son serviteur.",
          "Il connaît tout, Il n’ignore rien, Il est Omniprésent, Il a le don de l’ubiquité : la solitude ne doit pas nous faire oublier qu’Il est partout avec nous, qu’il est témoin de nos actes et de nos paroles.",
          "Il les enregistre, n’en oublie aucun et nous les rétribuera en conséquence. Il connaît la pensée de chacun de nous, aussi nombreux que nous soyons, quelle que soit la diversité des idées émises.",
          "Chacun de nous comparaîtra seul devant Lui et croira alors être Sa seule créature. Il est le Créateur, Il nous fait vivre par Sa Grâce, Il fait, Il répand ses bienfaits sur nous.",
          "C’est Lui qui mettre fin à notre existence et nous ressuscite sans aucun doute. Après nous avoir ressuscités, Il nous rassemblera en un jour, en un lieu et nous lui rendons compte de nos actes.",
          "Après examen de nos actes, Il nous enverra au paradis ou en enfer suivant que nos œuvres auront été bonnes ou mauvaises. Sa décision sera sans appel et chacun ne se préoccupera que de son propre sort."
        ]
      }
    ]
  },
  "10": {
    id: "10",
    chapterId: "10",
    titleFr: "LE MOIS DE RAMADAN",
    titleAr: "شهر رمضان",
    basmala: true,
    blocks: [
      {
        type: 'quote',
        content: [
          "L’observation du jeûne pendant ce mois est une obligation divine pour toute personne majeure. Celui qui le conteste est un mécréant. Qui s’y refuse est un impie, s’il le fait exprès, sans empêchement. S’il ne s’en repent pas jusqu’à sa mort, il sera précipité dans les feux de l’enfer.",
          "Le jeûne doit commencer si l’on aperçoit effectivement le croissant lunaire le vingt-neuvième (29e) jour du mois de « barakhlou »..."
        ]
      },
      {
        type: 'summary_grid',
        chapterId: '10',
        content: [
          {
            letter: "A",
            title: "QU’EST-CE QUE LE JEÛNE ?",
            subtitle: "Définition et essence",
            ar: "ما هو الصوم؟",
            icon: "dark_mode",
            sub: ["Nature de l'abstinence", "Intention (Niyyah)"]
          },
          {
            letter: "B",
            title: "QUI DOIT JEÛNER ?",
            subtitle: "Les conditions d'obligation",
            ar: "من يجب عليه الصوم؟",
            icon: "person_check",
            sub: ["Majeurs et responsables", "Cas des voyageurs"]
          },
          {
            letter: "C",
            title: "ACTES BLAMABLES",
            subtitle: "Précautions rituelles",
            ar: "المكروهات",
            icon: "error_outline",
            sub: ["Comportements à éviter", "Préservation du jeûne"]
          },
          {
            letter: "D",
            title: "PETIT DÉJEUNER DE L’AUBE",
            subtitle: "Le repas du « Kheude »",
            ar: "السحور",
            icon: "restaurant",
            sub: ["Mérites du repas", "Limites temporelles"]
          }
        ]
      }
    ]
  },
  "5-a": {
    id: "5-a",
    chapterId: "5",
    sectionId: "a",
    titleFr: "LA PURIFICATION DU CORPS",
    titleAr: "الغسل",
    blocks: [
      {
        type: 'text_block',
        content: [
          "Parmi les différentes sortes de purification, la plus importante est celle du corps (janâba) lorsqu’elle s’impose. Toute personne majeure doit se purifier chaque fois que de besoin. Celui qui nie cette obligation est un mécréant ; celui qui s’y refuse consciemment sans motif valable est un impie et n’a aucune crédibilité. S’il ne s’en repent pas, il sera précipité dans les feux de l’enfer."
        ]
      },
      {
        type: 'procedure',
        titleFr: "Raisons d'une purification",
        titleAr: "موجبات الغسل",
        content: [
          "1° L’éjaculation : consécutive à un grand plaisir ressenti à l’état de veille ou de sommeil. Celui qui constate du sperme sur ses habits après le réveil, sans s’être aperçu de son écoulement, doit se purifier et reprendre toutes les prières accomplies avant cette constatation.",
          "2° Rapports sexuels : après les rapports sexuels, les deux personnes majeures doivent se purifier même s’il n’y a pas eu éjaculation.",
          "3° Menstrues : une femme en période menstruelle doit se purifier après l’arrêt du saignement, quelle qu’en soit la quantité.",
          "4° Accouchement : la purification est obligatoire en cas d’accouchement, même si celui-ci n’est pas accompagné de saignement."
        ]
      },
      {
        type: 'procedure',
        titleFr: "Comment se purifier ?",
        titleAr: "كيفية الغسل",
        content: [
          "Se procurer de l’eau exempte de toute souillure, incolore, inodore et sans saveur.",
          "Se mettre dans un endroit décent et propre, se tourner vers l’Est (Kaaba) et dire « Bismillahi ».",
          "Se laver la main droite jusqu’au poignet trois fois.",
          "Puis laver la main gauche de la même façon.",
          "Laver les parties souillées.",
          "Laver proprement le sexe et formuler intérieurement l’intention de se purifier conformément aux recommandations divines.",
          "Procéder à l’ablution complète en retardant le lavage des pieds.",
          "Prendre de l’eau dans les mains et la passer sur les cheveux de la nuque vers le front.",
          "Se laver la tête trois fois en veillant à faire pénétrer l’eau partout.",
          "Laver les deux oreilles intérieurement et extérieurement en commençant par la droite.",
          "Laver la nuque et le cou.",
          "Laver le côté droit du corps de l’épaule jusqu’au genou.",
          "Procéder de la même manière pour le côté gauche.",
          "Se laver entièrement le dos.",
          "Laver la poitrine et le ventre.",
          "Enfin, laver les deux pieds jusqu’aux chevilles."
        ]
      },
      {
        type: 'comparison',
        content: [
          {
            titleFr: "Les Obligations (Farata)",
            titleAr: "الفراض",
            items: [
              "1. Formuler intérieurement l’intention",
              "2. L’observance de l’ordre indiqué",
              "3. Mouiller le corps intégralement",
              "4. Se rincer le corps avec la main si possible",
              "5. Mouiller la tête jusqu’au cuir chevelu"
            ]
          },
          {
            titleFr: "Les Traditions (Souna)",
            titleAr: "السنن",
            items: [
              "1. Commencer par laver les mains",
              "2. Se rincer la bouche",
              "3. Faire pénétrer l’eau dans les narines",
              "4. Faire sortir l’eau en soufflant",
              "5. Faire passer l’eau par les oreilles"
            ]
          }
        ]
      }
    ]
  },
  "2": {
    id: "2",
    chapterId: "2",
    titleFr: "PRÉFACE & AVANT-PROPOS",
    titleAr: "مقدمة",
    blocks: [
      {
        type: 'split_text',
        content: [
          {
            label: "La Genèse",
            arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ",
            translation: "Au nom d'Allah, le Tout-Miséricordieux, le Très-Miséricordieux !",
            paragraphs: [
              "C’est par le souci de réconcilier le spirituel et le temporel que le Dahira Safinatoul Lamane a été fondé par les enseignants de la commune de Kaolack. Le pragmatisme mouride a amené le Dahira à s’atteler à l’essentiel dès sa création.",
              "C’est ainsi qu’ils entreprirent la traduction du Livre de Serigne Souhaïbou Mbacké, fils de Khadim Rassoul, Fondateur du Mouridisme. Par ce travail le Dahira souhaite détruire le mur qui se dressait devant les francophones en ce qui concerne ce Trésor : cette encyclopédie, ce recueil de rituels de sciences mystiques et de soufisme.",
              "C’est un livre que l’on peut dénommer le Nid parce que d’abord c’est un abri ; il aura été le fruit de recherches entreprises à travers des livres rares, chers et anciens. Il contient des connaissances et des secrets que les chefs religieux de l’époque considéraient comme leur patrimoine personnel."
            ],
            signature: {
              name: "Docteur Khadim Awa Balla Mbacké",
              role: "Pédiatre à l’Hôpital de Kaolack"
            }
          },
          {
            label: "Note de Traduction",
            paragraphs: [
              "L’expérience non linguistique d’une chose est un préalable indispensable à la compréhension de cette chose. Voilà qui en dit long sur la complexité de notre entreprise de traduction, l’exactitude de la traduction étant intimement liée à la maîtrise des concepts de départ et de celles d’arrivée.",
              "Seul le vif intérêt que le livre a suscité en nous nous a poussés à vouloir en faire profiter à ceux d’entre nos coreligionnaires qui n’ont pas eu la chance de pouvoir lire le « WOLOFAL » (texte wolof écrit à partir de l’alphabet arabe) dans le texte."
            ],
            quote: "Nous ne prétendons nullement proposer une traduction parfaite... Inutile donc de préciser que nous avons trahi le texte original. Pour limiter les dégâts, nous avons quelquefois laissé certains vocables non traduits."
          },
          {
            label: "L'Essentiel",
            paragraphs: [
              "Nous nous proposons de rassembler dans ce livre, tout ce qu’il n’est pas permis d’ignorer à une personne majeure. Nous commençons par attester l’unicité de Dieu et rappeler ses attributs : croire au jugement dernier, aux anges, aux livres révélés et au Prophète Mouhammad (PSL).",
              "Ce recueil détaille les devoirs dont toute personne majeure doit s’acquitter : la prière rituelle, la purification, le pèlerinage, la Zakat, le jeûne, ainsi que les pratiques sociales comme le mariage, le baptême, et les règles de vie commune."
            ],
            footer_doua: {
              arabic: "اللَّهُمَّ ثَبِّتْنَا عَلَى دِينِكَ الْإِسْلَامِ",
              phonetic: "Alahouma sabitna hala dinikal islami...",
              translation: "Puisse le Tout Puissant exaucer nos vœux."
            }
          }
        ]
      }
    ]
  },
  "4": {
    id: "4",
    chapterId: "4",
    titleFr: "MOUHAMMADOUNE RASSOUL LOULAHI",
    titleAr: "محمد رسول الله",
    blocks: [
      {
        type: 'text_block',
        content: [
          "Notre Prophète Mouhammadou Rassoû Loulahi (PSL), Service de Dieu, est son Messager qu’il a envoyé auprès de tout le monde.",
          "Tout ce qu’il dit, tout ce qu’il fait est conforme aux instructions divines.",
          "Celui qui en conteste une partie, si petite soit-elle, est un mécréant. Qui en retranche ou en rajoute tant soit peu est digne du plus grand mépris.",
          "S’il ne s’en repent pas, il sera précipité dans les feux de l’enfer. L’objet de sa mission est de nous révéler que nous devons nous soumettre à ses recommandations.",
          "La plus importante parmi celles-ci est la prière (cinq fois par jour)."
        ]
      },
      {
        type: 'arabic_call',
        content: "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ"
      }
    ]
  },
  "6": {
    id: "6",
    chapterId: "6",
    titleFr: "LA PRIÈRE",
    titleAr: "الصلاة",
    basmala: true,
    blocks: [
      {
        type: 'quote',
        content: [
          "Obligation est faite à tout musulman majeur de s’acquitter des cinq (5) prières quotidiennes... Seule la démence peut dispenser de la prière..."
        ]
      },
      {
        type: 'summary_grid',
        chapterId: '6',
        content: [
          { letter: "A", title: "LES PRATIQUES DE LA PRIÈRE", subtitle: "L'Appel", ar: "الأذان", icon: "notifications_active", sub: ["Le Nodd : Appel à la prière","Comment appeler à la prière ?"] },
          { letter: "B", title: "LA PRIÈRE RITUELLE", subtitle: "Fondements", ar: "الصلاة", icon: "person", sub: ["Prérequis et intentions"] },
          { letter: "C", title: "LES CINQ PRIÈRES", subtitle: "Farata et Sounna", ar: "الصلوات", icon: "schedule", sub: ["Horaires et cycles"] },
          { letter: "D", title: "PRATIQUES OBLIGATOIRES", subtitle: "Cas spéciaux", ar: "فرائض", icon: "assignment", sub: ["Adaptations légales"] },
          { letter: "E", title: "PRATIQUES TRADITIONNELLES", subtitle: "Communauté", ar: "السنن", icon: "groups", sub: ["Rituels communautaires"] },
          { letter: "F", title: "LA PRIÈRE DU VENDREDI", subtitle: "Joumou'ah", ar: "صلاة الجمعة", icon: "mosque", sub: ["Précaution et rattrapage"] },
          { letter: "G", title: "PRIÈRES NON EFFECTUÉES", subtitle: "Rattrapage", ar: "قضاء", icon: "history", sub: ["Règles du rattrapage"] },
          { letter: "H", title: "LA PRIÈRE DU VOYAGEUR", subtitle: "Allègement", ar: "صلاة المسافر", icon: "flight_takeoff", sub: ["Raccourcissement (Qasr)"] },
          { letter: "I", title: "ACTES DURANT LA PRIÈRE", subtitle: "Comportement", ar: "أفعال", icon: "accessibility_new", sub: ["Méritoires et blâmables"] },
          { letter: "J", title: "PRIÈRES SURÉROGATOIRES", subtitle: "Volontaires", ar: "النوافل", icon: "auto_awesome", sub: ["La prière du witr"] },
          { letter: "K", title: "LES PRIÈRES DES FÊTES", subtitle: "Hiid", ar: "صلاة العيدين", icon: "celebration", sub: ["Célébrations annuelles"] }
        ]
      }
    ]
  },
  "7": {
    id: "7",
    chapterId: "7",
    titleFr: "LE MALADE MOURANT",
    titleAr: "المريض والمحتضر",
    blocks: [
      {
        type: 'split_text',
        content: [
          {
            label: "Que faire si l’on est malade ?",
            paragraphs: [
              "En cas de maladie, on a le droit de se soigner, de prier for son rétablissement ou de solliciter les prières d’un tiers, ou de prendre des médicaments, qu’ils soient des remèdes traditionnels comme le « sendiègne » ou le « rate » ou autres, qu’ils soient des remèdes de type occidental comme la nivaquine, des médicaments contre le rhume ou autres. Ce dont le malade n’a pas le droit, c’est de consulter un charlatan qui lui donnerait des produits et qui l’amènerait à donner du crédit à ce qu’il raconte. Cela est prohibé par la loi islamique. Quand un malade se trouve dans un état désespéré, il doit essayer de bien se conduire en actes et en paroles et de s’entraîner à maîtriser ses désirs dans le sens d’une conduite conforme à la charia."
            ]
          },
          {
            label: "Relations et Repentir",
            paragraphs: [
              "Évitant les disputes et les tiraillements pour les biens terrestres, il doit demander pardon à ses voisins, à ses femmes, à ses enfants, à ses amis comme à tous ceux avec qui il entretenait des relations, et cela à propos de tout ce qu’il a pu leur faire ou leur dire. Il doit également s’attendre à mourir à tout moment, considérant aussi chaque souffle comme étant le dernier, tout en priant le Tout-Puissant de lui accorder une fin heureuse."
            ]
          }
        ]
      },
      {
        type: 'comparison',
        content: [
          {
            titleFr: "Devoirs du malade",
            items: [
              "Redoubler d’efforts dans le respect des cinq (5) prières",
              "Éviter toute souillure",
              "S’entourer de ses proches parents",
              "Les proches doivent éviter de manifester leur désespoir"
            ]
          },
          {
            titleFr: "Visite aux malades",
            items: [
              "Les parents ont le devoir de lui rendre visite",
              "Il n’y a pas de jour préféré pour la visite",
              "Si on formule des prières pour un malade non condamné, il sera rétabli"
            ]
          }
        ]
      },
      {
        type: 'arabic_call',
        content: "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ"
      },
      {
        type: 'text_block',
        content: [
          "« as aloulâ al hazima rabbalharchil azimi an yachfiyaka bi chifahihi » (7 fois)",
          "Si, par contre, le malade est condamné, celui qui a prononcé ces prières bénéficiera de beaucoup de bénédictions. On doit également l’inciter à aimer se repentir et l’aider à demeurer optimiste vis-à-vis du Créateur. Il lui est recommandé de toujours se parfumer et de porter des habits propres."
        ]
      },
      {
         type: 'comparison',
         content: [
           {
             titleFr: "En cas de décès",
             items: [
               "On ne sera pas inquiété dans la tombe",
               "On gardera la foi jusqu’à la mort",
               "Faveurs de celui qui est tombé en guerre sainte"
             ]
           },
           {
             titleFr: "En cas de guérison",
             items: [
               "Pardon de tous ses péchés, les premiers comme les derniers"
             ]
           }
         ]
      },
      {
        type: 'split_text',
        content: [
          {
            label: "Position et Paroles",
            paragraphs: [
              "S’il semble être dans l’agonie, on le couche sur le côté droit, la face dirigée vers la Kaaba (khibla). Si cela n’est pas possible, on le couche sur le côté gauche. Si toutes ces éventualités sont exclues, on le couche sur le dos, les jambes dirigées vers la Kaaba.",
              "Il est recommandé de rester à son chevet et de prononcer constamment la formule « lahi laha ilalhou mouhamadoune rassouloulahi » de manière à la lui rappeler sans pour autant lui demander la répétition. S’il la reprend une seule fois, cela suffira, à condition qu’il n’y ajoute rien d’autre. Avant de le coucher, on doit s’efforcer de lui faire répéter ladite formule."
            ]
          },
          {
            label: "Besoins et Environnement",
            paragraphs: [
              "Il est aussi méritoire de lui donner à boire de l’eau fraîche, mais s’il en exprime le besoin, cela devient obligatoire. Il est aussi recommandé de réciter la sourate « yacine » à son chevet et à haute voix, ainsi que la sourate « rahdi » à voix basse. Cela supprime la soif de l’agonie et adoucit la mort.",
              "Il est aussi recommandé qu’on le mette en état de pureté et qu’on l’éloigne de toute souillure. Il est recommandé aux personnes en état de souillure (djanaba) de ne pas s’approcher de lui. Il est aussi recommandé d’éloigner les images représentant des êtres vivants. On doit également éloigner de son voisinage tout objet d’agrément ou de loisir comme la radio, la guitare ou un chien. Il est souhaitable que ses amis soient présents."
            ]
          }
        ]
      }
    ]
  },
  "8": {
    id: "8",
    chapterId: "8",
    titleFr: "LE MORT",
    titleAr: "الميت",
    basmala: true,
    blocks: [
      {
        type: 'quote',
        content: [
          "S’il s’éteint et que ses yeux restent ouverts, les lui fermer en prononçant ceci : « Bismilahi wa ala mil lati rassolilahi... ». Il convient d’immobiliser la mâchoire de manière à empêcher la bouche de béer. On doit payer rapidement ses dettes et exécuter ses dernières volontés..."
        ]
      },
      {
        type: 'summary_grid',
        chapterId: '8',
        content: [
          { letter: "A", title: "LE LAVAGE MORTUAIRE", subtitle: "Purification", ar: "غسل الميت", icon: "opacity", sub: ["Procédure complète", "Précautions rituelles"] },
          { letter: "B", title: "LA PRIÈRE MORTUAIRE", subtitle: "Janāzah", ar: "صلاة الجنازة", icon: "church", sub: ["15 cas de figures", "Règles des retardataires"] },
          { letter: "C", title: "L’INHUMATION", subtitle: "Mise en terre", ar: "الدفن", icon: "account_balance_wallet", sub: ["Dimensions de la tombe", "Introduction du corps"] },
          { letter: "D", title: "PRIÈRES ET CONDOLÉANCES", subtitle: "Ziarra", ar: "الدعاء والتعزية", icon: "volunteer_activism", sub: ["Visite des cimetières", "Invocations de soutien"] }
        ]
      }
    ]
  },
  "9": {
    id: "9",
    chapterId: "9",
    titleFr: "LA ZAKAT",
    titleAr: "الزكاة",
    basmala: true,
    blocks: [
      {
        type: 'quote',
        content: [
          "Qui nie cela est un mécréant ; qui cesse délibérément de s’en acquitter... est un impie..."
        ]
      },
      {
        type: 'summary_grid',
        chapterId: '9',
        content: [
          { letter: "A", title: "L'ARGENT ÉPARGNÉ", subtitle: "Al-māl al-muddkhar", ar: "المال المُدَّخَر", icon: "savings", sub: ["Le travail salarié", "Celui qui dispose d'un capital"] },
          { letter: "B", title: "PRODUITS AGRICOLES", subtitle: "Lil-muntajāt az-zirāʿiyya", ar: "المنتجات الزراعية", icon: "agriculture", sub: ["Arachide et Mil", "Règles d'arrosage"] },
          { letter: "C", title: "A PROPOS DU BÉTAIL", subtitle: "Ḥawl al-māshiya", ar: "حول الماشية", icon: "pets", sub: ["Bovins, ovins et caprins", "Seuils de prélèvement"] },
          { letter: "D", title: "QUI A DROIT A LA ZAKAT ?", subtitle: "Man lahu al-ḥaqq", ar: "مستحقو الزكاة", icon: "volunteer_activism", sub: ["Les 8 catégories", "Conditions d'éligibilité"] },
          { letter: "E", title: "ZAKAT AL-FITR", subtitle: "La rupture du jeûne", ar: "زكاة الفطر", icon: "redeem", sub: ["Nature et quantité", "Moment du prélèvement"] }
        ]
      }
    ]
  },
  "6-a": {
    id: "6-a",
    chapterId: "6",
    sectionId: "a",
    titleFr: "L'APPEL À LA PRIÈRE",
    titleAr: "الأذان - النّدّ",
    blocks: [
      {
        type: 'text_block',
        content: [
          "Après la purification du corps, des habits et des lieux de prière, il faut cacher au moins ses parties intimes, faute de quoi la prière n’est pas valable. S’il s’agit d’un homme, il doit se couvrir des épaules jusqu’aux genoux. Quant à la femme, elle doit se couvrir tout le corps à l’exception des paumes des mains et du visage. Toute partie devant être couverte et qui ne l’est pas chez l’homme ou la femme annule la prière ; réparation doit être faite alors immédiatement."
        ]
      },
      {
        type: 'split_text',
        content: [
          {
            label: "Définition et Statut",
            paragraphs: [
              "C’est une pratique traditionnelle (sounna) presque obligatoire pour toute mosquée ou pour tout rassemblement de personnes susceptibles d’en drainer d’autres. Pour celui qui a l’habitude d’annoncer l’heure de la prière, le faire devient pour lui une pratique traditionnelle (sounna), même s’il ne se trouve pas dans une mosquée.",
              "Il est méritoire pour une personner qui se trouve seule en brousse ou dans les champs d’appeler à la prière. Lorsqu’il y a des mosquées dans le même voisinage, l’appel à la prière devient pour chacune d’elles une pratique traditionnelle.",
              "Pour être valable, l’appel doit être effectué par un homme musulman jouissant de ses facultés mentales. L’appel à la prière effectué par une femme est blâmable. Il est préférable que le muezzin soit un homme qui ait de la retenue (masrur), ayant une bonne notion de l’heure, ayant une voix belle et forte, et soit en état de pureté (ablutions)."
            ]
          },
          {
            label: "Règles du Muezzin",
            paragraphs: [
              "Durant l’appel, il ne doit pas parler, il ne doit pas saluer quelqu’un, ni répondre à une salutation ; il ne doit l’interrompre sous aucun prétexte.",
              "On ne doit pas appeler à la prière avant l’heure prescrite, sauf pour celle de l’aube (sobh).",
              "Pour cette dernière, il est méritoire de faire l’appel avant l’heure, notamment vers la fin de la sixième et dernière partie de la nuit."
            ]
          }
        ]
      },
      {
        type: 'procedure',
        titleFr: "Comment appeler à la prière ?",
        content: [
          "Alahou akbar (2 fois - Haute voix)",
          "Hach hadou ann laa ilaaha ilal lâh (2 fois - Voix basse)",
          "Hach hadou anna Mouhammadan Rassouloulah (2 fois - Voix basse)",
          "Hach hadou ann laa ilaaha ilal lâh (2 fois - Haute voix)",
          "Hach hadou anna Mouhammadane Rassouloula (2 fois - Haute voix)",
          "Haya halas sala (2 fois - Haute voix)",
          "Haya alal fala (2 fois - Haute voix)",
          "Has salâtou khaïroune mina nawmi (2 fois - Uniquement pour le Sobh)",
          "Allahou akbar (2 fois)",
          "Lah ilaha ilal laa (1 fois)"
        ]
      }
    ]
  },
  "8-a": {
    id: "8-a",
    chapterId: "8",
    sectionId: "a",
    titleFr: "LE LAVAGE MORTUAIRE",
    titleAr: "غسل الميت",
    blocks: [
      {
        type: 'text_block',
        content: [
          "Celui-là même désigné éventuellement par l’intéressé avant sa mort, s’il en est capable. Ainsi, une personne peut procéder à la toilette funèbre de son conjoint ; cela s’étend à la « târa ».",
          "S’il s’agit d’une femme non mariée ou d’une femme dont le mari ne peut pas procéder à la toilette, dans ce cas, on doit absolument faire appel à une femme la plus proche possible ou la plus intime de la défunte. En l’absence de toute femme, un homme qui ne pourrait pas l’épouser (pour cause d’inceste) peut procéder au lavage, mais en prenant la précaution de lui couvrir tout le corps et de se servir d’une étoffe très épaisse qu’il met entre sa main et le corps.",
          "En l’absence de toute femme et de tout homme qui n’aurait pas pu l’épouser de son vivant, on lui fait alors la lustration pulvérale (tîm) ; pour cela, on évitera d’aller au-delà des poignets de ses mains. Si, par contre, une femme est amenée à faire à un homme (mort) la lustration pulvérale, elle peut aller jusqu’à ses coudes. Si un homme procède au lavage d’un autre homme (mort), il doit lui couvrir les parties intimes et les laver à grande eau en ayant soin de se servir d’une étoffe."
        ]
      },
      {
        type: 'procedure',
        titleFr: "Méthode de lavage",
        content: [
          "Premier lavage : utiliser des feuilles de jujubier.",
          "Second lavage : conformément aux règles de la grande purification.",
          "Troisième lavage : utiliser du camphre ou de l’eau de cologne.",
          "Si nécessaire, augmenter le nombre de lavages jusqu’à ce que le corps soit propre (préférablement un nombre impair jusqu’à 7).",
          "Il est souhaitable de porter le corps sur quelque chose d’élevé pour laisser l’eau couler.",
          "Après le lavage, essuyer avec une serviette et couvrir rapidement.",
          "Si un écoulement survient après le lavage, nettoyer simplement la partie concernée sans reprendre tout le lavage."
        ]
      },
      {
        type: 'comparison',
        content: [
          {
            titleFr: "Le Linceul (Homme)",
            items: ["Un boubou", "Un pantalon", "Un turban (kâla)", "Deux couvertures", "Total : 5 morceaux"]
          },
          {
            titleFr: "Le Linceul (Femme)",
            items: ["Un boubou", "Un pagne", "Un mouchoir de tête", "Quatre couvertures", "Total : 7 morceaux"]
          }
        ]
      }
    ]
  },
  "9-a": {
    id: "9-a",
    chapterId: "9",
    sectionId: "a",
    titleFr: "L'ARGENT ÉPARGNÉ",
    titleAr: "المال المدخر",
    blocks: [
      {
        type: 'text_block',
        content: [
          "Celui qui garde mille francs (1000 Frcs) pendant un an devra en prélever la zakat, que ce soit de l’argent gardé ou produit par le commerce. S’il s’agit de quelqu’un qui vend au jour le jour sans spéculer et se hâte d’acheter d’autres marchandises, il devra, au bout d’un an, faire une estimation des marchandises qu’il a encore en stock et la somme qu’il pourra à coup sûr retirer des crédits alloués ; il ajoute à cela la somme d’argent dont il dispose effectivement.",
          "Le montant de la zakat est fixé à vingt-cinq pour mille (25‰).",
          "N’entrent pas dans cette estimation les outils de travail comme les boutiques et les moyens de transport. Cependant, pour tout outil vendu, il doit se rappeler la date d’acquisition ou de la dernière zakat, si le produit est >= 1000 Frcs."
        ]
      },
      {
        type: 'split_text',
        content: [
          {
            label: "Véhicules et Immobilier",
            paragraphs: [
              "Si l’on possède une maison à louer ou des véhicules, on n’en prélèvera pas la zakat tant qu’on ne les aura pas vendus. Si on les vend, on considère la date du dernier prélèvement sur le capital d’achat ; si une année s’est écoulée et que la somme est imposable, la zakat s’impose.",
              "On ne prélève qu’une année de zakat quel que soit le temps de possession. Le loyer est imposable s’il est épargné pendant un an."
            ]
          }
        ]
      }
    ]
  },
  "5": {
    id: "5", chapterId: "5", titleFr: "LES PRATIQUES RELIGIEUSES", titleAr: "الغسل",
    blocks: [
      {
        type: 'summary_grid',
        chapterId: '5',
        content: [
          { letter: "A", title: "LA PURIFICATION", subtitle: "(Lavage rituel)", ar: "الغسل", icon: "water_drop", sub: ["Raisons d'une purification", "Comment se purifier ?", "Farata & Souna"] },
          { letter: "B", title: "LES ABLUTIONS", subtitle: "(Lavage partiel)", ar: "الوضوء", icon: "waves", sub: ["Causes d'annulation", "Le Siwou", "Pratique & Mérites"] },
          { letter: "C", title: "LE TAYAMOUM", subtitle: "(Ablution sèche)", ar: "التيمم", icon: "landscape", sub: ["Comment pratiquer ?", "Pratiques obligatoires", "Traditions"] },
          { letter: "D", title: "LES SOUILLURES", subtitle: "(Impuretés)", ar: "النجاسات", icon: "cleaning_services", sub: ["Nature des souillures", "Méthodes de nettoyage"] },
          { letter: "E", title: "LES MENSTRUES", subtitle: "(Règles)", ar: "الحيض", icon: "calendar_month", sub: ["Cycles & Habitudes", "Arrêt des menstrues"] },
          { letter: "F", title: "LES LOCHIES", subtitle: "(Accouchement)", ar: "النفاس", icon: "child_care", sub: ["Règles après accouchement", "Durées légales"] }
        ]
      }
    ]
  },
  "5-b": {
    id: "5-b", chapterId: "5", sectionId: "b", titleFr: "LES ABLUTIONS", titleAr: "الوضوء",
    blocks: [
      { type: 'quote', content: ["Toute personne majeure doit faire ses ablutions avant de prier ou de toucher le Saint Coran. Celui qui transgresse cette prescription de façon délibérée et sans excuse est digne du plus grand mépris."] },
      { type: 'procedure', titleFr: "Causes d'annulation", titleAr: "نواقض الوضوء", content: ["1. Le pet.", "2. Le fait d’aller à la selle.", "3. Le fait d’uriner.", "4. La sécrétion de liquide prostatique (Madji)...", "5. La sortie du « wadiyu »...", "6. La sécrétion du sperme due à une maladie...", "7. La sécrétion du liquide précédant l’accouchement...", "8. Crise d’épilepsie ou de folie.", "9. L’évanouissement.", "10. L’ivresse.", "11. Le sommeil profond...", "12. Toucher une femme avec intention d'en jouir...", "13. Le baiser bouche à bouche...", "14. Toucher sa verge...", "15. Doute sur l'ablution."] },
      { type: 'split_text', content: [{ label: "Le Siwou (Lavage Intime)", paragraphs: ["Consiste à laver proprement les parties intimes avec de l’eau non souillée avant de quitter les lieux."], quote: "Bismilahi allahouma iniya a hons oubika minal khouboussi wal khabâ issi." }] },
      { type: 'procedure', titleFr: "Pratique de l'ablution", titleAr: "صفة الوضوء", content: ["Chercher de l’eau non souillée...", "Se laver les mains (3 fois)...", "Se rincer la bouche (3 fois).", "Aspirer l’eau par les narines...", "Se laver le visage (3 fois)...", "Se laver l’avant-bras droit, puis le gauche...", "Passer l’eau sur la tête...", "Se laver les oreilles...", "Enfin se laver le pied droit (3 fois), puis le gauche."] }
    ]
  },
  "5-c": {
    id: "5-c", chapterId: "5", sectionId: "c", titleFr: "LE TAYAMOUM", titleAr: "التيمم",
    blocks: [
      { type: 'text_block', content: ["La lustration pulvérale est autorisée à celui qui veut effectuer sa prière ou lire ou écrire le Coran... lorsqu’il est dans l’impossibilité totale de trouver l’eau..."] },
      { type: 'procedure', titleFr: "Comment pratiquer ?", titleAr: "كيفية التيمم", content: ["Attendre le moment précis...", "Y bien appuyer les paumes sur le sable...", "Bien frotter tout le visage...", "Formuler intérieurement à ce moment l’intention...", "Remettre les paumes sur le sable...", "Placer le dos de la main droit...", "Frotter ensuite l’intérieur de l’avant-bras...", "Frotter l’intérieur du pouce droit...", "Frotter les deux paumes et entrecroiser les doigts."] },
      { type: 'comparison', content: [
        { titleFr: "8 Obligations (Farata)", titleAr: "الفراض", items: ["1. Formuler intérieurement l’intention", "2. Appuyer les mains sur le sol une première fois", "3. Frotter l’ensemble du visage", "4. Frotter entièrement les mains jusqu’aux poignets", "5. Veiller à la propreté du lieu", "6. Respecter l’ordre établi", "7. Accomplir aussitôt après ce pourquoi on a fait la lustration", "8. Faire la lustration à l’heure prescrite"] },
        { titleFr: "4 Traditions (Souna)", titleAr: "السنن", items: ["1. Respecter l’ordre établi", "2. Poser les mains une deuxième fois", "3. Frotter les avant-bras à partir du poignet", "4. Frotter les différentes parties sans enlever la poussière"] }
      ]}
    ]
  },
  "5-d": {
    id: "5-d", chapterId: "5", sectionId: "d", titleFr: "LES SOUILLURES", titleAr: "النجاسات",
    blocks: [
      { type: 'split_text', content: [
        { label: "OBLIGATION DE NETTOYAGE", paragraphs: ["Obligation est faite à tout croyant d’enlever les souillures laissées sur son corps..."] },
        { label: "LE CAS DU CHIEN", paragraphs: ["Lorsqu’un chien boit dans un récipient..."] },
        { label: "EAUX COURANTES ET SOURCES", paragraphs: ["S’il s’agit d’une eau courante comme celle des marigots..."] },
        { label: "ALIMENTS ET BLESSURES", paragraphs: ["Tout aliment susceptible d’altération..."] },
        { label: "CAS DE CONJONCTIVITE", paragraphs: ["En cas de conjonctivite grave, on doit faire passer la main sur les yeux..."] }
      ]}
    ]
  },
  "5-e": {
    id: "5-e", chapterId: "5", sectionId: "e", titleFr: "LES MENSTRUES", titleAr: "الحيض",
    blocks: [
      { type: 'split_text', content: [
        { label: "DÉFINITION ET CATÉGORIES", paragraphs: ["C’est l’écoulement de sang propre à la femme de 9 ans au moins..."] },
        { label: "1° - LA FEMME DÉBUTANTE", paragraphs: ["Pour la première, la durée de l’écoulement n’excède pas quinze jours..."] },
        { label: "2° - LA FEMME HABITUÉE", paragraphs: ["Si l’écoulement se manifeste plus longtemps que d’habitude, elle attend trois jours..."] },
        { label: "3° - LA FEMME ENCEINTE", paragraphs: ["Rare avant les deux premiers mois. Entre le 2ème et le 6ème mois, l’écoulement ne peut excéder 20 jours..."] },
        { label: "SIGNES DE L'ARRÊT", paragraphs: ["Il y a deux façons de reconnaître l’arrêt : 1. La siccité... 2. L’écoulement d’un liquide blanc..."] },
        { label: "INTERDICTIONS", paragraphs: ["La femme en menstrues ne doit pas : Faire ses prières, jeûner, etc."] }
      ]}
    ]
  },
  "5-f": {
    id: "5-f", chapterId: "5", sectionId: "f", titleFr: "LES LOCHIES", titleAr: "النفاس",
    blocks: [
      { type: 'split_text', content: [
        { label: "DÉFINITION ET DURÉE", paragraphs: ["L’accouchement s’accompagne de sang...", "La durée maximale des lochies n’excède jamais soixante (60) jours."] },
        { label: "CAS D'INTERRUPTION", paragraphs: ["S’il y a interruption et reprise des lochies et que cette interruption reste inférieure à 15 jours..."] },
        { label: "OBLIGATIONS ET PRATIQUES", paragraphs: ["La femme en période de lochies et la femme en période de menstrues sont astreintes aux mêmes interdits..."] },
        { label: "RECOMMANDATIONS POUR LA GROSSESSE", paragraphs: ["Il est recommandé d’éviter un excès d’activités..."] }
      ]}
    ]
  },
  "11": {
    id: "11", chapterId: "11", titleFr: "LE PÈLERINAGE", titleAr: "الحج",
    blocks: [
      { type: 'text_block', content: ["Aller à la Mecque une seule fois dans sa vie est une obligation divine pour tout musulman qui a la résistance physique nécessaire et le viatique suffisant..."] },
      { type: 'summary_grid', chapterId: '11', content: [
        { letter: "A", title: "LE PETIT PÈLERINAGE (OUMRA)", subtitle: "La visite pieuse", ar: "العمرة", icon: "directions_walk", sub: ["Statut religieux", "Actes essentiels"] }
      ]}
    ]
  },
  "11-a": {
    id: "11-a", chapterId: "11", sectionId: "a", titleFr: "LE PETIT PÈLERINAGE", titleAr: "العمرة",
    blocks: [
      { type: 'text_block', content: ["LE PETIT PÈLERINAGE OU « OUMRA » : L’effectuer une seule fois est une pratique traditionnelle. Il est identique à tous points au pèlerinage, mais il prend fin avec le circuit entre Safa et Marwa."] },
      { type: 'text_block', content: ["Qu’on sache que le pèlerinage à la Mecque et tous ces actes de dévotion ont la même valeur..."] }
    ]
  },
  "12": {
    id: "12", chapterId: "12", titleFr: "LE MARIAGE", titleAr: "الزواج",
    blocks: [
      { type: 'text_block', content: ["Il est recommandé à qui en a les moyens et en éprouve le besoin. Il devient une obligation si l’on sent qu’on ne peut pas s’en passer."] },
      { type: 'summary_grid', chapterId: '12', content: [
        { letter: "A", title: "LES OBLIGATIONS", ar: "الواجبات", icon: "how_to_reg", sub: ["Conditions de validité", "Dot et consentement"] },
        { letter: "B", title: "LA CÉLÉBRATION", ar: "الاحتفال بالزواج", icon: "loyalty", sub: ["Formalités rituelles", "Sunna de la cérémonie"] },
        { letter: "C", title: "L’ACTE CONJUGAL", ar: "الجماع", icon: "favorite", sub: ["Éthique et invocations", "Droits respectifs"] },
        { letter: "D", title: "LA FEMME ENCEINTE", ar: "المرأة الحامل", icon: "pregnant_woman", sub: ["Précautions à prendre", "Santé et spiritualité"] },
        { letter: "E", title: "LE BAPTÊME", ar: "العقيقة", icon: "child_care", sub: ["Le nom de l'enfant", "Sacrifice et mérites"] },
        { letter: "F", title: "REMÈDES POUR L’ENFANT", ar: "علاجات الطفل", icon: "medical_services", sub: ["Maux d'oreilles", "Gadam", "Digestion"] },
        { letter: "G", title: "LE SEVRAGE", ar: "الفطام", icon: "styler", sub: ["Période et transition", "Bien-être de l'enfant"] },
        { letter: "H", title: "L’ÉDUCATION", ar: "تربية الطفل", icon: "school", sub: ["Valeurs islamiques", "Responsabilité"] }
      ]}
    ]
  },
  "12-a": {
    id: "12-a", chapterId: "12", sectionId: "a", titleFr: "LES OBLIGATIONS", titleAr: "الواجبات",
    blocks: [
      { type: 'text_block', content: ["Il n’y a mariage que sur la base d’un acte stipulant qu’une telle a été donnée en mariage à un tel avec consentement... La dot doit être présentée ; à défaut, on fixe le montant et l’échéance."] },
      { type: 'procedure', titleFr: "Conditions & empêchements", content: ["1. La femme ne doit pas se trouver en période de retraite (ida).", "2. L’homme ne doit pas avoir déjà quatre (4) femmes."] }
    ]
  },
  "12-b": {
    id: "12-b", chapterId: "12", sectionId: "b", titleFr: "LA CÉLÉBRATION", titleAr: "عقد النكاح",
    blocks: [
      { type: 'split_text', content: [
        { label: "Le Kilifa de la fille", paragraphs: ["Il doit réciter le « fatiha » trois fois, ensuite dire... « fa inni khad zawaddjitou foulânana... »"] },
        { label: "Le Kilifa du marié", paragraphs: ["Il dit... « fa inni khad khabiltou nikâhaheu... »"] },
        { label: "Témoins et Invocations", paragraphs: ["Deux témoins : « had chahina ala zâlika »", "Invocations de l'assistance : « bâraka lahou likouline minn koumâ... »"] }
      ]}
    ]
  },
  "12-c": {
    id: "12-c", chapterId: "12", sectionId: "c", titleFr: "L’ACTE CONJUGAL", titleAr: "الجماع",
    blocks: [
      { type: 'text_block', content: ["Si la femme doit rejoindre son mari, il est souhaitable qu’ensemble, ils fassent leurs ablutions..."] },
      { type: 'text_block', content: ["Au moment des rapports, il doit au préalable formuler l’intention de jouir de l’acte... Invoquer : « bismilahi rahmani rahimi alahouma dianibna chaïtana... »"] },
      { type: 'quote', content: ["Il est interdit aux partenaires de parler, de regarder ses parties intimes ou celles de son conjoint pendant ces rapports."] },
      { type: 'text_block', content: ["Il est recommandé, avant d’entamer de nouveaux rapports, que chacun d’eux aille uriner et se laver les parties intimes... Dormir ou manger en état de souillure fait partie des causes qui provoquent la pauvreté."] }
    ]
  },
  "12-d": {
    id: "12-d", chapterId: "12", sectionId: "d", titleFr: "LA FEMME ENCEINTE", titleAr: "الحامل",
    blocks: [
      { type: 'text_block', content: ["La femme doit éviter, pendant le premier mois de sa grossesse, de boire du lait fermenté, du tamarin, de l’oseille..."] },
      { type: 'text_block', content: ["Protection spirituelle : Il est souhaitable d’écrire ce qui suit et d’en faire un gris-gris... « Inna lezi farada aleykal khour āna... »"] },
      { type: 'split_text', content: [
        { label: "Rite des trois mois", paragraphs: ["Quand la grossesse atteint trois mois, il est recommandé de réciter les noms suivants : Abdoulaye Ibn Omar, Abdoulaye Ibn Massehôd..."] },
        { label: "Naissance et Protection", paragraphs: ["Contre la mortalité infantile : On écrit 61 fois « Bismillahi Rahmani Rahimi ».", "À la naissance : Réciter « inna anzal-nahou », faire l'appel à la prière dans l'oreille droite..."] }
      ]}
    ]
  },
  "12-e": {
    id: "12-e", chapterId: "12", sectionId: "e", titleFr: "LE BAPTÊME", titleAr: "العقيقة",
    blocks: [
      { type: 'text_block', content: ["Il est recommandé de lui donner un nom au septième jour de sa naissance et, à cette occasion, de sacrifier de préférence un bélier sans défaut..."] },
      { type: 'text_block', content: ["Avant de dire le nom, celui qui tient l'enfant doit prononcer ceci : « Bismi lahi rahmani rahimi alahouma lakal hamdou... » Ensuite, il dira l’appel à la prière dans l’oreille droite, prononcera le nom, puis dira le ré-appel dans l’oreille gauche."] },
      { type: 'text_block', content: ["S’il s’agit de jumeaux, on doit trouver une bête pour chacun... Il n’est pas recommandé de faire toucher à l’enfant du sang de l’animal immolé."] }
    ]
  },
  "12-f": {
    id: "12-f", chapterId: "12", sectionId: "f", titleFr: "QUELQUES REMÈDES", titleAr: "علاج الطفل",
    blocks: [
      { type: 'split_text', content: [
        { label: "Soins Naturels", paragraphs: ["Toux & Coqueluche : Lait frais de chèvre + miel.", "Otite : Blanc d'œuf ou diwounior chauffé.", "Mal de Ventre : nânâ trempé dans l'eau."] },
        { label: "Poussée Dentaire", paragraphs: ["Réciter Ayatoul Koursiyou (10x) suivi de Li ilafi (3x)..."] },
        { label: "Maux de tête", paragraphs: ["Poser la main sur la tête et dire (3 fois) : « Bismilahi khayril asmâni... »"] },
        { label: "Remède Universel", paragraphs: ["Dire « Imnah minî hâzal marada... » après 2 rakkas pour être guéri."] }
      ]}
    ]
  },
  "12-g": {
    id: "12-g", chapterId: "12", sectionId: "g", titleFr: "LE SEVRAGE", titleAr: "الفطام",
    blocks: [
      { type: 'split_text', content: [
        { label: "Périodes et Durées", paragraphs: ["Grossesse de 7 mois : sevrage après 23 mois d’allaitement.", "Grossesse de 9 mois : sevrage après 21 mois d’allaitement.", "Le sevrage s’impose dès l’apparition d’une nouvelle grossesse."] },
        { label: "Rites et Protections", paragraphs: ["Il est recommandé d’écrire la sourate « Bourôdji » et d'en faire un gris-gris..."] }
      ]}
    ]
  },
  "12-h": {
    id: "12-h", chapterId: "12", sectionId: "h", titleFr: "L’ÉDUCATION", titleAr: "تربية الأولاد",
    blocks: [
      { type: 'timeline', content: [
        { age: \"5 ans\", title: \"Bonnes habitudes\", text: \"Initier aux bonnes habitudes (manger avec la main droite, dire Bismilahi, etc.).\" },
        { age: \"6 ans\", title: \"École coranique\", text: \"Circoncision et envoi à l'école coranique.\" },
        { age: \"9 ans\", title: \"Pudeur\", text: \"Le garçon ne doit plus partager le lit de sa mère ou de sa sœur.\" },
        { age: \"12 ans\", title: \"Enseignement religieux\", text: \"Enseigner les obligations religieuses ainsi que les règles de bienséance.\" },
        { age: \"13 ans\", title: \"Obligation\", text: \"Obliger à prier et à jeûner.\" },
        { age: \"16 ans\", title: \"Mariage\", text: \"Le mariage si le père en a les moyens.\" },
        { age: \"18 ans\", title: \"Responsabilité\", text: \"Responsabilité majeure (obligation de prier et jeûner).\" }
      ]}
    ]
  },
  "13": {
    id: "13", chapterId: "13", titleFr: "LE DIVORCE", titleAr: "الطلاق",
    blocks: [
      { type: 'text_block', content: ["Consiste à rompre les liens du mariage. Il est préférable qu’il soit prononcé à un moment où la femme est en état de pureté, à un moment où on n’a pas eu de rapports avec elle..."] },
      { type: 'summary_grid', chapterId: '13', content: [
        { letter: "A", title: "LA RETRAITE LÉGALE", ar: "العدة", icon: "hourglass_empty", sub: ["Définition de l'Idda", "Délais et conditions"] },
        { letter: "B", title: "LES CAS DE DIVORCE", ar: "أقسام الطلاق", icon: "gavel", sub: ["Fayeli (Provisoire)", "Divorce Expiatoire", "Irréversible"] }
      ]}
    ]
  },
  "13-a": {
    id: "13-a", chapterId: "13", sectionId: "a", titleFr: "LA RETRAITE LÉGALE", titleAr: "العدة",
    blocks: [
      { type: 'split_text', content: [
        { label: "En cas de Viduité", paragraphs: ["Femme libre : 4 mois et 10 jours.", "Esclave : 2 mois et 5 jours."] },
        { label: "En cas de Divorce", paragraphs: ["Femme libre : 3 périodes de pureté consécutives.", "Absence de cycles / Ménopause : 3 mois.", "Grossesse : Jusqu'à l'accouchement."] }
      ]}
    ]
  },
  "13-b": {
    id: "13-b", chapterId: "13", sectionId: "b", titleFr: "LES CAS DE DIVORCE", titleAr: "أقسام الطلاق",
    blocks: [
      { type: 'split_text', content: [
        { label: "1. Le titre provisoire (fayeli)", paragraphs: ["C’est le divorce qui n’est pas prononcé 3 fois... le mari peut reprendre sa femme si l'Idda n'est pas épuisée."] },
        { label: "2. Le titre expiatoire", paragraphs: ["Divorce exigé par la femme ou par la charia (comportement anormal du mari)."] },
        { label: "3. Le divorce irréversible", paragraphs: ["C’est quand le divorce est prononcé 3 fois ou une seule fois avec la ferme intention d’en finir. Ce divorce ne peut être réparé."] },
        { label: "Dispositions Spécifiques", paragraphs: ["Pendant la retraite légale, la femme ne doit pas aller loin de chez elle...", "Le Mari Disparu ou Absent : attente de 4 ans si elle est dans un pays musulman et a des vivres."] }
      ]}
    ]
  },
  "14": {
    id: "14", chapterId: "14", titleFr: "CRÉDIT PROHIBÉ", titleAr: "المنتجات الممنوع فيها النسيئة",
    blocks: [
      { type: 'text_block', content: ["Il n’est pas permis de donner sous forme de prêt (crédit) certains produits, que ce soit de la même espèce ou non."] },
      { type: 'text_block', content: ["Troc de même espèce : l’échange, lorsqu’il se fait sur place (troc), est permis s’il s’agit de la même espèce de produits... les deux quantités échangées doivent être égales."] },
      { type: 'text_block', content: ["Espèces Différentes : Si les deux produits échangés ne sont pas de la même espèce... il est admis que l’une des quantités soit plus grande que l’autre. Idem pour les fruits."] }
    ]
  },
  "15": {
    id: "15", chapterId: "15", titleFr: "L'ACTE D'ÉGORGER", titleAr: "الذبح",
    blocks: [
      { type: 'text_block', content: ["Seul le musulman jouissant de ses facultés mentales a le droit d’égorger. La meilleure manière de s’y prendre est de coucher l’animal sur le côté gauche, la tête tournée vers la Qibla..."] },
      { type: 'text_block', content: ["En appliquant le couteau, dire : « Bismilahi ». Quand le sang aura giclé, dire : « Allahou Akbar » puis « Rabanna taqabbal minnâ innaka anta samî‘ou l-‘alîm »."] },
      { type: 'summary_grid', chapterId: '15', content: [
        { letter: "A", title: "LE CHASSEUR", ar: "الصياد", icon: "pets", sub: ["Règles de la chasse", "Usage des armes et chiens"] },
        { letter: "B", title: "TABASKI (AÏD AL-ADHA)", ar: "عيد الأضحى", icon: "festival", sub: ["Sacrifice rituel", "Conditions de l'animal"] }
      ]}
    ]
  },
  "15-a": {
    id: "15-a", chapterId: "15", sectionId: "a", titleFr: "LE CHASSEUR", titleAr: "أحكام الصيد",
    blocks: [
      { type: 'text_block', content: ["Il est recommandé au chasseur de dire « Bismilahi » avant de charger son fusil ; il répétera cette formule au moment d’appuyer sur la détente."] },
      { type: 'split_text', content: [
        { label: "Animaux Consommables", paragraphs: ["Toutes les espèces d’oiseaux ainsi que les animaux dits « Ndondeutes » sont consommables..."] },
        { label: "Interdictions Formelles", paragraphs: ["Le Porc, Le Phacochère, Le Mulet, Le Zèbre, Le Cheval, L'Âne. Ces animaux sont strictement interdits à la consommation."] }
      ]}
    ]
  },
  "15-b": {
    id: "15-b", chapterId: "15", sectionId: "b", titleFr: "TABASKI", titleAr: "عيد الأضحى",
    blocks: [
      { type: 'text_block', content: ["Égorger un animal à cette occasion est une pratique traditionnelle très recommandée... On n’a pas le droit d’égorger un mouton avant que l’Imam n’ait égorgé le sien."] },
      { type: 'text_block', content: ["Le temps imparti s’étend de la fin du sacrifice de l'Imam jusqu’au coucher du soleil du troisième jour. Cependant, l’opération ne se fait pas la nuit."] },
      { type: 'text_block', content: ["Aucune partie prélevée sur un mouton de Tabaski ne doit être vendue, pas même la peau de l’animal."] }
    ]
  },
  "16": {
    id: "16", chapterId: "16", titleFr: "LA CIRCONCISION", titleAr: "الختان",
    blocks: [
      { type: 'text_block', content: ["C’est une pratique traditionnelle fortement recommandée. Elle est surtout recommandée entre sept (7) et dix (10) ans. Mais il n’est pas du tout recommandé de circoncire un enfant le jour de sa naissance ou de son baptême."] },
      { type: 'text_block', content: ["Celui qui redoute un quelconque préjudice lié à la circoncision en raison d’une maladie dont il souffre peut être dispensé de cette pratique."] },
      { type: 'text_block', content: ["La partie prélevée (le prépuce) après l’opération de la circoncision est une souillure ; elle doit être enfouie dans la terre et loin des habitations. Elle ne peut pas être enfouie dans une mosquée et ne doit pas non plus être jetée à même le sol."] }
    ]
  },
  "17": {
    id: "17", chapterId: "17", titleFr: "CONSEILS PRATIQUES", titleAr: "نصائح عملية",
    blocks: [
      { type: 'text_block', content: ["Nous rassemblons dans ce chapitre des conseils concernant certaines pratiques, dont la plupart sont interdites et peuvent entraîner la perte de la foi du musulman avant la fin de ses jours."] },
      { type: 'summary_grid', chapterId: '17', content: [
        { letter: "A", title: 'PRATIQUES INTERDITES', icon: 'block', ar: 'المحرمات', sub: ["Sifflements & Musique", "Médisance & Mensonge", "Gaspillage & Orgueil"] },
        { letter: "B", title: 'INTERDICTIONS FORMELLES', icon: 'gavel', ar: 'منوعات', sub: ["Respect des limites", "Règles de vie"] },
        { letter: "C", title: 'CAUSES DE PAUVRETÉ', icon: 'trending_down', ar: 'أسباب الفقر', sub: ["Habitudes à éviter", "Hygiène & Vie"] },
        { letter: "D", title: 'AISANCE MATÉRIELLE', icon: 'payments', ar: 'الغنى الحلال', sub: ["Litanies de richesse", "Invocations matinales"] },
        { letter: "E", title: 'SANTÉ & LONGÉVITÉ', icon: 'health_and_safety', ar: 'الصحة', sub: ["Secret du bien-être", "Longue vie"] },
        { letter: "F", title: 'SOUNNA & SALUTATIONS', icon: 'auto_awesome', ar: 'السنة', sub: ["Sunna du prophète", "Le Salam"] },
        { letter: "G", title: 'JOURS RECOMMANDÉS', icon: 'calendar_month', ar: 'الأيام المباركة', sub: ["Calendrier pieux", "Actes temporels"] },
        { letter: "H", title: 'REPENTIR & FIN DU MONDE', icon: 'history_edu', ar: 'التوبة', sub: ["Signes de l'Heure", "Retour à Dieu"] }
      ]}
    ]
  },
  "17-a": {
    id: "17-a", chapterId: "17", sectionId: "a", titleFr: "PRATIQUES INTERDITES", titleAr: "المحرمات",
    blocks: [
      { type: 'split_text', content: [
        { label: "Religion et Comportement", paragraphs: ["Se faire passer pour un saint, donner le wird sans autorisation, porter préjudice, regarder avec insistance un bel adolescent, regarder une tierce femme."] },
        { label: "L'adultère, Alcool & Tabac", paragraphs: ["Adultère: passible de cent coups de verge en public pour célibataires, peine de mort pour mariés.", "Alcool: Tout ce qui enivre est assimilé à l'alcool. Tabac sous toutes ses formes."] },
        { label: "Langue et Cœur", paragraphs: ["Le mensonge, la médisance, l'ostentation, la jalousie, l'orgueil et la vanité. Mettre des individus en mal."] },
        { label: "Distractions", paragraphs: ["Toutes les formes de distractions telles que le tam-tam, la danse, la musique, le football..."] },
        { label: "La famille et les femmes", paragraphs: ["Élever la voix pour une femme, se dévêtir en dehors des toilettes, exhiber ses parures, modifier son état originel (tatouage, dépigmentation, greffes)."] }
      ]}
    ]
  },
  "17-b": {
    id: "17-b", chapterId: "17", sectionId: "b", titleFr: "INTERDICTIONS FORMELLES", titleAr: "منوعات",
    blocks: [
      { type: 'text_block', content: ["Sortir de chez soi sans l’autorisation de son mari... Consulter un devin en vue d’être édifié sur son avenir..."] },
      { type: 'split_text', content: [
        { label: "Protocole et Salutations", paragraphs: ["Entrer sans saluer, fouiner, se prosterner devant une créature.", "On ne doit pas saluer: une femme tierce, quelqu'un qui prie, lit le Coran, mange, est aux toilettes, etc."] },
        { label: "Code de conduite", paragraphs: ["Effacer le Coran avec des crachats, reproduire une créature vivante, parler de choses profanes, jeter une créature vivante au feu, uriner vers la mosquée, s'amuser en priant, porter un pagne en soie (homme), se déplacer pendant le sermon du vendredi, etc."] }
      ]}
    ]
  },
  "17-c": {
    id: "17-c", chapterId: "17", sectionId: "c", titleFr: "CAUSES DE PAUVRETÉ", titleAr: "أسباب الفقر",
    blocks: [
      { type: 'text_block', content: ["Pratiques pouvant entraîner la pauvreté : brûler l’enveloppe de l’oignon, dormir sur le ventre, enlever des ordures la nuit, utiliser du sable pour se laver, s’asseoir au pied d’une porte... se coucher tout nu, manger ou dormir en état d’impureté majeure, la paresse, se peigner debout, coudre un vêtement en le portant, l'adultère..."] }
    ]
  },
  "17-d": {
    id: "17-d", chapterId: "17", sectionId: "d", titleFr: "AISANCE MATÉRIELLE", titleAr: "الغنى الحلال",
    blocks: [
      { type: 'text_block', content: ["La foi en Dieu. Toute aisance matérielle qui n’est pas soutenue par la foi en Dieu n’est qu’un leurre..."] },
      { type: 'split_text', content: [
        { label: "Attitudes de Baraka", paragraphs: ["Raffermir les liens de parenté, faire plaisir aux parents, se laver les mains, invoquer Dieu.", "Litanies: 300 fois Bismilahi le matin, Sourate Alwakhihaty le soir."] },
        { label: "Invocations", paragraphs: ["Pour subsister: « Bismilahi alla nafsi... »", "Pour dettes: 70 fois « Allahouma ikfini bilhalalika... »", "Multiplication des chances : Récitation de la Sourate Al-Kawthar (Matin 30x, 14h 25x, 17h 20x, Maghreb 15x, Soir 10x)."] }
      ]}
    ]
  },
  "17-e": {
    id: "17-e", chapterId: "17", sectionId: "e", titleFr: "SANTÉ ET LONGÉVITÉ", titleAr: "الصحة وطول العمر",
    blocks: [
      { type: 'text_block', content: ["Prier souvent le Tout-Puissant pour qu’Il nous accorde longévité et bonne santé, et prendre soin de son état de santé, car veiller à sa santé est une preuve de foi en Dieu."] },
      { type: 'split_text', content: [
        { label: "Sagesse médicale", paragraphs: ["Ne pas manger avant d’avoir digéré, ne pas marcher jusqu'à l'épuisement, ne pas boire d'eau fraîche la nuit ou après les rapports, se purger chaque semaine, ne pas retenir ses besoins."] },
        { label: "Rythmes de vie", paragraphs: ["Ne pas manger avant d'avoir faim, s'arrêter quand on est rassasié. Coucher sur le côté gauche ou sur le dos.", "Ce qui nuit le plus : boire de l'alcool, rapports sexuels fréquents, manger avant digestion."] }
      ]}
    ]
  },
  "17-f": {
    id: "17-f", chapterId: "17", sectionId: "f", titleFr: "LA SOUNNA", titleAr: "السنة النبوية",
    blocks: [
      { type: 'split_text', content: [
        { label: "Devoirs de Fraternité", paragraphs: ["Visiter un malade, accompagner un mort, présenter ses condoléances, féliciter pour un événement heureux. Formule: Assalamou haleykoum warahmatou lahi tahala wa barakatouhô."] },
        { label: "Croissant Lunaire", paragraphs: ["Dire Allahou akbar (3 fois), puis: Ila khaïrine wa rouchdine..."] },
        { label: "Vie Quotidienne", paragraphs: ["Se laver les mains avant et après manger, dire Bismilahi avant chaque acte, entrer dans la mosquée par le pied droit."] },
        { label: "Hygiène et Esthétique", paragraphs: ["Se couper les ongles le jeudi, raser les poils de l'aisselle et du pubis. L'homme ne doit pas se raser la barbe. La femme peut teindre ses cheveux mais pas se raser la tête ni se faire pousser de barbe/moustache."] }
      ]}
    ]
  },
  "17-g": {
    id: "17-g", chapterId: "17", sectionId: "g", titleFr: "JOURS RECOMMANDÉS", titleAr: "الأيام المستحبة",
    blocks: [
      { type: 'split_text', content: [
        { label: "Jours peu recommandés", paragraphs: ["Certains jours du mois (3, 5, 13, 16, 24, 26, dernier mercredi) et d'autres dates précises. À éviter: voyager, étrenner un vêtement, commencer quelque chose."] },
        { label: "Nuit de Tamxarit", paragraphs: ["Prière de 2 rakas avec ayatoul koursiyou (360 fois). Invocations pour la nouvelle année (Ila khaïrine wa rouchdine...)."] },
        { label: "Achoura (10 Tamxarit)", paragraphs: ["Jeûner, visiter les parents/malades, prière de 4 rakas, donner aumône, caresser orphelin, mettre du kohl..."] },
        { label: "Safar & Chahbâne", paragraphs: ["Dernier Mercredi de Safar (Prière de 4 rakas). Nuit du 14 au 15 Chahbâne (Lire Yâcine 3 fois)."] }
      ]}
    ]
  },
  "17-h": {
    id: "17-h", chapterId: "17", sectionId: "h", titleFr: "LE REPENTIR", titleAr: "التوبة",
    blocks: [
      { type: 'text_block', content: ["L’acte pour lequel on demande le pardon doit être considéré comme le fait d’avoir marché sur une braise ; si on savait bien qu’il s’agit d’une braise, on n’y aurait jamais mis le pied..."] },
      { type: 'text_block', content: ["Nous vivons dans un monde finissant. S’il reste encore du temps à l’humanité, c’est un temps négligeable. Et le temps d’une vie est encore beaucoup plus négligeable..."] },
      { type: 'split_text', content: [
        { label: "Nuits et Jours pour la rémission", paragraphs: ["Nuit du Samedi au Dimanche (20 rakas).", "Dimanche (4 rakas).", "Nuit du Dimanche au Lundi (4 rakas avec Ikhlass croissants).", "Lundi (2 rakas).", "Mardi et Mercredi (Prières spécifiques).", "Jeudi (Dédier à ses parents).", "Vendredi (Prières pour grades au paradis)."] }
      ]}
    ]
  },
  "18": {
    id: "18", chapterId: "18", titleFr: "NAFILAS DU RAMADAN", titleAr: "نوافل شهر رمضان",
    blocks: [
      { type: 'text_block', content: ["Les prières surérogatoires (nafilas) de chaque nuit du mois de Ramadan offrent d'immenses bienfaits. Elles se font par groupe de 2 rakas avec le salut final."] },
      { type: 'procedure', titleFr: "Liste des nuits", titleAr: "قائمة الليالي", content: [
        "1ère Nuit: 12 rakas. Fatiha, Inna Anzalnahou, Al Kâfirouna, Ikhlass.",
        "2e Nuit: 6 rakas.",
        "3e Nuit: 6 rakas.",
        "4e Nuit: 4 rakas...",
        "Voir le détail des sourates à lire dans le guide complet pour obtenir l'absolution, les faveurs des Prophètes et l'entrée au Paradis."
      ]}
    ]
  },
  "19": {
    id: "19", chapterId: "19", titleFr: "INVOCATIONS ET SOURATES", titleAr: "الأدعية والسور",
    blocks: [
      { type: 'summary_grid', chapterId: '19', content: [
        { letter: "A", title: "L'AUMÔNE ET SES MÉRITES", ar: "فضل الصدقة", icon: "volunteer_activism", sub: ["Calamités et Protection", "Aide aux nécessiteux"] },
        { letter: "B", title: "LECTURE DU CORAN", ar: "قراءة القرآن", icon: "menu_book", sub: ["Prosternation de lecture", "Sourates et versets"] },
        { letter: "C", title: "SOURATES ET VERSETS", ar: "فضائل السور", icon: "menu_book", sub: ["Bienfaits", "Intercession"] },
        { letter: "D", title: "INVOCATIONS ET WIRDS", ar: "أدعية وأوراد", icon: "auto_awesome", sub: ["Méricites", "Salatoul Fatihi"] }
      ]}
    ]
  },
  "19-a": {
    id: "19-a", chapterId: "19", sectionId: "a", titleFr: "L'AUMÔNE", titleAr: "فضل الصدقة",
    blocks: [
      { type: 'text_block', content: ["Si l’on pouvait donner en aumône quelque chose, si petit soit-il, ne serait-ce qu’un biscuit, ce serait une excellente chose. Cependant, il n’est pas recommandé de l’offrir à une personne de mauvaises mœurs..."] },
      { type: 'split_text', content: [{ label: "Équivalents de l'aumône", paragraphs: ["Effectuer 2 rakas au milieu de la matinée, dire « soubhana lahi » à chaque pas vers la Mosquée, balayer la mosquée, guider un aveugle, enlever de la route ce qui fait mal, saluer un musulman, aider son prochain... Tous ces actes ont la même valeur que l’aumône."] }] }
    ]
  },
  "19-b": {
    id: "19-b", chapterId: "19", sectionId: "b", titleFr: "LECTURE DU CORAN", titleAr: "قراءة القرآن الكريم",
    blocks: [
      { type: 'text_block', content: ["Lire le Coran est une manière d’invoquer le nom d’Allah. Il faut s’efforcer d’en lire quelques sourates par jour, ne serait-ce que 3 « Izib », et ce sans interruption..."] },
      { type: 'text_block', content: ["Le Soubouhou (Répartition): Lundi, Mardi, etc., chaque jour a sa partie du Coran à réciter."] },
      { type: 'text_block', content: ["La Prosternation (Sadjda) : Pendant la lecture du Coran, la tradition veut que l’on se prosterne chaque fois que de besoin. Dire « Allahou Akbar » en se baissant et en se relevant."] }
    ]
  },
  "19-c": {
    id: "19-c", chapterId: "19", sectionId: "c", titleFr: "SOURATES ET VERSETS", titleAr: "فضائل السور والآيات",
    blocks: [
      { type: 'text_block', content: ["Les sourates « Bakhara » et « Imrane » intercèderont auprès de Dieu le jour du Jugement en faveur de celui qui les lit régulièrement ici-bas."] },
      { type: 'text_block', content: ["Les six versets de puissance : 1. Bismilahi rahmani rahimi sabbaha lilahi mafi samawati walardi wa houwa azizoul akimou..."] },
      { type: 'text_block', content: ["La récitation de « likhlass » (3 fois) équivaut à la lecture du Coran en entier. La récitation des sourates « falahi » et « nassi » constitue le meilleur moyen de se protéger contre les maux."] }
    ]
  },
  "19-d": {
    id: "19-d", chapterId: "19", sectionId: "d", titleFr: "INVOCATIONS & WIRDS", titleAr: "الأدعية والأوراد",
    blocks: [
      { type: 'text_block', content: ["On n’enregistrera jamais de péchés à celui qui prend l’habitude de dire le wird « Mouchabahatou acharatou » matin et soir."] },
      { type: 'text_block', content: ["Celui qui guide un aveugle en lui tenant la canne sur quarante pas sera absous et rien ne l’empêchera d’aller au Paradis."] },
      { type: 'split_text', content: [
        { label: "Litanies", paragraphs: ["Salatoul Ibrahimia (Tachaoude) : La plus complète.", "Salatoul Fatihi : Celui qui la dit une seule fois dans sa vie ne sera pas jeté dans les feux de l’enfer.", "Les Tasbihâtes (Hautes Grâces).", "Tarbiya (Éducation par le Prophète)."] }
      ]}
    ]
  },
  "6-b": {
    id: "6-b",
    chapterId: "6",
    sectionId: "b",
    titleFr: "LA PRIÈRE RITUELLE",
    titleAr: "الصلاة",
    blocks: [
      {
        type: 'procedure',
        titleFr: "Le Likhâme (Appel immédiat)",
        titleAr: "الإقامة",
        content: [
          "Alâhou akbarou (2 fois) — اللَّهُ أَكْبَرُ",
          "Ach hadou ann lâhilaha ila lah — أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ",
          "Ach hadou anna Mouhammadane Rassoulou lâ — أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
          "Haya alas salâti haya alal falâhi khadd khâmati salâtoul — حَيَّ عَلَى الصَّلَاةِ حَيَّ عَلَى الْفَلَاحِ قَدْ قَامَتِ الصَّلَاةُ",
          "Alahou akbarou (2 fois) — اللَّهُ أَكْبَرُ",
          "Lâhilaha illalah — لَا إِلَهَ إِلَّا اللَّهُ"
        ]
      },
      {
        type: 'quote',
        titleFr: "Réponse des auditeurs",
        content: [
          "Lorsque celui qui fait le likhâme dit : « khad khamatis salâtou », dire après lui : « akhâmaha lâhou tabâraka wa tahala wa adâma ha mâdâmatis samawâtou wa lardou ina hô alla kouli ch aïhine khadiroune » (أَقَامَهَا اللَّهُ وَأَدَامَهَا مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ إِنَّهُ عَلَى كُلِّ شَيْءٍ قَدِيرٌ)."
        ]
      },
      {
        type: 'text_block',
        titleFr: "L'Intention et le Takbir",
        content: [
          "Dire ensuite intérieurement son intention de s’acquitter de la prière obligatoire (préciser le moment) sur l’imitation de l’imam. Quant à l’imam, il dit son intention de diriger la prière collective. Quand on prie seul, dire intérieurement son intention de s’acquitter de la prière de tel moment.",
          "Lever les bras à hauteur des épaules et les abaisser en disant : « allahou akbar » (اللَّهُ أَكْبَرُ)."
        ]
      },
      {
        type: 'split_text',
        titleFr: "Modalités de Récitation",
        content: [
          {
            label: "Prière Seule",
            paragraphs: ["Réciter la « fatiha » et une sourate de son choix dans les deux premiers rakkas, à voix basse le jour ; réciter la « fatiha » uniquement pour les deux derniers rakkas."]
          },
          {
            label: "Derrière l'Imam",
            paragraphs: ["Celui qui prie derrière un imam se tait quand ce dernier récite à haute voix. Si, par contre, l’imam récite à voix basse, le guidé doit réciter des sourates à voix basse comme s’il priait seul."]
          }
        ]
      },
      {
        type: 'procedure',
        titleFr: "Mouvements et Invocations",
        content: [
          "Génuflexion (Rukū‘) : Dire « allahou akbar » et prononcer à voix basse (3 fois) : « soubhana rabial hazimi wa bihamdihi » (سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ).",
          "Redressement : Dire (à haute voix) : « Sami allahou liman hamidah » (سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ). Seul ou guidé ajouter : « Allahouma rabana walakal hamdou ».",
          "Prosternation (Sujūd) : Dire à haute voix « allahou akbar » et prononcer à voix basse (3 fois) : « soubhana rabial leuhla allahouma ihkfirli » (سُبْحَانَ رَبِّيَ الْأَعْلَى اللَّهُمَّ اغْفِرْ لِي).",
          "Position Assise : Dire à haute voix « allahou akbar » et dire intérieurement (1 fois) : « allahouma ikhfirli warhamni warzoukhni wastourni wadjbourni wa heuhdinî wah fouhani wa hâfini » (اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَارْزُقْنِي وَاسْتُرْنِي وَاجْبُرْنِي وَاهْدِنِي وَاعْفُ عَنِّي وَعَافِنِي)."
        ]
      },
      {
        type: 'text_block',
        titleFr: "Le Tachahoud",
        content: [
          "Premier Tachahoud : « Atahiyatou lilahi, azakiyatou lilahi atahibatous salawatou lilahi assalamou aleyka ayouhan nabiyou... ach hadou ann la ilaha ila lahou wahdahou la charika lahô wa ach hadou anna seydina mouhammadane... »",
          "Tachahoud Final & Invocations : Ajouter « wa ach hadou anna leuzi dia-abihi sayidina mouhamadoune... » suivi de l'Invocation d'Abraham et des salutations finales."
        ]
      },
      {
        type: 'split_text',
        titleFr: "Salut Final et Dhikr",
        content: [
          {
            label: "Règles du Salam",
            paragraphs: ["Dire « assalâmou aleykoume » (1 fois), à haute voix. Le « mamoune » (guidé) rend le Salam à l’imam et à toute personne à sa gauche."]
          },
          {
            label: "Post-Prière",
            paragraphs: [
              "Dire « astahfiroulaha » (3 fois), puis : « Allahouma anta salâmou wa mine ka salâmou rabana wa add khilnâ dâra salami tabarakta watahaleyt a yazal dialâli wal ikrami » (3 fois).",
              "Soubhana Lahi (33 fois), Alhamdoulilah (33 fois), Allahou Akbar (33 fois).",
              "Litanies finales : « La ilaha ilal lahou wahdahou la charika lahou... »"
            ]
          }
        ]
      }
    ]
  },
  "6-c": {
    id: "6-c",
    chapterId: "6",
    sectionId: "c",
    titleFr: "LES CINQ PRIÈRES",
    titleAr: "الصلوات الخمس المفروضة",
    blocks: [
      {
        type: 'quote',
        content: ["Tout homme habitant à proximité d’une mosquée doit s’y rendre pour s’acquitter de ses prières ; il ne doit pas les faire chez soi en même temps qu’à la mosquée. Le fait de ne pas aller prier à la mosquée sans excuse valable est assimilable au fait de ne pas prier du tout."]
      },
      {
        type: 'text_block',
        titleFr: "Interdictions et Comportement",
        content: [
          "À l’intérieur d’une mosquée, il est formellement interdit de causer, d’invoquer le nom de Dieu, d’énumérer le chapelet, de faire des prières ou de lire le Coran, sauf si l’assemblée le fait en même temps. En dehors de ces cas, on doit prier à voix très basse.",
          "Il est également interdit de promener son regard partout, d’étendre ses jambes, de faire craquer les articulations des doigts, de tailler ses ongles, de se gratter, de chercher ou tuer des poux, de cracher ou de se moucher (sauf dans ses vêtements), de rire, de sourire, de s’amuser. On doit rester tranquille et se taire."
        ]
      },
      {
        type: 'split_text',
        titleFr: "Règles de l'Imam et des Guidés",
        content: [
          {
            label: "Mérites de l'Imam",
            paragraphs: ["Il est méritoire pour l’Imam d’attendre le rappel (likhâm) avant de se mettre sur la place d’où il doit diriger la prière. Il est aussi méritoire pour lui de changer sa position après le salut final."]
          },
          {
            label: "Règles des Guidés",
            paragraphs: ["Les guidés ne doivent pas sortir avant l’Imam, sauf si ce dernier a l’habitude de rester longtemps. Celui qui prie derrière un Imam doit le voir ou entendre sa voix."]
          }
        ]
      },
      {
        type: 'text_block',
        titleFr: "Le Khounaute",
        content: [
          "Pour la prière du matin, il est méritoire de réciter après la sourate du 2e rakka le « khounaute » à voix basse : « Allahouma innastahînouka wa nastakhfirrouka wa nôuminoubika wa natawakkalou alayka... »"
        ]
      }
    ]
  },
  "6-d": {
    id: "6-d",
    chapterId: "6",
    sectionId: "d",
    titleFr: "PRATIQUES OBLIGATOIRES",
    titleAr: "فرائض الصلاة",
    blocks: [
      {
        type: 'procedure',
        titleFr: "Les 15 Farā'iḍ",
        content: [
          "1. L’intention (An-Niyya)",
          "2. Le premier kabar (Takbiratoul Ihrâm)",
          "3. La station debout pour le kabar (Al-Qiyam)",
          "4. La récitation de la fatiha",
          "5. La station debout pour la fatiha",
          "6. Les génuflexions (Ar-Rukū‘)",
          "7. Le retour à la station debout",
          "8. Les prosternations (As-Sujūd)",
          "9. Le retour à la position assise",
          "10. L’intention d’imiter l’Imam pour le guidé",
          "11. Le respect de l’ordre de succession",
          "12. Les pauses absolues (At-Ṭuma'nīnah)",
          "13. L’observation d’une position droite (Al-I'tidāl)",
          "14. Le salut final (As-Salām)",
          "15. La position assise pour le salut final"
        ]
      }
    ]
  },
  "6-e": {
    id: "6-e",
    chapterId: "6",
    sectionId: "e",
    titleFr: "PRATIQUES TRADITIONNELLES",
    titleAr: "سنن الصلاة",
    blocks: [
      {
        type: 'procedure',
        titleFr: "Les 18 Sounnah",
        content: [
          "1. Le rappel ou « likâm »",
          "2. La sourate après la fatiha",
          "3. La position debout pour la sourate",
          "4. La récitation à voix basse là où il le faut",
          "5. La récitation à haute voix là où il le faut",
          "6. Tout « kabar » autre que le premier",
          "7. « Sami allahou limann hammidah »",
          "8. Le premier tachaoude",
          "9. Le dernier tachaoude",
          "10. La prière sur le Prophète",
          "11. La station assise pour le premier tachaoude",
          "12. La station assise pour le dernier tachaoude",
          "13. Rendre à l’Imam le salut final",
          "14. Rendre le salut final à gauche",
          "15. Se taire quand l'Imam récite à haute voix",
          "16. Utiliser une Soutrah (bâton/protection)",
          "17. Prendre assez de temps pour chaque phase",
          "18. Dire à haute voix le salut final"
        ]
      }
    ]
  },
  "6-f": {
    id: "6-f",
    chapterId: "6",
    sectionId: "f",
    titleFr: "LA PRIÈRE DU VENDREDI",
    titleAr: "صلاة الجمعة",
    blocks: [
      {
        type: 'text_block',
        titleFr: "L'Obligation",
        content: [
          "C’est une obligation pour tout homme libre non voyageur et bien portant (habitant à moins de 5,5 km). Le non-respect sans raison est une impiété.",
          "Préparatifs : attendre l'heure, se purifier, porter des habits blancs, aller à la mosquée."
        ]
      },
      {
        type: 'split_text',
        titleFr: "Entrée et Sortie",
        content: [
          {
            label: "Entrée (Pied Droit)",
            paragraphs: ["« Bismil lâhi allahouma iftahlî abwâba rahmatika... »"]
          },
          {
            label: "Sortie (Pied Gauche)",
            paragraphs: ["« Bismil lâhi allahouma iftahlî abwâba fadlika... »"]
          }
        ]
      },
      {
        type: 'text_block',
        titleFr: "Conduite à la Mosquée",
        content: [
          "Exécuter deux rakkas de salutation si l'Imam n'est pas là. À l'apparition de l'Imam, faire silence absolu et écouter le sermon. Parler durant le sermon annule la prière.",
          "Les femmes (vieilles/laides) peuvent y participer sous conditions (derrière les hommes, sans parfum)."
        ]
      },
      {
        type: 'procedure',
        titleFr: "Rejoindre l'Imam (Maspoukh)",
        content: [
          "La rakka est comptée si on arrive avant que l'Imam ne se redresse de la génuflexion.",
          "Après le salut final, s'acquitter des rakkas manquantes selon le mode (haut/bas) de l'Imam.",
          "Si on arrive après la dernière génuflexion, la prière n'est pas comptée, mais on suit jusqu'au bout avant de reprendre."
        ]
      }
    ]
  },
  "6-g": {
    id: "6-g",
    chapterId: "6",
    sectionId: "g",
    titleFr: "PRIÈRES NON EFFECTUÉES",
    titleAr: "قضاء الصلوات",
    blocks: [
      {
        type: 'text_block',
        titleFr: "Règles de rattrapage",
        content: [
          "S’en acquitter selon le mode initial (voyageur ou sédentaire).",
          "Priorités : si <= 4 prières omises, les faire avant celle du moment. Si > 4, faire celle du moment d'abord.",
          "Retards importants : si sur plusieurs années, faire l'équivalent de 5 jours de prières chaque jour jusqu'à certitude du rattrapage."
        ]
      },
      {
        type: 'comparison',
        titleFr: "Réparation des erreurs",
        titleAr: "سجود السهو",
        content: [
          {
            titleFr: "L'Omission (Khabla)",
            items: ["2 prosternations avant le salut final"]
          },
          {
            titleFr: "Le Rajout (Bakhda)",
            items: ["2 prosternations après le salut final + nouveau tachaoude et salut"]
          }
        ]
      }
    ]
  },
  "6-h": {
    id: "6-h",
    chapterId: "6",
    sectionId: "h",
    titleFr: "LA PRIÈRE DU VOYAGEUR",
    titleAr: "صلاة المسافر",
    blocks: [
      {
        type: 'text_block',
        titleFr: "Conditions de réduction (Qasr)",
        content: [
          "Distance >= 71 km pour un voyage non proscrit. Réduire à 2 rakkas le zohr, le asr et le icha.",
          "La réduction commence à 4,5 km de chez soi. Elle cesse si on prévoit un séjour de >= 4 jours ou si on a une épouse sur place."
        ]
      },
      {
        type: 'text_block',
        titleFr: "Imamat et Lieux",
        content: [
          "Un sédentaire peut suivre un voyageur (et finit sa prière après), mais l'inverse est déconseillé.",
          "Il est blâmable de prier dans des lieux de souillure, des parcs à chameaux ou en ayant des besoins pressants."
        ]
      }
    ]
  },
  "6-i": {
    id: "6-i",
    chapterId: "6",
    sectionId: "i",
    titleFr: "ACTES DURANT LA PRIÈRE",
    titleAr: "أفعال الصلاة",
    blocks: [
      {
        type: 'text_block',
        titleFr: "Actes blâmables (Sip)",
        content: [
          "Prononcer l'istihaza ou la basmala dans une prière surérogatoire.",
          "Prier avec quelque chose en bouche, réciter le Coran en génuflexion.",
          "Regarder à droite/gauche, fermer les yeux, faire craquer ses doigts, jouer avec sa barbe."
        ]
      },
      {
        type: 'text_block',
        titleFr: "Actes méritoires",
        content: [
          "Tourner la tête à droite au Salam. Dire 'Amine' à voix basse.",
          "Baisser les bras après le takbir. Accompagner les mouvements de 'Allahou Akbar'.",
          "Position des mains durant le tachaoude, remuer l'index.",
          "Chez l'homme : écarter les membres. Chez la femme : les joindre."
        ]
      }
    ]
  },
  "6-j": {
    id: "6-j",
    chapterId: "6",
    sectionId: "j",
    titleFr: "PRIÈRES SURÉROGATOIRES",
    titleAr: "النوافل",
    blocks: [
      {
        type: 'procedure',
        titleFr: "Méthode de jumelage",
        content: [
          "Fadiar (2) avant le Sobh (2) + 4 rakkas de matinée (yor yor).",
          "4 avant le Zohr + 4 après.",
          "4 avant le Asr.",
          "2 après le Maghreb.",
          "12 après le Guéwé (Ramadan) + Witr (1)."
        ]
      },
      {
        type: 'text_block',
        titleFr: "Le Safa et le Witr",
        content: [
          "Le Witr (1 raka) est presque obligatoire. Se fait après le Safa (2 rakkas).",
          "Safa : R1 (Sabihisma), R2 (Koul ya ayouhal kâfirouna).",
          "Witr : Fatiha + Ikhlass, Falakhi, Nassi."
        ]
      }
    ]
  },
  "6-k": {
    id: "6-k",
    chapterId: "6",
    sectionId: "k",
    titleFr: "LES PRIÈRES DES FÊTES",
    titleAr: "صلاة العيدين",
    blocks: [
      {
        type: 'text_block',
        titleFr: "Généralités",
        content: [
          "Prières traditionnelles (Hiit) hors mosquée (sauf Mecque). Entre lever du soleil et Zohr.",
          "Deux rakkas à haute voix. R1: 7 takbirs. R2: 6 takbirs."
        ]
      },
      {
        type: 'text_block',
        titleFr: "Déroulement et Sermons",
        content: [
          "R1: Sabihisma. R2: Wachamsi. Deux sermons après la prière.",
          "Recommandations : se laver, se parfumer, aller à pied, emprunter un chemin différent au retour.",
          "Korité : manger avant. Tabaski : jeûner jusqu'au retour (manger le foie)."
        ]
      }
    ]
  },
  "10-a": {
    id: "10-a",
    chapterId: "10",
    sectionId: "a",
    titleFr: "QU'EST-CE QUE LE JEÛNE ?",
    titleAr: "ما هو الصوم؟",
    blocks: [
      {
        type: 'text_block',
        content: [
          "Il faut formuler intérieurement l’intention d’observer le jeûne en tant qu’obligation divine pendant tout le mois pour la face de Dieu en s’abstenant de manger, de boire, d’avoir des rapports sexuels de l’aube (avant fadjr) jusqu’au coucher du soleil."
        ]
      },
      {
        type: 'grid_options',
        titleFr: "Les 3 sortes de Kafaar (Réparation)",
        titleAr: "الكفارة",
        content: [
          {
            title: "Option 1",
            text: "Choisir soixante (60) pauvres (miskine) et donner à chacun d’eux la moitié (1/2) d’un « andar » (environ 1 kg) de mil."
          },
          {
            title: "Option 2",
            text: "Observer le jeûne pendant deux (2) mois successifs sans en sauter un seul jour."
          },
          {
            title: "Option 3",
            text: "Affranchir un esclave musulman bien portant qui nous appartient en propre."
          }
        ]
      }
    ]
  },
  "10-b": {
    id: "10-b",
    chapterId: "10",
    sectionId: "b",
    titleFr: "QUI DOIT JEÛNER ?",
    titleAr: "من يجب عليه الصوم؟",
    blocks: [
      {
        type: 'text_block',
        content: [
          "Toute personne jouissant de ses facultés mentales, en bonne santé physique, non voyageuse (>= 71 km). Les femmes doivent être pures de leurs menstrues et lochies.",
          "Dispenses : Malades (si risque d'aggravation), Femmes allaitantes (si préjudice à l'enfant), Vieillards (donner 1/2 andar par jour)."
        ]
      },
      {
        type: 'text_block',
        titleFr: "Intention et Physiologie",
        content: [
          "Intention : une fois pour tout le mois ou chaque soir.",
          "Vomissements involontaires n'annulent pas le jeûne. Les pituites ou eau avalée par mégarde (ablutions) l'annulent (jeûne compensatoire).",
          "Comportement : la mixité homme/femme en jeûne dans une assemblée est blâmable. Interdiction de propos obscènes ou de s'amuser."
        ]
      }
    ]
  },
  "10-c": {
    id: "10-c",
    chapterId: "10",
    sectionId: "c",
    titleFr: "ACTES BLÂMABLES",
    titleAr: "المكروهات",
    blocks: [
      {
        type: 'procedure',
        content: [
          "1. Introduire quelque chose de savoureux en bouche (gomme arabique, etc.).",
          "2. Goûter un mets ou une boisson.",
          "3. Dormir pendant de longues heures le jour.",
          "4. Utiliser du parfum ou le flairer.",
          "5. Utiliser de l’encens.",
          "6. Se mettre du collyre ou du khôl.",
          "7. Se curer les dents avec un bâton frais."
        ]
      }
    ]
  },
  "10-d": {
    id: "10-d",
    chapterId: "10",
    sectionId: "d",
    titleFr: "PETIT DÉJEUNER DE L’AUBE",
    titleAr: "السحور",
    blocks: [
      {
        type: 'text_block',
        titleFr: "Le Kheude",
        content: [
          "Manger à l’aube (le plus tard possible) et rompre le jeûne le plus tôt possible.",
          "Rompre avec des dattes avant l’eau. S’adonner à la piété durant tout le mois."
        ]
      },
      {
        type: 'procedure',
        titleFr: "Jeûnes Méritoires",
        titleAr: "نوافل الصوم",
        content: [
          "1. Tout le mois de l'Achoura (Tamkharite), surtout 1, 3, 9 et 10.",
          "2. Trois jours de chaque mois.",
          "3. Tout le mois de Ndèye Koor, surtout le 27e jour.",
          "4. Tout le mois de Barakh lou, surtout le 15e jour.",
          "5. Six jours après la Korité.",
          "6. 25e jour de Digui Tabaski, surtout le 8e et 9e jour.",
          "7. Le dernier jour de l'an."
        ]
      }
    ]
  }
};

