//  作用域链

// function bar() {
//   // 函数自己不具备的变量 就会在外部的执行上下文的变量环境查找
//   console.log(myName);
// }

// function foo() {
//   var myName = 'wn'
//   bar()
// }

// var myName = 'nw'

// foo()


//  词法作用域: 根据代码的位置决定的
//  要看结果 先找到作用域链是怎么走的 要看作用域链怎么走 就要看词法作用域怎么嵌套的



// 块级作用域中变量的查找

// function bar() {
//   var myName = 'cc'
//   let test1 = 100
//   if(1) {
//     let myName = 'tt'
//     console.log(test); // 1
//   }
// }

// function foo() {
//   var myName = 'js'
//   let test = 2
//   {
//     let test = 3
//     bar()
//   }
// }

// var myName = 'qq'
// let myAge = 10
// let test = 1

// foo()

//  闭包

function foo() {
  var myName = 'q'
  let test1 = 1
  const test2 = 2
  var innerbar = {
    getName: function() {
      console.log(test1);
      return myName
    },
    setName: function() {
      myName = newName
    }
  }
  return innerbar
}

var bar = foo()
bar.setName('yyy')
bar.getName()
console.log(bar.getName());

// 闭包定义：在js中，根据词法作用域的规则，
// 内部函数总是可以访问外部函数中声明的变量，
// 当通过调用一个外部函数返回内部函数后， 即使
// 改外部函数已经执行完，但是内部函数引用外
// 部函数的变量依然保存在内存中， 我们称这些变量为闭包的产物，
//  这些变量的集合就称为闭包


//  闭包是怎么回收
// 1. 如果引用闭包的函数是一个全局变量， 那么这个闭包就会一直存在知道页面关闭
// 2. 如果引用闭包的函数是一个局部变量， 等函数销毁后， 在下一次JavaScript引擎执行垃圾回收时，判断闭包不再使用了才会被垃圾回收