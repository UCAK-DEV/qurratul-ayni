export interface Chapter {
  id: string;
  titleAr: string;
  titleFr: string;
  desc: string;
  audioUrl: string;
  content: { ar: string; fr: string }[];
}

export const CHAPTERS: Chapter[] = [
  {
    id: "1",
    titleAr: "التوحيد",
    titleFr: "L'Unicité de Dieu",
    desc: "Découvrez les secrets de l'Unicité Divine (Tawhid) et la connaissance profonde du Créateur.",
    audioUrl: "/audio/unicite.mp3",
    content: [
      { ar: "لا معبود بحق إلا الله", fr: "Nul n'est digne d'adoration en dehors de Dieu." },
      { ar: "هو وحده المتصرف في كل شيء", fr: "C'est Lui le Régisseur souverain de toute chose." }
    ]
  },
  {
    id: "2",
    titleAr: "العبادات",
    titleFr: "Les Adorations",
    desc: "Un guide spirituel sur les piliers de l'Islam et la purification de l'âme par l'acte.",
    audioUrl: "/audio/adorations.mp3",
    content: [
      { ar: "الصلاة عماد الدين", fr: "La prière est le pilier de la religion." }
    ]
  }
];