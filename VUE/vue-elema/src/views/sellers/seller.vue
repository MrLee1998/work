<template>
  <div>
    <div class="seller" ref="menuwrapper">
      <div class="seller-detail">
        <div class="detail-top">
          <div class="detail-left">
            <div class="seller-nmae">{{seller.name}}</div>
            <div class="seller-rating">
              <span class="seller-score">({{seller.ratingCount}})</span>
              <span class="seller-nums">月售{{seller.sellCount}}单</span>
            </div>
          </div>
          <div class="detail-right">
            <div class="images" @click="collect">
              <img src="../../assets/collect1.png" alt="">
              <div class="collet">收藏</div>
            </div>
            
          </div>
        </div>
        <div class="line"></div>
        <div class="detail-bottom">
          <div class="minPrice">
            <div class="minPrice-title">起送价</div>
            <div class="price">{{seller.minPrice}}元</div>
          </div>
          <div class="sendPrice">
            <div class="sendPrice-title">商家配送</div>
            <div class="deliveryPrice">{{seller.deliveryPrice}}元</div>
          </div>
          <div class="sendTime">
            <div class="sendTime-title">平均配送时间</div>
            <div class="deliveryTime">{{seller.deliveryTime}}分钟</div>
          </div>  
        </div>
      </div>
      <div class="cut-off"></div>
      <div class="seller-introduce">
        <div class="content">
          <div class="content-title">公告与活动</div>
          <div class="content-detail">{{seller.bulletin}}</div>
          <ul>
            <li class="active-item" v-for="(item, index) in seller.supports" :key="index">
              <div class="text-line"></div>
              <SupportIco :size="2" :type="item.type"></SupportIco>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { getGoods } from '@/api'
import SupportIco from "@/components/support-ico/support-ico.vue";
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return{
      url: '../../assets/collect1.png'
    }
  },
  methods: {
    _sellerScroll() {
      this.menuScroll = new BScroll(this.$refs.menuwrapper, {
        // scrollY: true,
        click: true
      })
    },
    collect() {

    }
  },
  created() {
    this.$nextTick(() => {
        this._sellerScroll()
    })   
  },
  components: {
    SupportIco,
  }
}
</script>

<style lang="stylus" scoped>
.seller 
  overflow hidden 
  .seller-detail
    .detail-top
      display flex
      .detail-left
        flex 0 0 300px
        .seller-nmae
          color #333
          font-size 14px
          line-height 14px
          margin-bottom 8px
          padding: 20px 0 0 10px;
        .seller-rating
          padding-left: 10px;
          .seller-score
            color: #666;
            font-size: 10px;
            line-height: 18px;
            margin-right: 12px;
          .seller-nums
            color: #666;
            font-size: 10px;
            line-height: 18px;
            margin-right: 12px;
      .detail-right 
        flex 1
        right: 11px;
        text-align: center;
        top: 18px;
        width: 50px;
        color: #666;
        .images
          padding: 20px 0 0 0;
          img
            width: 25px;
        .collet
          font-size 12px
    .line
      padding 10px
      height 1px
      border-bottom: 1PX solid rgba(7,17,27,.1);
      margin: 0 20px;
    .detail-bottom
      padding 18px 0
      display flex
      text-align: center;
      margin 0 auto
      .minPrice
        flex 1
        border-right: 1PX solid rgba(7,17,27,.1);
        .minPrice-title
          color: #999;
          font-size: 10px;
          line-height: 10px;
          margin-bottom: 4px;
        .price
          font-size 24px
      .sendPrice
        flex 1
        border-right: 1PX solid rgba(7,17,27,.1);
        .sendPrice-title
          color: #999;
          font-size: 10px;
          line-height: 10px;
          margin-bottom: 4px;
        .deliveryPrice
          font-size 24px
      .sendTime
        flex 1 
        .sendTime-title
          color: #999;
          font-size: 10px;
          line-height: 10px;
          margin-bottom: 4px;
        .deliveryTime
          font-size 24px
  .cut-off
    width 100%
    height 16px
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7,17,27,.1);
    border-top: 1px solid rgba(7,17,27,.1);
  .seller-introduce
    .content
      padding: 15px 30px;
      .content-title
        color: #333;
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 8px;
      .content-detail
        color: #f01414;
        font-size: 12px;
        line-height: 24px;
      .active-item
        align-items: center
        .text-line
          padding 20px 0
          height 1px
          border-bottom: 1PX solid rgba(7,17,27,.1);
          margin: 0 20px;  
        .text 
          color: #333;
          font-size: 12px; 
</style>