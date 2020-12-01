<template>
  <span class="support-ico" :class="iconCls">
  </span>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    type: {
      type: Number
    }
  },
  computed: {
    iconCls() {
      const classMAp = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return `icon-${this.size} ${classMAp[this.type]}`
    }
  }
}
</script>

<style lang="stylus" scoped> //scoped 样式私有化
@import '../../common/stylus/mixin.styl';
.support-ico
  display inline-block
  background-repeat no-repeat
.icon-1
    width 12px
    height 12px
    background-size 12px 12px
    &.decrease
      bg-image('./images/decrease_1')
    &.discount
      bg-image('./images/discount_1')
    &.special
      bg-image('./images/special_1')
    &.invoice
      bg-image('./images/invoice_1')
    &.guarantee
      bg-image('./images/guarantee_1')
  
  .icon-2
    width 16px
    height 16px
    background-size 16px 16px
    &.decrease
      bg-image('./images/decrease_2')
    &.discount
      bg-image('./images/discount_2')
    &.special
      bg-image('./images/special_2')
    &.invoice
      bg-image('./images/invoice_2')
    &.guarantee
      bg-image('./images/guarantee_2')
  
  .icon-3
    width 12px
    height 12px
    background-size 12px 12px
    &.decrease
      bg-image('./images/decrease_3')
    &.discount
      bg-image('./images/discount_3')
    &.special
      bg-image('./images/special_3')
    &.invoice
      bg-image('./images/invoice_3')
    &.guarantee
      bg-image('./images/guarantee_3')

  .icon-4
    width 16px
    height 16px
    background-size 16px 16px
    &.decrease
      bg-image('./images/decrease_4')
    &.discount
      bg-image('./images/discount_4')
    &.special
      bg-image('./images/special_4')
    &.invoice
      bg-image('./images/invoice_4')
    &.guarantee
      bg-image('./images/guarantee_4')
</style>