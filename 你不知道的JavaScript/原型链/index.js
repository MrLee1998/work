// var obj = {}  // 对象字面量
// new obj=new Object()
// Object.create(原型)
var obj ={
    name: 'wn',
    age: 18
}
var obj1=Object.create(obj)
console.log(obj1.__proto__);


// 网易面试题
// 所有对象最终都会继承自 Object.prototype???  false
// 特例:
var obj2=Object.create(null)
console.log(obj2);
console.log(obj2.__proto__);
