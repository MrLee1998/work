<template>
  <div class="header" @click="showDetail">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <SupportIco :size=1 :type="seller.supports[0].type"></SupportIco>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.infos">
        <span class="count">{{seller.infos.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 背景 -->
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <HeaderDetail :seller="seller" v-show="detailVisable" @close="closeDetail"></HeaderDetail>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico.vue'
import HeaderDetail from '@/components/header-detail/Header-detail.vue'
export default {
  props: {
    seller:{
      type: Object,
      default() {
        return {}
      }
    } // 数据绑定的的属性名
  },
  data () {
    return {
       detailVisable: false
    }
  },
  methods: {
    showDetail() {
      return this.detailVisable = true
    },
    closeDetail(e) {
      console.log(e);
      return this.detailVisable = e
    }
  },
  components: {
    SupportIco,
    HeaderDetail
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';
.header
  position relative
  overflow hidden
  color $color-white
  background-color $color-background-ss
  .content-wrapper
    position relative
    display flex
    padding 24px 12px 18px 24px
    align-items center
    .avatar
      flex 0 0 64px
      margin-right 16px
      img
        border-radius 2px
    .content
      flex 1
      .title
        display flex
        align-items center
        margin-bottom 8px
        .brand
          width 30px
          height 18px
          bg-image('../images/brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          font-size $fontsize-large
          font-weight bold
          vertical-align middle
          line-height 1
      .description
        font-size $fontsize-small
        margin-bottom 8px
        line-height 12px
      .support
        display flex
        align-items center
        &-ico
          margin-right 4px
        .text 
          line-height 12px
          font-size $fontsize-small-s
    .support-count
      position absolute
      right 12px
      bottom 14px
      display flex
      align-items center
      padding 0 8px
      line-height 24px
      align-items center
      border-radius 14px
      background-color $color-background-sss = rgba(7, 17, 27, 0.2)
      .count
        font-size $fontsize-small-s
      .icon-keyboard_arrow_right
        margin-left 2px
        line-height 24px
        font-size $fontsize-small-s
  .bulletin-wrapper
    position relative
    display flex
    height 28px
    align-items center
    line-height 28px
    padding 0 8px
    background $color-background-sss
    .bulletin-title
      flex 0 0 22px
      width 22px
      height 12px
      margin-right 4px
      bg-image('../images/bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text 
      flex 1
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      font-size $fontsize-small-s
    .icon-keyboard_arrow_right
      flex 0 0 10px
      width 10px
      font-size $fontsize-small-s
  .background 
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)
</style>