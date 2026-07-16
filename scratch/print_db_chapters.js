const fs = require('fs');
const path = require('path');

const chapters = JSON.parse(fs.readFileSync(path.join(__dirname, 'chapters_db.json'), 'utf8'));

chapters.sort((a, b) => parseInt(a.id) - parseInt(b.id));

chapters.forEach(c => {
  console.log(`- Chapter ID: ${c.id} | FR: ${c.titlefr} | AR: ${c.titlear} | Group: ${c.group}`);
});
