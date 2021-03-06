// const { body } = require("./responce")

let proto = {}
//  proto.url = ctx.requset.url
//  数据劫持

function defineGetter(property, name) {
  //  自定义获取器
  proto.__defineGetter__(name, function() {
    return this[property][name]
  })
}

defineGetter('requset', 'url')
defineGetter('requset', 'path')
defineGetter('responce', 'body')

function defineSetter(property, name) {
  proto.__defineSetter__(name, function(value){
    this[property][value] = value
  })
}
defineSetter('responce', 'body')
module.exports = proto