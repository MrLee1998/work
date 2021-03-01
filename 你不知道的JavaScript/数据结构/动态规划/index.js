//  爬楼梯
// 楼梯有n阶， 每次可以爬1个或两个台阶

// 给出达到某个目的方案的个数  动态规划

// 倒着分析问题： 1. 定位到问题的终点 2. 站在终点的视角， 来思考后退的可能性


// 记忆化搜索（递归优化）
// let f = []
// const climStairs = function (n) {
//   if (n === 1) {
//     return 1
//   }
//   if (n === 2) {
//     return 2
//   }
//   if (f[n] === undefined) f[n] = climStairs(n - 1) + climStairs(n - 2)
//   return f[n]
// }
// let n = 3
// console.log(climStairs(n));


//  动态规划  自底向上

const climStairs = function (n) {
  let f = [];
  f[1] = 1
  f[2] = 2
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }
  return f[n]
}
let n = 3
console.log(climStairs(n));