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

function main() {
  const N = parseInt(readLine(), 10);
  const names = [];

  for (let NItr = 0; NItr < N; NItr++) {
    const firstNameEmailID = readLine().split(" ");

    const firstName = firstNameEmailID[0];

    const emailID = firstNameEmailID[1];

    if (emailID.match(/[a-z0-9]+@gmail\.com/)) {
      names.push(firstName);
    }
  }

  names.sort();
  names.forEach((e) => console.log(e));
}
