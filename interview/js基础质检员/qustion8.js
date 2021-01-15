function showCase(value) {
  switch(value) {  // switch 内部使用严格模式 === 进行判断
    case 'A':
      console.log('A');
      break;
    case 'B':
      console.log('B');
      break;
    case 'C':
      console.log('C');
      break;
    case undefined:
      console.log('undefined');
      break;
    default: 
      console.log('Do not know!');
  }
}

// new String('A) 得到的是一个string对象 {'A'}
// String('A')  A 字符串
showCase(new String('A'))  // Do not know!

showCase(String('A'))  // A