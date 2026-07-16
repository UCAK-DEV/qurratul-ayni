const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

const targetPage = pages.find(p => p.id === '2');
if (targetPage) {
  console.log("=== Page 2 blocks ===");
  console.log(JSON.stringify(targetPage.blocks, null, 2));
}

const page3 = pages.find(p => p.id === '3');
if (page3) {
  console.log("=== Page 3 blocks ===");
  console.log(JSON.stringify(page3.blocks, null, 2));
}
