// 给定一个不含重复元素的整数数组 nums， 返回数组所有可能的子集


// 穷举 DFS 属性思维方式  递归 （递归边界）

const subsets = function(nums) {
  const res = []
  const len = nums.length 
  const subset = []  // 组和数据

  dfs(0)
  function dfs(index) {  // 找子集
    res.push(subset.slice())  // 更新结果数组
    // 从当前的索引数字遍历nums
    for(let i = index; i < len; i++) {
      subset.push(nums[i])
      dfs(i + 1)
      console.log(`${subset}    测试1`);
      subset.pop()   // 这是数字不存在于组合的情况
      console.log(`${subset}    测试2`);
    }
  }
  return res
}

let nums = [1, 2, 3]
console.log(subsets(nums));