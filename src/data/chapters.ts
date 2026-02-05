export interface Chapter {
  id: string;
  titleAr: string;
  titleFr: string;
  desc: string;
  audioUrl: string;
  group: string;
  icon: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: "1",
    titleAr: "ملاحظات عن المؤلف",
    titleFr: "NOTES SUR L'AUTEUR",
    desc: "Biographie de Cheikh Abo Madyana Shouhaïbou Mbacké (1918-1991), éminent soufi et érudit de la Muridiyyah.",
    audioUrl: "/audio/auteur.mp3",
    group: "Introduction",
    icon: "person"
  },
  {
    id: "2",
    titleAr: "مقدمة",
    titleFr: "PRÉFACE & AVANT - PROPOS",
    desc: "Cadre contextuel de la traduction du livre Khouratoul Ayni du Wolofal vers le français.",
    audioUrl: "/audio/preface.mp3",
    group: "Introduction",
    icon: "menu_book"
  },
  {
    id: "3",
    titleAr: "التوحيد",
    titleFr: "DE L'UNICITÉ DE DIEU",
    desc: "Enseignements sur l'Omnipotence, l'Omniscience et l'éternité de Dieu.",
    audioUrl: "/audio/unicite.mp3",
    group: "Les Piliers",
    icon: "brightness_high"
  },
  {
    id: "4",
    titleAr: "محمد رسول الله",
    titleFr: "MOUHAMMADOUNE RASSOUL LOULAHI",
    desc: "Reconnaissance du Prophète Mouhammad (PSL) comme le Messager envoyé à toute l'humanité.",
    audioUrl: "/audio/prophete.mp3",
    group: "Les Piliers",
    icon: "person"
  },
  {
    id: "5",
    titleAr: "العبادات",
    titleFr: "LES PRATIQUES RELIGIEUSES",
    desc: "Conditions de purification du corps, des habits et du lieu nécessaires à la prière.",
    audioUrl: "/audio/pratiques.mp3",
    group: "Les Piliers",
    icon: "spa"
  },
  {
    id: "6",
    titleAr: "الصلاة",
    titleFr: "LA PRIÈRE",
    desc: "Guide complet sur l'appel à la prière (Nodd), les obligations et les pratiques traditionnelles.",
    audioUrl: "/audio/priere.mp3",
    group: "Les Piliers",
    icon: "mosque"
  },
  
  {
    id: "7",
    titleAr: "المريض والميت",
    titleFr: "LE MALADE MOURANT",
    desc: "Règles sur l'accompagnement des mourants",
    audioUrl: "/audio/mort.mp3",
    group: "Rites et Société",
    icon: "personal_injury"
  },
  {
    id: "8",
    titleAr: "الميت",
    titleFr: "LE MORT",
    desc: "Le lavage mortuaire et l'inhumation.",
    audioUrl: "/audio/mort.mp3",
    group: "Rites et Société",
    icon: "nightlight"
  },
  {
    id: "9",
    titleAr: "الزكاة",
    titleFr: "LA ZAKAT : UNE OBLIGATION DIVINE",
    desc: "Prescriptions sur l'aumône légale concernant l'argent, les produits agricoles et le bétail.",
    audioUrl: "/audio/zakat.mp3",
    group: "Les Piliers",
    icon: "volunteer_activism"
  },
  {
    id: "10",
    titleAr: "شهر رمضان",
    titleFr: "LE MOIS DE RAMADAN",
    desc: "Règles du jeûne, sa rupture et les prières surérogatoires (Nafilas).",
    audioUrl: "/audio/ramadan.mp3",
    group: "Les Piliers",
    icon: "nights_stay"
  },
  {
    id: "11",
    titleAr: "الحج",
    titleFr: "LE PELERINAGE A LA MECQUE",
    desc: "Conditions physiques et financières pour accomplir le cinquième pilier de l'Islam.",
    audioUrl: "/audio/hajj.mp3",
    group: "Les Piliers",
    icon: "directions_walk"
  },
  {
    id: "12",
    titleAr: "النكاح",
    titleFr: "LE MARIAGE",
    desc: "Jurisprudence sur l'union conjugale, le baptême, l'éducation des enfants",
    audioUrl: "/audio/famille.mp3",
    group: "Rites et Société",
    icon: "family_restroom"
  },
  {
    id: "13",
    titleAr: "الطلاق",
    titleFr: "LE DIVORCE",
    desc: "La séparation.",
    audioUrl: "/audio/famille.mp3",
    group: "Rites et Société",
    icon: "heart_broken"
  },
  {
    id: "14",
    titleAr: "المنتجات التي يُحظَر فيها البيع بالدَّيْن",
    titleFr: "DES PRODUITS DONT LE CRÉDIT EST PROHIBÉ",
    desc: "Dispositions juridiques relatives aux biens et produits pour lesquels la vente à crédit est interdite selon les principes de la jurisprudence islamique.",
    audioUrl: "/audio/conseils.mp3",
    group: "Jurisprudence",
    icon: "gavel"
  },
  {
    id: "15",
    titleAr: "فيما يخصّ فعل الذبح",
    titleFr: "CONCERNANT L’ACTE D’ÉGORGER",
    desc: "Règles et conditions de l’abattage rituel islamique, incluant l’intention, les formules prescrites et les bonnes pratiques à respecter.",
    audioUrl: "/audio/conseils.mp3",
    group: "Jurisprudence",
    icon: "rule"
  },
  {
    id: "16",
    titleAr: "في شأن الختان",
    titleFr: "DE LA CIRCONCISION",
    desc: "Enseignements relatifs à la circoncision, son statut religieux, ses conditions et son importance dans la tradition islamique.",
    audioUrl: "/audio/conseils.mp3",
    group: "Rites et Société",
    icon: "cut"
  },
  {
    id: "17",
    titleAr: "نصائح عملية",
    titleFr: "CONSEILS PRATIQUES",
    desc: "Recommandations et orientations pratiques visant à adopter un comportement conforme à l’éthique et aux valeurs de l’Islam dans la vie quotidienne.",
    audioUrl: "/audio/conseils.mp3",
    group: "Spiritualité",
    icon: "self_improvement"
  },
  {
    id: "18",
    titleAr: "النوافل في شهر رمضان",
    titleFr: "LES NAFILAS DU MOIS DE RAMADAN",
    desc: "Présentation des prières surérogatoires (nafilas) spécifiques au mois de Ramadan, leurs mérites et les moments propices pour les accomplir.",
    audioUrl: "/audio/conseils.mp3",
    group: "Spiritualité",
    icon: "star"
  },
  {
    id: "19",
    titleAr: "بعض الأدعية والسور وفوائدها",
    titleFr: "QUELQUES INVOCATIONS ET SOURATES, ET LEURS UTILITÉS",
    desc: "Sélection d’invocations et de sourates du Coran, avec leurs bienfaits spirituels et leurs usages recommandés dans différentes situations.",
    audioUrl: "/audio/conseils.mp3",
    group: "Spiritualité",
    icon: "list_alt"
  }
];