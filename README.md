# work



# 微信小程序
    默认情况下，我们不写
    wx: for-item="item" wx: for-index="index"
    一层循环可省略 

    对象循环
        wx: for="{{对象}}" wx: for-item="item" wx: for-index="index"

    block
        占位符标签
    
    条件渲染
        wx:if="{{true/false}}"
        hidden

        什么场景使用？
            1. 当标签不是频繁使用的时候，用wx:if
                直接将标签从页面移除
            2. 当标签频繁使用的时候 ， 用hidden
                只是将标签隐藏  不能和display 定位的时候使用  

    数据绑定 
    this.setData({
        key: value
    })

    页面宽度的适配
        calc属性的应用 css wx 都支持

    基础组件
        text  selectable 长按可以复制内容  只有该标签支持此功能     
              decode 对文本进行解码


    符号编码引用

    image
        lazy-load 懒加载  直接调用属性