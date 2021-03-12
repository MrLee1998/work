var a = 0;
var b = async () => {
  a = a + (await 10) // await 内部实现了generators, generators会保存堆栈中的数据
  console.log(a, '2'); //10  
  a = (await 10) + a
  console.log(a, '3'); //20
}
b()
a++
console.log(a, '1'); // 1