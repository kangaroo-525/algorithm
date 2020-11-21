/**
 * 用两个队列实现一个栈(push, top, pop)
 */

/**
 * 1、push 方法相同, 将数据推入有数据的队列
 * 2、top为队列的队尾,返回有数据队列的队尾
 * 3、将有数据的队列依次删除并推入无数据的队列, 直到队列只剩一个元素,删除这个元素,
 */

const { Queue } = require('./0-Queue')

function QueueToStack() {
  let queue1 = new Queue()
  let queue2 = new Queue()
  let data_queue = null
  let null_queue = null
  function init_queue() {
    if (queue1.isEmpty()) {
      data_queue = queue2
      null_queue = queue1
    } else {
      data_queue = queue1
      null_queue = queue2
    }
  }
  this.push = function(item) {
    init_queue()
    data_queue.enqueue(item)
  }
  this.top = function(item) {
    init_queue()
    return data_queue.tail()
  }
  this.pop = function() {
    init_queue()
    for(let i = 0, len = data_queue.size(); i < len - 1; i++) {
      null_queue.enqueue(data_queue.dequeue())
    }
    return data_queue.dequeue()
  }
}
let newStack = new QueueToStack()
newStack.push(1)
newStack.push(2)
newStack.push(3)
console.log(newStack.top())
console.log(newStack.pop())
console.log(newStack.top())
newStack.push(100)
console.log(newStack.top())