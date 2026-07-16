const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

pages.forEach(p => {
  if (['1', '2', '5', '5-a', '5-b', '5-c'].includes(p.id)) {
    console.log(`=== Page ID: ${p.id} ===`);
    console.log(`Title FR: ${p.titlefr}`);
    console.log(`Title AR: ${p.titlear}`);
    console.log(`Blocks count: ${p.blocks ? p.blocks.length : 0}`);
    console.log(JSON.stringify(p.blocks, null, 2));
    console.log("\n");
  }
});
