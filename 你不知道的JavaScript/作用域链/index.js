function test(){

}
// test.name test.prototype
// test.[[scope]]  隐式属性  不能被拿出来访问
// test()  --> AO:{}  执行完回收
 test()   //--> AO: {}


//  GO: {
//      global： undefined
//      a: function(){...function..}
//  }
 function a(){
     function b(){
         var b=222
     }
     var a=111
     b()
     console.log(a); //111
 }
 var global=100
//  aAO: {
//      a: undefined 111
//      b: function(){...}
//  }
// bAO: {
//     b: undefined 222
// }
 a()

 // a 定义 a.[[scope]]  --> 0: GO: {} 
 // a 执行 a.[[scope]]  --> 0: aAO:{} 1:GO:{}
 // b 定义 a.[[scope]]  --> 0: aAO:{} 1:GO:{}
 // b 执行 a.[[scope]]  --> 0: bAO:{} 1:aAO：{} 2:GO:{} 

 // b执行完之后 b的AO就要销毁
 // 紧接着a也执行完了 a 的AO也要销毁 应为a的AO包含了b函数 ，当a 的AO销毁时 b函数会失效