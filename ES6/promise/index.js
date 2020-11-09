// js 单线程语言
function a() {
    setTimeout(() =>{
        console.log('李尊');
    },1000)
    
}
function b() {
    console.log('酒神');
}
function c() {
    console.log('佩佩');
}
// window.onload = function(){}

   
a()
c()
b()
