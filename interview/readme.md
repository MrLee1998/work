# js 基础知识
    
# 原始类型
    boolean null undefined string number symbol

# null 是对象？
    是 类型判断时为 object
    000 代码是对象  null的二进制都是 0 typeof(null) === object

    0.1 + 0.2 ！= 0.3 原因  精度丢失
    
# 原始类型和对象类型有什么差别？
原始类型存的是值  不具有属性
对象类型存的是地址 （指针）

# typeof能正确判断的类型是？
    typeof 只能判断原始类型 (null 除外)
    instanceof 只能判断引用类型

# 让instanceof 也能判断原始类型

# instanceof 原理
    根据属性判断的

# 类型转换
    转为布尔值
    转为数字
    转为字符串
# 对象转原始值
    对象转类型的时候会调用内置的 [[ToPrimitive]]
    - 如果已经是原始类型 那就不用转换
    - 调用 X.valueOf(), 如果转为了原始类型， 就返回值
    - 调用 X.toString(), 如果转为了原始类型， 就返回值
    - 如果还没转为原始类型 ， 就报错


# js四则运算
    +: 运算中其中乙方为字符串 ，另一方一定会转换为字符串
        如果一方不是字符串， 那就会把他转换为数字 或 字符串运算
除假发外 只要其中一方是数字，另一方一定会转为数字来运算



#  == 和 === 区别？  equal.js

# 什么是闭包?   函数体里的函数被拿到外部调用然后产生闭包

# 深浅拷贝 copy.js
    Object.assign() 如果拷贝的属性是原始值类型 那么是深拷贝 
                    如果是引用类型 那么是浅拷贝
    JSON.parse(JSON.stringify()) 的缺陷 
    1. 会忽略undefined
    2. 会忽略Symbol
    3. 不能序列化
    4. 不能解决循环引用的对象