//Person.prototype -- 原型
// console.log(Person.prototype);  //函数被定义出来的时候，就具备了prototype属性
Person.prototype.name='wn'
Person.prototype.say=function(){
    console.log('hahhah');
}


function Person(name) {
    // this.name = name
}
var person = new Person('lz')  //new 实例化 创建一个对象
console.log(person);
person.say()
//它定义了构造函数制造出来的对象的公共祖先 
var person1 = new Person()
console.log(person1.name);