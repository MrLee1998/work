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
export default {
  components: {
    SimpleHeader,
  },
  setup() {
    const state = reactive({
      chosenAddressId: '1',
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    });
    onMounted(() => {
      // 请求所有的地址列表
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>