function processData(input) {
  //Enter your code here
  function median(arr) {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }

  let [n, data] = input.split('\n');
  n = parseInt(n, 10);
  data = data.split(' ').map((x) => parseInt(x));

  let sorted = data.sort((a, b) => a - b);

  let q1, q2, q3;
  let mid = Math.floor(sorted.length / 2);

  q1 = median(sorted.slice(0, mid));
  q2 = median(sorted);
  if (n % 2 === 1) {
    q3 = median(sorted.slice(mid + 1, sorted.length));
  } else {
    q3 = median(sorted.slice(mid, sorted.length));
  }

  console.log(q1);
  console.log(q2);
  console.log(q3);
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
