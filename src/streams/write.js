import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { join } from 'node:path';
import { fileURLToPath } from 'url';
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const writableStream = createWriteStream(join(__dirname, '/files/fileToWrite.txt'));
  stdin.pipe(writableStream);
};

await write();