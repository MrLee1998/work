const Koa = require('koa')

const app = new Koa()

//  kao 可以使用async await
let log = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('pk');
      resolve()
    },1000)
  })
}
app.use(async (ctx, next) => {
  console.log(5);
  // ctx.body = 'koa'
  // await log()
  await next()
  console.log(6);
})

app.use(async (ctx, next) => {
  console.log(1);
  // ctx.body = 'koa'
  await log()
  await next()
  console.log(2);
})

app.use((ctx, next) => {
  // ctx.body = 'koa'
  console.log(3);
  next()
  console.log(4);
})

app.listen(8081)