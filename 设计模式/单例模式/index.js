// 单例模式只能有一个实例

class SingleGog {
  show() {
    console.log('我式一个单例对象');
  }
  static getInstance() { // 只有构造函数自己可以调用
    // if(!SingleGog.instance) {
    //   SingleGog.instance = new SingleGog()
    // } 
    // return SingleGog.instance

    let instance = null;
    return (function() {
      if(!instance) {
        instance = new SingleGog()
      }
      return instance
    })
  }
}
const s1 = SingleGog.getInstance()
const s2 = SingleGog.getInstance()
