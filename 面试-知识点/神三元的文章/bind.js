Function.prototype.bind = function(context, ...args) {
  if(typeof this !== "function") {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
  }
  var _this = this
  var fNop = function() {}
  var fbound = function () {
    _this.apply(this instanceof _this ? this : context, args.concat(Array.prototype.slice.call(arguments)))
    // _this.apply(this instanceof _this ? this : context, args.concat([...arguments]))
  }
  // fNop.prototype = this.prototype
  // fbound.prototype = new fNop()

  fbound = Object.create(this.prototype)
  return fbound
}