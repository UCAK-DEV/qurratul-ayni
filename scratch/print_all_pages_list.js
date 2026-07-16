const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

// Sort pages by numeric/alphabetic ID
pages.sort((a, b) => {
  const aParts = a.id.split('-');
  const bParts = b.id.split('-');
  
  const aChap = parseInt(aParts[0]) || 0;
  const bChap = parseInt(bParts[0]) || 0;
  
  if (aChap !== bChap) return aChap - bChap;
  
  return a.id.localeCompare(b.id);
});

pages.forEach(p => {
  console.log(`- ID: ${p.id} (Chapter: ${p.chapterid}) | FR: ${p.titlefr} | AR: ${p.titlear}`);
});
