// readonly 只读修饰符
// 编译之后消失

interface User4{
    // 带有readonly的熟悉,只能在最开始的时候给他赋值,赋值过后不能修改
    readonly id: string,
    name: string,
    age: number,
    // 如果这样定义,这个arr是不能被重新定义的,但是可以往这个arr里面加东西,比如用push,pop等
    readonly arr: string[],
    // 如果还希望数组不能改变
    readonly arr1: readonly string[]
}

let UU: User4 = {
    id: "ewa",
    name: "asdf",
    age: 11,
    arr: ["adsf"],
    arr1: ["adsf"]
}

// 我这里给他加了readonly
// 表示这个数组是一个只读的数组
// 数组里面就不会有push,pop,splice等函数了
// arr1[0] = 3 也就不行了
let arr1: readonly number[] = [3, 4, 5]

// 还有一种写法,和上面是一样的
let arr2: ReadonlyArray<number> = [3, 4, 6]

// 但是这个变量可以被重新定义,因为他是let ,不是const
arr1 = [1, 2, 3, 4]
