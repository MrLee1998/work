for (var i = 1; i <= 5; i++) {
  setTimeout(function(j) {
    console.log(j);
  }, i * 1000, i)
}

//  解决方法
  // 自执行函数
  // setTimeout 的第三个参数  
  // let