function Queue() {
  let items = []
  this.enqueue = function(item) {
    items.push(item)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.head = function() {
    return items[0]
  }
  this.tail = function() {
    return items[items.length - 1]
  }
  this.size = function() {
    return items.length
  }
  this.clear = function() {
    items.length = 0
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.value = function() {
    return items
  }
}
module.exports = {
  Queue
}