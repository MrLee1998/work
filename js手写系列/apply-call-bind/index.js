// let name= '小王', age = 17;
// let obj = {
//     name: '小张',
//     objAge: this.age,
//     myFun:function() {
//         console.log(this.name + this.age);
//     }
// }
// let name= '小王', age = 17;
// console.log(obj.objAge);
// obj.myFun()
// let fav = '盲僧';
// function shows() {
//     console.log(this);
//     console.log(this.fav);
// }
// shows()
let name = '汪', age =12;
let obj = {
    name: '张',
    objAge: this.age,
    myFun: function() {
        console.log(this.name + '    age:' + this.age);
    }
}
let db  = {
    name: '德玛西亚',
    age: 10
}
obj.myFun()
obj.myFun.call(db)
obj.myFun.apply(db)
obj.myFun.bind(db)()  // bind返回的是一个函数

