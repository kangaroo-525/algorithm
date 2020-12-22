/**
 * 使用迭代和递归两种方式反转链表
 * 请实现函数reverse_iter和reverse_digui
 */
var Node = function (data) {
  this.data = data
  this.next = null
}
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function print (node) {
  let current_node = node
  while(current_node) {
    console.log(current_node.data)
    current_node = current_node.next
  }
}
// 迭代反转
function reverse_iter (head) {
  let pre_node = null
  while(head) {
    // 备用下一个节点
    let next_node = head.next
    // 另当前节点指向前一个节点, 实现反转
    head.next = pre_node
    // 将当前反转后的部分链表保存起来
    pre_node = head
    // 将当前节点移动至下一个节点
    head = next_node
  }
  return pre_node
}

// 递归翻转
function reverse_digui (head) {
  if(!head.next) {
    return head
  }
  // 获取已经反转链表的头节点
  let new_head = reverse_digui(head.next)
  // 当前节点的下一个节点指向自己(让已经反转的链表尾节点指向自己)
  head.next.next = head
  head.next = null
  return new_head
}
print(reverse_iter(node1))2
// print(reverse_digui(node1))

