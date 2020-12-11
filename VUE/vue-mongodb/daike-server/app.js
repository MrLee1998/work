const koa = require('koa')  // node 执行  规范引用 require
const app = new koa()
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose')
const config = require('./config')
// 建立mongdb的连接
mongoose.connect(config.db,{
  useNewUrlParser: true
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
}, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log('connecting database successfully');
  }
})


app.use(cors())  // 解决跨域
app.use(bodyParser())  // 帮助koa解析
const user_router = require('./routes/api/user_router')
app.use(user_router.routes())


app.listen(3000)