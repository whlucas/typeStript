let c: {
    name: string,
    age: number,
    gender: "男" | "女"
}
// 如果说我这里定义这个函数的返回值是一个对象形式的数组
// 那么就会出现重复的代码
function getUsers(): {
    name: string,
    age: number,
    gender: "男" | "女"
}[] {
    return [];
}

// 我们应该把这个对象提出来定义一个名字

// 类型别名
// 对已知的一些类型定义名称
type User = {
    name: string,
    age: number,
    gender: "男" | "女"
}

let us:User

type Gender = "男" | "女"

type User1 = {
    gender: Gender
}