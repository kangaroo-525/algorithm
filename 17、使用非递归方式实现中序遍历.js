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
 * 左中右,
 * 1先处理左侧节点, 将当前节点的左侧节点全部放入栈中,
 * 2依次弹栈, 如果弹出的节点有右侧分支, 将当前节点复制为右侧节点,重复1步骤
 * 3 如果右侧节点为空,并且栈空了 说明节点全部遍历完毕, 实现了中序遍历
 */
function in_order (node) {
  let stack = new Stack()
  while(true) {
    // 将左侧节点一直推进栈中
    while(node) {
      stack.push(node)
      node = node.leftChild
    }
    // 处理栈顶(左侧节点)
    let pop = stack.pop()
    console.log(pop.data)
    node = pop.rightChild
    // 如果栈为空,并且没有需要遍历的右子树, 说明树遍历完毕
    if (!pop.rightChild && stack.isEmpty()) {
      break
    }
  }
}
// binaryTree.in_order(root)
in_order(root)