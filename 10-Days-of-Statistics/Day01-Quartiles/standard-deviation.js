function stdDev(arr) {
  let mean;
  let acc = 0;
  mean = parseFloat(arr.reduce((acc, cur) => acc + cur) / arr.length);
  for (let i = 0; i < arr.length; i++) {
    acc += Math.pow(arr[i] - mean, 2);
  }
  return Math.sqrt(parseFloat(acc / arr.length));
}

function processData(input) {
  //Enter your code here
  let [n, arr] = input.split('\n');
  n = parseInt(n);
  arr = arr.split(' ').map((x) => parseInt(x));

  console.log(stdDev(arr).toFixed(1));
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function(input) {
  _input += input;
});

process.stdin.on('end', function() {
  processData(_input);
});
