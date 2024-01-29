import * as Promsises from 'node:fs/promises';
import { open } from 'node:fs';
import path from 'node:path';
import { join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const dirPath = join(__dirname, 'files/wrongFilename.txt');
  const newDirPath = join(__dirname, 'files/properFilename.md');
  open(dirPath, (err) => {
    if (err) {
      throw new Error('FS Operation failed');
    } else {
      open(newDirPath, 'r', (err) => {
        if (!err) {
          throw new Error('FS Operation failed');
        } else {
          Promsises.rename(dirPath, newDirPath);
        }
      })
    };
  })
};

await rename();