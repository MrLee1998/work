const Koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')
const fs = require('fs')

const app = new Koa()

// 静态资源
app.use(
  static(__dirname + '/source/')
)

app.use(
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
  })
)

// node服务像后端服务器做RPC通信拿到真实数据
// 模板引擎放上真实数据之后
// 根据浏览器请求的渎职， 去返回对应的模板引擎

app.listen(3000)


