/**
 * 用两个栈实现一个队列
 * 栈是先进后出,队列是先进先出,但可以用两个栈来模拟一个队列,请实现enqueue, dequeue, head这三个方法
 */

/**
 * enqueue, 将新的元素推入有数据的栈中
 * dequeue, 将有数据的栈(n-1)项元素依次推入无数据栈中, 删除最后一个元素后, 再将有数据的栈的元素依次推入无数据的栈中
 * head, 
 */

const {Stack} = require('./0-Stack')
function StackToQueue() {
  let stack1 = new Stack()
  let stack2 = new Stack()
  let data_stack = null
  let null_stack = null
  function init_stack() {
    if (stack2.isEmpty()) {
      data_stack = stack1
      null_stack = stack2
    } else {
      data_stack = stack2
      null_stack = stack1
    }
  }
  this.enqueue = function(item) {
    init_stack()
    data_stack.push(item)
  }
  this.dequeue = function() {
    init_stack()
    for(let i = 0, len = data_stack.size() - 1; i < len; i++) {
      let item = data_stack.pop()
      null_stack.push(item)
    }
    let returnValue = data_stack.pop()
    init_stack()
    for(let i = 0, len = data_stack.size(); i < len; i++) {
      let item = data_stack.pop()
      null_stack.push(item)
    }
    return returnValue
  }
  this.head = function() {
    init_stack()
    return data_stack.tail()
  }
}
let queue = new StackToQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.head())
console.log(queue.dequeue())
console.log(queue.head())

function $StackToQueue () {
  // enqueue
  let stack1 = new Stack()
  // head dequeue
  let stack2 = new Stack()
  function stack1ToStack2 () {
    while(stack1.top()) {
      stack2.push(stack1.pop())
    }
  }
  function stack2ToStack1 () {
    while(stack2.top()) {
      stack1.push(stack2.pop())
    }
  }
  this.enqueue = function (data) {
    stack2ToStack1()
    stack1.push(data)
  }
  this.head = function() {
    stack1ToStack2()
    return stack2.top()
  }
  this.dequeue = function() {
    stack1ToStack2()
    return stack2.pop()
  }
}
let $queue = new $StackToQueue()
$queue.enqueue(1)
$queue.enqueue(2)
$queue.enqueue(3)
console.log($queue.head())
console.log($queue.dequeue())
console.log($queue.head())
