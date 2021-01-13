var removeElement = function(nums, val) {
  // let res = 0
  // for(let index in nums) {
  //   if(nums[index] !== val) {
  //     nums[res] = nums[index]
  //     res++
  //   }
  // }
  // console.log(nums);
  // return res
  let star = 0, end = nums.length - 1;
  while(star <= end) {
    if(nums[star] === val) {
      nums[star] = nums[end]
      end--
    } else{
      star++
    }
  }
  return star
};
let  nums = [3,2,2,3], val = 3;
console.log(removeElement(nums, val));