/**
 * 求一棵树的镜像
 */
const { BinaryTree } = require('./0-BinTreeNode')
let binaryTree = new BinaryTree()
binaryTree.init_tree('A(B(D,E(G,)),C(,F))#')
// 从上往下
let mirror = function (node) {
  if (node !== null) {
    let temp = node.leftChild
    node.leftChild = node.rightChild
    node.rightChild = temp
    mirror(node.leftChild)
    mirror(node.rightChild)
  }
}
// 从下往上
let _mirror = function (node) {
  if (node === null) return
  let left = _mirror(node.leftChild)
  let right = _mirror(node.rightChild)
  node.leftChild = right
  node.rightChild = left
  return node
}
let root = binaryTree.get_root()
// mirror(root)
_mirror(root)
binaryTree.in_order(root)