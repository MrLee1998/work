import apiLogin from './interface/login'
import apiRegister from './interface/register'

const install = Vue => {   // vue 中 use 方法 只能识别installl 
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin,
          apiRegister
        )
      }
    }
  })
}

export default install