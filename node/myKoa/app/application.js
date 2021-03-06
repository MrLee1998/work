const http = require('http')
const context = require('./context')
const request = require('./request')
const responce = require('./responce')
class Koa {
  constructor() {
    this.callbackFn
    this.middleWares = []
    this.context = context
    this.request = request
    this.responce = responce
  }

  use(cb) {
    this.middleWares.push(cb)
  }

  createContext(req, res) {
    // 深拷贝
    let ctx = Object.create(this.context) // ctx可以拿到context， 但是不修改context
    ctx.request = Object.create(this.request) // ctx可以拿到context， 但是不修改context
    ctx.responce = Object.create(this.responce) // ctx可以拿到context， 但是不修改context
    // ctx.request = request
    // ctx.responce = responce
    ctx.res = ctx.responce.res = res
    ctx.req = ctx.request.req = req
    return ctx // 返回上下文对象
  }

  compose(ctx, middleWares) {
    function dispatch(index) {
      if(index === middleWares.length) return Promise.resolve()
      let middleware = middleWares[index]
      return Promise.resolve(middleware(ctx, () => dispatch(index + 1)))
    }
    return dispatch(0)
  }

  handleRequest(req, res) {
    // console.log(this);
    res.statusCode = 404
    let ctx = this.createContext(req, res)
    // this.callbackFn(ctx)
    let composeMiddleWares = this.compose(ctx, this.middleWares)
    //  当promise都执行完后， 再去res.end()
    composeMiddleWares.then(() => {
      let body = ctx.body
      if (typeof body === 'undefined') {
        res.end('not found')
      } else if (typeof body === 'string') {
        res.end(body)
      }
    })
  }

  listen() {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...arguments)
  }
}

module.exports = Koa