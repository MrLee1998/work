/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.list = []
  this.maxSize = maxSize

};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if(this.list.length < this.maxSize) {
    this.list.push(x)
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if(this.list.length) {
    return this.list.pop()
  }
  return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for(let i = 0; i < k && i < this.list.length; i++) {
    this.list[i] += val
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */