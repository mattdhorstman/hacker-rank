"use strict";

const fs = require("fs");

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

// Complete the commonChild function below.
function commonChild(s1, s2) {
  let result = new Array(s1.length + 1);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(s2.length + 1);
  }

  for (let i = 0; i < result.length; i++) {
    result[i][0] = 0;
    result[0][i] = 0;
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        result[i][j] = result[i - 1][j - 1] + 1;
      } else {
        result[i][j] = Math.max(result[i][j - 1], result[i - 1][j]);
      }
    }
  }

  return result[result.length - 1][result.length - 1];
}

function main() {
  const ws = process.stdout;

  const s1 = readLine();

  const s2 = readLine();

  let result = commonChild(s1, s2);

  ws.write(result + "\n");

  ws.end();
}
