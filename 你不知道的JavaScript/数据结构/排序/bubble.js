//  冒泡排序

//  从第一个元素开始重复比较相邻的两项， 若第
//  一项比第二项大， 则交换两者的位置， 
//  反之则不动

let arr = [1, 5, 2, 4, 3, 0]

function bubbleSort(arr) {
  let len = arr.length
  let temp;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // temp = arr[j]
        // arr[j] = arr[i]
        // arr[i] = temp
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr));


// 优化

function bubbleSort2(arr) {
  let len = arr.length
  let temp;
  for (let i = 0; i < len; i++) {
    let flag = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // temp = arr[j]
        // arr[j] = arr[i]
        // arr[i] = temp
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    if(flag === false) {
      return arr // 提前结束  
    }
  }
  return arr
}

console.log(bubbleSort2(arr));
