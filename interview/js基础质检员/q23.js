var a = {}
var b = Object.prototype

console.log([a.prototype == b, Object.getPrototypeOf(a) == b]); // false true

// 对象是没有prototype属性的  构造函数才有原型 prototype