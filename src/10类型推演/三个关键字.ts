// 类型验算
// 根据已知的类型,计算出新的类型

// 三个关键字typeof   keyof   in

// typeof
// ts中的typeof,书写的位置在类型约束上
// 1. 表示获取某个数据的类型 

const a1 = "sadf"
// 如果我不知道a的类型,就可以用这个关键字将b的类型赋值给a
const b1: typeof a1 = "sadf"


// 2. 当typeof作用于类的时候,得到的类型,是该类的构造函数
class User2 {
    loginId: string = ""
    loginPwd: string = ""
}

// 我这里希望这个函数的功能是返回我的这个User2的实例对象
// *****注意: 但是我这里如何去约束我这个cls的类型,如果我约束为User2,那么他表示的是我传入的是User2的一个实例对象
// 但是我这里传入的却是一个User2的构造类,导致类型不匹配
// 一个方法是用这种方式约束 new() => User
// 还有一种方式是typeof User2,这个和上面是一个意思
function createUser(cls: typeof User2): User2 {
    return new cls()
}

const u2 = createUser(User2)




// keyof
// 作用于类,接口,类型别名,用于获取其他类型中的所有成员组成的联合类型

class User10 {
    loginId: string = ""
    loginPwd: string = ""
}

const user10 = new User10()
// 我要打印我这个用户对象的属性名
function printUserProperty(obj: User10, prop: string){
    // 我取值的时候要这么取
    // 现在要报错,因为他不能确定传过来的东西这个对象里面一定有
    // 除非我们约束prop的时候这么写"loginId" | "longinPwd"
    // console.log(obj[prop])
}

// 但是我们不能把这个对象里面东西全部都联合一遍,就太恶心了
// 需要直接定义为某个类型所有字段中的一个
// 他是动态读的，对象里面的成员修改了他也会修改
function printUserProperty1(obj: User10, prop: keyof User10) {
    console.log(obj[prop])
}

// 这里注意,该key同样适用于对象,keyof后面跟的是这个对象的接口



// in 关键字
// 该关键字往往和keyof连用
// 用于限制某个索引器的取值范围

interface User11{
    loginId: string
    loginPwd: string
    age: string
}

// 被我这个类型别名约束的对象就可以加属性
type Obj = {


    // [p: string]: string
    // 但是我希望你只能给我加某几个参数,不能乱加
    // 把冒号去掉, 用in关键字
    // [p in "loginId" | "loginPwd" | "age"]: string


    // 我这个代码可以用keyof简化
    // 这个效果就是将User11的所有属性值类型变成字符串,得到一个新类型
    [p in keyof User11]: string


    // 我写了上面的代码就相当于我写了下面的代码
    // loginId: string
    // loginPwd: string
    // age: string

}

type User11Readonly = {
    // 这么写这个Obj1就是和User11的类型完全一致了
    // [p in keyof User]: User11[p]
    // 我需要将User11里面所有的变量变成只读的给一个新的类型,就这么写
    // 要把他全部都变成可选的就加?
    readonly [p in keyof User11]?: User11[p]
}

// 我想让他变得通用,加上泛型,在使用这个的时候给他传一个类型就行
type ReadonlyObj<T> = {
    readonly [p in keyof T]?: T[p]
}

// 写一个变字符串的
type String1<T> = {
    [p in keyof T]: string
}

const u3: ReadonlyObj<User11> = {
    loginId: "sdf",
    loginPwd: "adsf",
    age: "adsf"
}
