function myPerson(name,age){
    var that ={}
    that.name=name
    that.age=age
    return that
}
var person=myPerson('nn',18)
console.log(person);
function Car(color){
    this.color=color
    this.name='bm'
    // return {}
}
var car = new Car('pink')
// car.color = 'pink'
console.log(car); //{}