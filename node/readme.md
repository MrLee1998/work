# node
    简单的说 Node.js 就是运行在服务端的 JavaScript。

    Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

    Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
    
    非阻塞式的I/O流模型

# commonJS  ESCMScript

# npm

# node.js 内置模块

# 非阻塞式的IO模块
    
# RPC Remote Procedure Call (远程程序调用)

和Ajax 有什么相同点？
1. 都是两个计算级之间的通信 Ajax 是浏览器和服务器通信，RPC 是服务器和服务器通信
2. 都需要双方约定数据格式

<!-- DNS寻址就是 将 url 解析成 IP地址 -->

和Ajax 有什么不同点?  
1. 不一定使用DNS做寻址服务 ajax一定会使用DNS做寻址服务
2. 应用层协议一般不使用HTTP
3. 基于TCP或UDP协议

<!-- 负载均衡其意思就是分摊到多个操作单元上进行执行，例如Web服务器、FTP服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务 -->
- 寻址/负载均衡
  Ajax： 使用DNS进行寻址
  RPC: 使用特有服务进行寻址


- TCP 通信方式
  Ajax: 单工通信
  RPC: 多种形式 （半双工通信 ， 全双工通信）

- 二进制协议
  Ajax： HTTP(html, json)
  RPC: 二进制协议 (更小的数据包体积， 更快的编码速率)


# RPC 调用Buffer 编码解码二进制数据包 

00 00 00   00 0000  0000 
write(x, 0) write(x, 3) write(x, 5)

protocol buffer 二进制编码库


# RPC 调用： net建立多路复用的RCP通道
  