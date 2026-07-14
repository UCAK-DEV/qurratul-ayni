import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PageContent, ContentBlock } from '@/types/content';
import { Chapter } from '@/data/chapters';
import { MOCK_CHAPTERS, MOCK_PAGES } from '@/data/mockChaptersData';
import { NAFILA_RECOMMENDATIONS } from '@/data/nafilas';
import { unstable_cache } from 'next/cache';

let supabase: SupabaseClient | undefined;

export const getSupabaseClient = () => {
  if (supabase) return supabase;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and Anon Key are required!');
  }

  supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
};

// Local storage helpers for audio updates (for admin edits when local)
const getLocalAudioUrl = (key: string, defaultUrl: string): string => {
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(`audio_${key}`);
    if (cached !== null) return cached;
  }
  return defaultUrl;
};

interface SupabaseChapter {
  id: string;
  titlear: string;
  titlefr: string;
  desc: string;
  audiourl?: string;
  group: string;
  icon: string;
}

// Fonctions de récupération des données avec mapping Minuscules -> CamelCase
const fetchChaptersInternal = async (): Promise<Chapter[]> => {
  try {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('chapters')
      .select('*');

    if (error) {
      console.warn('Supabase error fetching chapters, loading local fallback:', error);
      return loadMockChapters();
    }

    const mapped = (data || []).map((c: SupabaseChapter) => ({
      id: c.id,
      titleAr: c.titlear,
      titleFr: c.titlefr,
      desc: c.desc,
      audioUrl: getLocalAudioUrl(`chapter_${c.id}`, c.audiourl || ""),
      group: c.group,
      icon: c.icon
    }));

    return mapped.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  } catch {
    console.log('Supabase client failed initialization, using mock data.');
    return loadMockChapters();
  }
};

export const fetchChapters = unstable_cache(
  async () => fetchChaptersInternal(),
  ['chapters'],
  { revalidate: 3600 }
);

const loadMockChapters = (): Chapter[] => {
  return MOCK_CHAPTERS.map(c => ({
    ...c,
    audioUrl: getLocalAudioUrl(`chapter_${c.id}`, c.audioUrl)
  }));
};

const fetchPageContentInternal = async (fullId: string): Promise<PageContent | null> => {
  try {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('pages')
      .select('*')
      .eq('id', fullId)
      .single();

    if (error) {
      console.warn(`Supabase error fetching page content for ${fullId}, loading local fallback.`);
      return loadMockPage(fullId);
    }

    if (!data) return null;

    return {
      id: data.id,
      chapterId: data.chapterid,
      sectionId: data.sectionid,
      titleFr: data.titlefr,
      titleAr: data.titlear,
      subtitleFr: data.subtitlefr,
      basmala: data.basmala,
      audioUrl: getLocalAudioUrl(`page_${data.id}`, data.audiourl || ""),
      blocks: data.blocks
    };
  } catch {
    return loadMockPage(fullId);
  }
};

export const fetchPageContent = unstable_cache(
  async (fullId: string) => fetchPageContentInternal(fullId),
  ['page-content'],
  { revalidate: 3600 }
);

const extraPagesData: Record<string, { titleFr: string; audioUrl: string; description?: string; reward?: string }> = {
  "5-g": { titleFr: "L'usage du Siwak (Sotju)", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C007.mp3" },
  "5-h": { titleFr: "Règles diverses de purification", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C009.mp3" },
  "6-l": { titleFr: "Invocations post-prière", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C014.mp3" },
  "6-m": { titleFr: "Bienséance de la mosquée", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C015.mp3" },
  "6-n": { titleFr: "Règles de l'Imam et Qunut", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C016.mp3" },
  "6-o": { titleFr: "La Sutrah (Obstacle)", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C017.mp3" },
  "6-p": { titleFr: "Suivre l'Imam", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C020.mp3" },
  "10-e": { titleFr: "L'aumône de rupture (Fitr)", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C034.mp3" },
  "10-f": { titleFr: "Jours de jeûne conseillés/interdits", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C040.mp3" },
  "17-i": { titleFr: "Les bons comportements", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C060.mp3" },
  "17-j": { titleFr: "Jours à éviter", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C061.mp3" },
  "17-k": { titleFr: "Le mois de Tamharit", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C062.mp3" },
  "17-l": { titleFr: "Le mois de Maouloud (Gamou)", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C063.mp3" },
  "17-m": { titleFr: "La mi-Sha'ban", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C064.mp3" },
  "17-n": { titleFr: "Premier jour de l'année", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C065.mp3" },
  "18-dimanche": { 
    titleFr: "Nafila du Dimanche", 
    audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C067.mp3",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Protection divine tout au long de la semaine et bénédictions pour le foyer."
  },
  "18-lundi": { 
    titleFr: "Nafila du Lundi", 
    audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C068.mp3",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Pardon des péchés de la semaine et augmentation de la foi."
  },
  "18-mardi": { 
    titleFr: "Nafila du Mardi", 
    audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C069.mp3",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Préservation contre les épreuves et bénédiction dans les entreprises."
  },
  "18-mercredi": { 
    titleFr: "Nafila du Mercredi", 
    audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C070.mp3",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Tranquillité d'esprit et purification spirituelle."
  },
  "18-jeudi": { 
    titleFr: "Nafila du Jeudi", 
    audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C071.mp3",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Récompense équivalente à celle de nombreuses œuvres de bienfaisance."
  },
  "18-vendredi": { 
    titleFr: "Nafila du Vendredi", 
    audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C072.mp3",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Lumière spirituelle éclatante et expiation des manquements entre deux vendredis."
  },
  "18-samedi": { 
    titleFr: "Nafila du Samedi", 
    audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C073.mp3",
    description: "Accomplir 4 Rakkas (2 Salama) : réciter après la Fatiha, la sourate Al-Ikhlas (10 fois) dans chaque rakka.",
    reward: "Protection contre les épreuves physiques et spirituelles de la journée."
  },
  "19-e": { titleFr: "Les mérites du Basmala", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C105.mp3" },
  "19-f": { titleFr: "Le Rappel d'Allah (Dhikr)", audioUrl: "https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C107.mp3" }
};

const loadMockPage = (fullId: string): PageContent | null => {
  // Check if it's a Ramadan Nafila day
  if (fullId.startsWith("18-")) {
    const suffix = fullId.split("-")[1];
    const day = parseInt(suffix);
    if (!isNaN(day) && day >= 1 && day <= 30) {
      const index = 74 + day - 1;
      const padded = String(index).padStart(3, '0');
      
      // Look up detailed recommendations
      const rec = NAFILA_RECOMMENDATIONS.find(r => r.month === 9 && r.day === day);
      const blocks: ContentBlock[] = [];
      let customTitle = `Nafila Ramadan - Jour ${day}`;
      
      if (rec) {
        customTitle = rec.title;
        if (rec.description) {
          blocks.push({ type: "text_block" as const, content: rec.description });
        }
        if (rec.reward) {
          blocks.push({ type: "quote" as const, content: `Bienfaits : ${rec.reward}` });
        }
        if (rec.wird) {
          blocks.push({ type: "text_block" as const, content: `Litanies / Wird : ${rec.wird}` });
        }
      } else {
        blocks.push({ type: "text_block" as const, content: `Explication audio en Wolof par S. Omar Kane Balla Aissa pour la Nafila du jour ${day} du mois de Ramadan.` });
      }

      return {
        id: fullId,
        chapterId: "18",
        sectionId: suffix,
        titleFr: customTitle,
        titleAr: customTitle,
        basmala: false,
        audioUrl: getLocalAudioUrl(`page_${fullId}`, `https://yoonewi.net/res/audio/Al_Khouratoul_Ayni/C${padded}.mp3`),
        blocks
      };
    }
  }

  // Check extra page details
  const extra = extraPagesData[fullId];
  if (extra) {
    const parts = fullId.split('-');
    const chapterId = parts[0];
    const sectionId = parts[1] || "";
    const blocks: ContentBlock[] = [];
    
    if (extra.description) {
      blocks.push({ type: "text_block" as const, content: extra.description });
    } else {
      blocks.push({ type: "text_block" as const, content: `Explication audio en Wolof par S. Omar Kane Balla Aissa pour la section : ${extra.titleFr}.` });
    }
    
    if (extra.reward) {
      blocks.push({ type: "quote" as const, content: extra.reward });
    }

    return {
      id: fullId,
      chapterId,
      sectionId,
      titleFr: extra.titleFr,
      titleAr: extra.titleFr,
      basmala: false,
      audioUrl: getLocalAudioUrl(`page_${fullId}`, extra.audioUrl),
      blocks
    };
  }

  const mockPage = MOCK_PAGES[fullId];
  if (mockPage) {
    return {
      ...mockPage,
      audioUrl: getLocalAudioUrl(`page_${fullId}`, mockPage.audioUrl || "")
    };
  }

  // Safe default page structure if not mocked
  const parts = fullId.split('-');
  const chapterId = parts[0];
  const sectionId = parts[1] || "";
  
  const mockChapter = MOCK_CHAPTERS.find(c => c.id === chapterId);
  if (!mockChapter) return null;

  return {
    id: fullId,
    chapterId,
    sectionId,
    titleFr: `${mockChapter.titleFr} - Section ${sectionId.toUpperCase() || "Intro"}`,
    titleAr: mockChapter.titleAr,
    basmala: true,
    audioUrl: getLocalAudioUrl(`page_${fullId}`, ""),
    blocks: [
      {
        type: "text_block",
        content: `Contenu de la section ${sectionId.toUpperCase() || "Introduction"} du chapitre ${chapterId} (${mockChapter.titleFr}).`
      }
    ]
  };
};
