var person ={
    name: 'jj',
    age: 20,
    sex: 'man',
    drink: function(){
        console.log('hello word');
        this.health++
    },
    smoke: function() {
        console.log('hi boy');
        this.health--
    },
    health: 100
}
// person.health++
// console.log(person.health);
// person.smoke()
// console.log(person.health);
// person.drink()
// console.log(person.health);

// 增加属性
person.girlfriend='pp'
console.log(person);

// 查
console.log(person.sex);

//改
person.girlfriend='ppy'
console.log(person.girlfriend);

// 删除
delete person.girlfriend
console.log(person);
console.log(person.girlfriend);  //访问对象没有的属性 undefined

//对象的创建
// var obj={}
// 构造函数
    // 系统自带的构造函数 Object
    // 自定义的构造函数   


function Car(color){
    this.name='BM'
    this.height='1500'
    this.length='4900'
    this.weight=1000
    this.health=100
    this.run =function(){
        this.health--
    }
    this.color=color
}
var car =new Car('black')
var car1 =new Car('white')
car.name='红旗'
car1.name='rose'
car.run()
console.log(car1);
