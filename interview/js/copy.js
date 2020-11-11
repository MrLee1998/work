//什么是浅拷贝？ 什么是深拷贝？ 如何实现深浅拷贝？

let a = {
    age: 1,
    jobs: {
        first: 'coding'
    }
}
let b = a
b = {
    age: 3
}
// b.age=2
// console.log(a);

let c =JSON.parse(JSON.stringify(a)) //原理： 用JSON.stringify将对象转成JSON字符串，
                                     //再用JSON.parse()把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝。
c.age=5
// console.log(a);

let d = Object.assign({},a)
d.age =6
// console.log(a);

let f = {...a}   //浅拷贝方法 只能实现Object深拷贝
f.age=4
f.jobs.first = 'waiter'
// console.log(a);

let g =JSON.parse(JSON.stringify(a))
g.jobs.first = 'waiter'
// console.log(a);

// let obj = {
//     a:1,
//     b: {
//         c:2,
//         d:3
//     }
// }
// obj.c = obj.b
// obj.e = obj.a
// obj.b.c = obj.c
// obj.b.d = obj.b
// obj.b.e = obj.b.c
// let newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj);

let test = {
    age: undefined,
    sex: Symbol('man'),
    job: function(){},
    bame: 'nn'
}
let all = JSON.parse(JSON.stringify(test))
console.log(all);