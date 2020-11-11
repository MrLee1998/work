// let obj = {
//     name: 'lz'
// }
// console.log(String(obj));
// console.log('a'+ + 'b');  //aNaN
// console.log('' * '');
// console.log(''/1);
// console.log(true + false);


// 闭包
// function A () {
//     let a=1
//     window.B = function () {
//         console.log(a);
//     }
// }
// A()
// B()

 
// for(var i=1; i<= 5; i++){
//     (function a (j) {
//         setTimeout(function(){
//             console.log(j);
//         },j*1000)
//     })(i)
// }
for(var i=1; i<= 5; i++){
   
    setTimeout(function timer(i){
        console.log(i);
    },i*1000,i)
}
// setTimeout 的第三个参数
