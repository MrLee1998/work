function app() {}
app.middlewares = []
app.use = function(callback) {
  app.middlewares.push(callback)
}

app.use((ctx, next) => {
  console.log(1);
  // ctx.body = 'koa'
  next()
  console.log(2);
})

app.use((ctx, next) => {
  // ctx.body = 'koa'
  console.log(3);
  next()
  console.log(4);
})

function dispatch(index) {
  //  先取出读一个中间件 ， 让其执行 将索引递增
  //  调用next就是下一个中间件继续执行
  if(index === app.middlewares.length) return
  let middleware = app.middlewares[index]
  middleware({}, () => dispatch(index + 1))
}
dispatch(0)