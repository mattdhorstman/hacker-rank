function median(arr) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? nums[mid]
    : parseFloat((nums[mid - 1] + nums[mid]) / 2);
}

function interquartile(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let q1, q3;
  let mid = Math.floor(sorted.length / 2);
  q1 = median(sorted.slice(0, mid));
  if (arr.length % 2 === 1) {
    q3 = median(sorted.slice(mid + 1, sorted.length));
  } else {
    q3 = median(sorted.slice(mid, sorted.length));
  }

  return (q3 - q1).toFixed(1);
}

function processData(input) {
  //Enter your code here
  let [n, ints, freq] = input.split('\n');
  n = parseInt(n);
  ints = ints.split(' ').map((x) => parseInt(x));
  freq = freq.split(' ').map((x) => parseInt(x));
  let data = [];
  for (let i = 0; i < ints.length; i++) {
    for (j = 0; j < freq[i]; j++) {
      data.push(ints[i]);
    }
  }

  console.log(interquartile(data));
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
