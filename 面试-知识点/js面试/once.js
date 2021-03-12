
function once(func) { 
  let tag = true
  return function() {
    if (tag === true) {
      func.apply(null, arguments)
      console.log(tag);
      tag = false
    }  
    return undefined
  }
}

function test() {
  console.log('hello');
}

let a = once(test)
a()
a()
a()