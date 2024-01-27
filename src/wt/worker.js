import { parentPort, getEnvironmentData } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const n = getEnvironmentData('value');
  const num = nthFibonacci(n)
  parentPort.postMessage(num);
};

sendResult();