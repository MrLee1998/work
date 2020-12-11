const Router = require('koa-router')
const router = new Router()
const login = require('../../app/controllers/user_controller')

router.post('/login', login)
  // 拿到前端传来的数据  到数据库中匹配 是否存在

module.exports = router