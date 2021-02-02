// var foo = 'bar'
// console.log(foo);
// let foo = 'bar'

// let example = 'tom'
// const foo1 = 'this is ' + example

// const foo2 = `this is ${example}`

// console.log(foo1, foo2);

// es6 数组新增的方法
// let arr = ['a', 'b', 'c', 'd']
// console.log(Object.keys(arr));
// let newArr = [...arr.keys()]
// console.log(newArr);
// let iter = arr.entries()
// console.log(iter);
// for( let i of iter){
//     console.log(i);
// }
// let eArr =arr.values()
// for(let i of eArr){
//     console.log(i);
// }


// function test(fruit) {
//     if (fruit== 'apple'|| fruit == 'strawberry') {
//         console.log('red');
//     }
// }

// function test(fruit) {
//     const redFruit = ['apple', 'strawberry', 'cherry']
//     if (redFruit.includes(fruit)) {
//         console.log('red');
//     }
// }
// test('cherry')

// let people = [
//     { name: 'mark', age: 18},
//     { name: 'brooth', age: 18},
//     { name: 'jully', age: 18}
// ]
// function findFriend(person) {
//     return person.name = 'mark'
// }
// console.log(people.find(findFriend));           

let test = ['a', 'b', 'c', 'd']
function index(i) {
    return i == 'b'
} 
console.log(test.findIndex(index));
