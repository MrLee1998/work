<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { getSeller } from '@/api'
import qs from 'query-string'
export default {
  components: {
    Header
  },
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  methods: {

  },
  created() {
    getSeller({
      id: this.seller.id
    }).then( (seller) => {
      console.log(seller);
      this.seller = Object.assign({}, this.seller, seller)
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/variable.styl';
@import './common/stylus/mixin.styl';
.tab 
  width 100%
  height 36px
  display flex
  text-align center
  line-height 36px
  .tab-wrapper 
    flex 1
    a
      display inline-block
      width 100%
      text-decoration none
      color #666
    .router-link-exact-active
      color $color-red
      border-bottom 2px solid $color-red
</style>