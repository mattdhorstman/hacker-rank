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
function readLine() {
  return input_stdin_array[input_currentline++];
}
function Node(data) {
  this.data = data;
  this.next = null;
}
function Solution() {
  this.removeDuplicates = function (head) {
    //Write your code here
    const values = new Set();
    if (!head) {
      return null;
    } else {
      values.add(head.data);
      let node = head;
      while (node.next) {
        if (values.has(node.next.data)) {
          if (!node.next.next) {
            node.next = null;
          } else {
            node.next = node.next.next;
          }
        } else {
          node = node.next;
          values.add(node.data);
        }
      }
    }

    return head;
  };

  this.insert = function (head, data) {
    var p = new Node(data);
    if (head == null) {
      head = p;
    } else if (head.next == null) {
      head.next = p;
    } else {
      var start = head;
      while (start.next != null) {
        start = start.next;
      }
      start.next = p;
    }
    return head;
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      //process.stdout.write(start.data + " ");
      console.log(start.data);
      start = start.next;
    }
  };
}
function main() {
  var T = 6;
  var head = null;
  var mylist = new Solution();
  let sample = [1, 2, 2, 3, 3, 4];
  for (i = 0; i < T; i++) {
    var data = sample[i];
    head = mylist.insert(head, data);
  }
  head = mylist.removeDuplicates(head);
  mylist.display(head);
}

main();
