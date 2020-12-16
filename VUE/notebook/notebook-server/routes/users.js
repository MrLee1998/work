const router = require('koa-router')()
const userServices = require('../controllers/mySqlConfig.js')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

//注册
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _nickname = ctx.request.body.nickname;
  // console.log(_username, _userpwd, _nickname);
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: 8001,
      mess: '用户名密码和昵称不能为空!'
    }
  }
  await userServices.findUser(_username).then(async (res) => {
    // console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80003',
        mess: '用户名已存在'
      }
    } else {
      await userServices.insertUser([_username, _userpwd, _nickname]).then(res => {
        // console.log(res);
        let r = ''
        if (res.affectedRows != 0) {
          r = 'ok'
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册成功'
          }
        } else {
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }
  })
})

//登录
router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  console.log(_username, _userpwd);
  // 把参数拿到数据库里查询
  await userServices.userLogin(_username, _userpwd).then((res) => {
    // console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '80000',
        data: result,
        mess: '登陆成功'
      }
    }
    else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }

    }
  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

// 查找文章内容
router.post('/findNodeListByType', async (ctx, next) => {
  let _note = ctx.request.body.note_type
  await userServices.findNoteListByType(_note).then((res) => {
    // console.log(res);
    let r = ''
    if (res.length) {
      r = 'ok'
      let result = res
      ctx.body = {
        code: '80000',
        data: result,
        mess: '查找成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
})

// 根据id 查找文章详情
router.post('/findNodeDetailById', async (ctx, next) => {
  let _id = ctx.request.body.id
  await userServices.findNoteDetailById(_id).then(res => {
    // console.log(res);
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: '查找成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
})

// 发布笔记
router.post('/insertNote', async (ctx, next) => {
  let note_content = ctx.request.body.note_content;
  let head_img = ctx.request.body.head_img;
  let title = ctx.request.body.title;
  let note_type = ctx.request.body.note_type;
  let userId = ctx.request.body.userId;
  let nickname = ctx.request.body.nickname;
  let c_time = ctx.request.body.c_time
  // let noteArr = [note_content, head_img, title, note_type, userId, nickname];
  // console.log(noteArr);
  await userServices.insertNoteContent([note_content, head_img, title, note_type, userId, nickname,c_time]).then(res => {
    if (res.affectedRows != 0) {
      ctx.body = {
        code: '80000',
        data: res,
        mess: '发布成功'
      }
    }
    else {
      ctx.body = {
        code: '80004',
        mess: '发布失败'
      }
    }
  })
})
module.exports = router
