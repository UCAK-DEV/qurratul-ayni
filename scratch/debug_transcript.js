const fs = require('fs');
const readline = require('readline');

async function main() {
  const transcriptPath = 'C:\\Users\\papem\\.gemini\\antigravity-ide\\brain\\04e4c2ee-04e2-4d30-8e18-8b92d27e2d09\\.system_generated\\logs\\transcript_full.jsonl';

  if (!fs.existsSync(transcriptPath)) {
    console.error("Transcript file not found at path:", transcriptPath);
    return;
  }

  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let count = 0;
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const step = JSON.parse(line);
      count++;
      console.log(`Step ${count}: index=${step.step_index}, type=${step.type}, source=${step.source}, content-len=${step.content ? step.content.length : 0}`);
      if (step.content && step.content.includes("Xurratul Ayni")) {
        console.log(`  -> Contains 'Xurratul Ayni' ! Length: ${step.content.length}`);
      }
    } catch (e) {
      console.error("JSON parse error on line:", line.slice(0, 100));
    }
  }
}

main().catch(console.error);
