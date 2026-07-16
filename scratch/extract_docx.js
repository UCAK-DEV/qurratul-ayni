/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Extrait le texte brut du fichier .docx du livre Xurratul Ayni
 * et le sauvegarde dans scratch/full_book_raw.txt
 */
const path = require('path');
const fs   = require('fs');

async function main() {
  const docxPath = 'C:\\Users\\papem\\OneDrive\\Documents\\Khassida PDF\\Xurratul_ayni.docx';

  if (!fs.existsSync(docxPath)) {
    console.error('❌ Fichier introuvable :', docxPath);
    return;
  }

  // mammoth est peut-être déjà installé, sinon on tente via require
  let mammoth;
  try {
    mammoth = require('mammoth');
  } catch {
    console.log('mammoth non trouvé, installation...');
    const { execSync } = require('child_process');
    execSync('npm install mammoth --no-save', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    mammoth = require('mammoth');
  }

  console.log('📖 Extraction du texte depuis', docxPath, '...');
  const result = await mammoth.extractRawText({ path: docxPath });

  const outputPath = path.join(__dirname, 'full_book_raw.txt');
  fs.writeFileSync(outputPath, result.value, 'utf8');

  console.log(`✅ Texte extrait : ${result.value.length} caractères`);
  console.log(`✅ Sauvegardé dans scratch/full_book_raw.txt`);

  if (result.messages && result.messages.length > 0) {
    console.log('⚠️  Avertissements mammoth :', result.messages.length);
  }
}

main().catch(console.error);
