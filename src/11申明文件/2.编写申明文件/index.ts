
// 我安装了lodash模块
// 发现报错了,不能使用
// 有一个方法是用commonjs的方式导入进来,但是这样获得不了类型检查
// const _ = require("lodash")
import _ from "lodash"

const newArr = _.chunk([1, 2, 3, 4], 2)


// 如果我真想用lodash的申明文件
// 可以直接安装 @types/lodash