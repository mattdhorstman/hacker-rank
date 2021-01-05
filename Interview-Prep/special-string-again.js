"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the substrCount function below.
function substrCount(n, s) {
  let retVal = n;

  for (let i = 0; i < s.length; i++) {
    let startChar = s[i];
    let diffIndex = -1;

    for (let j = i + 1; j < s.length; j++) {
      let currChar = s[j];
      if (startChar == currChar) {
        if (diffIndex === -1 || j - diffIndex == diffIndex - i) {
          retVal++;
        }
      } else {
        if (diffIndex == -1) {
          diffIndex = j;
        } else {
          break;
        }
      }
    }
  }

  return retVal;
}

function main() {
  const ws = fs.createWriteStream("out.txt");

  const n = parseInt(readLine(), 10);

  const s = readLine();

  const result = substrCount(n, s);

  ws.write(result + "\n");

  ws.end();
}
