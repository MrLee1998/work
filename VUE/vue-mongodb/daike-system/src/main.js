import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '../axios/index.js'

Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
