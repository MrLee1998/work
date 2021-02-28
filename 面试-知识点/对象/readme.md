# 对象
  对象默认是不可迭代的。
  如果迭代规则被定义， 则一个对象是可迭代的

  - 添加迭代器
  *[Symbol.interator]() {
    yield * Object.values(this)
  }

  var obj = {
    1: 'a'
  }
  obj.hasOwnProperty('1') true
  所有对象键都会被存储为字符串（symbols除外)