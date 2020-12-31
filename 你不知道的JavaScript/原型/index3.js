Person.prototype.lastName='l'
function Person(name) {
    this.name = name
}
var person=new Person('zz')
// console.log(person.lastName);
person.lastName='w'  // 没有改动原型属性 ，只能通过原型改动
console.log(person.lastName);
console.log(Person.prototype.lastName);
console.log(person);

function Bus(){

}
// Car.prototype = {
//     constructor: Bus
// }
function Car(){

}
var car = new Car()
console.log(Car.prototype); // funtion Car(){}
console.log(car.constructor);
// constructor 指向的是Car(),目的是让Car()构造出来的对象找到自己的来历
// car.constructor