const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

pages.forEach(p => {
  const str = JSON.stringify(p);
  if (str.includes("enver")) {
    console.log(`Match found in Page ID: ${p.id} (${p.titlefr})`);
    // Find where exactly
    p.blocks.forEach((b, idx) => {
      const bStr = JSON.stringify(b);
      if (bStr.includes("enver")) {
        console.log(`  Block ${idx}: ${bStr}`);
      }
    });
  }
});
