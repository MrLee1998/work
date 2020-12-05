<template>
  <div>
    <div class="shop-cart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight': totalCount > 0}">
              <div class="icon-shopping_cart"></div>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight': totalCount > 0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass" @click.stop="pay">{{payDsc}}</div>
        </div>
      </div>
      <!-- 列表 -->
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="(item, index) in selecteFoods" :key="index">
                <span class="name">{{item.name}}</span>
                <div class="price">
                  <span>¥{{item.price * item.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                    <Cartcontrol :food="item"></Cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Cartcontrol from '../../components/cart-control/Cart-control.vue'
import { getGoods } from '@/api'
import BScroll from 'better-scroll'
export default {
  components: {
    Cartcontrol
  },
  props: {
    selecteFoods: {
      type: Array,
      default() {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data() {
    return{
      fold: false
    }
  },
  computed: {
    totalCount() {
      let count = 0
      this.selecteFoods.forEach( (food) => {
        count += food.count
      })
      return count
    },
    totalPrice() {
      let totalPrice = 0;
      this.selecteFoods.forEach( (food) => {
        totalPrice += food.count * food.price
      })
      return totalPrice
    },
    payDsc() {
      if (this.totalPrice === 0) {
        return `${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice){
        return  `还差${this.minPrice - this.totalPrice}元起送`
      } else {
        // return `支付${this.totalPrice + this.deliveryPrice}元`
        return '去支付'
      }
    },
    payClass() {
      if(this.totalPrice < this.minPrice){
        return 'not-enough'
      } else {
        return 'enough'
      }
    },
    listShow() {
      if (!this.totalCount) {
        this.fold = true
        return false
      }
      let show = !this.fold
      if (show) {
        this.$nextTick( () =>{
          if( !this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
      return show
    }
  },
  methods : {
    toggleList() {
      if (this.selecteFoods.length == 0) return
      this.fold = !this.fold 
    },
    empty() {
      this.fold = false
      this.selecteFoods.forEach( food => {
        food.count = 0
      })
    },
    pay() {
      if(this.totalPrice > 0){
        console.log(11);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
.shop-cart 
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height: 48px;
  .content
    display flex 
    background-color $color-background
    color $color-light-grey
    &-left 
      flex 1
      .logo-wrapper   
        display inline-block 
        vertical-align middle
        position: relative;
        top -10px
        padding: 6px;
        width: 56px;
        height: 56px;
        border-radius 50%
        background: #141d27;
        box-sizing border-box
        margin: 0 12px
        .logo 
          width: 100%;
          height: 100%;
          background $color-dark-grey
          border-radius 50%
          text-align: center;
          // line-height 44px
          &.highlight
            background $color-blue
          .icon-shopping_cart
            line-height  44px
            font-size $fontsize-large-xxx
            color #80858a 
            &.highlight
              color $color-white
        .num
          position absolute
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height 16px
          text-align: center;
          border-radius: 16px;
          font-size $fontsize-small-s
          font-weight: bold;
          color $color-white  
          background: $color-red;
      .price  
        line-height 48px
        display inline-block    
        line-height: 24px;
        padding-right: 12px;  
        border-right 1px solid rgba(255, 255, 255, 0.1)
        font-size $fontsize-large
        font-weight 700
        &.highlight
          color $color-white
      .desc
        line-height 48px
        display inline-block 
        line-height 24px   
        font-size $fontsize-small-s
    .content-right 
      flex 0 0 105px
      width: 105px;
      .pay
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-weight 700
        font-size $fontsize-small
        &.not-enough
          background: #2b333b;
        &.enough 
          background $color-green
          color $color-white
  .shopcart-list
    position absolute
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    transform translate3d(0, -100%, 0)
    &.fold-enter-active, &.fold-leave-active
      transition all 0.5s
    &.fold-enter, &.fold-leave-to
      transform translate3d(0, 0, 0)
    .list-header
      display flex
      justify-content space-between
      padding: 0 18px;
      height: 40px;
      line-height: 40px;
      align-items center
      border-bottom: 1px solid $color-background-sss;
      background $color-background-ssss
      .title
        font-size $fontsize-medium
        color $color-background
      .empty
        font-size $fontsize-small
        color $color-blue
    .list-content
      padding 0 18px
      max-height 217px
      overflow hidden
      background #fff
      .food
        position relative
        padding 12px 0
        box-sizing border-box
        .name
          line-height 24px
          font-size 14px
          color rgb(7, 17, 27)
        .price
          position absolute
          right 90px
          bottom 12px
          line-height 24px
          font-size 14px
          font-weight 700
          color rgb(240, 20, 20)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 6px
</style>