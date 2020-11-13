// let playerAction = process.argv[process.argv.length-1]
const game = require('./lib')
// console.log(game(playerAction));


// 获取进程的标准输入
let count = 0
process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    const result = game(playerAction)
    console.log(result);
    if(result == -1) {
        count++
    }
    if(count ===3 ){
        console.log('我要生气了');
        process.exit()
    }
})