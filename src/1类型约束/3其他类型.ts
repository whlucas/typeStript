// 联合类型
// 可以赋值为多种类型
let temp: string | undefined

if(typeof name === 'string'){
    // 类型保护
    // 当对某一个变量进行类型判断之后,在判断的语句块中便可以确定他的确切类型
    // 通常情况下可以使用typeof来触发类型保护
    // 这里name.后面它就会有只能提示了,因为他判断出来这是一个字符串了
}

// void类型
// 用于约束函数的返回值,表示这个函数没有任何返回

// never类型
// 用于约束函数的返回值,表示这个函数永远不可能就结束
// 比如
function throwError(msg: string): never {
    throw new Error(msg)
};


// 字面量类型: 使用一个值进行约束
let a:"A"; // 表示和这个额变量只能赋值为"A"
let b:1; // 只能赋值为2

// 用到的情况
let gender: "男" | "女"

let arr:[]; // 表示arr永远只能取值为一个空数组

// 这个user对象里面规定了要有什么属性,属性的类型是啥
// 但一般不使用这种约束
let user:{
    name: string,
    age: number
}

// 元祖类型 (Tuple)
// 表示一个固定长度的数组,并且数组中每一项的类型确定

// 这个数组只能有两项,第一项是字符串,第二项是数字
let array: [string, number]

// any类型
// 可以绕过类型检查，因此，any类型的数据可以赋值给任意类型