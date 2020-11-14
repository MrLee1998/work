// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是  要从父组件中接收的数据
   */
  properties: {
    // aaa: {
    //   type: String,
    //   value: ''
    // }
    tabs: {
      type: Array,
      vale: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   * 页面js 文件中 存放事件回调函数的时候 放在data同层级下
   * 组件.js文件中 ，存放回调函数的时候 ，必须放在methods里
   *   */
  methods: {
    handleItemTap(res){
      // 绑定点击事件
      // console.log(res);
      const {index} = res.currentTarget.dataset;
      // 触发父组件中的自定义事件 同时传递数据给父组件
      this.triggerEvent('itemChange',{index})
      let {tabs} = this.data;
      // let tabs = JSON.parse(JSON.stringify(this.data.tabs))   最严谨的写法
      // let tabs = this.data.tabs  于 let {tabs} = this.data; 意思一样
      tabs.forEach((v,i) =>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
    }
  }
})
