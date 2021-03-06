import config from './config'
import * as mock from './mock'
let util = {
  isDev: config.isDev,
  log(){
    this.isDev && console.log(...arguments);
  },
  alert(title='提示',content = config.defaultAlertMessage) {
    if(typeof content==='object') {
      content =this.isDev && JSON.stringify(content)
    }
    wx.showModal({
      title: title,
      content: content
    });
  },
  getStorageData(key,cb) {
    wx.getStorage({
      key: key,
      success (res){
       cb && cb(res.data) 
      },
      fail(err) {
        this.log(err)
      }
    })
  },
  setStorageData(key, value='',cb) {
    wx.setStorage({
      data: value,
      key: key,
      success () {
        cb && cb()
      }
    })
  },
  request(opt) {
    let{url,data,header,method,dataType,mock=false}=opt
    // let url = opt.url
    let self=this
    return new Promise((resolve,reject)=> {
      if(mock){
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if(res && res.statusCode==200 && res.data){
        }
        else {
          self.alert('提示',res)
          reject(res)
        }
      }
      else{
        wx.request({
          url: url,
          data: data,
          header: header ||{'content-type': 'application/json'},
          method: method ||'GET',
          dataType: dataType || 'json',
          success(res){
            if(res && res.statusCode==200 && res.data){
            }
            else {
              self.alert('提示',res)
              reject(res)
            }
          },
          fail() {
            self.log(err)
            self.alert('提示',err)
            reject(err)
          }
        })
      }
     
    })
   
  }

}
export default util
