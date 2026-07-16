const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

const targets = ['1', '2', '3', '4', '5', '5-a', '5-b', '5-c', '5-d', '5-e', '5-f', '6', '6-a'];

pages.forEach(p => {
  if (targets.includes(p.id)) {
    console.log(`=== Page ID: ${p.id} (${p.titlefr}) ===`);
    console.log("Blocks:", JSON.stringify(p.blocks, null, 2));
    console.log("\n");
  }
});
