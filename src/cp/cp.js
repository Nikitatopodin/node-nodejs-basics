import path from 'node:path';
import { join } from 'node:path';
import { fileURLToPath } from 'url';
import { fork } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = fork(join(__dirname, 'files/script.js'), args);
};

spawnChildProcess(['child', 'omega']);
