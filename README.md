# VUE 基础知识


# node
动态获取路径： const path = require('path')
__filename //当前所运行的脚本所在位置
__dirname   // 当前所运行的脚本所在目录



--save：将保存配置信息到pacjage.json的dependencies节点中。

--save-dev：将保存配置信息到pacjage.json的devDependencies节点中。

dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

devDependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它。


# 正则表达式
    /\./ 转译 '.'




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

    navigator
        导航组件
        块级元素 默认会换行  可以直接加宽度和高度
        open-type 有效值

    rich-text 
        nodes属性来实现
        1.接收标签字符串

    button
        <button>默认按钮</button>
        <button size="mini">默认按钮</button>
        <button type="default">默认按钮</button>
        <button type="primary">默认按钮</button>
        <button type="warn">默认按钮</button>
        <button type="warn" plain>默认按钮</button>
        <button type="warn" plain loading>默认按钮</button>
        <button open-type="contact">contact</button>
        <button open-type="share">share</button>
        <button open-type="getPhoneNumber">getPhoneNumber</button>
        <button open-type="getUserInfo">getUserInfo</button>
        绑定一个 bindgetUserInfo 事件
        <button open-type="launchApp">launchApp</button>
        <button open-type="openSetting">openSetting</button>
        <button open-type="feedback">feedback</button>


        滚动触底时间  判断下一页数据

