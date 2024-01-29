import { appendFile } from 'node:fs/promises';
import { open } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '/files', 'fresh.txt');
const create = async () => {
  open(filePath, (err) => {
    if (!err) {
      throw new Error('FS Operation failed');
    } else {
      appendFile(filePath, 'I am fresh and young');
    }
  })
};

await create();