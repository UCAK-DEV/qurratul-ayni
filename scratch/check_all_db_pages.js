/* eslint-disable @typescript-eslint/no-require-imports */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const eqIdx = line.indexOf('=');
  if (eqIdx > 0) env[line.slice(0, eqIdx).trim()] = line.slice(eqIdx + 1).trim();
});

const supabase = createClient(env['NEXT_PUBLIC_SUPABASE_URL'], env['NEXT_PUBLIC_SUPABASE_ANON_KEY']);

async function main() {
  const { data, error } = await supabase
    .from('pages')
    .select('id, titlefr, blocks')
    .order('id');

  if (error) {
    console.error("Error fetching pages:", error.message);
    return;
  }

  console.log(`Fetched ${data.length} pages from Supabase:\n`);
  for (const page of data) {
    const textLength = JSON.stringify(page.blocks).length;
    // Vérifier si un bloc contient des points de suspension de type "..." ou des résumés
    const hasSummaryIndicator = JSON.stringify(page.blocks).includes('...');
    const hasSuspicion = JSON.stringify(page.blocks).includes('résumé') || JSON.stringify(page.blocks).includes('resume');
    console.log(`Page ID: ${page.id.padEnd(12)} | Title: ${page.titlefr.padEnd(45)} | Blocks length: ${String(textLength).padStart(6)} | Has "...": ${hasSummaryIndicator} | Has "résumé": ${hasSuspicion}`);
  }
}

main().catch(console.error);
