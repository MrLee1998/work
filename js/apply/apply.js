let b = {
    name: 'brooth',
    // fn: function a () {}
}
function a (m,n) {
    console.log(m+n); 
    console.log(this.name);
}

Function.prototype.myapply = function (thisArg) {
    if( typeof this !== 'function') {
        throw new TypeError('你个鬼东西....')
    }
    // 让 this 代表的这个函数 取到thisArg 里面生效
    const fn = Symbol('fn')  // Symbol 保证变量唯一 防止fn这个词组被只占用
    // 把 this 代表的这个函数所拥有的参数先取出
    // 数组方法  slice 左闭右开 下标1开始 下标3之前结束 取到下标2  不影响原数组
    //           splice(1,3) 下标1开始 取三个值 影响原数组
    const args = arguments[1]
    console.log(...args);
    // 将调用call函数的方法添加到thisArg 的属性中
    thisArg[fn] = this
    const result = thisArg[fn](...args)
    delete thisArg[fn]
    return result  
}
a.myapply(b,[1,2])
