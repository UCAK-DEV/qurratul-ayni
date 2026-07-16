/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const txt = fs.readFileSync(path.join(__dirname, 'full_book_raw.txt'), 'utf8');
const lines = txt.split('\n');

console.log('Total chars:', txt.length);
console.log('Total lines:', lines.length);
console.log('\n=== STRUCTURE DU LIVRE (100 premières lignes non vides) ===');
let count = 0;
for (let i = 0; i < lines.length && count < 100; i++) {
  const l = lines[i].trim();
  if (l.length === 0) continue;
  count++;
  console.log(`L${i+1}: ${l.slice(0, 120)}`);
}
