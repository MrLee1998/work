// pages/cart/cart.js
import {getSetting, chooseAddress, openSetting} from "../../utils/asyncWx.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    allCheck: false
  },
  onShow: function() {
    const address = wx.getStorageSync('address')
    // console.log(address); 
    const cart = wx.getStorageSync('cart') ||[];
    console.log(cart.length);
    let allCheck=true
    console.log(allCheck);
    
    this.setData({
      address,
      cart,
      allCheck
    })

  
  },
  async handleAddress(){

    try {
      const res1 = await getSetting();
      const scopeAddress = res1.authSetting["scope.address"]
      if(scopeAddress===false){
        await openSetting();
      }
      let address = await chooseAddress();
      address.all = address.provinceName+address.cityName+address.countyName+address.detailInfo
      // 存入到缓存中
      wx.setStorageSync('address',address)
    }  catch (error) {
      console.log(error);
      
    }
    
  }
})