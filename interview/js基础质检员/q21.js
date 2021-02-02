var a = /123/
var b = /123/
// 正则相当于一个单独的实例  也是引用类型 比较的是内存地址
console.log(a == b); // false
console.log(a === b); // false