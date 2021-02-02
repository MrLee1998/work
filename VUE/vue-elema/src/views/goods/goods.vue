<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuwrapper">
        <ul>
          <li class="menu-item" 
          v-for="(item,index) in goods" :key="index" 
          @click="selectMenu(index)" :class="{'current' : currentIndex === index}">
            <span class="text">
              <SupportIco v-if="item.type>0" :size=3 :type="item.type"></SupportIco>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodswrapper">
        <ul>
          <li class="food-list" v-for="(item,index) in goods" :key="index" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for="(food,index) in item.foods" :key="index">
                <div class="icon">
                  <img :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span class="">好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <!-- + -->
                  <div class="cartcontrol-wrapper">
                    <Cartcontrol :food="food"></Cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 购物车 -->
    <Shopcart :selecteFoods="selecteFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></Shopcart>
  </div>
</template>

<script> 
import { getGoods } from '@/api'
import BScroll from 'better-scroll'
import SupportIco from '@/components/support-ico/support-ico.vue'
import Shopcart from '@/components/shop-cart/Shop-cart.vue'
import Cartcontrol from '@/components/cart-control/Cart-control.vue'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    SupportIco,
    Shopcart,
    Cartcontrol
  },
  data () {
    return {
      goods: [],
      // currentIndex: 0,
      listHeight: [],
      scrollY: 0
    }
  },
  created() {
    getGoods().then( res => {
      console.log(res);
      this.goods = res
      this.$nextTick(() => {
        this._initScroll()
        this._calculateHeight()
      })   
    })
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selecteFoods() {
      let foods = [];
      for(let good of this.goods){
        if(good.foods) {
          for(let food of good.foods){
            if(food.count) {
              foods.push(food)
            }
          }
        } 
      }
      return foods
    }
  },
  methods: {
    selectMenu(idx) {
      // this.currentIndex = idx
      let foodList = this.$refs.foodList
      let el = foodList[idx]
      this.foodsScrool.scrollToElement(el, 300)
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuwrapper, {
        // scrollY: true,
        click: true
      })
      console.log(this.menuScroll);
      this.foodsScrool = new BScroll(this.$refs.foodswrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScrool.on('scroll', pos => {
        // console.log(pos)
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight() {
      let foodList = this.$refs.foodList
      let height =0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
       console.log(this.listHeight)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';
  .goods
    display flex 
    position absolute
    top 176px
    bottom 46px
    width 100%
    overflow hidden 
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background $color-background-ssss
      .menu-item
        display flex
        width 60px
        height 54px 
        padding 0 10px
        line-height 14px
        align-items center
        justify-content center
        font-size $fontsize-small
        &.current
          background #fff
          font-weight 700
    .foods-wrapper 
      flex 1
      .title 
        padding-left: 14px;
        hright: 26px;
        line-height 26px
        border-left 2px solid #d9dde1
        font-size $fontsize-small
        color rgb(147, 153, 159)
        background $color-background-ssss
      .food-item
        display flex 
        position: relative;
        margin 18px
        padding-bottom: 18px;
        &:last-child
          margin-bottom 0 
        .icon 
          flex 0 0 57px 
          margin-right: 10px;
          img 
            width 100%
        .content 
          flex 1
          .name 
            margin 2px 0 8px 0
            height 14px
            line-height 14px
            font-size 14px
            color rgb(7, 17, 27)
          .desc, .extra 
            line-height 10px
            font-size 10px
            color rgb(147, 153, 159)
          .desc 
            line-height 12px
            margin-bottom 8px
          .extra 
            .count 
              margin-right 12px
          .price 
            font-weight 700
            line-height 24px
            .now 
              margin-right 8px
              font-size 14px
              color rgb(240, 20, 20)
            .old 
              text-decoration line-through
              font-size 10px
              color rgb(147, 153, 159)    
          .cartcontrol-wrapper
            position: absolute;    
            right: 0;
            bottom 0
</style>