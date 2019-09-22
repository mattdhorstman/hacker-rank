function processData(input) {
  let [n, vals, weights] = input.split('\n');
  n = parseInt(n);
  vals = vals.split(' ').map((x) => parseInt(x));
  weights = weights.split(' ').map((x) => parseInt(x));

  let numerator = 0;
  for (let i = 0; i < n; i++) {
    numerator += vals[i] * weights[i];
  }

  let denominator = weights.reduce((acc, cur) => acc + cur);

  console.log((numerator / denominator).toFixed(1));
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
