const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function main() {
  const transcriptPath = 'C:\\Users\\papem\\.gemini\\antigravity-ide\\brain\\04e4c2ee-04e2-4d30-8e18-8b92d27e2d09\\.system_generated\\logs\\transcript_full.jsonl';
  const outputPath = path.join(__dirname, 'full_book.txt');

  if (!fs.existsSync(transcriptPath)) {
    console.error("Transcript file not found at path:", transcriptPath);
    return;
  }

  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  console.log("Searching for the first user input containing the book text...");

  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const step = JSON.parse(line);
      // Le premier ou l'un des premiers messages de type USER_INPUT ou USER_EXPLICIT
      if (step.type === 'USER_INPUT' || step.source === 'USER_EXPLICIT') {
        const content = step.content;
        if (content && content.includes("Xurratul Ayni") && content.length > 50000) {
          console.log(`Found a large user message containing "Xurratul Ayni" (${content.length} chars). Writing to file...`);
          fs.writeFileSync(outputPath, content, 'utf8');
          console.log("Saved book text to scratch/full_book.txt");
          return;
        }
      }
    } catch (e) {
      // ignore JSON parse errors on malformed lines
    }
  }
  console.log("Could not find a large user input matching the criteria in transcript_full.jsonl.");
}

main().catch(console.error);
