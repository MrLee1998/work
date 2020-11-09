// let [a, b, c] = [1, 2, 3]
// console.log(a,b,c);
// ...arguments
// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7]
// console.log(c);
// let [m, n , ...j] = [1, 1]
// console.log(j);

// let [k] = ?   = 号的右侧必须是可遍历的

// let arr = [1, 1, 2, 3, 5 ,4 ,5 ,6 ,7]
// let newArr = new Set(arr)
// console.log(newArr);

// let [q, w, e ] = new Set(['a', 'b', 'c'])
// console.log(w);
// let str1
// let [str = true] = [str1]
// console.log(str);
// let {s1, s2, s3} = {x: 'aaa', y: 'ccc'}
// console.log(s3);
// let {log, sin ,cos, abs} = Math
// console.log(abs(-2)); // 2
// const {log} = console 
// log(1)  // 1 

// let { foo: baz} = { foo: 'aaa', bar: 'ccc'}
// console.log(foo); // not defined

let obj = {
    p: ['hello', {y: 'word'}]
}
let {p: [x, {y}]} = obj
console.log(x + y); // hello word

const [a, b, c, d, e] = 'hello'
console.log(e);