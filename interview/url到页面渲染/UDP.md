# 传输层： UDP TCP

# UDP 协议
UDP协议是面向无对象的，也就是说不需要在正式传递数据之前就连接双方
UPD 只负责数据包的搬运， 不保证数据包的有序和丢失
  - 面向无对象
    不需要三次握手
  报文： 数据包

发送端： 应用层 （浏览器）---》 传输层（UDP） --》 网络层
接收端： 网络层 --》 传输层

  - 不可靠性
    1. 无连接
    2. 不解析数据（只负责搬运）
    3. 没用拥塞控制

  - 高效
     1. 不需要保证数据不会丢失且有序
     2. 头部开销效 只有八字节 而 TCP 至少二是字节
  
  - 传输方式
    1. 一对一
    2. 一对多
    3. 多对多
    4. 多对一


# TCP协议
  要建立连接， 传输过程有各种算法保证数据的可靠性， 没有UDP高效

  - 三次握手
    1. 客户端向服务端发送连接请求 SYN
    2. 服务端向客户端发送请求应答
    3. 客户端接收到应答后，向服务端发送发送确认报文 （确认建立连接）

# 为什么TCP建立连接需要三次连接？ 命名两次就建立了连接
如果两次握手就建立连接：

  客户端发送连接请求A， 因为网络问题没有到达服务端， 那么TCP会启动超时重
  穿机制， 从新发送一个连接请求B， 当B顺利到达服务器后， 建立连接， 
  当数据传输完后连接断开， 这时候A才来到了服务端， 服务端就会认为客户端
  又想建立连接， 于是服务端给予响应， 但此时客户端已经关闭， 服务端会一
  直等待， 造成资源浪费

- 四次挥手
  1. 客户端像服务端发送连接释放请求
  2. 服务端收到释放请求， 会告诉应用层要释放TCP连接了， 就会发送ACK包
  并进入CLOSE_wait在状态 （客户端不能向服务端发送数据了， 但是服务端
  可以向客户端发送数据）
  3. 如果数据没有传输完， 服务端继续把这最后一次传完到客户端
  4. 客户端接收到最后一次数据后向服务器发起确认断开请求， 2ms后如果
  没有的到应答， 就自动断开请求 