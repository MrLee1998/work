Car.prototype.name='BMW'
Car.prototype.lang='4900'
Car.prototype.height='1400'
function Car(color,owner){
    this.color=color
    this.owner=owner
    // this.name='BMW'
    // this.lang=4900
    // this.height=1400
}
var car = new Car('red','ttt')
console.log(car);
console.log(car.name);
console.log(car.lang);
console.log(car.height);
