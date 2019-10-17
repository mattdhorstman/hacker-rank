test = `2
Hacker
Rank`;

function oddEven(str) {
  let even = '';
  let odd = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      even = even.concat(str.charAt(i));
    } else {
      odd = odd.concat(str.charAt(i));
    }
  }

  return even.concat(' ').concat(odd);
}

function processData(input) {
  //Enter your code here
  [n, ...args] = input.split('\n');
  n = parseInt(n);

  for (let i = 0; i < n; i++) {
    console.log(oddEven(args[i]));
  }
}

processData(test);
