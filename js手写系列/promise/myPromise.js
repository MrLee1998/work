const PENDING ='pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {
  const that = this
  that.state = PENDING  // 初始化状态
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []
  function resolve(value) {
    if(that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map( cb => {
        cb(that.value)
      })
    }
  }
  
  function reject(value) {
    if(that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map( cb => {
        cb(that.value)
      })
    }
  }
  try {
    fn(resolve, reject)
  } catch(error) {
    reject(error)
  }
}


myPromise.prototype.then = function(onFullfilled, onRejected) {
  const that = this
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
  if(that.state === PENDING) {
    that.resolvedCallbacks.push(onFullfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if(that.state === RESOLVED) {
    onFullfilled(that.value)
  }
  if(that.state === REJECTED) {
    onRejected(that.value)
  }
}

function a() {
  return new myPromise ((resolve, reject) => {
    
    setTimeout( () => {
      console.log('aaa');
      resolve()
      // reject()
    }, 1000)
    
  })
}
function b() {
  setTimeout( () => {
    console.log('bbb');
  })
}

a().then(b)