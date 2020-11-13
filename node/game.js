// console.log(process.argv);

// 石头剪刀布  输了别想哭

let playerAction = process.argv[process.argv.length-1]
// console.log(playerAction);

// 电脑随机生成3个
let random = Math.random() * 3
let computerAction;
if(random < 1) {
     computerAction = 'rock'
}
else if(random > 2) {
     computerAction = 'scissors'
}
else {
     computerAction = 'cloth'
}
// 比较
if(computerAction === playerAction){
    console.log('再来一次');
}
else if((computerAction === 'rock'&& playerAction === 'cloth') || (computerAction === 'scissors'&& playerAction === 'rock') || (computerAction === 'cloth'&& playerAction === 'scissors') ){
    console.log('win');
}
else {
    console.log('别哭哦');
}