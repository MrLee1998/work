// 双端队列  允许在队列的两端进行插入和删除的队列

// 即可一允许使用pop push 同时有允许使用 shift unshift 的数组


//  双指针 + 遍历
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  const res = []
  let left = 0
  let right = k - 1
  if(!nums || !nums.length) {
    return
  }
  while(right < len) {
    // 计算左右指针内的最大值
    const max = calMax(nums, right, left)
    res.push(max)
    left++
    right++
  }
  return res
}

function calMax(arr, left, right) {
  let maxNum = arr[left]
  for(let i = left; i <= right; i++) {
    if(arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  return maxNum
}


// 双队列法: 有效的递减队列
// 在窗口发生移动的时候， 只根据发生变化的元素对最大组织进行更新

var maxSlidingWindow2 = function(nums, k) {
  const len = nums.length
  const res = []
  //  初始化双端队列
  const deque = []
  for(let i = 0; i < len; i++) {
    // 
    while(deque.length && nums[deque[deque.length - 1]]) {
      deque.pop()
    }
    deque.push(i)
    // 当对列头部的元素已经出现在滑动窗口之外
    while(deque.length && deque[0] <= i - k) {
      deque.shift()
    }
    if(i >= k -1) {
      res.push(nums[deque[0]])
    }
  }
  return res
}