# 全栈目录结构
  - 前台 vue
    - 用户端
    - 管理后台 react + antd
  - API后端 服务器端 node + java

  vue create ---frontend 前端
  8080
  express ---backend 后端 3000
  mongodb 27017

  前端 生命周期 mounted
  axios
  -> API 向后端通信
  http://localhost:8080 -> 3000 跨域
  
  - 后端接口线先调通
    localhost:3000/users/lizun
    {
      name: 'lziun'
      sex: '男'
    }
    ^/api/v1/users/:lizun
    1. url 响应 /api/
    加路由 /api/v1
    app.use(启动路由)
    2. 返回json
    3. postman 模拟请求
    4. 前端请求
    5. 跨域 不只是域名  端口和协议不一样都算跨域
    6. App.all 后端配置解决的

  - 基于mongodb 数据流 -》 MVC node(express)
  -> Vue 界面
    1. model 层的构建 
       这是个精简版的model层 
       index.js  所有的模型定义
       mongoose.Schema 根据数据库结构定义
       生成类
    2. postman 测试数据
      - 路由