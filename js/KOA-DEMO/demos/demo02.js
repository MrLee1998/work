const Koa = require('koa')
const app = new Koa()
const main = (ctx) => {
    ctx.response.body = 'hello word'
}
app.use(main)
app.listen(3001, () => {
    console.log('项目启动成功');
})