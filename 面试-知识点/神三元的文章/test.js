// let nums = [1, 2, 3];
// // 多个数的加和
// let newNums = nums.reduce(function(preSum,curVal,array) {
//   return preSum + curVal; 
// }, 1);
// console.log(newNums);//6

var arr = [1, 2, 3, 5]
console.log(arr.indexOf(4)); // 返回下标 不存在返回-1

if(arr.includes(4)) {
  console.log('存在',arr.includes(4)); //true 
} else {
  console.log('不存在',arr.includes(4)); // false
}

let res = arr.find((item) => {
  return item === 2 // 找到满足元素的第一个值 没有返回undefined
}) 
console.log(res);

var data = arr.findIndex((item) => {
  return item > 3 //返回数组中满足条件的第一个元素的下标，如果没有找到，返回-1
})
console.log(data);