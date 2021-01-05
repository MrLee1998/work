// 给定一个整数数组nums 和一个目标值target  在数组找到和为target的两个整数，并返回他们的下标

// 求和  == 求差
let nums = [2, 7, 11, 15]
let target = 9
// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i+1; j < nums.length; j++) {
//       if(nums[i] + nums[j] === target && i !== j) {
//         return [i, j]
//       }
//     }
//   }
// }
// console.log(twoSum(nums, target));


// var twoSum = function(nums, target) {
//   const diffs = {}
//   const len = nums.length
//   for(let i = 0; i < len; i++) {
//     if (diffs[target - nums[i]] !== undefined) {
//       console.log(diffs);
//       return [diffs[target - nums[i]], i]
//     }
//     diffs[nums[i]] = i
//   }
 
//   return 
// }
// console.log(twoSum(nums, target));



var twoSum = function(nums, target) {

}