import { readdir, opendir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const dirPath = path.join(__dirname, 'files');

  opendir(dirPath, async (err) => {
    if (err) {
      throw Error('FS Operation failed');
    } else {
      const files = await readdir(dirPath);
      for (const file of files) {
        console.log(file);
      }
    }
  })
};

await list();