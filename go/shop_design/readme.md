# 电商网站设计
    section  html语义化
    module 模块化
    - 地址模块
    - 支付方式模块
    - 店铺模块
        - 商品模块
        - 商品基础信息模块
        - 商品优惠信息模块
        - 商品售后模块
        - 物流模块
        - 店铺商品金额信息模块
    - 发票模块
    - 优惠卷选择模块
    - 平台积分模块
    - 礼品卡模块
    - 商品金额总和模块
    - 地址提示模块
    - 费用支付模块

## 地址模块
    - 首先，用户设置的默认地址 字段
    - 如果没有默认地址， 则返回最近下单的地址
    
### 设计表结构
    consignee 收货人姓名
    e-mail 邮箱
    telephone 手机号
        地址选择  *方便
    country {id: 86, name: "中国"}
    province
    city
    country
    street
    detail-address
    postal_code 
    address_id
    is_default Boolean
    label 
    longitude
    latitude