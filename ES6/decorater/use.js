class Math {
  @log
  add(a, b) {
    return a + b
  }
}
function log(target, name, descriptor) {
  let oldValue = descriptor.value
  descriptor.value = function(...args) {
    // let result =0;
    // Array.from(args).forEach(function(item) {
    //   result +=item
    // })
    console.log(`calling ${name} with`, args);
    return oldValue.apply(this, args)
  }
  return descriptor
}
let math = new Math()
math.add(1, 2)
// console.log(math.add(1, 2));