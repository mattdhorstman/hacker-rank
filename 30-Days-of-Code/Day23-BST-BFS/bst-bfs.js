// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function (root) {
    // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
      let node = queue.shift();
      //console.log(node.data);
      process.stdout.write(node.data + " ");
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }; // End of function levelOrder
} // End of function BinarySearchTree

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var _input = "";

// process.stdin.on('data', function (data) {
//   _input += data;
// });

// process.stdin.on('end', function () {
//   var tree = new BinarySearchTree();
//   var root = null;

//   var values = _input.split('\n').map(Number);

//   for (var i = 1; i < values.length; i++) {
//       root = tree.insert(root, values[i]);
//   }

//   tree.levelOrder(root);
// });

function main() {
  let input = [3, 5, 4, 7, 2, 1];
  let tree = new BinarySearchTree();
  let root = null;

  for (let i = 0; i < input.length; i++) {
    root = tree.insert(root, input[i]);
  }

  tree.levelOrder(root);
}

main();
