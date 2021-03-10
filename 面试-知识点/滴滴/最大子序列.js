//  暴力破解

let maxSubArray = function(nums) {
  const len = nums.length
  let max = -Infinity
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum = 0
    for ( let j = i; j < len; j++) {
      sum = nums[j] + sum
      max = Math.max(sum, max)
    }   
  }
  return max
}
let nums = [1, 3, -2, 8, 9, -1, 0, 2, -1, -1, 3, 0, -1, 2];
// console.log(maxSubArray(nums));

//  分治法

var helper = function(list, m, n) {
  if (m === n) return list[m]
  let sum = 0;
  let lmax = -Infinity;
  let rmax = -Infinity;
  const mid = ((n - m) >> 1) + m;
  const l = helper(list, m, mid);
  const r = helper(list, mid + 1, n);

  for (let i = mid; i >= m; i--) {
    sum += list[i]
    if (sum > lmax) {
      lmax = sum
    }
  }
  sum = 0;
  for (let i = mid + 1; i <= n; i++) {
    sum += list[i]
    if (sum > rmax) {
      rmax = sum
    }
  }
  
  return Math.max(l, r, lmax + rmax)
}
var maxSubArray2 = function(nums) {
  return helper(nums, 0, nums.length - 1)
};

console.log(maxSubArray2(nums));