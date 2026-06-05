import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PageContent } from '@/types/content';
import { Chapter } from '@/data/chapters';

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

// Fonctions de récupération des données avec mapping Minuscules -> CamelCase
export const fetchChapters = async (): Promise<Chapter[]> => {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('chapters')
    .select('*');

  if (error) {
    console.error('Error fetching chapters:', error);
    return [];
  }

  // Mapping et Tri Numérique (pour éviter 1, 10, 2...)
  const mapped = (data || []).map((c: any) => ({
    id: c.id,
    titleAr: c.titlear,
    titleFr: c.titlefr,
    desc: c.desc,
    audioUrl: c.audiourl,
    group: c.group,
    icon: c.icon
  }));

  return mapped.sort((a, b) => parseInt(a.id) - parseInt(b.id));
};

export const fetchPageContent = async (fullId: string): Promise<PageContent | null> => {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('id', fullId)
    .single();

  if (error) {
    console.error(`Error fetching page content for ${fullId}:`, error);
    return null;
  }

  if (!data) return null;

  // Mapping pour correspondre aux interfaces TS (camelCase)
  return {
    id: data.id,
    chapterId: data.chapterid,
    sectionId: data.sectionid,
    titleFr: data.titlefr,
    titleAr: data.titlear,
    subtitleFr: data.subtitlefr,
    basmala: data.basmala,
    audioUrl: data.audiourl,
    blocks: data.blocks
  };
};
