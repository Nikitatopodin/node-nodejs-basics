import { readFile } from 'node:fs/promises';
import { open } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, 'files/fileToRead.txt');
  open(filePath, async (err) => {
    if (err) {
      throw new Error('FS Operation failed');
    } else {
      const content = await readFile(filePath, 'utf-8');
      console.log(content);
    }
  })
};

await read();