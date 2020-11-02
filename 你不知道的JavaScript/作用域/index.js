// function doSomething(a) {
//     function doSomethingElse(c) {
//         return c - 1
//     }
//     var b = a + doSomethingElse(a * 2)
//     console.log(b * 3);
// }
// // var b;
// doSomething(2)


// var a = 2;
// (function() {
//     var a = 3
//     console.log(a);
// })()
// console.log(a);

// 块级作用域
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// var a; 造成声明提升


// const a = 1;
// console.log(a);
var foo = true
if (foo) {
    var a = 2
}
console.log(a);