const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages_db.json'), 'utf8'));

// Regex to match Arabic script characters
const arabicRegex = /[\u0600-\u06FF]/;

pages.forEach(p => {
  // Check titleFr
  if (p.titlefr && arabicRegex.test(p.titlefr)) {
    console.log(`Page ID: ${p.id} - titleFr has Arabic: "${p.titlefr}"`);
  }
  
  // Check blocks content
  if (p.blocks) {
    p.blocks.forEach((b, bIdx) => {
      // Look at block titleFr
      if (b.titleFr && arabicRegex.test(b.titleFr)) {
        console.log(`Page ID: ${p.id}, Block ${bIdx} - titleFr has Arabic: "${b.titleFr}"`);
      }
      
      // Look at block content if it contains strings
      if (b.content) {
        const checkVal = (val, pathStr) => {
          if (typeof val === 'string') {
            if (arabicRegex.test(val)) {
              // Ignore if it's block type 'arabic_call' or if it looks like a transliteration/phonetic section under split_text
              if (b.type === 'arabic_call') return;
              console.log(`Page ID: ${p.id}, Block ${bIdx} [${b.type}] - ${pathStr} has Arabic: "${val}"`);
            }
          } else if (Array.isArray(val)) {
            val.forEach((item, idx) => checkVal(item, `${pathStr}[${idx}]`));
          } else if (typeof val === 'object') {
            for (let k in val) {
              // Ignore arabic/phonetic keys in split_text content
              if (k === 'arabic' || k === 'phonetic') continue;
              checkVal(val[k], `${pathStr}.${k}`);
            }
          }
        };
        checkVal(b.content, 'content');
      }
    });
  }
});
