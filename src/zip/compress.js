import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  await pipeline(
    createReadStream(join(__dirname, 'files/fileToCompress.txt')),
    createGzip(),
    createWriteStream(join(__dirname, 'files/archive.gz')),
  );
};

await compress();