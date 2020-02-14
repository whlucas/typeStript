// 如果我用原来的写,会发现导入过来的时候就没有类型检查了,就是any了
// const myModule = require("./myModule")

// 的这么写
import myModule = require("./myModule")

// 所以导入导出都得变
// 所以用es6的形式吧
