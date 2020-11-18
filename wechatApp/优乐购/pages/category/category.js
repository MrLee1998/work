// pages/category/category.js
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightContent: [],
    //被点击的菜单
    currentIndex: 0,
    scrolltop: 0
  },
  Cates:[],
  async getCategory() {
    // request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'})
    // .then(result => {
    //   console.log(result);
    //   this.Cates = result.data.message

    //   // 把接口数据存到本地
    //   wx.setStorageSync('cates',{time: Date.now(), data: this.Cates})
    //   let leftMenuList = this.Cates.map(v=>v.cat_name);
    //   let rightContent = this.Cates[0].children;
    //   this.setData({
    //     // infomation: result.data.message
    //     leftMenuList,
    //     rightContent
    //   })
    // })
    
    // 使用es7 await
    const result = await request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'})
    this.Cates = result.data.message
      // 把接口数据存到本地
      wx.setStorageSync('cates',{time: Date.now(), data: this.Cates})
      let leftMenuList = this.Cates.map(v=>v.cat_name);
      let rightContent = this.Cates[0].children;
      this.setData({
        // infomation: result.data.message
        leftMenuList,
        rightContent
      })
    
  },
  handleItemTap(e){
    // console.log(e);
    const index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
    let rightContent = this.Cates[index].children;
      this.setData({
        // infomation: result.data.message
        currentIndex: index,
        rightContent
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 先判断本地存储有没有旧的数据  没有 发送请求  有 使用旧的数据
    // this.getCategory()
    const Cates=wx.getStorageSync("cates")
    if(!Cates) {
      this.getCategory()
    }
    else {
      // 有旧数据了 定义一个过期时间
      if(Date.now()-Cates.time >= 1000*10){
        this.getCategory()
      }
      else{
        this.Cates = result.data.message
        // 把接口数据存到本地
        wx.setStorageSync('cates',{time: Date.now(), data: this.Cates})
        let leftMenuList = this.Cates.map(v=>v.cat_name);
        let rightContent = this.Cates[0].children;
        this.setData({
          // infomation: result.data.message
          leftMenuList,
          rightContent,
          scrolltop: 0
      })
    }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})