// src/data/chapters.ts
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
    desc: "Les fondements de l'unicité divine et la connaissance de Dieu.",
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
    desc: "Guide sur la prière, le jeûne et les piliers de la foi.",
    audioUrl: "/audio/adorations.mp3",
    content: [
      { ar: "الصلاة عماد الدين", fr: "La prière est le pilier de la religion." }
    ]
  },
  // Ajoutez les autres parties ici...
];