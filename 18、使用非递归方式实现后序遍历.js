/**
 * 请实现非递归的pre_order方法，
 * 程序输出结果为 A B D E G C F
 */


const { BinaryTree } = require('./0-BinTreeNode')
const { Stack } = require('./0-Stack')
let binaryTree = new BinaryTree()
binaryTree.init_tree('A(B(D,E(G,)),C(,F))#')
let root = binaryTree.get_root()

function post_order (node) {
  let stack = new Stack()
  let Tag = function(node, status) {
    this.node = node
    // 记录当前节点的状态 如果是0代表访问左子树完毕, 如果是1代表右子树访问完毕
    this.status = status
  }
  while(true) {
    // 1、先将左子树节点全部更新状态status为0
    while(node) {
      let tag = new Tag(node, 0)
      stack.push(tag)
      node = node.leftChild
    }
    let pop = stack.pop()
    // 如果状态status为0, 说明没有遍历右子树
    // 如果有右子树, 让当前节点为右子树节点, 去继续操作第一步
    if (pop.status === 0 && pop.node.rightChild) {
      pop.status = 1
      stack.push(pop)
      node = pop.node.rightChild
    // 如果当前节点状态变为1, 说明左右子树遍历完毕
    // 或者说当前节点为叶子节点, 直接打印
    } else {
      console.log(pop.node.data)
    }
    // 如果栈为空, 并且没有需要遍历的节点, 树遍历完毕
    if (!node && stack.isEmpty()) {
      break
    }
  }
}
// binaryTree.post_order(root)
post_order(root)