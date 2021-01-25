// 使用栈来实现队列的以下操作
// push()
// pop()
// peek() // 返回头部的元素
// empty() // 返回队列是否为空

// var queue = new MyQueue()

const MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
}

MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
}

MyQueue.prototype.pop = function() {
  // 如果stack2 为空  就将stack1 的元素 移到stack2
  if(this.stack2.length <= 0) {
    while(this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop()
}

MyQueue.prototype.peek = function() {
  if(this.stack2.length <= 0) {
    while(this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  const stack2Len = this.stack2.length
  return stack2Len && this.stack2[stack2Len - 1]
}

MyQueue.prototype.empty = function() {
  if(this.stack1.length <= 0 && this.stack2.length <= 0) {
    return true
  }
  return false
}