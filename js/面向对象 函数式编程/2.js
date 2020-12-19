let arr = [1, 2, 3]
console.log(arr.map(parseInt));

// parseInt : 把 xx 进制的 字符串转成10 进制的整形
parseInt('1100', 2) // 12
parseInt('1100', 10) // 1100

let arr1 = [1, 5, 3, 6, 7, 4]

arr1.map( (a, b) => {
  // console.log(a , b);
  return a * 2
})
console.log(newA);