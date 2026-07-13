export interface NafilaRecommendation {
  id: string;
  month: number | null; // 1-12 or null for weekly
  day: number | null;   // 1-30 or null for weekly
  dayOfWeek?: number;   // 0 (Sunday) to 6 (Saturday)
  title: string;
  description: string;
  reward?: string;
  wird?: string;
  isSpecial?: boolean;
}

export const NAFILA_RECOMMENDATIONS: NafilaRecommendation[] = [
  // ─── RAMADAN (Month 9) NAFILAS ───────────────────────────────────────────────
  ...Array.from({ length: 30 }, (_, i) => {
    const night = i + 1;
    let description = "";
    let reward = "";
    
    // We will populate standard Nafilas from Qurratul Ayni/Senegalese traditions
    if (night === 1) {
      description = "Accomplir 10 rakkas (5 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Kafirun (1 fois) et la sourate Al-Ikhlas (1 fois).";
      reward = "Le croyant obtient le pardon de ses péchés et est protégé le jour du Jugement.";
    } else if (night === 2) {
      description = "Accomplir 6 rakkas (3 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (2 fois).";
      reward = "Dieu lui pardonne ses péchés de la journée et éloigne de lui les épreuves du tombeau.";
    } else if (night === 3) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (5 fois).";
      reward = "Dieu lui accorde une place privilégiée au Paradis et ses invocations sont exaucées.";
    } else if (night === 4) {
      description = "Accomplir 8 rakkas (4 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Qadr (3 fois).";
      reward = "Pardon général de tous ses péchés, présents et futurs.";
    } else if (night === 5) {
      description = "Accomplir 6 rakkas (3 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (3 fois) et Al-Kafirun (1 fois).";
      reward = "Ses péchés sont effacés et il reçoit la récompense de celui qui a prié dans la mosquée de la Mecque.";
    } else if (night === 6) {
      description = "Accomplir 2 rakkas (1 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (10 fois).";
      reward = "Dieu accepte son repentir sincère et lui pardonne ses manquements.";
    } else if (night === 7) {
      description = "Accomplir 10 rakkas (5 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (3 fois).";
      reward = "Il recevra la récompense des martyrs de l'Islam et verra ses vœux pieux se réaliser.";
    } else if (night === 8) {
      description = "Accomplir 2 rakkas (1 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (12 fois).";
      reward = "Il sort de ses péchés aussi pur que le jour de sa naissance.";
    } else if (night === 9) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Qadr (1 fois) et la sourate Al-Ikhlas (3 fois).";
      reward = "Il bénéficiera de l'intercession du Prophète Muhammad (PSL) au Jour Dernier.";
    } else if (night === 10) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (10 fois).";
      reward = "Dieu lui pardonne et éloigne de lui les feux de l'Enfer.";
    } else if (night === 11) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Kafirun (2 fois) et Al-Ikhlas (2 fois).";
      reward = "Ses péchés passés sont pardonnés et sa foi est raffermie.";
    } else if (night === 12) {
      description = "Accomplir 10 rakkas (5 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (6 fois).";
      reward = "Dieu lui construit un château au Paradis et remplit son cœur de lumière.";
    } else if (night === 13) {
      description = "Accomplir 10 rakkas (5 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (5 fois).";
      reward = "Pardon immense et purification spirituelle.";
    } else if (night === 14) {
      description = "Accomplir 8 rakkas (4 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (7 fois).";
      reward = "Il sera protégé contre les malheurs de ce monde et de l'au-delà.";
    } else if (night === 15) {
      description = "Accomplir 6 rakkas (3 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (10 fois).";
      reward = "Dieu lui pardonne et lui accorde la sécurité face aux châtiments.";
    } else if (night === 16) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Kafirun (1 fois) et Al-Ikhlas (10 fois).";
      reward = "Il obtiendra une couronne de lumière au Jour de la Résurrection.";
    } else if (night === 17) {
      description = "Accomplir 10 rakkas (5 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (2 fois).";
      reward = "Dieu lui pardonne tous ses péchés cachés et apparents.";
    } else if (night === 18) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (15 fois).";
      reward = "Pardon général et protection contre la pauvreté.";
    } else if (night === 19) {
      description = "Accomplir 6 rakkas (3 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (5 fois).";
      reward = "Il obtiendra la récompense d'avoir accompli mille prières recommandées.";
    } else if (night === 20) {
      description = "Accomplir 8 rakkas (4 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (3 fois).";
      reward = "Pardon des péchés de ses parents et de lui-même.";
    } else if (night === 21) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (20 fois).";
      reward = "Il aura une lumière éclatante sur le pont (Sirat) au Jour du Jugement.";
    } else if (night === 22) {
      description = "Accomplir 2 rakkas (1 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (15 fois).";
      reward = "Dieu éloigne de lui les angoisses de la tombe.";
    } else if (night === 23) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) et Al-Kafirun (3 fois).";
      reward = "Il obtient la récompense de celui qui a jeûné tout le mois et prié dans les lieux saints.";
    } else if (night === 24) {
      description = "Accomplir 6 rakkas (3 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (6 fois).";
      reward = "Ses œuvres pieuses sont multipliées et ses fautes sont gommées.";
    } else if (night === 25) {
      description = "Accomplir 8 rakkas (4 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (5 fois).";
      reward = "Protection divine contre les épreuves du monde et de l'au-delà.";
    } else if (night === 26) {
      description = "Accomplir 10 rakkas (5 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (10 fois).";
      reward = "Il sort de la nuit entièrement purifié de ses péchés.";
    } else if (night === 27) {
      description = "Accomplir 12 rakkas (6 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (10 fois). (Nuit de la Destinée / Laylatul Qadr)";
      reward = "Récompense équivalente à 83 années d'adoration continue.";
    } else if (night === 28) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) et les sourates protectrices (Al-Falaq et An-Nas, 1 fois chacune).";
      reward = "Dieu le préserve de tout mal physique et spirituel.";
    } else if (night === 29) {
      description = "Accomplir 6 rakkas (3 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (10 fois).";
      reward = "Dieu lui accorde le salut éternel et le préserve du feu.";
    } else if (night === 30) {
      description = "Accomplir 4 rakkas (2 salama) : dans chaque rakka, réciter après la Fatiha, la sourate Al-Ikhlas (25 fois).";
      reward = "Clôture bénie du mois de Ramadan avec la garantie du pardon divin.";
    }

    return {
      id: `ramadan-${night}`,
      month: 9,
      day: night,
      title: `Nafila de la ${night === 1 ? '1ère' : `${night}ème`} Nuit de Ramadan`,
      description,
      reward,
      wird: "Astaghfiroullah (100 fois), Salat ala Nabi (100 fois)"
    };
  }),

  // ─── AUTRES MOIS MUSULMANS (Recommandations Spéciales) ────────────────────────
  {
    id: "mouharram-1",
    month: 1,
    day: 1,
    title: "Nouvel An Hijri",
    description: "Recommandation de jeûner le premier jour de l'année musulmane et d'effectuer des prières de repentir.",
    reward: "Pardon des péchés de l'année écoulée et bénédiction pour l'année à venir.",
    wird: "Réciter la Fatiha 7 fois et faire des prières de bénédiction.",
    isSpecial: true
  },
  {
    id: "mouharram-10",
    month: 1,
    day: 10,
    title: "Jour d'Achoura (Tamkharit)",
    description: "Jeûner le jour d'Achoura (10 Mouharram) ainsi que le jour précédent (9 Mouharram). Recommandation de préparer un repas généreux pour la famille et de faire l'aumône aux nécessiteux.",
    reward: "Expier les péchés d'une année entière et attirer l'abondance matérielle.",
    wird: "Réciter Sourate Al-Ikhlas 1000 fois et faire l'invocation d'Achoura.",
    isSpecial: true
  },
  {
    id: "rajab-27",
    month: 7,
    day: 27,
    title: "Nuit de l'Ascension (Laylat al-Miraj)",
    description: "Accomplir 12 rakkas après la prière d'Isha. Dans chaque rakka, réciter la Fatiha et une sourate de votre choix. Après la salutation finale, réciter 100 fois 'Subhanallah wal-hamdulillah wa la ilaha illallah wallahu akbar'.",
    reward: "Les souhaits et invocations sincères formulés après cette prière sont exaucés.",
    isSpecial: true
  },
  {
    id: "shaban-15",
    month: 8,
    day: 15,
    title: "Nuit de la Mi-Cha'ban (Nisf Sha'ban)",
    description: "Jeûner le 15ème jour de Sha'ban. Veiller la nuit en prières de repentir et de demandes de bénédiction pour la subsistance et la longévité.",
    reward: "Pardon immense accordé aux créatures en cette nuit bénie.",
    wird: "Lecture de la sourate Yassin (3 fois) avec des intentions de santé, d'indépendance financière et de foi ferme.",
    isSpecial: true
  },
  {
    id: "dhul-hijja-9",
    month: 12,
    day: 9,
    title: "Jour d'Arafat",
    description: "Jeûner le jour d'Arafat pour ceux qui n'accomplissent pas le Pèlerinage. Multiplier les invocations sincères tout au long de la journée.",
    reward: "Expier les péchés de l'année précédente et de l'année suivante.",
    wird: "La meilleure parole est 'La ilaha illallah wahdahu la charika lah, lahul mulku wa lahul hamd, wa huwa 'ala kulli chay'in qadir' (100 fois).",
    isSpecial: true
  },

  // ─── RECOMMANDATIONS HEBDOMADAIRES (Nafilas Hebdo du Chapitre 18) ────────────
  {
    id: "weekly-sunday",
    month: null,
    day: null,
    dayOfWeek: 0, // Dimanche
    title: "Nafila du Dimanche",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Protection divine tout au long de la semaine et bénédictions pour le foyer."
  },
  {
    id: "weekly-monday",
    month: null,
    day: null,
    dayOfWeek: 1, // Lundi
    title: "Nafila du Lundi",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Pardon des péchés de la semaine et augmentation de la foi."
  },
  {
    id: "weekly-tuesday",
    month: null,
    day: null,
    dayOfWeek: 2, // Mardi
    title: "Nafila du Mardi",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Préservation contre les épreuves et bénédiction dans les entreprises."
  },
  {
    id: "weekly-wednesday",
    month: null,
    day: null,
    dayOfWeek: 3, // Mercredi
    title: "Nafila du Mercredi",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Tranquillité d'esprit et purification spirituelle."
  },
  {
    id: "weekly-thursday",
    month: null,
    day: null,
    dayOfWeek: 4, // Jeudi
    title: "Nafila du Jeudi",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Récompense équivalente à celle de nombreuses œuvres de bienfaisance."
  },
  {
    id: "weekly-friday",
    month: null,
    day: null,
    dayOfWeek: 5, // Vendredi
    title: "Nafila du Vendredi",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Lumière spirituelle éclatante et expiation des manquements entre deux vendredis."
  },
  {
    id: "weekly-saturday",
    month: null,
    day: null,
    dayOfWeek: 6, // Samedi
    title: "Nafila du Samedi",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Protection contre les épreuves physiques et spirituelles de la journée."
  }
];

export function getRecommendationForDate(hijriDay: number, hijriMonth: number, gregorianDayOfWeek: number): NafilaRecommendation[] {
  const list: NafilaRecommendation[] = [];
  
  // 1. Check special dates (month & day matched)
  const special = NAFILA_RECOMMENDATIONS.find(r => r.month === hijriMonth && r.day === hijriDay);
  if (special) {
    list.push(special);
  }
  
  // 2. Check general month matches (like Ramadan nights)
  if (hijriMonth === 9) {
    const ramadanNight = NAFILA_RECOMMENDATIONS.find(r => r.month === 9 && r.day === hijriDay);
    if (ramadanNight && !list.some(r => r.id === ramadanNight.id)) {
      list.push(ramadanNight);
    }
  }
  
  // 3. Check weekly recommendation (day of week matched)
  const weekly = NAFILA_RECOMMENDATIONS.find(r => r.month === null && r.day === null && r.dayOfWeek === gregorianDayOfWeek);
  if (weekly) {
    list.push(weekly);
  }
  
  return list;
}
