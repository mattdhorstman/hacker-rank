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

function hourglassSum(arr) {
  let result = undefined;
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      let localSum =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1];

      if (result === undefined) {
        result = localSum;
      } else if (localSum > result) {
        result = localSum;
      }
    }
  }

  return result;
}

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let result = hourglassSum(arr);

  console.log(result);
}
