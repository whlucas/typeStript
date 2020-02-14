ts需要tsc进行编译转换

# 静态的

类型检查发生的时间是在编译的时候，而不是运行的时候

TS不参与任何运行时的类型检查

**TS的常识**

- 2012年微软发布
微软的Anders Hejlsberg 负责开发
开源、拥抱ES标准

**额外的惊喜**

有了类型检查之后，增强了面向对象的开发

# 在node中搭建TS环境
npm i typescript -g

装好了就可以用tsc来编译.ts文件
tsc index.ts

默认情况下，ts会做出一些假设
1. 假设当前的执行环境是浏览器环境
2. 如果代码中没有使用模块化语句(import export)，便认为改代码是在全局执行的
3. 编译的目标代码是ES3

有两种方式更改以上假设
1. 在使用tsc命令行的时候加上选项参数
2. 使用ts配置文件来修改以上假设

两种方式来写配置文件
1. 直接新建一个tsconfig.json
2. 使用命令行tsc --init (常用)

在有了配置文件之后,使用tsc进行编译时就不能再跟着文件名了,否则会忽略配置文件,直接tsc就可以了

# @type/node
还需要一个库@type/node的库来支持

npm i -D @types/node 因为只有开发阶段需要,所以就-D就行

@types是一个ts官方类型库,其中包含很多对js代码的类型描述

JQuery:用js写的,没有类型检查
但我们这里需要在ts里面使用jq,就可以去安装@types/jquery,
这个库@types/jquery就是为jquery添加了类型定义

所以这个@type/node就是让node环境支持ts的一个库

# 使用第三方库简化流程

ts-node 将ts代码在内存中完成编译,同时完成运行
npm i -g ts-node

执行命令行ts-node src/index.ts

再装一个nodemon让他自动识别文件变化重启服务

npm i -g nodemon

执行nodemon -e ts --watch src --exec ts-node src/index.ts
-e ts 表示监控的拓展名是.ts文件,别的不监控
--watch src表示只监控src文件夹里面的东西

把这个写到package.json里面去,直接npm run dev

# 脚本
rd 表示删除 /s 表示删除文件夹里面的东西 /q表示不要询问全都选yes dist 表示删除dist文件夹
& tsc 表示执行完前面的再去执行tsc
build": "rd /s /q dist & tsc
