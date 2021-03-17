# 变量提升
  - js代码的执行过程分为两个阶段
    1. 词法分析： 词法分析主要包括： 分析变量声明， 分析函数声明， 分析形参三个部分
    2. 执行阶段

    函数 变量形式声明 和普通变量一样 提升的 只是一个没有值的变量。
    函数声明式的提升现象和变量提升略有不同，函数声明式会提升到作用域最前边，并且将声明内容一起提升到最上边。

    同一个变量只会声明一次，其他的会被忽略掉或者覆盖掉。
    函数声明的优先级高于变量声明的优先级，并且函数声明和函数定义的部分一起被提升。
# bind， call ， apply 
  

# bind实现
  1. 不传参数的话， 默认指向window
  2. 返回的是一个函数
  3. 返回的函数如果被new的话
  4. 参数是任意个

# call , apply 实现


# 简单说一下原型链
prptotype 是函数的原型  __proto__ 是对象原型 有时候也可以理解为“构造器的原型
__proto__===constructor.prototype

每个函数都有 prototype 属性， 该属性指向原型。
原型就是创建该函数的工厂
每个对象都有 __proto__ 属性， 指向了创建对象的构造函数的原型。
其实这个属性指向的是[[prototype]], 但是[[prototype]]是内部属性 ，
 我们访问不到， 所有用 __proto__ 来访问
对象可以通过 __proto__ 来寻找不属性该对象的属性（继承来的）
__proto__ 将对象连接起来组成原型链

# 如何判断对象类型
  instanceof 通过原型链来判断
  Object.prototype.toString.call('string') [object String] 

# 箭头函数的特点
  没有this， 箭头函数的this取绝于他外面的第一个不是一个箭头函数的this

# async await 的优缺点 (Promise 的优化)
  最优雅的解决异步问题
  async await作用： 
  优势在于处理promise.then()的调用链问题，代码更清晰
  缺点：await会阻塞代码 ，滥用会导致性能问题

# generators 的原理


# promise


# == 和 === 区别， 什么情况下用 == 
[] == ![]  true

# 浏览器Eventloop 事件循环机制  和 node中的区别

  宏任务队列 微任务队列

# cookie, localStorage, session, indexDB的区别

大小： 4k   5M   5M   无限
cookie： 携带在header中， 影响请求性能

如果没有大量数据存储需求的话，可以使用 localStorage 和 sessionStorage 。
对于不怎么改变的数据尽量使用 localStorage 存储，
否则可以用 sessionStorage 存储。

cookie: 
  value: 用于保存用户登陆状态， 需加密
  http-only：不能通过JS访问Cookie， 减少XSS攻击
  secure: 只能在协议为HTTPS的请求中携带
  same-site: 规定浏览器不能再跨域请求中携带Cookie， 减少CSRF攻击

# 怎么判断页面是否加载完成
window.onload事件
DOMContentLoaded (html完全加载)

# 跨域
  1. JSONP (只用于get)
  2. cors (后端实现cors， 就可以实现跨域)
  3. document.domain (只适用于二级域名相同的情况 a.test.com, b.test.com)
  document.domain = 'test.com'
  4. postMessage
  5. 代理 Nginx

# 浏览器缓存
  缓存策略是为了降低资源的重复加载， 提高整体页面的加载速度
  - 强缓存
    可以通过两种响应头来实现Expires 和 Cache-Control Cache-Control的优先级要优于Expires~
    表示在缓存期间不需要请求
  - 协商缓存
    Last-Modified（本地文件的最后日期）, 
    If-MOdified-Since (把Last-Modified的值发给服务端)

# Babel 原理
  1. 解析： 工具 @babel/parse
    词法分析： 将字符串的大爱吗解析为token（令牌流）
    语法分析： 将token解析生成抽象语法树（AST）
  2. 转换 工具 @babel/traverse
    遍历传入抽象语法树, 对其节点进行增添， 替换， 移除操作， 返回新的抽象语法树
    可接受自定义的转换规则
  3. 生成 工具@babel/generator
    深度优先遍历传入的抽象语法树， 生成相应的自负床形式的代码， 可配置压缩， 删除注释等。

# get 和 post 请求有什么区别
 1. 参数拼接
 2. get可以使用缓存, post 不能使用缓存

# 继承
  1. 原型链继承
    让新的实例的原型等于父类的实例
  特点： 1. 实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
  缺点：1. 新的实例不能像父类构造函数传参
        2. 继承单一
        3. 所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！） 


# js事件流
  捕获
  目标 触发
  冒泡
  addEventListener 接受三个参数 第三个默认为false 冒泡  true 捕获

# 如何让事件先冒泡， 后捕获
  监听捕获和冒泡 分别对应相应的处理函数, 先暂停执行捕获事件， 直到冒泡事件执行完毕， 再执行捕获时间


# 事件委托
  不直接在某个DOM元素上设置事件， 在他的父类上添加事件

# new 干了什么
  1. 创建一个空对象
  2. 新对象的__proto__属性指向构造函数的prototype对象
  3. this指向新的实例对象
  4. 将新的对象地址，赋值给变量

# 防抖和节流

# js垃圾回收机制

# 对象深拷贝

# onece 函数
  once.js

# instanceof
    instanceof.js

# 闭包
  闭包定义：在js中，根据词法作用域的规则，
  内部函数总是可以访问外部函数中声明的变量，
  当通过调用一个外部函数返回内部函数后， 即使
  改外部函数已经执行完，但是内部函数引用外
  部函数的变量依然保存在内存中， 我们称这些变量为闭包的产物，
  这些变量的集合就称为闭包


 闭包是怎么回收
 1. 如果引用闭包的函数是一个全局变量， 那么这个闭包就会一直存在知道页面关闭
 2. 如果引用闭包的函数是一个局部变量， 等函数销毁后， 在下一次JavaScript引擎执行垃圾回收时，判断闭包不再使用了才会被垃圾回收

# 模块化
  module.js

# Promise
  Promise.js