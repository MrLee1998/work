// talk in js
//一杯咖啡
//es5 类 大写的函数
// 1. 把水煮开
// 2. 用沸水冲泡咖啡
// 3. 把咖啡倒进杯子
// 4. 加糖和牛奶
// constructor 
// 类 抽象的 
//  实例化 对象
// 封装类的
var Coffee = function(type) {
        this.type = type
    }
    // 原型关系
Coffee.prototype.boilWater = function() {
    console.log('把水煮开');
}
Coffee.prototype.brewCoffGriends = function() {
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pureInCup = function() {
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMilk = function() {
        console.log('加糖喝咖啡');
    }
    //this 指针
Coffee.prototype.init = function() {
    this.boilWater();
    this.brewCoffGriends();
    this.pureInCup();
    this.addSugarAndMilk();
}
var oneCoffee = new Coffee("猫屎咖啡");
console.log(oneCoffee.type);
console.log(oneCoffee.__proto__ == Coffee.prototype);
oneCoffee.init();
// js 类 是怎么构建起来的=火车头 构造函数（首字母大写）  
// 好多阶车厢 prototype  原型链上的方法
// 构造函数和普通函数的区别是 new
// 函数是一等对象
// JS本没有类  只有对象 new{}
// 任何函数都有一个prototype属性
// 原型链
console.log(Coffee.prototype.__proto__.__proto__);