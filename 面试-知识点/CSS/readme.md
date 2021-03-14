# 盒模型
  标准盒模型宽度：width 
  IE盒子模型宽度：width + pading + border

# 换一条0.5px的线
  scale() 缩放
  border-image
  liner-gradient

# link标签和import标签的区别
  link标签是html标签 @import是css提供的
  link会在页面加载的时候引入 @import引入会在页面加载完后再加载
  link没有兼容性 @import必须IE5以上
  link的权重高于@import

# transition 和 animation 的区别
  transition 需要触发一个事件 animation  不需要
  transition 是2帧2帧的运行， from to
  animation 1帧1帧的运行

# flex布局
  传统布局 = 依赖dispalay + position + float ,这种在特殊布局中非常不方便 比如垂直居中
  flex-direction： 决定主轴方向 row  cloumn
  flex-wrap 换行规则  nowrap wrap
  align-items:center;/*垂直居中*/
  justify-content: center;/*水平居中*/
# BFC 块级格式化上下文
 块级格式上下文， 是一个独立的渲染区域， 有一定布局规则
 BFC 区域不会与flaot box重叠
 BFC 是页面上的一个的独立容器， 子元素不会影响外面
 计算BFC 区域高度， 浮动元素的高度也会参加计算

 怎么生成BFC
  float 不为 none
  postion 不为 static 和 relative
  display 为inline-block, flex , table-cell,table-caption inline-flex
  overflow不为visible

  作用
  1. 利用BFC避免margin重叠。
# 垂直居中
  position
  flex 
  margin (知道父容器的高度)
  table-cell (父) vertical-aligin : middle （子）
  
# js动画和css动画的区别
  渲染线程分为 main thread 和 compositor thread 

  如果css动画只改变transform 和 opacity, 这时css动画得以在compositor thread 完成
  而js动画一定会在main thread里执行

  区别
    js 比 css 大
    css比js更简单 性能会更好
    对帧表现不好的低版本浏览器 css3可以做到自然降级
    css动画有天然的事件支持
    css3有兼容性问题
# 块级元素 行内元素
  块级元素独占一行 并且自动填满父元素， 可以设置margin padding width height
  行内元素 不能独占一行 width height会失效 并且[垂直]方向的padding 和 margin会失效 

# 多行文本的省略号
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

# 清除浮动
  1. 使用带clear属性的空元素
  2. overflow BFC原理
  3. 给浮动的元素的父元素添加浮动
  4. css的 :after 伪元素

# css3的新特性
  border-radius
  transition .....

# css选择器有哪些？ 优先级
  id选择器 类选择器 标签选择器 伪元素选择器 伪类选择器 属性选择器
  important 》 内联样式 》 内部样式 》 外部样式 》 浏览器用户自定义 》 浏览器默认样式

# float的元素 display

# 三栏布局
  圣杯 双飞翼

  - 三列布局
    1. flex
    2. display: table
    3. diplay: grid
  
  # display: table 和 table本身有什么区别
    display: table 声明能够让html元素和它的子节点像table元素一样使用
    但是大小占用会比table小 div + css 是逐行显示， table是页面完全加载后才显示


  # 设置一个元素的背景色， 背景色会填充哪些区域
    content + border + padding
  
  # inline-block, inline 和 block的区别  为什么img是inline还可以设置宽高

  置换元素 。
  这些元素拥有内在尺寸 内置宽高 他们可以设置width/height属性。他们的性质同设置了display:inline-block
  的元素一致。

  # 重绘 和 回流 （重排）
  

  # css 画三角形


 # css 布局种类
  圣杯布局 双飞翼布局 flex布局 网格布局  栅格布局 