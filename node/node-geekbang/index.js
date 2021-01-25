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
  mount('/', async(ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
  })
)

app.listen(3000)