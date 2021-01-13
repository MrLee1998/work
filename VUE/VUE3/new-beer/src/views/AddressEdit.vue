<template>
  <div class="address-edit-box">
    <SimpleHeader :name="'新增地址'"></SimpleHeader>
    <van-address-edit
      :addressInfo = "editAddress"
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import SimpleHeader from "../components/SimpleHeader";
import { tdist } from '../common/js/util'
import { addAddress, editAddress, getAddressDetail } from '../service/address'
import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router'

export default {
  components: {
    SimpleHeader,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}  
      },
      type: 'add',
      editAddress: {
        name: '',
        tel: '',
        province: '',
        city: '',
        county: '',
        addressDetail: '',
        isDefault: ''
      }
    })

    onMounted(async () => {
      let _province_list = {}
      let _city_list = {}
      let _county_list = {}
      await tdist.getLev1().forEach(p => {
          _province_list[p.id] = p.text
          tdist.getLev2(p.id).forEach(c => {
            _city_list[c.id] = c.text
            tdist.getLev3(c.id).forEach(q => {
              _county_list[q.id] = q.text
            })
          })
      })
      // console.log(_province_list);
      state.areaList.province_list = _province_list
      state.areaList.city_list = _city_list
      state.areaList.county_list = _county_list
      // console.log(state);
      console.log(route.query);
      if(route.query.type === 'edit') {
        const { data } = await getAddressDetail(route.query.addressId)
        console.log(data);
        state.editAddress.name = data.userName
        state.editAddress.tel = data.userPhone
        state.editAddress.province = data.provinceName
        state.editAddress.city = data.cityName
        state.editAddress.county = data.regionName
        state.editAddress.addressDetail = data.detailAddress
        state.editAddress.isDefault = data.defaultFlag === 1 ? true : false
        state.type = route.query.type
      }
      console.log(state.type);
    })

    const onSave = async (content) => {
      // console.log(content);
      const params = {
        userName: content.name,
        userPhone: content.tel,
        provinceName: content.province,
        cityName: content.city,
        regionName: content.county,
        detailAddress: content.addressDetail,
        defaultFlag: content.isDefault ? 1 : 0
      }
      await state.type === 'add' ? addAddress(params) : editAddress(params)
      Toast.success('保存成功')
      router.back()
    }
    return {
      ...toRefs(state),
      onSave,

    }
  }
};
</script>

<style lang="less">
  @import '../common/style/mixin';
  .edit {
    .van-field__body {
      textarea {
        height: 26px!important;
      }
    }
  }
  .address-edit-box {
    margin-top: 44px;
    .van-address-edit {
      .van-button--danger {
        background: @primary;
        border-color: @primary;
      }
      .van-switch--on {
        background: @primary;
      }
    }
  }
</style>