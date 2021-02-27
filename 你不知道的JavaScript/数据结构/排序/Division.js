let arr = [8, 7, 6, 9, 5, 4, 3, 2, 1]

//  分治  
//  分割 合并

function mergeSort(arr) {
  const len = arr.length
  //  边界情况
  if(len <= 1) {
    return arr
  }

  //  分割点
  const mid = Math.floor(len / 2)
  //  递归分割左子树组
  const leftArr = mergeSort(arr.slice(0, mid))
  //  递归分割右子树组
  const rightArr = mergeSort(arr.slice(mid, len))
  console.log(arr);
  //  合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr)
  return arr
}

function mergeArr(arr1, arr2) {
  let left = 0, right = 0;
  const res = []
  const len1 = arr1.length
  const len2 = arr2.length

  while(left < len1 && right < len2) {
    if(arr1[left] < arr2[right]) {
      res.push(arr1[left])
      left++
    } else {
      res.push(arr2[right])
      right++
    }
  }  
  //  处理其中的一个子数组优先完成合并
  if(left < len1) {
    return res.concat(arr1.slice(left))
  } else {
    return res.concat(arr2.slice(right))
  }
}

console.log(mergeSort(arr));