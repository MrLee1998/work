// class Foo {
//     constructor () {

//     }

//     static bar() {
//         this.baz()
//     }
//     // static baz() {
//     //     console.log('hello');
//     // }
//     baz() {
//         console.log('word');
//     }
// }
// let foo = new Foo()
// // Foo.bar()
// // Foo.baz()
// foo.baz()
// foo.bar()

class Shape {
    constructor (width, height) {
        this._width = width
        this._height = height
        // this.area = width * height
    }
    get area() {
        return this._width * this._height
    }
}
const square = new Shape(10, 10)
console.log(square.area);

// class 定义的类的方法都在类的prototype 属性上
// 类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
// 这一点与ES5的行为不一致。