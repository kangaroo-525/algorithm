// 打印分层二叉树
const { Queue } = require('./0-Queue')
const { BinaryTree } = require('./0-BinTreeNode')
var bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root_node = bt.get_root();

// 层次遍历
var level_order = function(node){
  // 实现你的方法
  let queue = new Queue()
  queue.enqueue(node)
  queue.enqueue(0)
  let str = ''
  while(true) {
    let del_item = queue.dequeue()
    // 遇到0说明上一层打印完
    if (del_item === 0) {
      console.log(str)
      str = ''
      // 如果队列为空, 全部打印完毕
      if (queue.isEmpty()) {
        break
      // 为下一层最后补上0, 区分下一层与下下一层
      } else {
        queue.enqueue(0)
      }
      continue
    }
    str += del_item.data + ' '
    // 被删除的左子树添加至队列里面
    if (del_item.leftChild) {
      queue.enqueue(del_item.leftChild)
    }
    // 被删除的右子树添加至队列里面
    if (del_item.rightChild) {
      queue.enqueue(del_item.rightChild)
    }
  }
};

level_order(root_node);