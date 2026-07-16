const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    env[parts[0].trim()] = parts.slice(1).join('=').trim();
  }
});

const supabaseUrl = env['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseAnonKey = env['NEXT_PUBLIC_SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  console.log("Fetching chapters...");
  const { data: chapters, error: err1 } = await supabase.from('chapters').select('*');
  if (err1) {
    console.error("Error fetching chapters:", err1);
  } else {
    console.log(`Fetched ${chapters.length} chapters.`);
    fs.writeFileSync(path.join(__dirname, 'chapters_db.json'), JSON.stringify(chapters, null, 2));
  }

  console.log("Fetching pages...");
  const { data: pages, error: err2 } = await supabase.from('pages').select('*');
  if (err2) {
    console.error("Error fetching pages:", err2);
  } else {
    console.log(`Fetched ${pages.length} pages.`);
    fs.writeFileSync(path.join(__dirname, 'pages_db.json'), JSON.stringify(pages, null, 2));
  }
}

run().catch(console.error);
