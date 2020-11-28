import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.mixin({
  beforeUpdate () {
    console.log('啦啦啦啦啦????')
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
