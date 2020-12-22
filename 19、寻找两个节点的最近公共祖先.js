/**
 * 找出树中两个节点的最近公共祖先
 */
const { BinaryTree } = require('./0-BinTreeNode')
var bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root_node = bt.get_root();

var node1 = bt.find("D");
var node2 = bt.find("G");
console.log(node1.data);
console.log(node2.data);

/**
 * 可以想象两个被找的节点为两个泡泡
 * 当找到这两个节点时, 将该节点一直向上冒泡泡
 * 直到两个泡泡相撞时, 相撞节点就是最近公公祖先
 * 将公公祖先一直冒泡到顶
 */
// 寻找最近公共祖先
var lowest_common_ancestor = function(root_node, node1, node2){
  // 如果为叶子节点或者叶子节点的节点(就是null) 返回当前节点
  if (!root_node || root_node === node1 || root_node === node2) {
    return root_node
  }
  // 拿到左侧的获取的节点
  let left = lowest_common_ancestor(root_node.leftChild, node1, node2)
  // 拿到右侧获取的节点
  let right = lowest_common_ancestor(root_node.rightChild, node1, node2)
  // 如果左右都有值, 说明当前节点就是最近公共祖先
  if (left && right) {
    return root_node
  }
  // 如果只有右侧节点, 继续向上冒泡
  if (left) {
    return left
  }
  return right
};

var ancestor = lowest_common_ancestor(root_node, node1, node2);
console.log(ancestor.data);