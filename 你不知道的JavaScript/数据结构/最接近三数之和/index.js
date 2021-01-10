var threeSumClosest = function(nums, target) {
 
  let len = nums.length
  if(len === 3) {
    return (nums[0] + nums[1] + nums[2])
  }
  nums.sort( (a, b) => a - b)
  let res = nums[0] + nums[1] + nums[len - 1]
  for(let i = 0; i < len - 2; i++) {
    let left = i + 1
    let right = len - 1
    while( left < right ) {
      let sum = nums[i] + nums[left] + nums[right]
      if(sum > target) {     
        right--
      } else{
        left++
      }
      if(Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
    }
  }
  return res
};
let nums = [-1,2,1,-4], target = 1;
console.log(threeSumClosest(nums, target));