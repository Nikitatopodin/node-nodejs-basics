import { rm } from 'node:fs/promises';
import { open } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname, '/files', 'fileToRemove.txt');
const remove = async () => {
  open(filePath, (err) => {
    if (err) {
      throw Error('FS Operation failed');
    } else {
      rm(filePath)
    }
  }
  )
};

await remove();