// let proxy = new Proxy({}, {
//   get: function(obj, proxy) {
//     console.log('get');
//     return obj[proxy]
//   },
//   set: function(obj, prop, value) {
//     console.log('set');
//     obj[proxy] = value
//   }
// })

// let handler = {
//   has(target, key) {
//     if(key[0] === '_'){
//       return false
//     }
//     return key in target
//   }
// }

// let target = { _prop: 'fpoo', prop: 'bar'}
// let proxy = new Proxy(target, handler)
// proxy.time = 35
// console.log('proxy' in proxy);
// console.log(proxy.time);

let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}

let handler = {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter( key => key[0] !== '_')
  }
}
let proxy = new Proxy(target, handler)
console.log(proxy);

for(let key of Object.keys(proxy)) {
  console.log(target[key]);
}
