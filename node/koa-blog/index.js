const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const config = require('./config/default.js')
const session = require('koa-session-minimal') // 数据库操作
const MysqlStore = require('koa-mysql-session') //  数据库操作
const staticCache = require('koa-static-cache') // 配置静态资源
const views = require('koa-views')
const app = new Koa()


// app.use( (ctx) => {
//   ctx.body = 'hello MrLee'
// })

// session 存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
}
// 配置session 中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig),
}))   

// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// 配置服务器的模板引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))



app.use(bodyParser({
  formLimit: '1mb'
}))

app.use(require('./routers/signin.js').routes()) // 减少命名步骤
app.use(require('./routers/signup.js').routes()) // 减少命名步骤

app.listen(config.port, () => {
  console.log('3000端口已启动');
})

