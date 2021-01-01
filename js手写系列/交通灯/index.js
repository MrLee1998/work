const fs = require('fs')
// 包装一层 promise
let promise = (url) => new Promise( (resolve, rejcet) => {
    fs.readFile(url,'utf-8', (err, file) => {
        console.log(file);
        if(err) {
            rejcet()
        }
        else{
            resolve(file)
        }
    })
})
// promise('./index.html').then( (file) => {
//     console.log(file);
// })
// promise('./index.js').then( f => 
//     console.log(f)
// )
promise('./index.html').then( (fi) => {
    return promise('./index.js')
})
