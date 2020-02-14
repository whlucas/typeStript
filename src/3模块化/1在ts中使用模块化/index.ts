// 前端领域中的模块化标准 ES6, commonjs

// TS中,导入和导出模块,统一使用ES6的模块化标准

// 注意导入模块的时候不要去添加后缀名,因为加了.ts,他编译之后就变成js了
import say1, {sum, name} from "./myModule"  // say1是默认导入

say1()
console.log(name)