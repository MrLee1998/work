# VUE 基础知识


# node
动态获取路径： const path = require('path')
__filename //当前所运行的脚本所在位置
__dirname   // 当前所运行的脚本所在目录



--save：将保存配置信息到pacjage.json的dependencies节点中。

--save-dev：将保存配置信息到pacjage.json的devDependencies节点中。

dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

devDependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它。