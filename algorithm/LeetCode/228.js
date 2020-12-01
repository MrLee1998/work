var summaryRanges = function (nums) {
  let start = 0
  let end = 0
  let ans = []
  let len = nums.length-1
  for(let i=0;i<len+1;i++){

    end = i
    if(nums[i]+1!=nums[i+1]){  // i+ 1 len 的长度加1 
      if(start===end){
        ans.push(nums[end]+'')
      }else{
        ans.push(nums[start]+'->'+nums[end])
      }
      start = end = i+1   // 断点 加1 继续循环
    }
  }
  return ans
};
let nums = [0,1,2,4,5,7]
console.log(summaryRanges(nums));