<template>
  <div class="cart-box">
    <SimpleHeader :name="'购物车'" :back="false"></SimpleHeader>
    <div class="cart-body">
      <van-checkbox-group v-model="result" @change="closeCheckAll">
        <van-swipe-cell v-for="(item, index) in list" :key="index">
          <div class="good-item">
            <van-checkbox :name="item.cartItemId"></van-checkbox>
            <div class="good-img">
              <img :src="$filters.prefix(item.goodsCoverImg)" alt="" />
            </div>
            <div class="good-desc">
              <div class="good-title">
                <span>{{ item.goodsName }}</span>
                <span>X{{ item.goodsCount }}</span>
              </div>
              <div class="good-btn">
                <div class="price">{{ item.sellingPrice }}</div>
                <van-stepper
                  integer
                  min="1"
                  max="5"
                  :model-value="item.goodsCount"
                  :name="item.cartItemId"
                  @change="numChange"
                />
              </div>
            </div>
          </div>

          <template #right>
            <van-button
              square
              text=""
              icon="delete"
              type="danger"
              class="delete-button"
              @click="deleteGood(item.cartItemId)"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <van-submit-bar
      v-if="list.length > 0"
      :price="total * 100"
      button-text="结算"
      @submit="onSubmit"
      class="submit-all"
    >
      <van-checkbox @click="allCheck" v-model:checked="checkedAll"
        >全选</van-checkbox
      >
    </van-submit-bar>
    <div class="empty" v-else>
      <img
        class="empty-cart"
        src="//s.yezgea02.com/1604028375097/empty-car.png"
        alt="空购物车"
      />
      <div class="title">购物车空空如也</div>
      <van-button round color="#1baeae" type="primary" @click="goTo" block
        >前往选购</van-button
      >
    </div>
    <navBar></navBar>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import SimpleHeader from "../components/SimpleHeader";
import navBar from "@/components/NavBar.vue";
import { Toast } from "vant";
import { getCart, modifyCart, deleteCartItem } from "../service/cart";
import { useRouter } from 'vue-router'

export default {
  components: {
    SimpleHeader,
    navBar,
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      result: [],
      list: [],
      checkedAll: true,
    });
    onMounted(() => {
      init();
    });
    const init = async () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      const { data } = await getCart({ pageNumber: 1 });
      console.log(data);
      state.list = data;
      state.result = data.map((item) => item.cartItemId);
      Toast.clear();
    };

    const allCheck = () => {
      if (state.checkedAll) {
        state.result = [];
        state.checkedAll = false;
      } else {
        state.result = state.list.map((item) => item.cartItemId);
        state.checkedAll = true;
      }
    };
    const closeCheckAll = (result) => {
      console.log(result);
      if (result.length === state.list.length) {
        state.checkedAll = true;
      } else {
        state.checkedAll = false;
      }
      state.result = result;
    };

    const total = computed(() => {
      let sum = 0;
      let _list = state.list.filter((item) =>
        state.result.includes(item.cartItemId)
      );
      _list.forEach((item) => {
        sum += item.goodsCount * item.sellingPrice;
      });
      return sum;
    });

    const numChange = async (value, detail) => {
      console.log(value, detail);
      if (
        state.list.filter((item) => item.cartItemId === detail.name)[0]
          .goodsCount == value
      ) {
        return;
      } else {
        Toast.loading({
          message: "修改中...",
          forbidClick: true,
        });
        const params = {
          cartItemId: detail.name,
          goodsCount: value,
        };
        //  发起接口请求 修改服务器上的数据
        await modifyCart(params);
        // 用现有的数据去更新页面
        state.list.forEach((item) => {
          if (item.cartItemId == detail.name) {
            item.goodsCount = value;
          }
        });
      }
    };

    const deleteGood = async (id) => {
      const { resultCode } = await deleteCartItem(id);
      if (resultCode === 200) {  
        const { data } = await getCart({ pageNumber: 1 });
        state.list = data;
      } else {
        Toast({
          message: 'error',
          forbidClick: true
        })
      }
    };
    const goTo = () => {
      router.push('/home')
    }
    const onSubmit = () => {
      if(state.result.length === 0) {
        Toast.fail('请选择商品进行结算')
        return
      }
      const params = JSON.stringify(state.result)
      router.push({ path: '/create-order', query: {cartItemId: params}})
    }
    return {
      ...toRefs(state),
      allCheck,
      closeCheckAll,
      total,
      numChange,
      deleteGood,
      goTo,
      onSubmit
    };
  },
};
</script>


<style lang="less">
@import "../common/style/mixin";
.cart-box {
  .cart-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    .fj();
    .wh(100%, 44px);
    line-height: 44px;
    padding: 0 10px;
    .boxSizing();
    color: #252525;
    background: #fff;
    border-bottom: 1px solid #dcdcdc;
    .cart-name {
      font-size: 14px;
    }
  }
  .cart-body {
    margin: 60px 0 100px 0;
    padding-left: 10px;
    padding-bottom: 100px;
    .good-item {
      display: flex;
      .good-img {
        img {
          .wh(100px, 100px);
        }
      }
      .good-desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 20px;
        .good-title {
          display: flex;
          justify-content: space-between;
        }
        .good-btn {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: 16px;
            color: red;
            line-height: 28px;
          }
          .van-icon-delete {
            font-size: 20px;
            margin-top: 4px;
          }
        }
      }
    }
    .delete-button {
      width: 50px;
      height: 100%;
    }
  }
  .empty {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-top: 100px;
    .empty-cart {
      width: 150px;
      margin-bottom: 20px;
    }
    .van-icon-smile-o {
      font-size: 50px;
    }
    .title {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  .submit-all {
    margin-bottom: 50px;
    .van-checkbox {
      margin-left: 10px;
    }
    .van-submit-bar__text {
      margin-right: 10px;
    }
    .van-submit-bar__button {
      background: @primary;
    }
  }
  .van-checkbox__icon—checked .van-icon {
    background-color: @primary;
    border-color: @primary;
  }
}
</style>
