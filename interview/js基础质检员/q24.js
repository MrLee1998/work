function f() {}

var a = f.prototype
var b = Object.getPrototypeOf(f)
console.log(a === b);  // false  f.prototy ? Function.prototype

// ----------------
function Person() {}

var p = new Person()

var a = p.__proto__  // 那个工厂造出它 就指向那个工厂
var b = Object.getPrototypeOf(p)
// Object.getPrototypeOf(p) === Person.prototype
// Object.getPrototypeOf(Person) === Function.prototype
console.log(a === b); // true