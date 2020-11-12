// 类包装
// 原始值是不能有属性的 ， 属性和方法是对象独有的
// var num =new Number(123)
// num.abc='aaa'
// console.log(num); //输出的是对象
// console.log(num*2); //246


var num=4
num.len=3
// 隐式执行
// new Number(4).len=3
//delete num.len
// new Number(4).len
console.log(num.len); // undefined

//以上这种隐式执行叫做包装类


var arr=[1,2,3,4,5]
arr.length=2
console.log(arr); //[1,2]

var str='abcd'
str.length=2
//new Strig('abcd').length=2  delete str.length
console.log(str);  // abcd
console.log(str.length); //4  new String('abcd').length

//面试题 
var str = 'abc'
str += 1 // 'abc1'
var test =typeof(str) //typeof(str)==string
if(test.length==6){
    test.sign='typeOf的返回结果可能是string'  // 使用完后 test的sign属性被删除
}
console.log(test.sign);   // undefined
console.log(test.length);