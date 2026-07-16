const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));
const targets = ['1', '2', '3', '4', '5', '5-a', '5-b', '5-c', '5-d', '5-e', '5-f', '6', '6-a'];

targets.forEach(id => {
  const p = pages.find(page => page.id === id);
  if (p) {
    console.log(`\n==================================================`);
    console.log(`Page: ${p.id} (${p.titlefr})`);
    console.log(`==================================================`);
    if (p.blocks) {
      p.blocks.forEach((block, idx) => {
        console.log(`  Block ${idx} [${block.type}]:`);
        if (block.type === 'text_block') {
          console.log(`    Content:`, Array.isArray(block.content) ? block.content.map(s => s.substring(0, 100) + '...') : block.content?.substring(0, 100) + '...');
        } else if (block.type === 'split_text') {
          block.content.forEach((item, sIdx) => {
            console.log(`    Sub-Item ${sIdx} [label: ${item.label}]:`);
            console.log(`      Paragraphs:`, Array.isArray(item.paragraphs) ? item.paragraphs.map(s => s.substring(0, 100) + '...') : item.paragraphs?.substring(0, 100) + '...');
            if (item.quote) console.log(`      Quote:`, item.quote.substring(0, 100) + '...');
          });
        } else if (block.type === 'procedure') {
          console.log(`    TitleFr: ${block.titleFr}`);
          console.log(`    Content (${block.content.length} steps):`);
          block.content.forEach((step, sIdx) => {
            console.log(`      Step ${sIdx+1}: ${step.substring(0, 100)}...`);
          });
        } else if (block.type === 'comparison') {
          console.log(`    Columns:`);
          block.content.forEach((col, cIdx) => {
            console.log(`      Col ${cIdx+1} [${col.titleFr}]:`, col.items.map(s => s.substring(0, 50) + '...'));
          });
        } else if (block.type === 'quote') {
          console.log(`    Content:`, Array.isArray(block.content) ? block.content.map(s => s.substring(0, 100) + '...') : block.content?.substring(0, 100) + '...');
        } else {
          console.log(`    Content:`, JSON.stringify(block.content).substring(0, 200) + '...');
        }
      });
    } else {
      console.log("  No blocks.");
    }
  }
});
