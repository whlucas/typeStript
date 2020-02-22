// TS中预设的类型验算

// Partial<T> 将类型T中的成员变成可选

// Required<T> 将类型T中的成员变成必填

// Readonly<T> 将类型T中的成员变成只读

// Exclude<T, U> 从T剔除出可以赋值给U的类型

interface User12 {
    age: number
    name: string
}

interface User13{

}

// 这个u12的类型就是a或者b
const u12: Exclude<"a" | "b" | "c" | "d", "b" | "c"> = "a"

type T = "男" | "女" | null | undefined

// 当我不想改这个类型,还想去除掉这个类型里面的null和undefined
type NEWT = Exclude<T, null | undefined>


// Extract<T, U> 提取T中可以赋值给U的类型,和上一个相反,只保留t和u都有的那些类型

// NonNullable<T> 从T中剔除null和underfined  针对联合类型,把联合类型中的null和字符串去了

// ReturnType<T> 获取函数的返回值类型
type func = () => number
// 把上面这个函数的返回值类型,定义给一个新的类型
type ReturnType1 = ReturnType<func>

function sum(a: number, b: number){
    return a + b
}
// 我想把这个函数的返回值去赋值给一个类型
// 不能去直接写这个sum,需要去写这个sum的类型
// 这个typeof就是取出这个函数的返回值类型
let a2: ReturnType<typeof sum>

// InstanceType<T> 获取构造函数类型的实例类型

class User14{

}

// 这个User14就是把u14约束为User14实例化后的对象
let u14: User14
// 那么还有一种约束方法就是用这个东西来约束
// 给他传的是构造函数而不是实例化对象,但是给他约束为的是User14的实例化的对象
let u141: InstanceType<typeof User14>

// 当我们要使用类型别名来约束构造函数的时候
type twoParamsConstructor = new (arg1: any, arg2: any) => User14

const ABC: twoParamsConstructor = class Test extends User14{
    // 这里上面约束的是两个参数,这里没有参数,或者一个两个参数都可以,只要不是三个参数就可以了

    // 这里返回的不是User14,而是Test,为什么没报错
    // 因为User14里面没有东西,我这里这个构造出来也没有东西,所以匹配,东西可以多但是不能少
    // 如果User14里面有的话我们最简单的方法就是继承一下User14
    constructor() {
        super()
    }
}

// 这里我想知道twoParamsConstructor这个构造函数返回的类型是啥
// 就可以用上面的那个他给你提供的类型验算,要传入一个描述类的东西,就是我定义的这个type
type Inst = InstanceType<twoParamsConstructor>