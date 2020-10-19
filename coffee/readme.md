# 设计模式 模板模式
- leetcode
- 设计模式

- 任何构造都有 prototype 属性 原型对象
- 任何的实例化后的对象都有__proto__私有属性
- 对象的__proto__ = 构造函数的prototype对象
1. 构造函数
2. 原型对象
3. 实例


prototype是构造函数独有的属性；

对象的__prototype__属性通常与其构造函数的prototype属性相互对应；

所有构造函数的的prototype方法的Object.prototype(除了Object.prototype自身)