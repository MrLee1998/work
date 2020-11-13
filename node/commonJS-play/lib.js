// let playerAction = process.argv[process.argv.length-1]
// console.log(playerAction);
module.exports  = function(playerAction) {
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
        return 0
    }
    else if((computerAction === 'rock'&& playerAction === 'cloth') || (computerAction === 'scissors'&& playerAction === 'rock') || (computerAction === 'cloth'&& playerAction === 'scissors') ){
        console.log('win');
        return -1
    }
    else {
        console.log('别哭哦');
        return 1
    }
}


