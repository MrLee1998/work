let arr = [1, [2, [3, [4, 5]]], 6];
let newArr = JSON.stringify(arr);
// console.log(newArr);
arr_flat = arr.flat(Infinity);
console.log(arr_flat);

// let newArr1 = [];
// while(arr.some(Array.isArray())) {
//   arr = [].concat(...arr)
// }
// function flatten(arr) {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
//   }, [])
// }
// console.log(flatten(arr));

// function foo(arr) {
//   var res = []
//   arr.map(item => {
//     if(Array.isArray(item)) {
//         res = res.concat(foo(item));
//     } else {
//         res.push(item);
//     }
//   })
//   return res
// }

// console.log(foo(arr));


// function flatten(arr) {
//   return arr.toString().split(',').map((item) => {
//       return Number(item);
//   })
// }
// console.log(flatten(arr));
// console.log(arr.toString())


function fn(ary) {
  let result = []
  for(let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])){
      // fn(item);
      result = result.concat(fn(item));
    } else {
      result.push(item);
    }
  }
  return result
}

// console.log(fn(arr));
// while (arr.some(Array.isArray())) {
//   arr = [].concat(...arr);
// }
// console.log(arr);