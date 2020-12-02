function LinkList () {
  let Node = function (data) {
    this.data = data
    this.next = null
  }
  // 头节点
  let head = null
  // 尾节点
  let tail = null
  // 长度
  let length = 0
  // 返回链表长度
  this.length = function () {
    return length
  }
  // 返回链表头节点
  this.head = function () {
    return head.data
  }
  // 返回链表尾节点
  this.tail = function () {
    return tail.data
  }
  // 链表是否为空
  this.isEmpty = function () {
    return length === 0
  }
  // 清空链表
  this.clear = function () {
    head = null
    tail = null
    length = 0
  }
  // 添加元素
  this.append = function (data) {
    let node = new Node(data)
    if (!head) {
      head = node
      tail = node
    } else {
      tail.next = node
      tail = node
    }
    length++
    return true
  }
  // 获取指定位置节点
  this.get = function (index) {
    if (0 <= index < length) {
      let i = 0
      let current = head
      while(i < index) {
        current = current.next
        i++
      }
      return current
    }
    return null
  }
  // 打印链表
  this.print = function () {
    if (!head) {
      return null
    } else {
      let str = head.data + '-> '
      let curr_node = head
      let i = 1
      while(i < length) {
        str += curr_node.next.data + '->  '
        curr_node = curr_node.next
        i++
      }
      return str
    }
  }
  // 向链表指定位置插入节点
  this.insert = function (index, data) {
    let new_node = new Node(data)
    if (0 <= index <= length) {
      let pre_node = this.get(index - 1)
      let curr_node = this.get(index)
      pre_node.next = new_node
      new_node.next = curr_node
      length++
      return true
    }
    return false
  }
  // 移除链表指定位置节点
  this.remove = function (index) {
    let del_node = null
    if (index < 0 || index >= length) {
      return false
    } else if (index === 0) {
      del_node = head
      head = head.next
      del_node.next = null
      length--
      return del_node.data
    } else {
      let pre_node = this.get(index-1)
      del_node = this.get(index)
      pre_node.next = del_node.next
      del_node.next = null
      length--
      tail = this.get(length-1)
      return del_node.data
    }
  }
  // 移除链表头节点
  this.remove_head = function () {
    this.remove(0)
  }
  // 移除链表尾节点
  this.remove_tail = function () {
    this.remove(length - 1)
  }
  // 返回指定元素位置
  this.indexOf = function (data) {
    let curr_node = head
    let i = 0
    while(i < length) {
      if (curr_node.data === data) {
        return i
      } else {
        curr_node = curr_node.next
      }
      i++
    }
  }
}
module.exports = {
  LinkList
}
// let linkList = new LinkList()
// linkList.append(1)
// linkList.append(2)
// linkList.append(3)
// console.log(linkList.indexOf(3))
// console.log(linkList.get(1))
// linkList.insert(1, 88)
// console.log(linkList.print())
// linkList.remove(1)
// console.log(linkList.print())