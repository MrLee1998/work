let arr = ['a', 'b', 'c', 'd', 'v']
arr.forEach((e,i) =>{
    console.log(e,i);
    
})
let obj = {
    name: 'jj',
    age: 18,
    sex: 'boy'
}
obj.height = 180
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(obj[Object.keys(obj)[i]])
}
for (let i of arr) {  //无 下标  
    console.log(i);
}
for (let i in obj) {
    console.log(obj[i]);
}

function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this['A'] = 'bar-A'
    this['C'] = 'bar-C'
}
let bar = new Foo()
// console.log(bar);
for (let i in bar) {
    console.log(`index:${i} value:${bar[i]}`);
}

// ECMAScript 规范