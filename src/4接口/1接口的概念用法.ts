// 拓展类型: 接口

// 用于约束类,对象,函数的契约(标准)

// 契约(标准)的形式:
// 1. API文档, 弱标准, 可能会不遵循这个文档
// 2. 代码约束, 强标准, 不可能不遵循这个标准

// 接口不会出现在编译后的代码中


// 1.接口约束对象
interface User2{
    name: string,
    age: number,
    sayHello: () => void // 约束一个方法,这个方法没有参数,返回类型是不返回
    // 还有一种写法
    sayHello1():void
}

let uu: User2 = {
    name: "sdfds",
    age: 33,
    sayHello: () => {
        console.log("Hello")
    },
    sayHello1() {
        console.log("Hello")
    }
}

// 我在写一个类型别名
// 发现他在约束对象的时候是一样的,但是接口在约束类的时候就不一样了
// 所以建议都用接口写
type User3 = {
    name: string,
    age: number
}



// 如果以后的代码里面经常出现这种需要进行约束的函数形式
// 那么我就可以对这种函数定义一个接口
// 在大括号里面没有任何的成员名称,表示这个大括号就是个定界符,这个接口就是约束里面的东西,就是约束了一个单个函数,而不是对象
interface Condition1 {
    (n: number): boolean
}

// 当然也可以对这个函数进行类型别名的约束
type Condition2 = (n: number) => boolean

// 我现在要对这个第二个参数 -- 一个回调函数进行约束
function sum(numbers: number[], callBack: Condition1) {
    let s = 0;
    numbers.forEach(n => {
        if (callBack(n)) {
            s += n
        }
    })
    return s
}

sum([3, 5, 7, 9, 10], n => n % 2 !== 0)



// 接口可以继承

interface A {
    T1: string
}

interface B {
    T2: number
}

interface C extends A,B {
    // 在字接口里面不能去重写父接口的成员T1
    // T1: number
    T3: number
}

let ab: C = {
    T1: "11",
    T2: 11,
    T3: 111
}

// 类型别名可以做到类似这种效果,需要通过&符号
// 他叫做交叉类型
// 他的意思是把所有的对象里面的东西进行合并,如果遇到相同的东西,那么就强行合并,容易出错

type A1 = {
    T1: string
}

type B1 = {
    T2: number
}

type C1 = {
    // 在交叉类型这个里面就可以对之前的进行重写
    T1: number, // 我这么约束之后,T1就变成即是数字又是字符串,所以就无法赋值了
    T3: number
} & A & B

let ab1: C = {
    T1: "11",
    T2: 11,
    T3: 111
}