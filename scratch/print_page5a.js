const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

const targetPage = pages.find(p => p.id === '5-a');
if (targetPage) {
  console.log("=== Page 5-a blocks ===");
  console.log(JSON.stringify(targetPage.blocks, null, 2));
}
