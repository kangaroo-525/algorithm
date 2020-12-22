/**
 * 请实现非递归的pre_order方法，
 * 程序输出结果为 A B D E G C F
 */


const { BinaryTree } = require('./0-BinTreeNode')
const { Stack } = require('./0-Stack')
let binaryTree = new BinaryTree()
binaryTree.init_tree('A(B(D,E(G,)),C(,F))#')
let root = binaryTree.get_root()

/**
 * 
 * 前序遍历，先处理当前节点,curr_node，然后处理curr_node.leftChild，
 * 最后处理curr_node.rightChild,那么在while循环里，
 * 让curr_node=curr_node.leftChild,
 * 将右子树推入在栈中, 当处理完左子树后,处理栈中的右子树
 */
function pre_order (node) {
  let stack = new Stack()
  while(node) {
    console.log(node.data)
    if (node.rightChild) {
      stack.push(node.rightChild)
    }
    if (node.leftChild) {
      node = node.leftChild
    } else {
      node = stack.pop()
    }
  }
}
// binaryTree.pre_order(root)
pre_order(root)