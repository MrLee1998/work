function Person(name) {
  this.name = name
  this.sum = function() {
    alert(this.name)
  }
}

Person.prototype.age = 10

//  原型链继承
function Per() {
  this.name = 'ker'
}
Per.prototype = new Person()
var per1 = new Per()
console.log(per1.age);
console.log(per1.name);

console.log(per1 instanceof Person);