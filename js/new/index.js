Person.prototype.say = function(){
    console.log('hello');
}
function Person(name,age) {
    this.name = name;
    this.age = age;
}
// let person = new Person('mark','18') 
// console.log(person);
function myNew() {
    let obj = {}
    // 取到外部传入的构造器
    let Constructor = Array.prototype.shift.call(arguments) // Person
    // 实现继承
    obj.__proto__ = Constructor.prototype
    let result = Constructor.apply(obj, arguments)
    return result === 'obj' ? result : obj
}
let person = myNew(Person,'mark','18')
console.log(person);
person.say()