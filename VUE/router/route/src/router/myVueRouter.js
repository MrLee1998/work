let Vue = null;

class HistoryRoute {
  constructor() {
    this.current = null
  }
}
class VueRouter {
  constructor(options) {
    this.mode =  options.mode || 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)

    this.history = new HistoryRoute() // 当前路由状态
    this.init()
  }
  // 初始化
  init() {
    if(this.mode === 'hash') {
      location.hash ? '' : location.hash = '/';
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load',() => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component
      return pre
    },{})
  }
}
VueRouter.install = function(v) {
  Vue = v;
  Vue.mixin({
    beforeCreate() {
      if(this.$options && this.$options.router) { // 如果是跟组件 
        this._root = this;
        this._router = this.$options.router;
        Vue.util.defineReactive(this, 'xx', this._router.history)
      } else { // 如果是子组件
        this._root = this.$parent && this.$parent._root;
      }
      Object.defineProperty(this, '$router', {
        get() {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get() {
          return this._root._router.history.current
        }
      })
    }
  })
  Vue.component('router-link',{
    props: {
      to: String
    },
    render(h) {
      let mode = this._self._root._router.mode;
      let to = mode === 'hash' ? '#' + this.to : this.to
      return h('a', {attrs: {href: to}}, this.$slots.default)
    }
  })
  Vue.component('router-view',{
    render(h) {
      let current = this._self._root._router.history.current;
      let routeMap = this._self._root._router.routesMap
      return h(routeMap[current])
    }
  })
}

export default VueRouter

// class Vue {
//   constructor() {
//     _installedPlugins: ''
//   }
// }

 // use 内部逻辑功能实现 
// Vue.use = function(plugin) {
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
//   if(installedPlugins.indexOf(plugin) > -1) {
//     return this
//   }
//   const args = toArray(arguments, 1) 
//   args.unshift(this) 
//   if(typeof plugin.install === 'function') {
//     plugin.install.apply(plugin, args) // plugun 为一个对象
//   } else if(typeof plugin === 'function') {
//     plugin.apply(null, plugin, args) // plugin 为一个函数  所以不能使用  用null置空
//   }
//   _installedPlugins.push(plugin)
//   return this
// }