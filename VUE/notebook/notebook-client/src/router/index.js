import Vue from 'vue'
import VueRouter from 'vue-router'
import StarLogin from '@/views/login/StarLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/StarLogin',
    name: 'StarLogin',
    component: StarLogin,
    meta: {
      istoken: true,
      title: '登录'
    }
  },
  {
    path: '/starRegister',
    name: 'starRegister',
    component: ()=> import('@/views/register/index'),
    meta: {
      istoken: true,
      title: '注册'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
