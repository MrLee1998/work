import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import Cart from '@/pages/Cart.vue'
import Admin from '@/pages/Admin.vue'
import Index from '@/pages/admin/index.vue'
import New from '@/pages/admin/new.vue'

Vue.use(VueRouter)

export default  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/index',
          component: Index
        },
        {
          path: '/new',
          component: New
        }
      ]
    }
  ]
})