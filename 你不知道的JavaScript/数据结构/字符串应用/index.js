// 字符串反转
// let str = 'music'
// let res = str.split('').reverse().join('')
// console.log(res);
// var isPalindrome = function(x) {
//   // let res = x.split('').reverse().join('')
//   // return res === x
//   // let time = Math.floor(x.length / 2)
//   // for(let i = 0, j = x.length-1; i < time; i++) {
//   //   if(x[i] !== x[j]) {
//   //     return false
//   //   }
//   //   else {
//   //     j--
//   //   }
//   // }
//   // return true
//   let time = Math.floor(x.length / 2)
//   let i = 0
//   let j = x.length - 1
//   while(i < j) {
//     if(x[i] !== x[j]) {
//       return false
//     } else {
//       i++
//       j--
//     }
//   }
//   return true
// };
// let x = 'ysyq'
// console.log(isPalindrome(x));


// 给定一个非空字符串 s, 最多删除一个字符串， 判断是否能成为回文数

// var isPa = function(example) {
//   let res = isPalindrome(example)
//   if(res === true) {
//     return true
//   } else {
//     let k = 0, len = example.length
//     while(k < len && !res) {
//       let temp = example.split('')
//       temp.splice(k,1)
//       k++
//       let newEx = temp.join('')
//       console.log(newEx);
//       res = isPalindrome(newEx) 
//       // console.log(res);
//     }
//   }
//   return res
// }
let example = 'abcca'
// console.log(isPa(example));
var isPalindrome = function(example, i = 0, j = example.length - 1) {
  while(i < j) {
    if(example[i] === example[j]) {
      i++
      j--
    } else {
      return false
    }
  }
  return true
};
var newisPalindrome = function(example) {
  let i = 0, j = example.length - 1;
  while(i < j) {
    if(example[i] === example[j]) {
      i++
      j--
    }
    return isPalindrome(example, i + 1, j) || isPalindrome(example, i, j-1)
  }
  return false
}
console.log(newisPalindrome(example));

