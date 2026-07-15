import { getSupabaseClient } from '@/utils/supabase';
import { MOCK_PAGES } from '@/data/mockChaptersData';

/**
 * Retourne l'ensemble des identifiants de pages de contenu (ex: "5-g", "18-lundi"),
 * en combinant les pages simulées, les pages spéciales et celles de Supabase.
 * Partagé entre generateStaticParams (pré-rendu) et sitemap.ts (SEO).
 */
export async function getAllPageIds(): Promise<string[]> {
  const pageIds = new Set<string>();

  // 1. Ajouter tous les identifiants des pages simulées (MOCK_PAGES)
  Object.keys(MOCK_PAGES).forEach(id => pageIds.add(id));

  // 2. Ajouter les pages supplémentaires spéciales
  const extraPages = [
    "5-g", "5-h", "6-l", "6-m", "6-n", "6-o", "6-p",
    "10-e", "10-f", "17-i", "17-j", "17-k", "17-l", "17-m", "17-n",
    "19-e", "19-f"
  ];
  extraPages.forEach(id => pageIds.add(id));

  // 3. Ajouter les Nafilas de Ramadan (1 à 30)
  for (let i = 1; i <= 30; i++) {
    pageIds.add(`18-${i}`);
  }

  // 4. Ajouter les Nafilas hebdomadaires
  const weeklyNafilas = [
    "18-lundi", "18-mardi", "18-mercredi", "18-jeudi", "18-vendredi", "18-samedi", "18-dimanche"
  ];
  weeklyNafilas.forEach(id => pageIds.add(id));

  // 5. Tenter de charger depuis Supabase si configuré et disponible
  try {
    const client = getSupabaseClient();
    const { data } = await client
      .from('pages')
      .select('id');
    if (data) {
      data.forEach((row: { id: string }) => {
        pageIds.add(row.id);
      });
    }
  } catch (err) {
    console.warn("Could not load dynamic pages from Supabase, using fallback list:", err);
  }

  return Array.from(pageIds);
}
