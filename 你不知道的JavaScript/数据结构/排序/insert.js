//  插入排序

// 思想： 当前元素的序列是有序的 ， 基于这个前提， 
// 从后往前去寻找当前元素在前面那个序列的正确位置

let arr = [5, 3, 2, 4, 1]

// 1. 当前元素前面的阿哥序列是有序的
// 2. 

function insertSort(arr) {
  const len = arr.length  
  // temp用来保存当前需要插入的元素
  let temp;
  for(let i = 1; i < len; i++) {
    let j = i // j用来帮助temp寻找自己应该有的定位
    temp = arr[i]

    // 判断j前面一个元素是否比temp大
    while(j > 0 && arr[j -1] > temp) {
      arr[j] = arr[j - 1]
      j--  
    }
    arr[j] = temp
  }
  return arr
}

console.log(insertSort(arr));