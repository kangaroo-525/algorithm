/**
 * 已知有两个有序链表(链表元素从小到大)，请实现函数merge_link，
 * 将两个链表合并成一个有序链表，并返回新链表，原有的两个链表不要修改。
 */
var Node = function(data){
  this.data = data;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(4);
var node3 = new Node(9);
var node4 = new Node(2);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(10);


node1.next = node2;
node2.next = node3; // 1 4 9

node4.next = node5;
node5.next = node6;
node6.next = node7; // 2 5 6 7


function print(node){
  var curr_node = node;
  while(curr_node){
      console.log(curr_node.data);
      curr_node = curr_node.next;
  }
};

let { LinkList } = require('./0-LinkList')
function merge_link (head1, head2) {
  let cur_node1 = head1
  let cur_node2 = head2
  let head = null
  let tail = null
  // 确定第一个节点
  if (cur_node1.data < cur_node2.data) {
    head = cur_node1
    tail = cur_node1
    cur_node1 = cur_node1.next
  } else {
    head = cur_node2
    tail = cur_node2
    cur_node2 = cur_node2.next
  }
  // console.log(head.print())
  // 哪个小添加哪个 并将小的后移继续比较
  while(cur_node1 && cur_node2) {
    if (cur_node1.data < cur_node2.data) {
      tail.next = cur_node1
      tail = tail.next
      cur_node1 = cur_node1.next
    } else {
      tail.next = cur_node2
      tail = tail.next
      cur_node2 = cur_node2.next
    }
  }
  // 如果一只链表循环完毕 直接将另一只链表添加进去
  if (!cur_node1) {
    tail.next = cur_node2
  }
  // 如果一只链表循环完毕 直接将另一只链表添加进去
  if (!cur_node2) {
    tail.next = cur_node1
  }
  return head
};

print(merge_link(node1, node4));