// Promise.prototype.then = function () {}
// Promise.prototype.catch = function () {}

// class Promise {
//     constructor() {

//     }
// }
// all() {

// }
// race() {

// }
// function xq () {
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             resolve('我还记得')
//             console.log('success');
//             // reject('pp')
//         },1000)
//     })
    
// }

// function marry () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve('ok')
//             console.log('ok');
//         },500)
//     })
   
// }
// function baby() {
//      console.log('marry with me');   
// }
// xq().then((res) =>{
//     console.log(res);
//     return marry()
// })
// .then((result)=>{
//     console.log(result);
//     baby()
// })
// .catch((err) => {
//     console.log(err);
// })


// Promise.all
function a() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('aaaa');
            resolve('1')
        },1000)
    })
}

function b() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('bbbb');
            resolve('2')

        },1500)
    })
}

function c() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('cccc');
            resolve('3')

        },500)
    })
}

function d() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('dddd');
            resolve('4')

        },0)
    })
}

// Promise.all([a(), b(), c()]).then(d)
// Promise.race([a(), b(), c()]).then(d)
a().then(b).then(c).finally(d)