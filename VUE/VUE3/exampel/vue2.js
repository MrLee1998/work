// vue2.0 是如何实现响应式的
// 数据改变了  视图也跟着改变


let oldArratPrototype = Array.prototype
let proto = Object.create(oldArratPrototype);  // 深拷贝
//重写数组方法 push pop reserve
['push', 'pop', 'shift'].forEach(method => {
  // 函数劫持 重写函数
  proto[method] = function() {
    updateView()
    oldArratPrototype[method].call(this, ...arguments)
  }
})

function observer(target) {  // 观察者
 if (typeof target !== 'object' || target == null) {
  return target
 }

 if(Array.isArray(target)) {
  //  Object.setPrototypeOf(target, proto)  // 设置原型链
   target.__proto__ = proto 
 } 
 for(let key in target) {
  if(typeof target[key] === 'object' && target[key] !== null) {
    observer(target[key])
  }
  defineReactive(target, key, target[key])
 }

}
function defineReactive(target, key, value) {
  // if( typeof value == 'object' && value !== null) {
  //   observer(value)
  // }
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        updateView()
        value = newValue
      }
    }
  })
}

function updateView() { 
  console.log('更新视图');
}
// Object.defineProperty


let data = {
  name: 'lz',
  age: 12,
  job: {
    newJob: {
      work: 'coding'
    }
  },
  job: ['game','drive']
}

observer(data)
// console.log(data.hobit);

// console.log(data.name);
// data.name = 'zl'
// data.job.newJob.work = 'code'
// console.log(data.name); 
data.job.push('teacher')
console.log(data.job);
