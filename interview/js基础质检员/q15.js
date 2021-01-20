var arr = Array(3)
console.log(arr);
arr[0] = 2
console.log(arr);

let res = arr.map(function(elem) { // map 不会对空数组检测
  return '1'
})
console.log(res);