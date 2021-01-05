// 双指针
// 给定两个有序的整数数组nums1 和 nums2 , 请将nums2 合并到 nums1中
// 使得nums1 成为一个有序的数组

let nums1 = [1, 2, 3, 0, 0, 0], m = 3
let nums2 = [1, 2, 5, 6, 7], n = 5
const merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while(i >= 0 && j >= 0) {
    if(nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] = nums2[j]
      j--
      k--
    }
    
  }
  while(j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
  return nums1
}
console.log(merge(nums1, m, nums2, n));