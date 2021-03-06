//  koa 核心非常小 中间件 http 服务封装req， res ，ctx

//  Koa 是一个类
const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello koa'
})

console.log('connect 8081');
app.listen(8081)