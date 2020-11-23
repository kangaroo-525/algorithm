/**
 * 斐波那契数列的前两项是1 1, 此后的每一项都是该项前两项之和,即f(n) = f(n-1) + f(n-2)
 */

/**
 * 使用队列实现
 * 1、先将两个1依次推入队列中
 * 2、每次删除头元素保存为a,再取删除之后队列的头元素b, a + b得到的结果推入队列中
 * 3、想要的结果就是队列的最后一个元素
 */

const { Queue } = require('./0-Queue')

function fibonacci(n) {
  // 前两次分别设置为1  
  let queue = new Queue()
  n = n - 2
  queue.enqueue(1)
  queue.enqueue(1)
  // 当n>0时, 相加队列的两个元素,删除头元素,并将结果推入尾部
  while (n > 0) {
    let a = queue.dequeue()
    let b = queue.head()
    queue.enqueue(a + b)
    n--
  }
  queue.dequeue()
  return queue.head()
}
console.log(fibonacci(10))

/**
 * 使用递归
 * 1、当n = 1或者 n = 2时, 函数返回值为1
 * 2、否则函数返回值为_fibonacci(n - 1) + _fibonacci(n - 2)
 */
function _fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  // 如果n>2 取前两次的和
  if (n > 2) {
    return (_fibonacci(n-1) + _fibonacci(n-2))
  }
}
console.log(_fibonacci(10))

