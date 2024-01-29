import { createReadStream } from 'node:fs';
import path from 'node:path';
import { join } from 'node:path';
import { fileURLToPath } from 'url';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const readableStream = createReadStream(join(__dirname, '/files/fileToRead.txt'));
  readableStream.pipe(stdout);
};

await read();