// Symbol 唯一
let key1 =  Symbol(1)
let key2 =  Symbol(1)
console.log(key1 === key2); //false

console.log(typeof(null));
console.log('hello'.length);   //包装类

let obj = {
    name: 'lz'
}

const a = [] //
const b = a   // 赋值 指针的调用  将a的指针 给b
b.push(1)
console.log(a); // 1
console.log(b); // 1  原因 a b 的指针相同

function test (person) {
    person.age = 26 
    person.name = 'lll'

    person = {
        name: 'lz',
        age: 30
    }
    return person
}
const p1 = {
    name: 'ppp',
    age: 20
}
const p2 = test(p1)
console.log(p1);  //  lll  26
console.log(p2);  // lz 30
// 1. 函数传参 是传递对象指针的副本
// 2. p1 和 person 具有相同的指针 person被修改， p1也会被修改
// person 拥有了一个新的内存地址

console.log( [] instanceof Array);  //true
console.log( [] instanceof Object);  //true
console.log( 'hello' instanceof String); // String 原始类型  判断不出了  false

class PrimitiveString {
    static [Symbol.hasInstance] (x) {  //Symbol.hasInstance 让我们自定义instanceof 的行为 
        return typeof x=== 'string'
    }
}
console.log( 'hello' instanceof PrimitiveString);
