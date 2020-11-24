let b = {
    name: 'brooth'
}
function a (m,n) {
    this.age = '18'
    console.log(m+n); 
    console.log(this.name);
}
Function.prototype.mybind = function (thisArg) {
    if( typeof this !== 'function') {
        throw new TypeError('你个鬼东西....')
    }
    const args = [...arguments].slice(1)//[4,5] 
    const self = this
    const nop = function() {}
    const bound = function() {
        return self.apply(this instanceof nop? this:thisArg,args)
    }
    if( this.prototype) {
        nop.prototype = this.prototype
    }
    bound.prototype = new nop()
    return bound
}
let res = a.mybind(b,4,5)
let fun = new res()
console.log(fun);