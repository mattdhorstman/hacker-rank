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

function isWeird(num) {
  if (num % 2 === 1) {
    return 'Weird';
  } else {
    if (2 <= num && num <= 5) {
      return 'Not Weird';
    } else if (6 <= num && num <= 20) {
      return 'Weird';
    } else {
      return 'Not Weird';
    }
  }
}

function main() {
  const N = parseInt(readLine(), 10);
  console.log(isWeird(N));
}
