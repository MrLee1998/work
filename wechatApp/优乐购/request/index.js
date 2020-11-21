//同时发送异步请求代码的次数
let ajaxTimes = 0
export const request=(params) => {
  ajaxTimes++;
  //显示一个加载效果
  wx.showLoading({
    title: '....',
    mask: true
  })
  return new Promise ((resolve,reject) => {
    wx.request({
      ...params, // 结构所有数据
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxTimes--;
        if(ajaxTimes==0){
          wx.hideLoading();
        } 
      }
    });
  })
}
