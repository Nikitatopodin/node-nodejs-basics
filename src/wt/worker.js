import { parentPort, getEnvironmentData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const n = getEnvironmentData('value');
  const num = nthFibonacci(n)
  parentPort.postMessage(num);
};

sendResult();