var findDisappearedNumbers = function(nums) {
  const len = nums.length 
  let res = []
  const map = {}
  nums.forEach(num =>{
    map[num] = true
  })
  for(let i = 1; i <= len; i++) {
    if(!map[i]) {
      res.push(i)
    }
  }
  return res
};
let nums = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(nums));