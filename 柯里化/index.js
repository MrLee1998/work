// 

// function add(a, b) {
//   return a + b
// }
// add(1, 2)
// let addCurry = curry(add)
// addCurry(1)(2) // 3


// function ajax(type, url, data) {
//   let xhr = new XMLHttpRequest();
//   xhr.open(type, url, true)
//   xhr.send(data)
// }

// ajax('POST', 'www.test.com', 'name = "wn"')
// ajax('POST', 'www.test2.com', 'name = "wn2"')

// // 利用curry
// let ajaxCurry = curry(ajax)

// // 以post类型请求
// let post = ajaxCurry('POST')
// // post('www.test.com', 'name="wn"')
// let postFormTest = post('www.test.com')
// postFormTest('name="wn"')




// let person = [{
//   name: 'js'
// },
// {
//   name: 'tt'
// }]
// let name = person.map( function(item){
//   return item.name
// })
// console.log(name);

// let prop = curry(function(key, obj) {
//   return obj[key]
// })
// let name2 = person.map(curry('name'))
// console.log(name, name2);

function sub_curry(fn) {
  let args = [].slice.call(arguments, 1)
  return function() {
    let newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}
function curry(fn, length) {
  length = length || fn.length
  let slice = Array.prototype.slice
  return function(){
    if (arguments.length < length) {
      let combined = [fn].concat(slice.apply(arguments))
      return curry(sub_curry.apply(this, combined),length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}
function add(a,b) {
  return a + b
}
// let addCurry = curry(add)
// console.log(addCurry(1, 2));
let test = curry (function(a, b, c) {
  return [a, b, c]
})
console.log(test('a', 'b', 'c'));
console.log(test('a')('b', 'c'));