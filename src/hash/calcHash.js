import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hash = createHash('sha256');

const input = createReadStream(join(__dirname, 'files/fileToCalculateHashFor.txt'));

const calculateHash = async () => {
  input.on('data', (data) => {
    console.log(hash.update(data).digest('hex'));
  })
};

await calculateHash();