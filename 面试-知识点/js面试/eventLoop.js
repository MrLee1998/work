

console.log('start')

setTimeout(() => {
  console.log('setTimeout');
},0)

new Promise(resolve => {
  console.log('promise');
  resolve()
}).then(() => {
  console.log('1');
}).then(() => {
  console.log('1');
})

console.log('end');