//  能独立监听某个数据的变化
// 提供可执行函数的场所

class watcher {
  constructor(options) {
    this.$data = this.getBaseType(options.data) === 'Object' ? options.data : {}
    this.$watch = this.getBaseType(options.watch) === 'Object' ? options.watch : {}
    for(let key in options.data) {
      this.setData(key) // a, b
    }
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target)  // "[object object]"
    return typeStr.slice(8, -1)
  }
  setData(_key) {
    Object.defineProperty(this, _key, { // defineProperty(this) 把上下文指向当前对象
      get: function() {
        return this.$data[_key]
      },
      set: function(newValue) {
        const oldValue = this.$data[_key]
        if (oldValue == newValue) {
          return newValue
        }
        this.$data[_key] = newValue
        // 调用opts里面的watch里面的函数
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
          this.$watch[_key].call(this, newValue, oldValue)
        )
      }
    })
  }
}
  
let vm = new watcher({   // 构造函数没有this  只有当它被 new 出来的实例对象才有this
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
})
vm.a = 1