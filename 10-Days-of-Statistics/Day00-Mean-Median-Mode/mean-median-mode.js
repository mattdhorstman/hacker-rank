function processData(input) {
  //Enter your code here
  function median(arr) {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }

  function mode(arr) {
    let map = {};
    let max = 0;
    let mode;

    arr.forEach((n) => {
      map[n] = (map[n] || 0) + 1;

      if (max < map[n]) {
        max = map[n];
        mode = n;
      }
    });
    return +mode;
  }

  let [n, numbers] = input.split('\n');
  const arr = numbers.split(' ').map((x) => parseInt(x));
  n = parseInt(n);

  let mean = arr.reduce((acc, cur) => acc + cur) / n;
  let med = median(arr);
  let mo = mode(arr.sort((a, b) => a - b));

  console.log(mean);
  console.log(med);
  console.log(mo);
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
