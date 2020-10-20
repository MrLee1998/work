function Person() {

}
Person.prototype.type = 'object name Person'

function People() {}
People.prototype = new Person()
var p = new People()
console.log(p.__proto__);
console.log(p.__proto__.__proto__);
console.log(p.__proto__.__proto__.__proto__);
console.log(p.__proto__.__proto__.__proto__.__proto__);
console.log(p instanceof Object, p instanceof Person, p instanceof People);
console.log(p.type);
console.log(p.type.__proto__);
console.log(p.type.__proto__.__proto__);
console.log(p.type.__proto__.__proto__.__proto__);