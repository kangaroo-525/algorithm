// 实现函数get_width 返回第n层的节点个数

const { Queue } = require('./0-Queue')
const { BinaryTree } = require('./0-BinTreeNode')
var bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root_node = bt.get_root();

// 获得宽度
var get_width = function(node, n){
  // 实现你的函数
  let queue = new Queue()
  queue.enqueue(node)
  queue.enqueue(0)
  let size = 1
  let level = 1
  while(!queue.isEmpty()) {
    let del_item = queue.dequeue()
    if (del_item === 0) {
      if (level === n) {
        break
      } else {
        level++
        size = queue.size()
        queue.enqueue(0)
      }
      continue
    }
    if (del_item.leftChild) {
      queue.enqueue(del_item.leftChild)
    }
    if (del_item.rightChild) {
      queue.enqueue(del_item.rightChild)
    }
  }
  return size
};

console.log(get_width(root_node, 1));
console.log(get_width(root_node, 2));
console.log(get_width(root_node, 3));
console.log(get_width(root_node, 4));