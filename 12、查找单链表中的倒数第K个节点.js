/**
 * 实现函数reverse_find，返回链表倒数第k个节点的数值
 */
var Node = function(data){
  this.data = data;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function reverse_find (head, k) {
  let fast = head
  let slow = head
  let step = k
  // 先让快游标先走k步 
  while(step !== 0 && fast) {
    fast = fast.next
    step--
  }
  // 当循环结束时, 如果还没走完k步,说明k超出了链表长度
  if (step !== 0) {
    return null
  } else {
    // 让两个游标同时移动, 因为两个游标正好差k步, 当快游标移动至结尾时
    // 满游标正好在-k处
    while(fast) {
      fast = fast.next
      slow = slow.next
    }
  }
  return slow.data
}
console.log(reverse_find(node1, 5));