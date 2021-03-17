# node.js 的Event Loop
Node.js 也是单线程的Event Loop， 但是它的运行机制不同于浏览器环境

node.js 的运行机制
  （1）v8引擎解析JavaScript脚本
  （2）解析后的代码， 调用Node API
  （3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程， 行程一个Event Loop， 以异步的方式将任务的执行结果返回给V8引擎。
  （4）V8引擎再将结果返回给用户

# node.js 的垃圾回收机制
  栈中的数据垃圾：
    JavaScript 引擎会通过向下移动ESP指针来销毁函数保存再栈中的执行上下文

# js的基本数据类型
  string number boolean undefined null 
  
# 如何判断一个数据类型
  Object.prototype.toString.call(variable)
  instanceof
  
# 闭包
 闭包就是能够读取其他函数内部变量的函数。
  - 闭包的应用场景：
    setTimeout
    回调
    封装变量
    节点循环绑定click事件
  - 闭包的用途
    读取函数内部的变量
    让变量的值保存在内存中， 不被垃圾回收机制回收
    方便调用上下文的局部变量。有利于封装
  - 变量的作用域
    函数内部可以直接读取全局变量，但是在函数外部无法读取函数内部的局部变量。

  使用闭包的注意点：闭包会使函数中的变量都被保存再内存中，不被垃圾机制回收，内存消耗大
  滥用造成性能问题，也会造成内存泄漏。
  解决方法是，在退出函数之前，将不使用的局部变量全部删除。

# 原型链


# js继承的几种方式
  - 属性拷贝
    如果继承过来的成员是引用类型的话,
    那么这个引用类型的成员在父对象和子对象之间是共享的,
    也就是说修改了之后, 父子对象都会受到影响.

  - 原型式继承 
  使用构造函数的原型对象实现继承
    function Class() {
      this.name = name
    }
    Class.prototype.showAge = function() {
     console.log(age)
    }
    //子函数
    function subClass() {

    }
    subClass.prototype = Class.prototype
    let child = new subClass()
    父构造函数的原型对象和子构造函数的原型对象上的成员有共享问题
    只能继承父构造函数的原型对象上的成员, 不能继承父构造函数的实例对象的成员

  - 原型链继承
    SubClass.prototype = new Class(); 
    SubClass.prototype.constructor = SubClass; 
    不能给父构造函数传递参数，父子构造函数的原型对象之间有共享问题

  - 借用构造函数
    function SubClass(name){
      // 使用call借用Person的构造函数
        Class.call(this, name);
    }

  - 组合继承
    构造函数 + 原型式继承
    function SubClass(name){
      // 使用call借用Person的构造函数
        Class.call(this, name);
    }
    subClass.prototype = Class.prototype
    SubClass.prototype.constructor = SubClass; 

  - 构造函数加深拷贝
    function SubClass(name){
      // 使用call借用Person的构造函数
        Class.call(this, name);
    }
    拷贝父类的函数原型到子类的函数原型上
    SubClass.prototype.constructor = SubClass; 

# undefined 和 null的区别
  Undefined类型只有一个特殊值，在使用var声明变量但未对其加以初始化，这个变量的值就是undefined
  Null类型是第二个只有一个值的数据类型，这个特殊的值是NULL，从逻辑角度看NULL值表示一个空对象指针，这也正是typeof操作符检测null时值返回‘objcet’的原型
  如果定义的变量准备在将来用于保存对象 那么最好将该变量初始化为null 而不是其他值 这样一来只要检测null值就可以知道相应的变量是否已经保存了一个对象的引用 
  undefined的值是派生自null值
  null == undefined // true

# ajax同步和异步的区别
  异步： ajax发出请求后，等待返回结果的同时，回去执行其他任务，一种并行的方式
  同步：一个任务执行完毕，才会接着执行下一个任务。

  我们在发送AJAX请求后，还需要继续处理服务器的响应结果，如果这时我们使用异步请求模式同时未将结果的处理交由另一个JS函数进行处理。这时就有可能发生这种情况：异步请求的响应还没有到达，函数已经执行完了return语句了，
  这时将导致return的结果为空字符串。不过也有用同步的啦。有的时候，当前请求的结果是下一步请求的前提，只有知道了当前请求的结果，才能知道接下来怎么做

# ajax中的跨域是如何解决的？
  协议，域名，端口有任何一个不同，都被当做是不同的域
  JSONP 只支持get方法
  CORS
  代理
  postMessage

# ajax是什么？ 原理 步骤
  1. 创建一个XMLHTTPRequest对象， 也就是创建一个异步调用对象
  2. 创建一个新的http请求， 并指定该http请求的方法， Url及验证信息
  3. 设置响应http请求状态变化的函数
  4. 发送http请求
  5. 获取异步调用返回的数据
  6. 使用JavaScript和Dom实现局部刷新

# 说下setTimeout, 它在定时后一定执行吗？
setTimeout是异步执行的, js是单线程，只有同步队列执行完，才会去执行异步队列
在等待过程中，程序会去执行setTimeout方法后边的内容，如果后边的内容没有结束，
setTimeout里边的函数执行就会等待。

# 两侧固定，中间自适应。
  - 使用绝对定位
  - 浮动定位
  - flex布局

# this指向。是否严格模式
  全局情况下， this始终指向window
  作为函数调用时， 非严格模式下指向window， 严格模式下指向undefined
  作为构造函数使用时， 指向新new出来的对象

# 伪元素， 伪类
  区别： 伪类添加元素的特俗效果， 而伪元素则是添加元素的内容， 当然内容可以是空，相当于空div

# http协议状态码
  1·· （信息类）
    100 客户必须继续发送请求
    101 客户要求服务器根据请求http协议版本
  2·· 响应成功： 表示动作被接收， 理解和接受
    200 
  3·· 重定向类： 为了完成指定的动作，必须接受进一步处理
  4·· 客户端错误类型
  5·· 服务端错误

# 浏览器缓存
  缓存位置
    Service Worke
    Memory Cache
    Disk Cache
    Push Cache
   Service Worke是运行在浏览器背后的独立线程，可以用来实现缓存功能 

通常浏览器缓存策略分为两种：强缓存和协商缓存，并且缓存策略都是通过设置 HTTP Header 来实现的。
强缓存通过设置两种 HTTP Header 实现：Expires 和 Cache-Control。
协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag 。

# 箭头函数和普通函数的区别 
  1. 箭头函数相当于匿名函数， 不能作为构造函数， 不能使用new
  2. 箭头函数不绑定arguments，取而代之的是rest即参数解构后的值
  3. 箭头函数会捕获其所在上下文的this的值，作为自己的this值

# 路由模式 
 hash 和 history模式
 hash模式背后的原理是onhashchange事件
 
window.onhashchange=function(){
 let hash=location.hash.slice(1);
 document.body.style.color=hash;
}

# 实现轮播
  imgwraper {
 	width: 1200px;
 	animation: frames 5s ease-out infinite;
  }
  @keyframes frames {
	0%,25% {
		margin-left: 0;
	}
	35%,60% {
		margin-left: -400px;
	}
	70%, 100% {
		margin-left: -800px;
	}

# Promise 
  promise.prototype.catch 并不只是单单reject抛出的回调函数
  Promise.prototype.catch 方法是.then(null, rejection)或是.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
  如果Promise 对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。
  
# vuex 缺点
不能数据持久化 每次刷新页面都要重置所有页面 持久化只能通过localstorge才能实现

# vuex的工作流程
  vue组件如果调用某个vuex的方法过程中需要向后端请求时或者说出现异步请求操作时，需要dispatchVuex中actions的方法，保证数据的同步。action的存在就是为了让mutations中的方法能在一i不操作中起作用。