const Koa = require('koa')
const app = new Koa()
const main = (ctx) => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello word<data>'
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<data>Hello word<data>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = '{data:Hello word}'
    } else {
        ctx.response.type = 'text'
        ctx.response.body = 'hello word'
    }


}
app.use(main)
app.listen(8080, () => {
    console.log('项目启动成功');
})