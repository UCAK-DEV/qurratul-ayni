import { createClient } from '@supabase/supabase-js';
import { CHAPTERS } from '../src/data/chapters';
import { PAGES_CONTENT } from '../src/data/pages_content';
import * as dotenv from 'dotenv';
import path from 'path';

// Chargement des variables d'environnement (.env.local)
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Nécessite la clé Service Role pour l'écriture

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Erreur: NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont requis dans .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrate() {
  console.log("🚀 Démarrage de la migration vers Supabase...");

  // 1. Migration des Chapitres
  console.log("📦 Importation des chapitres...");
  const { error: chapterError } = await supabase
    .from('chapters')
    .upsert(CHAPTERS, { onConflict: 'id' });

  if (chapterError) {
    console.error("❌ Erreur chapitres:", chapterError.message);
  } else {
    console.log("✅ Chapitres importés avec succès.");
  }

  // 2. Migration des Pages (Leçons)
  console.log("📄 Importation des pages (leçons)...");
  const pagesArray = Object.values(PAGES_CONTENT);
  
  const { error: pageError } = await supabase
    .from('pages')
    .upsert(pagesArray, { onConflict: 'id' });

  if (pageError) {
    console.error("❌ Erreur pages:", pageError.message);
  } else {
    console.log(`✅ ${pagesArray.length} pages importées avec succès.`);
  }

  console.log("🏁 Migration terminée !");
}

migrate();
