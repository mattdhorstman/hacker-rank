// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

/////////////// ignore above this line ////////////////////

function main() {
  // var n = parseInt(readLine());
  // a = readLine().split(' ');
  // a = a.map(Number);
  let a = [3, 2, 1];
  // Write Your Code Here
  let numSwaps = 0;

  for (let i = 0; i < a.length; i++) {
    let passCount = 0;
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        passCount = passCount + 1;
      }
    }
    if (passCount === 0) {
      break;
    } else {
      numSwaps = numSwaps + passCount;
    }
  }

  console.log(
    `Array is sorted in ${numSwaps} swaps.
First Element: ${a[0]}
Last Element: ${a[a.length - 1]}`
  );
}

main();
