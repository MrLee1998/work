# HTTP/HTML/浏览器
  HTTP默认端口80，HTTPS默认端口443
 1. 说下http 和 https
  http: 超文本传输协议，互联网上应用最广泛的网络协议
  在Http中一个Request只能对应有一个Response，而且这个Response是被动的，不能主动发起。

 - WebSocket的实现和应用
  1. 什么是WebSocket？
    WebSocket是HTML5中的协议，支持持久连续，
  最大的特点就是服务器可以主动的向客户端发送信息， 客户端也可以主动向服务器发送消息，实现双向平等对话， 
  属于服务器推送技术的一种

# HTTP请求的方式， HEAD方式
  head： 类似于get请求，只不过返回的响应中没有具体的内容， 用户获取报头
  options: 允许客户端查看服务器的性能， 比如说服务器支持的请求方式等等。

# 一个图片url访问后直接下载怎么实现？
  请求的返回头里面， 用于浏览器解析的重要参数就是OSS（Object Storage Service）的API文档里的返回http头，
  决定用户下载行为的参数
  1. x-oss-object-type:
    Normal
  2. x-oss-request-id:
    598D5ED34F29D01FE2925F41
  3. x-oss-storage-class:
    Standard

# 说一下web Quality（无障碍）
  能够被残障人士使用的网站才能称得上一个易用的（易访问的）网站。
  残障人士指的是那些带有残疾或者身体不健康的用户。

# 几个很实用的BOM属性对象方法
  BOM 浏览器对象
  location
  history
  Navigator

# 说下HTML5 drag api
  dragstart: 开始拖放元素时触发
  drag: 正在拖放
  dragenter: 拖入某元素时触发
  dragover：在被拖放在某元素内移动时触发
  dragleave
  drop
  dragend： 

# 说下http2.0
  http和https的区别，相比于http, https是基于ssl加密的http协议
  提升访问速度（可以对于，请求资源所需时间更少，访问速度更快，相比http1.0）
  1. 允许多路复用：多路复用允许同时通过单一的HTTP/2连接发送多重请求-响应信息。改善了：在http1.1中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制（连接数量），超过限制会被阻塞。
  2. 二进制分帧：HTTP2.0会将所有的传输信息分割为更小的信息或者帧，并对他们进行二进制编码
  3. 首部压缩
  4. 服务器端推送

# 补充400和 401， 403状态码
 1. 400状态码： 请求无效
  产生原因： 
    前端提交数据的字段名称和字段类型与后台的实体没有保持一致
    前端提交到后台的数据应该是json字符串类型，但是前端没有将对象JSON.stringify转化成字符串。
  解决方法：
    对照字段的名称，保持一致性
    将obj对象通过JSON.stringify实现序列化
 2. 401状态码：当前请求需要用户验证

 3. 403状态码：服务器已经得到请求，但是拒绝执行

# cookie session 的区别
  1. cookie数据存放在客户的浏览器上， session数据放在服务器上
  2. cookie不是很安全， 别人可以分析存放在本地的cookie进行cookie诈骗
    考虑安全性的话用session
  3. session会保存在服务器上一段时间， 访问过多时，影响性能，
    考虑性能方面用cookie
    
  4. cookie大小不超过4k， cookie的保存数量也有限制,最多保存20个cookie

# 讲讲304
  304： 如果客户端发送一个带条件的GET请求且该请求已被允许， 而文档的内容(自上次访问以来或根据请求条件)并没有改变， 则服务器返回304状态码

# 前端优化
  降低请求量： 合并资源， 减少HTTOP请求数， minify/gzip压缩， webP， lazyload
  加快请求速度： 预解析DNS， 减少域名数， 并行加载， CDN分发
  缓存： HTTP协议缓存请求， 离线缓存manifest， 离线数据缓存localStorage
  渲染：JS/CSS优化， 加载顺序， 服务器渲染， pipeline（可重复使用）

# get和post的区别
  get参数通过url传递， post放在request body中
  get的url有长度限制， post没有
  安全性 get暴露参数， 不能传递敏感信息
  get请求只支持url编码， post支持多种编码方式
  get请求浏览器会主动缓存
  get的参数会被保留， post不会
  get产生一个TCP数据包， post产生两个TCP数据包

# 301和302的区别
301是永久重定向，而302是临时重定向。
301比较常用的场景是使用域名跳转。302用来做临时跳转 比如未登陆的用户访问用户中心重定向到登录页面。

# 状态码304和 200
  200： 请求成功， 请求所希望的响应头或数据体将随此响应返回。即返回的数据为全量数据
  304：如果客户端发送一个带条件的GET请求且该请求已被允许， 而文档的内容并没有改变，则服务器返回这个状态码。

# 说下浏览器缓存
  缓存分为两种： 强缓存和协商缓存： 根据响应的header内容来决定

# html5新增的元素
  为了更好的实践web语义话， 增加了header， footer， nav， aside， section等语义化标签。在表单方面， 为input增加了 emial， data， range等类型。存储方面提供了sessionStorage， localStorage和离线存储（Application Cache）

# http2.0 的特性
  1. 内容安全， 应为http2.0是基于https的， 天然具有安全性， 通过http2.0的特性可以避免单纯使用https的性能下降
  2. 二进制格式： http1.x 的解析是基于文本的， http2.0将所有的传输信息分割成更小的消息和帧， 并对它们采用二进制编码。
  3. 多路复用， 这个功能相当于长连接的增强

# 什么是长连接？
  在HTTP/1.0中默认使用短连接。也就是说，客户端和服务器每进行一次HTTP操作，就建立一次连接，任务结束就中断连接。
  http1.1规定了默认保持长连接（http persistent connection， 也叫持久连接），数据传输完成保持tcp连接不断开（不发RST包， 不四次握手） ，等待同等域名下继续用这个通道传输数据。

# TCP的kepp alive 和http的keep alive
TCP的keep alive是检查当前TCP连接是否活着， http的keep-alive是要让一个tcp连接点活久点。
TCP的keep alive的表现：
  当一个连接 “一段时间”没有数据通讯时， 一方会发出一个心跳包(keep alive 包)，如果对方有包则表明当前连接有效，继续监控。 
  这里的 一段时间 是可以设置的 

# csrf 和 xss的网络攻击及防范
  CSRF： 跨站请求伪造， 可以理解为攻击者盗用了用户的身份, 以用户身份发起的恶意请求。
  防御方式的话：使用验证码，检查https头部的refer，使用token 利用 Cookie 的 SameSite 属性、验证来源站点和CSRF Token

  XSS： 跨站脚本攻击，是说攻击者通过注入恶意的脚本， 在用户浏览网页时进行攻击。
  防御的话为cookie设置httpOnly属性，对用户的输入进行检查，进行特殊字符过滤

# 怎么看网站的性能如何
  1. 被动去测： 在检测的页面置入脚本或探针，当用户访问时，探针自动采集数据并传回数据库进行分析
  2. 主动监测：主动的搭建分布式受控环境，模拟页面发起请求。主动采集数据进行分析
  3. 第三方工具： 如性能极客

# http协议的特征
  1. http协议支持客户端/服务端模式
  2. 简单快速： 客户端向服务端请求服务时，只需要传送请求方式和路径， 请求方式常用的有GET，POST，PUT，DELETE。
  3. 灵活：http协议允许传输任意类型的数据对象， 不同的传输有content-Type 加以标记
  4. 无连接： 每次连接只处理一个请求。服务端处理完客户端的请求并受到客户的应答后， 即端开连接， 采用这种方式可以节省时间。

# 从输入url到页面渲染发生了什么?
  1. 寻址 浏览器找到当前的URl
  2. DNS域名解析
  3. tcp 连接
  4. 发送http请求
  5. 服务处理请求并返回http报文
  6. 浏览器解析渲染页面
  7. 连接结束

- 同源策略是一个重要的安全策略，它用于限制一个origin的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。


# visibility = hidden opacity = 0    display = none
  opacity = 0把元素隐藏起来了，不会改变页面布局， 事件也能触发 
  visibility = hidden 把元素隐藏起来了，不会改变页面布局， 事件不能触发 
  display = none 元素不存在页面，改变页面布局，会引起回流和重塑 

# 知道属性选择器和伪类选择器的优先级吗
  优先级相同

# inline-block inline block 的区别， 为什么img是inline还可以设置宽高
  block: 块级元素， 前后都有换行符， 能设置宽高， margin/padding水平垂直都有效
  inline： 行内元素， width height无效， margin在垂直方向无效(top bottom)， padding在水平垂直方向都有效， 前后无换行符
  inline-block：能设置宽度高度，margin/padding水平垂直方向 都有效，前后无换行符

  img 置换元素 。
  这些元素拥有内在尺寸 内置宽高 他们可以设置width/height属性。他们的性质同设置了display:inline-block
  的元素一致。

# overflow的原理
  当元素设置了overflow样式且值不为visible时， 该元素就创建了一个BFC， BFC的计算高度时，内部浮动元素也要计算在内， 也就是说即使BFC区域只有一个浮动元素，BFC的高度也不会塌陷，达到清除浮动的效果.

# css预处理器有什么
less sass 等

# 如何让事件先冒泡后捕获
  在DOM标准的事件模型中， 实现捕获后冒泡。 但是如果要实现先冒泡后捕获的效果。对于同一个事件，监听捕获和冒泡， 分别对象相应的处理函数， 监听到捕获事件，先暂缓执行， 直到冒泡事件被捕获后再执行捕获事件.

# js的各种位置，比如clientHeight， scrollHeight， offsetHeight， 以及scrollTop， offsetTop， clientTop的区别？
  clientHeight： 表示可视区域的高度， 不包含border和滚动条
  offsetHeight：表示可视区域的高度， 包含border和滚动条
  scrollHeight: 表示所有区域的高度， 包含因滚动隐藏的部分
  clientTop：表示边框border的厚度， 在未指定的情况下一般为0
  scrollTop：滚动后被隐藏的高度， 获取对象相对于offsetParent属性指定的父座标（css定位的元素或body元素）距离顶端的高度

# Ajax解决浏览器缓存问题
  在ajax发送请求前加上 anyAjaxObj.setRequestHeader("if-Modified", "0")

  在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control", "no-cache")

  在URL后面加上一个随机数："fresh="+ Math.random()

  在URL后面加上时间差： "nowtime="+ new Date().getTime()

  使用jQuery， 直接可以 $.ajaxSetup({cache: false}) 这样页面的所有ajax都或执行这条语句就是不需要保存缓存记录

# eval是做什么的
  它的功能是将对应的字符串解析成js并执行， 应该避免使用js， 因为非常消耗性能（2次， 一次解析成js， 一次执行）

# js的语言特性
  运行在客户端浏览器上
  不用预编译， 直接解析执行代码
  是弱类型语言，较为灵活
  与操作系统无关， 跨平台语言
  脚本语言， 解释型语言