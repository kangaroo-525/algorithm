/**
 * 有一个数组a[100],存放0-99.要求每隔两个数删掉一个数,到末尾是循环至开头继续进行,求最后一个被删掉的数
 */

let arr = []
for(let i = 0; i < 100; i++) {
  arr.push(i)
}
/**
 * 1、由于队列会不断从头添加到尾, 用while循环进行控制
 * 2、每次删除时, index++
 * 3、如果index%3 === 0 就是需要被删除的数
 */
const {Queue} = require('./0-Queue')

function del_ring(arr) {
  let queue = new Queue()
  // 先将数组挨个推入队列中
  for (let i = 0, len = arr.length; i < len; i++) {
    queue.enqueue(arr[i])
  }
  let index = 0
  while(queue.size() > 1) {
    // 每隔两个数删除一个数
    if (index % 3 === 0) {
      queue.dequeue()
      // 如果不是要被删除的数.从队头塞入队尾
    } else {
      let newItem = queue.dequeue()
      queue.dequeue(newItem)
    }
  }
  return queue.head()
}
console.log(del_ring(arr))