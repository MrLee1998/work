var fn = (x,y) => {
  return x**y
}
console.log(fn(2,3));
var name = '你好呀'
var obj = {
  name: 'hello',
  fn: function() {
    // let that = this;
    let timer = null
    clearInterval(timer)
    timer = setInterval(function(){
      console.log(this.name);
    }.bind(this),1000)
  }
}
obj.fn()