"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function doStuff(n, k) {
  let max = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((i & j) > max && (i & j) < k) {
        max = i & j;
      }
    }
  }

  return max;
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(" ");

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    console.log(doStuff(n, k));
  }
}
