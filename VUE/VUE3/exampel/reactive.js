//  vue3.0 的响应式原理
// reactive 的实现
// 2.0 需要递归  监听不到对象中不存在的属性 
// vue2.0 提供了this.$set(this.student,"age", 24) 


// 3.0 优化了递归的条件  用到了就递归   2.0 只要存在就递归

let toProxy = new WeakMap() // 原对象： 代理过的对象
let toRaw = new WeakSet() // 代理过的对象： 原对象
function isObject(val) {
  return typeof val === 'object' && val !== null
}

function reactive(target){
  // 创建响应式对象
  return createReactiveObject(target)
}

function createReactiveObject(target) {
  if(!isObject(target)) { // 如果不是对象 返回目标值
    return target
  }

  let proxy = toProxy.get(target) 
  if(proxy) {
    return proxy
  }
  
  let baseHandler = {
    get(target, key, receiver) {
      console.log('获取');
      let result = Reflect.get(target, key, receiver)
      // console.log(result);
      return isObject(result) ? reactive(result) : result
    },
    set(target, propKey, value, receiver) {
      let oldValue = target[propKey]
      let hadkey = target.hasOwnProperty(propKey)
      if(!hadkey) {
        console.log('新增');
      }
      else if(oldValue !== value) {
        console.log('设置');
        
      }
      let res = Reflect.set(target,propKey,value,receiver)
      return res
    },
    deleteProperty(target, key) {
      console.log('删除');
      let res = Reflect.deleteProperty(target, key)
      return res
    }
  }
  let observed = new Proxy(target, baseHandler)   // 数据代理
  toProxy.set(target, observed) 
  toRaw.add(observed, target) // 防止重复代理
  return observed
}

let proxy = reactive({
  name: 'wn',
  age: {
    n: 18
  },
  arr: [1, 2, 3]
}) 

// proxy.age
// console.log(proxy.age);
// proxy.name
// proxy.name = 'nw'
// console.log(proxy.name);
// delete proxy.name
// console.log(proxy.name);
// proxy.age.n = 19
// console.log(proxy.age.n);
// proxy.sex = 'boy'
// console.log(proxy.sex);
proxy.arr.push(4)
console.log(proxy.arr);
