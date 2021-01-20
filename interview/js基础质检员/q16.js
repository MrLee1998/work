// arguments

function sidEffecting(ary) {
  ary[0] = ary[2] // 10
}

function bar(a, b, c){
  c = 10
  sidEffecting(arguments) // 1 1 10  参数变量和arguments是双向绑定的
  return a + b + c // 10 + 1 + 10
}

console.log(bar(1, 1, 1));