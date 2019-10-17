function buildDict(arr) {
  let dict = {};

  for (let i = 0; i < arr.length; i++) {
    let [key, val] = arr[i].split(' ');
    dict[key] = val;
  }

  return dict;
}

function processData(input) {
  //Enter your code here
  let [n, ...args] = input.split('\n');
  n = parseInt(n);
  let dict = buildDict(args.slice(0, n));
  let queries = args.slice(n);

  for (let q of queries) {
    if (dict[q]) {
      console.log(`${q}=${dict[q]}`);
    } else {
      console.log('Not found');
    }
  }
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
