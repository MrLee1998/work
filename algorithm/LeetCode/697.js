var findShortestSubArray = function(nums) { 
  let map = {}
  let times = 0
  let minLen = 0
  nums.map((item, i) => {
    if(!map[item]) {
      map[item] = [1, i, i]
    } else {
      map[item][0]++
      map[item][2] = i
      if(map[item][0] > times) {
        times = map[item][0]
        minLen = map[item][2] - map[item][1]
      } else if(map[item][0] == times) {
        minLen = Math.min(minLen, map[item][2] - map[item][1])
      }
    }
  })
  return minLen + 1
}

let nums = [1,2,2,3,1,4,2]

console.log(findShortestSubArray(nums));