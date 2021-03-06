const Koa = require('./app/application')

const app = new Koa()

app.use((ctx) => {
  console.log(ctx.req.url);
  console.log(ctx.url);
  console.log(ctx.request.url);
  console.log(ctx.path); // ctx会代理ctx.request上的属性
  ctx.body = 'hello'
  console.log(ctx.body);
})

console.log('connect 8081');
app.listen(8081)