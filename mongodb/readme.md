存储服务

www web 服务 3000
mongodb 27017
mysql 3306

全栈
:8080 vue  前端 npm run serve
webpack webpack-dev-server
vue-router

:3000 后端 node + go
:27017 数据库服务
MVC Model view control  

1. 启动mongodb 进程
  mongod --dbpath "D:\tools\mongDB\MongDB\Server\4.4\data\db"
  NOSQL  非关系型数据库    /test/a.bsons  
  关系型数据库
  mongo 数据库交互命令行

## mongo 的交互语句
  - show dbs
  - use tutorial

    前端非常友好
    给个 json 直接存储 没有太严格的关系定义  字段可有可无 没那么严格
    物联网时代以及碎片块化信息的收集
  - db.users.insert({})
  - mysql table -> mongodb
  colletion 数据集   
  - find 
    $and 
    ObjectId("")
  # https://www.cnblogs.com/mao2080/p/9570909.html
  - update
  - explain("executionStats")  性能查询

  - 索引
    mysql 关系型数据库 ， mongodb NOSQL
    都有学习 ， 对js特别友好 ， json存储就可以
    索引进行过学习
    nums 2000 条json  num:i
    num:500 
    创建唯一索引， 保证数据库表的唯一性

  - 数据怎么进入数据库
    - 先连接
     mongodb url once('open')
    - 对数据库建模
      userSchema 字段名 + 类型
      mongoose.model('User', userSchema)
      new User.Save()


