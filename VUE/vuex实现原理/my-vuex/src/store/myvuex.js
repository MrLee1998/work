let Vue;

class Store {
  constructor(options) {
    // this.state = options.state || {}
    this.vm = new Vue({
      data: {
        state: options.state
      }
    })

    // getters
    let getters = options.getters || {}
    this.getters = {}
    // 拿到options.getters 里所有的key
    // 把所有的函数都添加到this.getters
    // 当取用某个函数时候，可以之后那函数名出来用， 不用打()  get方法直接去函数执行后的结果
    Object.keys(getters).forEach( gettersName => { 
      Object.defineProperty(this.getters, gettersName, {
        get: () => {
          return getters[gettersName](this.state)
        }
      })
    })

    // mutations
    let mutations = options.mutations || {}
    this.mutations = {}
    Object.keys(mutations).forEach( mutationsName => {
      this.mutations[mutationsName] = (arg) => {
        mutations[mutationsName](this.state, arg)
      }
    })
    // actions
    let actions = options.actions || {}
    this.actions = {}
    Object.keys(actions).forEach( actionsName => {
      this.actions[actionsName] = (arg) => {
        actions[actionsName](this, arg) // 
      }
    })

    this.commit = (method, arg) => {
      this.mutations[method](arg)
    }
  }
  get state() {
    return this.vm.state
  }
  // commit(method, arg)  {
  //   this.mutations[method](arg)
  // }
  dispatch(method, arg) {
    this.actions[method](arg)
  }
}
let install = function(vue) {
  Vue = vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}

let Vuex = {
  Store,
  install
}

export default Vuex