const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function main() {
  const transcriptPath = 'C:\\Users\\papem\\.gemini\\antigravity-ide\\brain\\04e4c2ee-04e2-4d30-8e18-8b92d27e2d09\\.system_generated\\logs\\transcript_full.jsonl';
  const outputPath = path.join(__dirname, 'last_user_input.txt');

  if (!fs.existsSync(transcriptPath)) {
    console.error("Transcript file not found at path:", transcriptPath);
    return;
  }

  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lastUserInput = null;
  let stepIndex = null;
  
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const step = JSON.parse(line);
      if (step.type === 'USER_INPUT') {
        lastUserInput = step.content;
        stepIndex = step.step_index;
      }
    } catch (e) {
      // ignore
    }
  }

  if (lastUserInput) {
    console.log(`Found last USER_INPUT at step ${stepIndex} (${lastUserInput.length} chars). Saving...`);
    fs.writeFileSync(outputPath, lastUserInput, 'utf8');
    console.log("Saved to scratch/last_user_input.txt");
  } else {
    console.log("No USER_INPUT found.");
  }
}

main().catch(console.error);
