let fetch = require('node-fetch')

function* gen() {
  let url1 = yield fetch('https://api.github.com/users/github')
  let url2 = yield fetch('https://api.github.com/users/github/followers')
  let url3 = yield fetch('https://api.github.com/users/github/repos')

  console.log([url1.bio, url2.documentation_url, url3.message].join('\n'));
} 

// let g = gen()
// let res = g.next()
// console.log(res);
// res.value.then( function(data) {
//   return data.json()
// }).then( function(data) {
//   return  g.next(data).value
// }).then(function(data) {
//   return data.json()
// }).then(function(data) {
//   return  g.next(data).value
// }).then(function(data) {
//   return data.json()
// }).then(function(data){
//   g.next(data)
// })

function run(gen) {
  let g = gen()
  function next(data) {
    let result = g.next(data)
    if(result.done) return
    result.value.then(function(data){
      return data.json()
    }).then(function(data) {
      next(data)
    })
  }
  next()
}
run(gen)