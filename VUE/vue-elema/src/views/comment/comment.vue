<template>
  <div class="comment">
    <div class="comment-title">
      <div class="comment-score">
        <div class="comment-score__grade">{{seller.score}}</div>
        <div class="comment-score__score">综合评分</div>
        <div class="comment-score__rating">高于周边商家69.2%</div>
      </div>
      <div class="comment-star">
        <div class="attitude">
          服务态度
          <span class="comment-star__nums">......</span>
          <span class="attitude-score">{{seller.serviceScore}}</span>
        </div>
        <div class="comment-goods">
          商品评分
          <span class="comment-goods__nums">......</span>
          <span class="good-score">{{seller.foodScore}}</span>
        </div>
        <div class="send-time">
          <span class="title">送达时间</span>
          <span class="delivery">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
    <div class="cut-off"></div>
  </div>
</template>

<script>
import { getGoods } from '@/api'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: []
    }
  },
  created() {
    getGoods().then( res => {
      console.log(res);
      this.goods = res  
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';
.comment-title 
  display flex 
  text-align: center;
  padding: 24px 0;
  .comment-score
    flex 0 0 138px
    font-size $fontsize-small-s
    border-right: 1px solid #d9dde1
    .comment-score__grade
      color #fc9153
      font-size $fontsize-large-xxx
      line-height 28px
      margin-bottom 6px
    .comment-score__rating
      color #999
      line-height 10px
      font-size $fontsize-small-s
    .comment-score__score
      color #333
      font-size $fontsize-small
      line-height 12px
      margin-bottom: 8px;
  .comment-star
    flex 1
    padding 6px 0 6px 24px
    .attitude
      font-size $fontsize-small
      line-height 18px
      color #333
      .attitude-score
        color #fc9153
    .comment-star__nums
      margin: 0 12px;
    .comment-goods
      font-size $fontsize-small
      line-height 18px
      color #333
      .good-score
        color #fc9153
      .comment-goods__nums
        margin: 0 12px;
    .send-time
      font-size $fontsize-small
      line-height 18px
      color #333
      .delivery
        margin-left 12px
.cut-off
  width 100%
  height 16px
  background: #f3f5f7;
  border-bottom: 1px solid rgba(7,17,27,.1);
  border-top: 1px solid rgba(7,17,27,.1);
</style>