// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }

//   if (n === 2 || n === 3) {
//     return true;
//   }

//   if (n % 2 === 0 || n % 3 === 0) {
//     return false;
//   }

//   for (let i = 5; i * i < n; i = i + 6) {
//     if (n % i === 0 || n % (i + 2) === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function main() {
//   const tests = [12, 5, 7, 1, 2, 36, 200]; //Not Prime Prime Prime

//   for (let i = 0; i < tests.length; i++) {
//     console.log(isPrime(tests[i]));
//   }
// }

// main();
function processData(input) {
  //Enter your code here
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }

    if (n === 2 || n === 3) {
      return true;
    }

    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= n; i = i + 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  }
  const data = input.split("\n").splice(1).map(Number);
  for (let i = 0; i < data.length; i++) {
    isPrime(data[i]) ? console.log("Prime") : console.log("Not prime");
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
