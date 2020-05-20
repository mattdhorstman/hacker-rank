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

  // Start of function getHeight
  this.getHeight = function (root) {
    // Add your code here
    if (!root) {
      return -1;
    }

    let left = this.getHeight(root.left);
    let right = this.getHeight(root.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }; // End of function getHeight
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

//   console.log(tree.getHeight(root));
// });

function main() {
  let input = [3, 5, 2, 1, 4, 6, 7];
  let tree = new BinarySearchTree();
  let root = null;

  for (let i = 0; i < input.length; i++) {
    root = tree.insert(root, input[i]);
  }

  console.log(tree.getHeight(root));
}

main();
