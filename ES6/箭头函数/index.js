// let foo = {
//     value: 1,
//     getValue: () => console.log(foo.value)  // 箭头函数没有this
// }
// foo.getValue()

function Foo() {
    this.value = 1
}
Foo.prototype.getValue = () => console.log(this.value)
let foo = new Foo() 
foo.getValue()