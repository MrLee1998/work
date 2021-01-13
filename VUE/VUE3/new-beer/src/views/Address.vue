<template>
  <div class="address-box">
    <SimpleHeader :name="'地址管理'"></SimpleHeader>
    <div class="address-item">
      <van-address-list
        v-if="from != 'mine'"
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
      <van-address-list
        v-else
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
import SimpleHeader from "../components/SimpleHeader";
import { getAddressList } from '../service/address'
import { useRouter, useRoute } from 'vue-router'

export default {
  components: {
    SimpleHeader,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      chosenAddressId: '1',
      list: [],
      from: route.query
    });
    onMounted( async () => {
      // 请求所有的地址列表
      const { data } = await getAddressList()
      if(!data) {
        state.list = []
        return
      }
      state.list = data.map(item => {
        return {
          id: item.addressId,
          name: item.userName,
          tel: item.userPhone,
          address: `${item.provinceName} ${item.cityName} ${item.regionName} ${item.detailAddress}`,
          isDefault: item.defaultFlag === 1 ? true : false 
        }
      })
    });

    const onAdd = () => {
      router.push({path: 'address-edit', query: {type: 'add', from: state.from}})
    }

    // 选中地址
    const select = (item) => {
      console.log(item);
      router.push({path: '/create-order', query: { addressId: item.id, from: state.from}})
    }

    const onEdit = (item) => {
      console.log(item);
      router.push({path: 'address-edit', query: {type: 'edit', addressId: item.id, from: state.from}})
      
    }
    return {
      ...toRefs(state),
      onAdd,
      select,
      onEdit
    };
  },
};
</script>

<style lang="less">
@import "../common/style/mixin";
.address-box {
  .van-radio__icon {
    display: none;
  }
  .address-item {
    margin-top: 44px;
    .van-button {
      background: @primary;
      border-color: @primary;
    }
  }
}
</style>