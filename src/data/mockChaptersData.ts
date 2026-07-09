import { Chapter } from './chapters';
import { PageContent } from '@/types/content';

export const MOCK_CHAPTERS: Chapter[] = [
  { id: "1", titleFr: "Introduction Générale", titleAr: "مقدمة عامة", desc: "Introduction à l'œuvre et biographie de Serigne Shouhaïbou Mbacké.", audioUrl: "", group: "Introduction", icon: "auto_stories" },
  { id: "2", titleFr: "La profession de foi (Chahada)", titleAr: "الشهادة عقيدة وفكرا", desc: "Les fondements de la foi islamique et l'unicité de Dieu.", audioUrl: "", group: "Les Piliers", icon: "school" },
  { id: "3", titleFr: "La prière rituelle (Salat)", titleAr: "الصلاة عماد الدين", desc: "La structure de la prière et son importance dans la vie du croyant.", audioUrl: "", group: "Les Piliers", icon: "menu_book" },
  { id: "4", titleFr: "L'aumône légale (Zakat)", titleAr: "الزكاة طهارة للمال", desc: "Les principes fondamentaux de la Zakat et de l'aumône.", audioUrl: "", group: "Les Piliers", icon: "payments" },
  { id: "5", titleFr: "La purification du corps (Taharah)", titleAr: "الطهارة وأحكامها", desc: "Ablutions, purification majeure, Tayamoum et gestion des impuretés.", audioUrl: "", group: "Jurisprudence", icon: "clean_hands" },
  { id: "6", titleFr: "Règles détaillées de la prière", titleAr: "أحكام الصلاة بالتفصيل", desc: "Les cinq prières obligatoires, prières surérogatoires et pratiques de voyage.", audioUrl: "", group: "Jurisprudence", icon: "clinical_notes" },
  { id: "7", titleFr: "Le jeûne du Ramadan (Sawm)", titleAr: "الصوم فضائله وأحكامه", desc: "Introduction aux vertus spirituelles et physiques du jeûne.", audioUrl: "", group: "Les Piliers", icon: "wb_sunny" },
  { id: "8", titleFr: "Le convoi funèbre (Janaza)", titleAr: "الجنائز وأحكامها", desc: "Le lavage mortuaire, la prière funéraire et les rituels associés.", audioUrl: "", group: "Jurisprudence", icon: "airline_seat_flat" },
  { id: "9", titleFr: "La Zakat en détail", titleAr: "أحكام الزكاة بالتفصيل", desc: "Calcul de la Zakat sur l'argent épargné, le bétail et les récoltes.", audioUrl: "", group: "Jurisprudence", icon: "account_balance" },
  { id: "10", titleFr: "Règles et cas particuliers du jeûne", titleAr: "أحكام الصيام الخاصة", desc: "Règles du jeûne, obligations, actes blâmables et rupture du jeûne.", audioUrl: "", group: "Jurisprudence", icon: "brightness_3" },
  { id: "11", titleFr: "Le Pèlerinage (Hajj et Umrah)", titleAr: "الحج والعمرة", desc: "Les rites du pèlerinage majeur et mineur.", audioUrl: "", group: "Les Piliers", icon: "explore" },
  { id: "12", titleFr: "Mariage et Vie Familiale", titleAr: "النكاح وحقوق الأسرة", desc: "Obligations conjugales, baptême, allaitement, éducation des enfants.", audioUrl: "", group: "Rites et Société", icon: "family_restroom" },
  { id: "13", titleFr: "Divorce et Retraite légale (Iddah)", titleAr: "الطلاق والعدة", desc: "Les cas de séparation légale et les délais de viduité.", audioUrl: "", group: "Rites et Société", icon: "gavel" },
  { id: "14", titleFr: "Transactions Commerciales (Muamalat)", titleAr: "المعاملات المالية", desc: "Règles éthiques du commerce, interdiction de l'usure.", audioUrl: "", group: "Rites et Société", icon: "storefront" },
  { id: "15", titleFr: "Nourriture, Chasse et Sacrifices", titleAr: "الأطعمة والذبائح", desc: "Alimentation licite, règles de la chasse et fête de la Tabaski.", audioUrl: "", group: "Rites et Société", icon: "restaurant" },
  { id: "16", titleFr: "Serments et Vœux", titleAr: "الأيمان والنذور", desc: "L'engagement par la parole, les expiations en cas de rupture.", audioUrl: "", group: "Jurisprudence", icon: "history_edu" },
  { id: "17", titleFr: "Recommandations et Interdits", titleAr: "المنهيات والآداب", desc: "Pratiques interdites, causes de pauvreté, sounna et jours recommandés.", audioUrl: "", group: "Spiritualité", icon: "shield" },
  { id: "18", titleFr: "Les Peines Légales", titleAr: "الحدود وأحكامها", desc: "La justice réparatrice et les peines prévues en jurisprudence.", audioUrl: "", group: "Jurisprudence", icon: "balance" },
  { id: "19", titleFr: "Invocations, Wirds et Aumône", titleAr: "الأدعية والأذكار والصدقة", desc: "Les prières quotidiennes, la lecture du Coran et les wirds de protection.", audioUrl: "", group: "Spiritualité", icon: "psychology" }
];

export const MOCK_PAGES: Record<string, PageContent> = {
  "1": {
    id: "1",
    chapterId: "1",
    titleFr: "Introduction Générale",
    titleAr: "مقدمة عامة",
    subtitleFr: "Biographie de Serigne Shouhaïbou Mbacké",
    basmala: true,
    audioUrl: "",
    blocks: [
      {
        type: "text_block",
        content: "Bienvenue dans l'œuvre Qurratul Ayni ('La Réjouissance des Yeux'), un guide complet et structuré de l'enseignement islamique rédigé par Serigne Shouhaïbou Mbacké, fils de Cheikh Ahmadou Bamba."
      },
      {
        type: "quote",
        content: "Cette édition numérique vise à faciliter l'étude méthodique et l'écoute de cette œuvre spirituelle majeure."
      }
    ]
  },
  "2": {
    id: "2",
    chapterId: "2",
    titleFr: "La profession de foi (Chahada)",
    titleAr: "الشهادة عقيدة وفكرا",
    subtitleFr: "Les fondements du Tawhid",
    basmala: true,
    audioUrl: "",
    blocks: [
      {
        type: "text_block",
        content: "La profession de foi est la clé d'entrée en Islam. Elle consiste à attester que nul n'est digne d'adoration en dehors de Dieu (Allah) et que Muhammad est Son Messager."
      }
    ]
  },
  "5": {
    id: "5",
    chapterId: "5",
    titleFr: "La purification du corps (Taharah)",
    titleAr: "الطهارة وأحكامها",
    basmala: true,
    audioUrl: "",
    blocks: [
      {
        type: "text_block",
        content: "La purification est une condition préalable indispensable à la validité de la prière. Elle se divise en purification interne (du cœur) et externe (du corps et des vêtements)."
      }
    ]
  },
  "5-a": {
    id: "5-a",
    chapterId: "5",
    sectionId: "a",
    titleFr: "La purification du corps",
    titleAr: "طهارة البدن",
    basmala: true,
    audioUrl: "",
    blocks: [
      { type: "text_block", content: "La purification majeure et mineure implique l'usage d'une eau pure. Les règles du bain rituel (Ghousl) et des ablutions sont abordées en détail." }
    ]
  },
  "6": {
    id: "6",
    chapterId: "6",
    titleFr: "Règles détaillées de la prière",
    titleAr: "أحكام الصلاة بالتفصيل",
    basmala: true,
    audioUrl: "",
    blocks: [
      {
        type: "text_block",
        content: "La prière est le pilier de la religion. Ce chapitre aborde les règles régissant l'accomplissement des prières obligatoires et surérogatoires."
      }
    ]
  },
  "6-j": {
    id: "6-j",
    chapterId: "6",
    sectionId: "j",
    titleFr: "Prières surérogatoires (Nafilas)",
    titleAr: "النوافل في الفقه",
    basmala: true,
    audioUrl: "",
    blocks: [
      {
        type: "text_block",
        content: "Les prières surérogatoires (Nafilas) permettent de se rapprocher de Dieu et de compenser d'éventuelles faiblesses dans les prières obligatoires. Le livre Qurratul Ayni met un accent particulier sur ces prières recommandées selon les mois et les jours de l'année."
      }
    ]
  },
  "17-g": {
    id: "17-g",
    chapterId: "17",
    sectionId: "g",
    titleFr: "Jours recommandés",
    titleAr: "الأيام المستحبة",
    basmala: true,
    audioUrl: "",
    blocks: [
      {
        type: "text_block",
        content: "Certains jours de l'année et de la semaine possèdent des vertus particulières en Islam pour le jeûne, les invocations et les prières surérogatoires."
      }
    ]
  },
  "19": {
    id: "19",
    chapterId: "19",
    titleFr: "Invocations, Wirds et Aumône",
    titleAr: "الأدعية والأذكار والصدقة",
    basmala: true,
    audioUrl: "",
    blocks: [
      {
        type: "text_block",
        content: "Les wirds de protection, la lecture régulière du Coran et les actes d'aumône discrète constituent le bouclier spirituel du croyant."
      }
    ]
  }
};
