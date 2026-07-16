const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

const targetPage = pages.find(p => p.id === '4');
if (targetPage) {
  console.log("=== Page 4 blocks ===");
  console.log(JSON.stringify(targetPage.blocks, null, 2));
}
