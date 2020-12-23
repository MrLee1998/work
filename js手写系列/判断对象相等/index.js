function eq(a, b, aStack, bStack) {
  if (a === b) {
    return a !== 0 || 1/a === 1/b
  }
  if(a !== a) return b !== b
  if(a == null || b == null) return false
  if(+a !== +a) return +b !== +b
  let type = typeof(a)
  if (type !== 'function' && type !== 'object' && typeof(b) !== 'object') {
    return false
  } 
  // 更复杂的对象
  return deepEq(a, b, aStack, bStack);
}
let toString = Object.prototype.toString;
function isFunction(obj) {
  return toString.call(obj) === '[object Function]'
}
function deepEq(a, b, aStack, bStack) {
  let className = toString.call(a)
  if(className !== toString.call(b))  return false
  switch(className) {
    case '[object RegExp]':
    case '[object String]':
      return ''+a === ''+b;
    case '[object Number]':
      if(+a !== +a) return +b !== +b
      return +a === 0 ? 1/+a === 1/b : +a === +b
    case '[object Boolean]':
      return +a === +b
  }
  let areArrays = className === '[object Array]'
  if(!areArrays) {
    if(typeof a !== 'object' || typeof b !== 'object') return false
    let aCtor = a.__proto__.constructor, bCtor = b.__proto__.constructor;
    // aCtor 和 bCtor必须都不是Object构造函数 aCtor 不等于 bCtor , 那么这两个对象不相等
    if(aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)){
      return false
    }


  }
  aStack = aStack || []
  bStack = bStack || []
  let length = aStack.length
  // 检查是否有循环引用部分
  while(length--) {
    if(aStack[length] === a) {
      return bStack[length] === b
    }
  }
  aStack.push(a)
  bStack.push(b)
  if (areArrays) {
    let length = a.length
    if( length !== b.length)  return false
    while(length--) {
      if(eq(a[length], b[length], aStack, bStack)) return false
    }
  } else {
    let keys = Object.keys(a), key;
    let length =keys.length;
    if(Object.keys(b).length !== length) return false
    
    while(length--) {
      key = keys[length]
      if(!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack)))  return false
    }
  }
  aStack.pop()
  bStack.pop()
  return true
} 
// let a = [1];
// let b = [1];
// console.log(eq(a,b)); // false
// console.log(eq(0,0)); // true
// console.log(eq(-0,0)); // false
// console.log(eq(NaN,Number(NaN))); // true
a = {foo: {b: {foo: {c: {foo: null}}}}}
b = {foo: {b: {foo: {c: {foo: null}}}}}
a.foo.b.foo.c.foo = a
b.foo.b.foo.c.foo = b
console.log(eq(a,b));
// +0 === -0 // true
// (+0).toString() // '0'
// (-0).toString() // '0'

