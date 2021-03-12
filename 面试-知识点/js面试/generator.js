// function* test() {
//   let a = 1 + 2

const { addListener } = require("node:process")

  
//   yield 2// 暂停代码
//   yield 3
//   // next // 恢复代码执行
//   return a
// }
// let b = test()
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());

// { value: 2, done: false }
// { value: 3, done: false }
// { value: 3, done: true }

function generator(cb) {
  return (function() {
    var object = {
      next: 0,
      stop: function() {
        
      }
    }
    return {
      next: function() {
        var result = cb(object)
        if (result === undefined) {
          return {
            value: undefined,
            done: true
          }
        }
        return {
          value: result,
          done: false
        }
      }
    }
  })()
}