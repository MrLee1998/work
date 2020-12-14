const router = require('koa-router')();  //自执行 实例化
const controller = require('../controller/c-signin.js')

router.post('/signin', (ctx) =>{
  ctx.body = controller.postSign
})

module.exports = router