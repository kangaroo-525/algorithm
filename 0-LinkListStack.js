const {LinkList} = require('./0-LinkList')
function Stack () {
  let linkList = new LinkList()
  this.push = function (data) {
    linkList.append(data)
  }
  this.pop = function () {
    return linkList.remove_tail()
  }
  this.top = function () {
    return linkList.tail()
  }
  this.tail = function () {
    return linkList.head()
  }
  this.isEmpty = function () {
    return linkList.isEmpty()
  }
  this.size = function () {
    return linkList.length()
  }
  this.clear = function () {
    linkList.clear()
  }
  this.value = function () {
    return linkList.print()
  }
}
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.value())
console.log(stack.top())
console.log(stack.tail())
stack.pop()
console.log(stack.isEmpty())
console.log(stack.top())
console.log(stack.tail())
stack.clear()
console.log(stack.isEmpty())
module.exports = {
  Stack
}