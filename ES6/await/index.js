// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('a');
//             resolve('')
//             // reject('1')
//         }, 1000)
//     })
// }
// function b() {
//     console.log('b');
// }
// a().then(b).catch((err)=> {
//     console.log(err);
// })

// 
function timeOut(ms) {
    return new Promise(resolve => {
        // setTimeout(() => {
        //     console.log('你好');
        //     resolve()
        // }, ms)
        console.log('1');
        resolve()
    })
}

// 声明该函数内部可能存在异步情况
async function asyncPrint(value,ms) {
    await timeOut(ms)  //await 直接拿到值 然后执行
    console.log(value);
}

asyncPrint('hello word', 1000)
console.log('ok');