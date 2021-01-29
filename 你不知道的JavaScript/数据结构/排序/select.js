// 方法思路：
// 循环遍历数组， 每次都找当前范围内的最小值， 把它放在当前范围的头部
// 然后缩小范围， 直至数组完全有序

let arr = [1, 5, 3, 4, 0, 2]

function selectSort(arr) {
  const len = arr.length
  // 用minIndex 用来缓存区间最小值的索引
  let minIndex;
  for(let i = 0; i < len; i++) {
    minIndex = i
    // i 是区间的左界， j是区间的右界
    for(let j = i; j < len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
        console.log(arr);
        console.log(minIndex);
      }
    }
    //  如果minIdex对应的元素不是目前数组的头部元素， 就交换位置
    if(minIndex !==i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    //  [0, 5, 3, 4, 1, 2]  i = 0  minIndex = 4
    //  [0, 1, 3, 4, 5, 2]   i = 1  minIndex = 4
    // [0, 1, 3, 4, 5, 2]  i = 2   minIndex = 2
    // [0, 1, 2, 4, 5, 3]  i = 2   minIndex = 5
    // [0, 1, 2, 3, 5, 4]   i = 3  minIndex = 5
    // [0, 1, 2, 3, 4, 5]   i = 4  minIndex = 5

  }
  return arr
}

console.log(selectSort(arr), 'res');