import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible' //  lib-flexible会根据屏幕自动生成相对于的meta标签
import './common/style/base.less'
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
// 过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if(url && url.startsWith('http')) {
      return url
    } else {
      url = `http://47.99.134.126:28019${url}`
      return url
    }
  }
}

app.use(store).use(router).use(Vant).mount('#app')
