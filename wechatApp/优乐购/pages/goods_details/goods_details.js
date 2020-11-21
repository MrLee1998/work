import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "message": {
      "goods_id": 8888,
      "cat_id": 1085,
      "goods_name": "spike 经典武士大马士革直刀(微型) 户外野营直刀 收藏礼品刀 饰品刀具",
      "goods_price": 500,
      "goods_number": 100,
      "goods_weight": 100,
      "goods_introduce": "富文本内容",
      "goods_state": 2,
      "is_del": "0",
      "add_time": 1516361489,
      "upd_time": 1516361489,
      "delete_time": null,
      "hot_mumber": 0,
      "is_promote": false,
      "cat_one_id": 995,
      "cat_two_id": 1075,
      "cat_three_id": 1085,
      "goods_cat": "995,1075,1085",
      "pics": [
          {
              "pics_id": 38711,
              "goods_id": 8888,
              "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
              "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
              "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
              "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
              "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
              "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
          }
      ],
      "attrs": [
          {
              "goods_id": 8888,
              "attr_id": 9210,
              "attr_value": "户外直刀",
              "add_price": 0,
              "attr_name": "主体参数-类别",
              "attr_sel": "only",
              "attr_write": "manual",
              "attr_vals": "放大镜"
          }
      ]
  },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const {goods_id} = this.data.message
    console.log(goods_id);
    this.getGoodsDetail(goods_id)
  },
  async getGoodsDetail (goods_id) {
    const res = await request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',data: {goods_id}})
    console.log(res)
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