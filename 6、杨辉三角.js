/**
 * 使用队列打印杨辉三角
 */

/**
 * 1、假设第几行用i表示,第几列(第几位)用j表示
 * 2、每一行,当j = 0或者j = i的时候, f[i][j] = 1
 * 3、每一行默认前面有个默认数字0, 每两个数相加得出下一行(除末尾)的数据, 再添加1至末尾,为下一行完整数据
 */

const { Queue } = require('./0-Queue')
function print_yanghui(n) {
  let queue = new Queue()
  // 第一行只有一个数字1
  queue.enqueue(1)
  for(let i = 1; i <= n; i++) {
    let line = ''
    let pre = 0
    for(let j = 0; j < i; j++) {
      let item = queue.dequeue()
      line += item + ' '
      queue.enqueue(item + pre)
      pre = item
    }
    queue.enqueue(1)
    console.log(line)
  }
}
print_yanghui(10)