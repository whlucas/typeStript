// 发现编译结果配置为es6的时候,编译出来的文件和原来的没区别

// 设置成commonjs之后
// 他里面没有export了, 就把所有的要导出的东西都挂载到exports对象上面了
// 也没有import了,它就用require的方式导入进来,并赋值给一个对象,之后去操作这个对象上面的属性,实际上这个对象就是他前面导出的exports

// 如果用es6的形式写了一个默认导入,但commonjs里面没有默认导入,就把这个东西给你挂在到exports.default上面,使用的时候就只能使用.default了,而不是你自己命名的东西


// 如果我们用es6的形式去导入一个fs模块会报错
// import fs from "fs"
// 因为在编译过后,他实际上用的是exports.default.xxx,多了一个default

// 可以通过下面这种方式导入
import {readFileSync} from "fs"

// 但这这种方式需要一个一个来,就很麻烦,我想一下子全部都导入进来
import * as fs from "fs"

// 但我就非要用开始的那种报错的方式import fs from "fs"
// 需要加一个配置 esModuleInterop


