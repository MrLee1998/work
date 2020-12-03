import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/goods.vue'
// import Comment from '@/views/comment/comment.vue'
// import Seller from '@/views/sellers/seller.vue'
Vue.use(VueRouter)

const routes = [
]

const router = new VueRouter({
  
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/comment',
      name: 'comment',
      // component: Comment
      component: () => import ('@/views/comment/comment.vue')
    },
    {
      path: '/seller',
      name: 'seller',
      // component: Seller
      component: () => import ('@/views/sellers/seller.vue')
    }
  ]
  
})

export default router
