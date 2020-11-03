// function foo(){
//     console.log(this);
// }
// var bar={
//     foo: foo
// }
// var bar2=bar.foo
// bar2()
// function foo(){
//     console.log(this.a);
// }
// var bar={
//     a: 2
// }
// foo.call(bar)
var a = {
    user: 'wn',
    fn: function(q,w){
        console.log(this.user);
        console.log(q + w);
    }
}
var b = a.fn
b.call(a,2,2)
b.call(null)
b.apply(a,[12,12])
var c = b.bind(a,1,1)
c(2,1)