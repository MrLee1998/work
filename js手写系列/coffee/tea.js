// 1. 把水煮开
// 2. 用沸水浸泡茶叶
// 3. 把茶水倒进杯子
// 4. 加柠檬
var Tea = function() {

}
Tea.prototype.boilWater = function() {
    console.log('把水煮开');
}
Tea.prototype.brewTea = function() {
    console.log('把水用沸水浸泡茶叶煮开');
}
Tea.prototype.putCup = function() {
    console.log('把茶水倒进杯子');
}
Tea.prototype.addLemon = function() {
    console.log('加柠檬');
}
Tea.prototype.init = function() {
    this.boilWater();
    this.brewTea();
    this.putCup();
    this.addLemon();
}
var newTea = new Tea();
newTea.init();
console.log(Tea.prototype.__proto__);