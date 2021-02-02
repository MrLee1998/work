# 学习系统
    客户？ 我
    需求 存储同学信息 ， OA
    - 学籍
        1. 同学信息录入 登录及完善系统
            原型设计表单 小piu
        2. 照片上传功能
            云开发的文件上传
    - 项目形式
        1. 小程序 用户端
            vant + 云开发
            微信/QQ小程序
        2. PC 端 Admin 后台系统
            VUE + ElementUI
            分班级 分页 列表 
            详情

    - 功能需求细分
        1. 角色区分 role -1>1>2>3>4>5> 角色代表 数值越大权限越大
            Admin/Teacher/StuAdmin/Student|TryStudent
                user _id uid(学号)  project_num has_resume  has_job shixi_company zhuangzheng_company  shixi_paying zhuangzheng_paying score
                class_id
                    class
                        class_id class_name
        2. 试听功能|邀请 运营 分享
            生成图片功能  百度一下 https://juejin.im/post/6844903663840788493
        3. 学习轨迹和规划系统
            -github的提交 图
            收集用户的GitHub账号  https://github.com/MrLee1998  获取记录存储的图片
            position-relative ->图片
            爬虫
            - 主动提交
                1. 每个人都一张图 新的提交会覆盖旧的图片
                    gitPic_id url uid class_id
                2. ts   标红
                3. 列表 班级class_id
            - 文章
                articles
                _id uid title desc ts is_top like_num
                url 文章发布地址
                like_num 的计算
                user like_num 0 articles count
                >0 写文章时 +1
                post_article 
            - 项目 
            - leetcode 算法 github
            - 外包
                即时计件 倒计时 计算工作单元时长 
                计算提交记录
                付费计算
                开源出去