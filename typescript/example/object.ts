// let person = {
//     name: 'lizun',
//     age: 20,
//     hobbit: 'sleep',
//     work: function(){
//         console.log('hello word');        
//     }
// }
// console.log(person.work());


//类型注解  对象的结构化类型： 建立一种契约 ，约束对象的结构
let person: {
    name: string;
    age: number;
}
// 
person = {
    name: 'lz',
    age: 1
}

let p: {
    name: string;
    age: number;
    sayHi: ()=>void
} = {
    name: 'lz',
    age: 1,
    sayHi: function () {
        
    }
}
interface userInfo {
    name: string;
    age: number;
    sayHi: ()=>void
}
let p1: userInfo = {
    name: 'lz',
    age: 1,
    sayHi: function () {
        
    }
}