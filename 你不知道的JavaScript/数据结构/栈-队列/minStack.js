var MinStack = function() {
  this.stack = []
  this.stack2 = []
}

MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if(this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x)
  }
}

MinStack.prototype.pop = function() {
  //  如果出栈的值和当前最小值相等 ， 那么辅助栈也要出栈
  if(this.stack.pop() === this.stack2[this.stack2.length - 1]) {
    this.stack2.pop()
  }
}
MinStack.prototype.top = function() {
  if(!this.stack || !this.stack.length) {
    return 
  }
  return this.stack[this.stack.length - 1]
}
MinStack.prototype.getMin = function() {
  // let minValue = Infinity
  // const { stack } = this
  // for(let i = 0; i < stack.length; i++) {
  //   if(stack[i] < minValue) {
  //     minValue = stack[i]
  //   }
  // }
  // return minValue
  return this.stack2[this.stack2.length - 1]
}

//  栈底到栈顶呈递减趋势的栈