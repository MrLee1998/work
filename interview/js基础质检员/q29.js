// 空数组也有长度

let arr = [1, 2, , 3]
// arr.length === 4


console.log(arr.filter(() => true));

arr2 = arr.map(parseInt)  
// 1 0  1
// 2 1  NaN
// '' 2  ''
// 3 3 NaN

console.log(arr2);
// arr3 =
console.log(arr.concat(arr2));

console.log(...new Set(arr.concat(arr2)));


