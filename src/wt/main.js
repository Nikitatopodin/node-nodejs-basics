import os from 'node:os';
import { Worker, setEnvironmentData } from 'node:worker_threads';
import path from 'node:path';
import { join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const promisesArr = [];

const createWorker = (i) => {
  return new Promise((resolve) => {
    setEnvironmentData('value', 10 + i);
    const worker = new Worker(join(__dirname, 'worker.js'));
    worker.on('message', (data) => resolve({ status: 'resolved', data: data }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
  })
}

const performCalculations = async () => {
  const threadsNum = os.availableParallelism();
  for (let i = 0; i < threadsNum; i++) {
    promisesArr.push(createWorker(i));
  }
  Promise.all(promisesArr)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

await performCalculations();