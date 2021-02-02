// console.log(process.argv);

// 石头剪刀布  输了别想哭

// let playerAction = process.argv[process.argv.length-1]
// console.log(playerAction);

// 电脑随机生成3个

module.exports = function (playerAction) {
  let random = Math.random() * 3
  let computerAction;
  if (random < 1) {
    computerAction = 'rock'
  }
  else if (random > 2) {
    computerAction = 'scissor'
  }
  else {
    computerAction = 'paper'
  }
  // 比较
  if (computerAction === playerAction) {
    return 0
    // console.log('再来一次');
  }
  else if ((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'scissor' && playerAction === 'rock') || (computerAction === 'paper' && playerAction === 'scissor')) {
    return 1
    // console.log('win');
  }
  else {
    return 2
    // console.log('别哭哦');
  }
}