var maximumProduct = function(nums) {
  let len = nums.length
  nums.sort(  (a, b)  => b - a)
  let result1 = nums[len - 1] * nums[len - 2] * nums[0]
  let result2 = nums[0] * nums[1] * nums[2]
  return Math.max(result1, result2)
};
let nums = [1, 2, 3 , 4]
console.log(maximumProduct(nums));
console.log(nums);