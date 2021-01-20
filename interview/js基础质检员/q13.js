var a = [0]
if([0]) { 
  console.log(a == true); // false
} else {
  console.log('hello');
}

// []  // true
// [1]  // false
// [0]  // true
// [0] == 1 => '0' == 1 => 0 == 1 

// [] == [] false  引用类型 比较的是内存地址 内存地址不一致 
console.log([] == []);