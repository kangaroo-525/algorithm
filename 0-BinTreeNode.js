const { Stack } = require('./0-Stack')
let BinTreeNode = function(data) {
  this.data = data
  this.leftChild = null
  this.rightChild = null
  this.parentNode = null
}

function BinaryTree () {
  let root = null
  let new_node = null
  // 广义表表示 建立二叉树 A(B(D,E(G,)),C(,F))#
  this.init_tree = function (string) {
    let stack = new Stack()
    let flag = 0
    for (let i = 0, len = string.length; i < len; i++) {
      if (string[i] === '#') {
        break
      }
      if (string[i] === '(') {
        flag = 1
        stack.push(new_node)
      } else if(string[i] === ',') {
        flag = 2
      } else if (string[i] === ')') {
        stack.pop()
      } else {
        new_node = new BinTreeNode(string[i])
        if (root === null) {
          root = new_node
        } else {
          if (flag === 1) {
            let stack_top = stack.top()
            stack_top.leftChild = new_node
            new_node.parentNode = stack_top
          } else if (flag === 2) {
            let stack_top = stack.top()
            stack_top.rightChild = new_node
            new_node.parentNode = stack_top
          }
        }
      }
    }
  }
  this.get_root = function () {
    return root
  }
  // 先序遍历
  this.pre_order = function(node) {
    if (!node) return null
    console.log(node.data)
    this.pre_order(node.leftChild)
    this.pre_order(node.rightChild)
  }
  // 中序遍历
  this.in_order = function(node) {
    if (!node) return null
    this.in_order(node.leftChild)
    console.log(node.data)
    this.in_order(node.rightChild)
  }
  // 后序遍历
  this.post_order = function(node) {
    if (!node) return null
    this.post_order(node.leftChild)
    this.post_order(node.rightChild)
    console.log(node.data)
  }
  let tree_node_count = function(node) {
    if (!node) {
      return 0
    }
    let left_node_count = tree_node_count(node.leftChild)
    let right_node_count = tree_node_count(node.rightChild)
    return left_node_count + right_node_count + 1
  }
  this.size = function () {
    return tree_node_count(root)
  }
  let tree_height = function (node) {
    if (!node) {
      return 0
    }
    let left_height = tree_height(node.leftChild)
    let right_height = tree_height(node.rightChild)
    return Math.max(left_height, right_height) + 1
  }
  this.height = function () {
    return tree_height(root)
  }
  // 先序便利查找
  let find_node = function (node, data) {
    if (!node) {
      return null
    }
    if (node.data === data) {
      return node
    }
    let left_node = find_node(node.leftChild, data)
    if (left_node) {
      return left_node
    }
    return find_node(node.rightChild, data)
  }
  this.find = function(data) {
    return find_node(root, data)
  }
}

module.exports = {
  BinaryTree
}
// let string = 'A(B(D,E(G,)),C(,F))#'
// let binatyTree = new BinaryTree()
// binatyTree.init_tree(string)
// let root = binatyTree.get_root()
// binatyTree.in_order(root)
// console.log(binatyTree.size())
// console.log(binatyTree.height())
// console.log(binatyTree.find('F'))