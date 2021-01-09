<template>
  <div class="good">
    <header class="good-header">{{goodsTitle}}</header>
    <div class="good-box">
      <div class="good-item" v-for="item in goods" :key="item.goodsId">
        <img :src="$filters.prefix(item.goodsCoverImg)" alt="">
        <div class="good-desc">
          <div class="title">{{item.goodsName}}</div>
          <div class="price">￥{{item.sellingPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, ref, reactive } from 'vue'
export default {
  props:{
    title: {
      type: String,
      default: ''
    },
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props) {
    const goodsTitle = ref(props.title)
    const goodsList = reactive({
      goods: props.goods
    })
    return{
      ...toRefs(goodsList),
      goodsTitle
      
    }
  }
}
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.good {
  .good-header {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: @primary;
    font-size: 16px;
    font-weight: 500;
  }
  .good-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .good-item {
      box-sizing: border-box;
      width: 50%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px 10px;
      img {
        display: block;
        width: 120px;
        margin: 0 auto;
      }
      .good-desc {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
        .title {
          color: #222333;
        }
        .price {
          color: @primary;
        }
      }
      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
}
.floor-list {
  width: 100%;
  padding-bottom: 50px;
  .floor-head {
    width: 100%;
    height: 40px;
    background: #f6f6f6;
  }
  .floor-content {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    .boxSizing();
    .floor-category {
      width: 50%;
      padding: 10px;
      border-right: 1px solid #dcdcdc;
      border-bottom: 1px solid #dcdcdc;
      .boxSizing();
      &:nth-child(2n) {
        border-right: none;
      }
      p {
        font-size: 17px;
        color: #333;
        &:nth-child(2) {
          padding: 5px 0;
          font-size: 13px;
          color: @primary;
        }
      }
      .floor-products {
        .fj();
        width: 100%;
        img {
          .wh(65px, 65px);
        }
      }
    }
  }
}
</style>