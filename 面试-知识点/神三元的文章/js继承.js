function Parent1(name) {
  this.name = name
}
Parent1.prototype.age = 18
function Child1(name) {
  Parent1.call(this, name)
  this.type = 'child1'
}

let c1 = new Child1('lizun')
// console.log(c1);

function Parent2() {
  this.name = 'Parent2'
  this.play = [1, 2, 3]
}
function Child2() {
  this.type = 'child2'
}
Child2.prototype = new Parent2()
let c2 = new Child2()
let p2 = new Child2()
c2.play.push(4)
// console.log(c2.play);
// console.log(p2.play); // 两个实例公用一个原型对象

function Parent3() {
  this.name = 'Parent3'
  this.play = [1, 2, 3]
}
function Child3() {
  Parent3.call(this)
  this.type = 'child3'
}
Child3.prototype = new Parent3()
let c3 = new Child3()
let p3 = new Child3()
c3.play.push(4)
// console.log(c3.play, p3.play);


function Parent4() {
  this.name = 'Parent4'
  this.play = [1, 2, 3]
}
function Child4() {
  Parent4.call(this)
  this.type = 'child4'
}
Child4.prototype = Parent4.prototype
let c4 = new Child4()
let p4 = new Child4()
c4.play.push(4)
// console.log(c4.play, p4.play);

// 寄生组合继承
function Parent5() {
  this.name = 'Parent5'
  this.play = [1, 2, 3]
}
function Child5() {
  Parent5.call(this)
  this.type = 'child5'
}
Child5.prototype = Object.create(Parent5.prototype)
Child5.prototype.constructor = Child5
