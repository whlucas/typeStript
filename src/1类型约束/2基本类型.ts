// 基本类型
// number boolean [] object null undefined

// 里面装着数字的数组 有两种定义方式
let bum: number[]; // 这种是一个语法糖,实际上就是下面那个
let nums: Array<number>;

let u:object;
// 什么时候用到object,函数传入的值是对象的情况
function printValues(obj:object){
    const vals = Object.values(obj)
    vals.forEach(v => console.log(v))
}


// null 和 undefined
// 这两个类型都可以赋值给其他类型,比如undefined赋值给number就不报错
// 但如果这样也可以的话就有容易出错了,我们要避免这种情况
// 我们就要在配置文件中配置一下,加一个"strictNullChecks"
// 这个表示更加严格的空类型检查,加了这个之后null和undefined就不能赋值给其他类型了,只能赋值给自身
