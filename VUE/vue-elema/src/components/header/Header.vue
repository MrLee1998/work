<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">1024 早餐</span>
        </div>
        <div class="description">
          蜗牛速送（饿了吗专属）
        </div>
        <div class="support">
          <SupportIco :size=1 :type=0></SupportIco>
          <span class="text">在线支付，满10减1</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count">5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">去上等蜗牛，经九九八十一天发酵。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 背景 -->
    <div class="background">
      <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg" alt="" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico.vue'
export default {
  components: {
    SupportIco
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