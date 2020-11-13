const { time } = require('console')
const glob = require('glob')

// 阻塞式的I/O 调用方式
// var result = null
// console.time('glob');
// result = glob.sync(__dirname + `/**/*`)
// console.timeEnd('glob');
// console.log(result);

//非阻塞式的I/O 调用方式

var result = null
console.time('glob')
glob(__dirname + `/**/*/`, function(err, res) {
    result = res
    // console.log(result);
    console.log('got result');
})
console.timeEnd('glob')
console.log(1 + 1);
