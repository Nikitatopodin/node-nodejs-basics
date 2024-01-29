import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const myTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split('').reverse().join('').trim() + '\n');
  },
});

const transform = async () => {
  stdin.pipe(myTransform).pipe(stdout);
};

await transform();