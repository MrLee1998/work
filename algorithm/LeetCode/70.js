
// 斐波那契数列

var climbStairs = function(n) {

  //  公式
  // const sqrt = Math.sqrt(5)
  // const fib = Math.pow((1 + sqrt) / 2, n + 1) - Math.pow((1 - sqrt) / 2, n + 1)
  // return Math.round(fib / sqrt)

  // 
  let dp = [];
  dp[1] = 1
  dp[2] = 2
  for(let i = 3; i < n; i++) {
    dp[i] = dp[i -1 ] + dp[i - 2]
  }
  return dp[n]
};