<template>
  <div class="address-edit-box">
    <SimpleHeader :name="type == 'add' ? '新增地址' : '修改地址'"></SimpleHeader>
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      :show-delete="type == 'edit'"
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
import { addAddress, editAddress, getAddressDetail, deleteAddress } from '../service/address'
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
      from: route.query.from,
      addressInfo: {
      },
      addressId: ''
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
      const { addressId, from , type } = route.query
      state.type = type
      state.addressId = addressId
      state.from = from || ''
      if(type === 'edit') {
        const { data } = await getAddressDetail(addressId)
        console.log(data);
        let _areaCode = ''
        const toCode = (area, code) => {
          for(let key in tdist) {
             for (let key in tdist) if (tdist[key][0] == area && tdist[key][1] == code) {
               return key
             }   
          }
        }
        let pCode = toCode(data.provinceName, '1')
        let cCode = toCode(data.cityName, pCode)
        let rCode = toCode(data.regionName, cCode)
        state.addressInfo = {
          id: data.addressId,
          name: data.userName,
          tel: data.userPhone,
          province: data.provinceName,
          city: data.cityName,
          county: data.regionName,
          addressDetail: data.detailAddress,
          isDefault: data.defaultFlag === 1 ? true : false,
          areaCode: rCode
        }
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
      if(state.type == 'edit') {
        params['addressId'] = state.addressId
      }
      await state.type === 'add' ? addAddress(params) : editAddress(params)
      Toast.success('保存成功')
      router.back()
    }

    const onDelete = async () => {
      await deleteAddress(state.addressId)
      Toast.success('删除成功')
      setTimeout(() => {
        router.back()
      },2000)
    }
    return {
      ...toRefs(state),
      onSave,
      onDelete
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