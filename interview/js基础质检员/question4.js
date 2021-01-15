var name = 'World';
// console.log(typeof name);
(function(){
  //  var name; 
  if(typeof name === 'undefined') {   // true 执行if语句里面的
    var name = 'Jack' // 声明提升
    console.log('Goodbye' + name);  
  } else {
    console.log('Hello' + name);
  }
})()