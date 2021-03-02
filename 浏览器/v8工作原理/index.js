function foo() {
  var a = 1
  var b = a
  a = 2  
  console.log(a); // 2
  console.log(b); // 1
}

foo()

function foo2() {
  var a = {
    name: 'yy'
  }
  var b = a
  a.name = 'pp'  // 深浅拷贝
  console.log(a); // pp
  console.log(b); // pp 
}

foo2()

var bar;
console.log(typeof bar);

bar = 12 
console.log(typeof bar);

bar = 'hello'
console.log(typeof bar);

bar = true
console.log(typeof bar);

bar = null
console.log(typeof bar);

bar = {
  name: 'lz'
}
console.log(typeof bar);
