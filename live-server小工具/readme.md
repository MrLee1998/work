http: 超文本传输协议,   协议 固定的格式

 输入url -> 看到页面

 GET www.baidu.com HTTP/1.1
 user-agent: XXX IE/chrome

上面的格式 放到 传输层（TCP ,http基于TCP ,另外一个叫UDP) 去
拿到响应
TCP/IP 
    应用层
    IP层
    传输层
    网络接口层

HTTP/1.1 200 OK
content-type: text/html
key: value

<doctype html>
<html>
<body>
    百度一下
</body>
</html>


# 静态资源服务


块级 
- 独占一行
- 能设置宽高
行内
- 水平方向都在一行上面
- 垂直方向： 以当前行的 base-line对齐
- 都在一行
- 非置换元素不能设置宽高
- 行内置换元素是可以设置宽高的

img -> 行内 -> 可以设置宽高

置换元素
内部内容不受css控制
<img src=""/>
<iframe src=""/>
<script src=""/>
<input />
<canvas />  有默认宽高 300*150

非置换元素
<div></div>
<span></span>


BFC : 会级格式上下文