var permute = function(nums) {
  const len = nums.length
  const curr = []
  const res = []
  const visited = {}
  function dfs(nth) {
    if(nth === len) {
      res.push(curr.slice())
      return
    }
    //检查手中的数字有哪些
    for(let i = 0; i < len; i++){
      if(!visited[nums[i]]) {
        curr.push(nums[i])
        visited[nums[i]] = 1 // 打个标识
        dfs(nth + 1)
        // nums[i] 让出当前坑位
        curr.pop()
        visited[nums[i]] = 0
      }
    }
  }
  dfs(0)
  return res
};

let nums = [1, 2, 3]
console.log(permute(nums));