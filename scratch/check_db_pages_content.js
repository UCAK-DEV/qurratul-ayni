const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

console.log(`Total pages in database: ${pages.length}`);
pages.forEach(p => {
  let isPlaceholder = false;
  if (p.blocks && p.blocks.length === 1 && p.blocks[0]) {
    const content = p.blocks[0].content;
    if (typeof content === 'string' && content.includes('Contenu de la section')) {
      isPlaceholder = true;
    } else if (Array.isArray(content) && content.length > 0 && typeof content[0] === 'string' && content[0].includes('Contenu de la section')) {
      isPlaceholder = true;
    }
  }
  
  console.log(`- Page ID: ${p.id} | FR: ${p.titlefr} | Blocks: ${p.blocks ? p.blocks.length : 0} | Placeholder: ${isPlaceholder ? 'YES' : 'NO'}`);
});
