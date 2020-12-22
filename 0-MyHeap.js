// 如果i = 0, 节点i是跟节点, 否则节点的父节点为(i-1)/2
// 如果2*i-1>n-1, 则节点无左子女,否则节点的左子女为2*i-1
// r如果2*i-2>n-2, 则节点无右子女,否则节点的右子女为2*i-2

function MinHeap(size) {
  // 数组
  let heap = new Array(size)
  // 当前堆的大小
  let curr_size = 0
  // 堆最大容量
  let max_size = size
  let shif_down = function (start, m) {
    // 从这个位置开始下滑
    let parent_index = start
    let min_child_index = parent_index * 2 + 1
    // 将目前堆遍历到底
    while(min_child_index <= m) {
      // 永远取最小值
      if (min_child_index < m && heap[min_child_index] > heap[min_child_index + 1]) {
        min_child_index = min_child_index + 1
      }
      // 如果父节点的值大于子节点的值, 需要进行互换
      if (heap[parent_index] > heap[min_child_index]) {
        // 这里为什么能执行呢?????????????
        [heap[parent_index], heap[min_child_index]] = [heap[min_child_index], heap[parent_index]]
        // 父节点指向子节点, 继续遍历
        parent_index = min_child_index
        min_child_index = parent_index * 2 + 1
      } else {
        break
      }
    } 
  }
  // 初始化最小堆
  this.init = function(arr) {
    max_size = arr.length
    curr_size = max_size
    heap = new Array(arr.length)
    for (let i = 0; i < curr_size; i++) {
      heap[i] = arr[i]
    }
    // 最后一个分支节点
    let cur_pos = Math.floor((curr_size - 1 - 1) / 2)
    while (cur_pos >= 0) {
      shif_down(cur_pos, curr_size - 1)
      cur_pos--
    }
  }
  let shif_up = function (start) {
    let child_index = start
    let parent_index = Math.floor((child_index - 1) / 2)
    if (child_index > 0) {
      if (heap[parent_index] > heap[child_index]) {
        let temp = heap[parent_index]
        heap[parent_index] = heap[child_index]
        heap[child_index] = temp
        child_index = parent_index
        parent_index = Math.floor((child_index - 1) / 2)
      } else {
        break
      }
    }
  }
  this.insert = function(item) {
    if (curr_size === max_size) {
      return false
    }
    heap[curr_size] = item
    shif_up(curr_size)
    curr_size++
    return true
  }
  this.remove_min = function() {
    if (curr_size < 0) {
      return false
    }
    let min_value = heap[0]
    heap[0] = heap(curr_size -1)
    shif_down(0, curr_size -1)
    return min_value
  }
  this.size = function () {
    return curr_size
  }
  this.print = function() {
    console.log(heap)
  }
  this.get_min = function () {
    if (curr_size > 0) {
      return heap[0]
    }
    return null
  }
}