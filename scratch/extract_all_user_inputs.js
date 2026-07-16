const fs = require('fs');
const path = require('path');
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
      if (step.type === 'USER_INPUT') {
        count++;
        const filename = `user_input_${count}_step_${step.step_index}.txt`;
        const outputPath = path.join(__dirname, filename);
        fs.writeFileSync(outputPath, step.content, 'utf8');
        console.log(`Saved step ${step.step_index} (${step.content.length} chars) to scratch/${filename}`);
      }
    } catch (e) {
      // ignore
    }
  }
}

main().catch(console.error);
