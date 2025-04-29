import { opendir, mkdir, copyFile, readdir } from 'node:fs/promises';
import { stat } from 'node:fs';
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
      throw new Error('FS Operation failed');
    } else {
      opendir(newDirPath, async (err) => {
        if (!err) {
          throw new Error('FS Operation failed');
        } else {
          await mkdir(newDirPath, { recursive: true });
          const files = await readdir(dirPath);
          const filesCopy = await readdir(newDirPath);

          for (const file of files)
            stat(
              join(dirPath, file),
              async (err, stats) => {
                if (err) throw new Error('FS Operation failed');
                if (stats.isFile()) {
                  for (const copy of filesCopy) {
                    if (!files.includes(copy)) {
                      await rm(join(newDirPath, copy));
                    }
                  }
                  await copyFile(join(dirPath, file), join(newDirPath, file));
                }
              });
        }
      });
    }
  });
};

await copy();
