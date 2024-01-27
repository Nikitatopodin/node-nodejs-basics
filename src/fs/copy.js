import { opendir, cp } from 'node:fs/promises';
import path from 'node:path';
import { join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const newDirPath = join(__dirname, 'files_copy');
  const dirPath = join(__dirname, 'files');
  await opendir(dirPath, (err) => {
    if (err) {
      throw Error('FS Operation failed');
    } else {
      opendir(newDirPath, (err) => {
        if (!err) {
          throw Error('FS Operation failed');
        } else {
          cp(
            dirPath,
            newDirPath,
            {
              recursive: true,
              force: false,
            }
          )
        }
      });
    }
  });
};

await copy();
