// 给定不同面额的硬币coins和一个总金额amount。编写一个函数来计算可以凑成总金额所需要的最少硬币数

//  没有返回 -1

coins = [1, 2, 5], amount = 11

const coinChange = function(coins, amount) {
  // 用于保存每个目标总额对应额最小硬币个数
  const f = []
  f[0] = 0
  for(let i = 1; i <= amount; i++) {
    f[i] = Infinity
    // 遍历每个可用的硬币面额
    for(let j = 0; j < coins.length; j++) {
      if(i - coins[j] >= 0) {
        f[i] = Math.min(f[i], f[i - coins[j]] + 1)
      }
    }
  }

  if(f[amount] === Infinity) {
    return -1
  }
  return f[amount]
}