import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PageContent } from '@/types/content';
import { Chapter } from '@/data/chapters';
import { MOCK_CHAPTERS, MOCK_PAGES } from '@/data/mockChaptersData';

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
export const fetchChapters = async (): Promise<Chapter[]> => {
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

const loadMockChapters = (): Chapter[] => {
  return MOCK_CHAPTERS.map(c => ({
    ...c,
    audioUrl: getLocalAudioUrl(`chapter_${c.id}`, c.audioUrl)
  }));
};

export const fetchPageContent = async (fullId: string): Promise<PageContent | null> => {
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

const loadMockPage = (fullId: string): PageContent | null => {
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
