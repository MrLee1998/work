//  客户端 ===》 DNS ===》 代理服务器 目标服务器 

// Proxy

const proxy = new Proxy(obj, handler)

const persent = {
  type: '巧克力'
}
// 未知女生

const girl = {
  name: 'nancy',
  aboutMe: '.....',
  age: 22,
  career: 'teacher',
  fakeAvatar: 'xxxx',
  avatar: 'xxx',
  phone: 1231241,
  persents: [],
  bottomValue: 50,
  lastPersent: persent
}

//  普通信息
const baseInfo = ['age', 'career']

//  私密信息
const privateInfo = ['avatar', 'phone']

// mark
const user = {
  // ...
  isValidated: true,
  isVip: false
}

const lmLovers = new Proxy(girl, {
  get: function(girl, key) {
    if(baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      alert('您还没有完成认证哦')
      return
    } 

    // 校验

    if(user.isValidated && privateInfo.indexOf(key) && !user.isVip) {
      alert('只有vip才能查看信息')
      return
    }
  },
  set: function(girl, key, val) {
    if(key === 'lastPersent') {
      if(val.value < girl.bottomValue) {
        alert('sorry 您的礼物被拒收了')
      } 
      girl.lastPersent   = val
      girl.persents = [...girl.persents, val]
    }
  }
})