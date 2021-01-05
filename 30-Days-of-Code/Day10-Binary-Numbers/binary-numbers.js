'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function binaryCount(n) {
  let bin = n.toString(2);
  let cur = 0;
  let max = 0;

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      cur += 1;
    } else {
      if (cur > max) {
        max = cur;
      }
      cur = 0;
    }
  }
  if (cur > max) {
    max = cur;
  }

  return max;
}

function main() {
  const n = parseInt(readLine(), 10);

  console.log(binaryCount(n));
}
