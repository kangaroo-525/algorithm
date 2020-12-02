const LinkList = require('./0-LinkList')
function Queue () {
  let linkList = new LinkList
  this.enqueue = function (data) {
    linkList.append(data)
  }
  this.dequeue = function () {
    return linkList.remove_head()
  }
  this.head = function () {
    return linkList.head()
  }
  this.tail = function () {
    return linkList.tail()
  }
  this.size = function () {
    return linkList.length()
  }
  this.clear = function () {
    return linkList.clear()
  }
  this.isEmpty = function () {
    return linkList.isEmpty()
  }
  this.value = function () {
    return linkList.print()
  }
}
module.exports = {
  Queue
}