//app.js

App({
  // 1. 应用第一次启动就会触发的事件
  onLaunch() {
    // 在应用第一次启动的时候 获取用户信息
    console.log("onLaunch"); 
    // wx.navigateTo({
    //   url: '111'
    // })
  },
  // 2. 应用 被用户看到
  onShow(){
    // 对应用的数据或者页面效果 重置
    console.log("onShow");
  },
  // 3. 当应用被隐藏
  onHide(){
    // 暂停或清楚定时器
    console.log("onHide");
    
  },
  // 4. 应用代码发生报错的时侯 就会促发
  onError(){
    // 在英发生代码错误的时候 ，收集用户的错误信息 ，通过异步请求 将错误的信息发送到后台去
    console.log("onError") 
  },
  // 5. 页面找不到就会触发
  onPageNotFound() {
    console.log("onPageNotFound")
    // 不能跳到navbar页面
    wx.navigateTo({
      url: '/pages/demo1/demo1',
    })
  }
})