import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[
      {
        "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
        "open_type": "navigate",
        "goods_id": 129,
        "navigator_url": "/pages/goods_detail/index?goods_id=129"
      },{
        "image_src": "https://api-hmugo-web.itheima.net/pyg/banner2.png",
        "open_type": "navigate",
        "goods_id": 129,
        "navigator_url": "/pages/goods_detail/index?goods_id=129"
      },{
        "image_src": "https://api-hmugo-web.itheima.net/pyg/banner3.png",
        "open_type": "navigate",
        "goods_id": 129,
        "navigator_url": "/pages/goods_detail/index?goods_id=129"
      }
    ],
    catesList: [
          {
              "name": "分类",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
              "open_type": "switchTab",
              "navigator_url": "/pages/category/index"
          },
          {
              "name": "秒杀拍",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_3@2x.png"
          },
          {
              "name": "超市购",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png"
          },
          {
              "name": "母婴品",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png"
          }
      ],
      meta: {
          "msg": "获取成功",
          "status": 200
      },
      floorList:[
        {
          "floor_title": {
              "name": "时尚女装",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
          },
          "product_list": [
              {
                  "name": "优质服饰",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
                  "image_width": "232",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=服饰"
              },
              {
                  "name": "春季热门",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
                  "image_width": "233",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=热"
              },
              {
                  "name": "爆款清仓",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
                  "image_width": "233",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=爆款"
              },
              {
                  "name": "倒春寒",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
                  "image_width": "233",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=春季"
              },
              {
                  "name": "怦然心动",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
                  "image_width": "233",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=心动"
              }
          ]
      },
      {
          "floor_title": {
              "name": "户外活动",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
          },
          "product_list": [
              {
                  "name": "勇往直前",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
                  "image_width": "232",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=户外"
              },
              {
                  "name": "户外登山包",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
                  "image_width": "273",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=登山包"
              },
              {
                  "name": "超强手套",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
                  "image_width": "193",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=手套"
              },
              {
                  "name": "户外运动鞋",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
                  "image_width": "193",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=运动鞋"
              },
              {
                  "name": "冲锋衣系列",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
                  "image_width": "273",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=冲锋衣"
              }
          ]
      },
      {
          "floor_title": {
              "name": "箱包配饰",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
          },
          "product_list": [
              {
                  "name": "清新气质",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
                  "image_width": "232",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list?query=饰品"
              },
              {
                  "name": "复古胸针",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
                  "image_width": "263",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list?query=胸针"
              },
              {
                  "name": "韩版手链",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
                  "image_width": "203",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list?query=手链"
              },
              {
                  "name": "水晶项链",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
                  "image_width": "193",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list?query=水晶项链"
              },
              {
                  "name": "情侣表",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
                  "image_width": "273",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list?query=情侣表"
              }
          ]
      }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送请求获取轮播图数据  优化的手段可以通过es6的 promise解决这个问题
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     console.log(result);
    //     this.setData({
    //       swiperList: result.data.message
    //     })
        
    //   }
    // });
    this.getSwiper()
    this.getcatesList()
    this.getFloorList()
  },
  getSwiper () {
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(result => {
      // console.log(result)
      this.setData({
        swiperList: result.data.message
      })
    })
  },
  getcatesList() {
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result => {
      // console.log(result)
      this.setData({
        catesList: result.data.message
      })
    })
  },
  getFloorList() {
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
    .then(result => {
      console.log(result)
      this.setData({
        floorList: result.data.message
      })
    })
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