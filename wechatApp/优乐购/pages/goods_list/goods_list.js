import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id: 0,
        value: '综合',
        isActive: true
      },  {
        id: 1,
        value: '销量',
        isActive: false
      },  {
        id: 2,
        value: '价格',
        isActive: false
      }
    ],
    goodsList:[],
    totalPages: 1
  },
  QueryParams: {
    query: '',
    cid: '',
    pagenum: 1,
    pagesize: 10
  },
  handleItemTap(e) {
    console.log(e); 
    // 获取被点击的索引
    const index = e.detail.index;
    //修改原数组
    let {tabs} = this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)    
    // 赋值
    this.setData({
      tabs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cid
    this.getGoods()
  },
  async getGoods() {
    const res = await request({url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',data: this.QueryParams})
    const total = res.data.message.total
    this.totalPages = Math.ceil(total/this.QueryParams.pagesize)
    // console.log(this.totalPages);
    console.log(res.data.message);
    this.setData({
      //数组拼接
      goodsList: [...this.data.goodsList,...res.data.message.goods]
    })
    //关闭下拉刷新窗口
    wx.stopPullDownRefresh()
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
    //重置数组
    this.setData({
      goodsList: []
    })
    this.QueryParams.pagenum = 1;
    this.getGoods()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
    if(this.QueryParams.pagenum >=this.totalPages){
      console.log('页面触底');  
      wx.showToast({
        title: '没有了 亲',
      })
    }
    else{
      this.QueryParams.pagenum++
      this.getGoods()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})