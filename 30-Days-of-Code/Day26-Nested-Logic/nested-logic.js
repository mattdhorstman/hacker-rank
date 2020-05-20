function processData(input) {
  //Enter your code here
  dates = input.split("\n");
  retDate = dates[0].split(" ").map(Number);
  dueDate = dates[1].split(" ").map(Number);

  if (retDate[2] > dueDate[2]) {
    console.log(10000);
  } else if (dueDate[2] > retDate[2]) {
    console.log(0);
  } else {
    if (retDate[1] > dueDate[1]) {
      console.log(500 * (retDate[1] - dueDate[1]));
    } else if (dueDate[1] > retDate[1]) {
      console.log(0);
    } else {
      if (retDate[0] > dueDate[0]) {
        console.log(15 * (retDate[0] - dueDate[0]));
      } else {
        console.log(0);
      }
    }
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
