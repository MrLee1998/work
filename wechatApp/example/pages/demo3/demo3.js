// pages/demo3/demo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload");
    // onLoad发送异步请求 初始化页面
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    console.log('onshow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onhide');  
  },

  /**
   * 生命周期函数--监听页面卸载   
   */
  onUnload: function () {
    console.log('onunload');
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('pull');
    //页面的数据 或者效果刷新
  },

  /**
   * 页面上拉触底事件的处理函数
   * 需要页面上下滚动
   */
  onReachBottom: function () {
    console.log('onReachBottom');
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage');
    
  },
  // 表示页面滚动  就可以促发
  onPageScroll() {
    console.log('onPageScroll');
    
  },
  // 页面的尺寸发生变化时触发
  // 小程序发生横屏竖屏就可以促发
  onResize() {
    console.log('onResize');
    
  },
  // 只存在tab上面促发
  onTabItemTap() {
    console.log('onTabItemTap');
    
  }
})