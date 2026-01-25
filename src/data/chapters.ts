export interface Chapter {
  id: string;
  titleAr: string;
  titleFr: string;
  desc: string;
  audioUrl: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: "1",
    titleAr: "ملاحظات عن المؤلف",
    titleFr: "NOTES SUR L'AUTEUR",
    desc: "Biographie de Cheikh Abo Madyana Shouhaïbou Mbacké (1918-1991), éminent soufi et érudit de la Muridiyyah.",
    audioUrl: "/audio/auteur.mp3"
  },
  {
    id: "2",
    titleAr: "مقدمة",
    titleFr: "PRÉFACE & AVANT - PROPOS",
    desc: "Cadre contextuel de la traduction du livre Khouratoul Ayni du Wolofal vers le français[cite: 92, 113].",
    audioUrl: "/audio/preface.mp3"
  },
  {
    id: "3",
    titleAr: "التوحيد",
    titleFr: "DE L'UNICITÉ DE DIEU",
    desc: "Enseignements sur l'Omnipotence, l'Omniscience et l'éternité de Dieu[cite: 153, 158].",
    audioUrl: "/audio/unicite.mp3"
  },
  {
    id: "4",
    titleAr: "محمد رسول الله",
    titleFr: "MOUHAMMADOUNE RASSOUL LOULAHI",
    desc: "Reconnaissance du Prophète Mouhammad (PSL) comme le Messager envoyé à toute l'humanité[cite: 171].",
    audioUrl: "/audio/prophete.mp3"
  },
  {
    id: "5",
    titleAr: "العبادات",
    titleFr: "LES PRATIQUES RELIGIEUSES",
    desc: "Conditions de purification du corps, des habits et du lieu nécessaires à la prière[cite: 183].",
    audioUrl: "/audio/pratiques.mp3"
  },
  {
    id: "6",
    titleAr: "الصلاة",
    titleFr: "LA PRIÈRE",
    desc: "Guide complet sur l'appel à la prière (Nodd), les obligations et les pratiques traditionnelles[cite: 590, 824, 845].",
    audioUrl: "/audio/priere.mp3"
  },
  {
    id: "7",
    titleAr: "المريض والميت",
    titleFr: "LE MALADE MOURANT LE MORT",
    desc: "Règles sur l'accompagnement des mourants, le lavage mortuaire et l'inhumation[cite: 1092, 1148, 1286].",
    audioUrl: "/audio/mort.mp3"
  },
  {
    id: "8",
    titleAr: "الزكاة",
    titleFr: "LA ZAKAT : UNE OBLIGATION DIVINE",
    desc: "Prescriptions sur l'aumône légale concernant l'argent, les produits agricoles et le bétail[cite: 1390, 1393].",
    audioUrl: "/audio/zakat.mp3"
  },
  {
    id: "9",
    titleAr: "شهر رمضان",
    titleFr: "LE MOIS DE RAMADAN",
    desc: "Règles du jeûne, sa rupture et les prières surérogatoires (Nafilas)[cite: 1484, 1507, 1039].",
    audioUrl: "/audio/ramadan.mp3"
  },
  {
    id: "10",
    titleAr: "الحج",
    titleFr: "LE PELERINAGE A LA MECQUE",
    desc: "Conditions physiques et financières pour accomplir le cinquième pilier de l'Islam[cite: 1569].",
    audioUrl: "/audio/hajj.mp3"
  },
  {
    id: "11",
    titleAr: "النكاح والطلاق",
    titleFr: "LE MARIAGE ET LE DIVORCE",
    desc: "Jurisprudence sur l'union conjugale, le baptême, l'éducation des enfants et la séparation[cite: 1591, 1651, 1772].",
    audioUrl: "/audio/famille.mp3"
  },
  {
    id: "12",
    titleAr: "الحلال والحرام",
    titleFr: "VIE PRATIQUE ET CONSEILS",
    desc: "Règles sur l'abattage rituel, la circoncision et les comportements recommandés[cite: 1861, 1912, 1922].",
    audioUrl: "/audio/conseils.mp3"
  },
  {
    id: "13",
    titleAr: "الأدعية",
    titleFr: "INVOCATIONS ET SOURATES",
    desc: "Utilités spirituelles des sourates et formules de protection[cite: 77, 137].",
    audioUrl: "/audio/invocations.mp3"
  }
];