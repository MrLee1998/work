// let arr = [1, 2, 3]
// let newArr = arr
// newArr[0] = 100
// console.log(arr);

// let arr = [1, 2, 3]
// let newArr = arr.slice();
// newArr[0] = 100;
// console.log(newArr);
// console.log(arr);//[1, 2, 3]

function deepCopy(obj) {
  let newObj = obj instanceof Array ? [] : {}
  for(let item in obj) {
    var value = typeof obj[item] === 'object' ? deepCopy(obj[item]) : obj[item]
    newObj[item] = value
  }
  return newObj
}