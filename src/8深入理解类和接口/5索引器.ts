// 索引器 对象[]
// 作用: 在严格和检查下,可以为类动态增加成员

interface obj4 {
    [index: string]: any,
    "name": string
    "age": number
    "my-pid": string
}

const obj4:obj4 = {
    "name": "ab",
    "age": 22,
    "my-pid": '111'
}
// 取值这么取
obj4["my-pid"]

// 注意如果想要用for in循环对象,这个对象的接口里面必须要有索引器
for(let key in obj4){
    // 这个obj[key]就是索引器
    console.log(key, obj4[key])
}

class MyUser {

    // 这是一个索引器
    // []里面的属性名约定必须要传一个字符串
    // :后面表示属性值也得是字符串,也就是成员的返回值也得是字符串,所以之后这个里面所有的成员就都得是字符串了,所以也就不能有函数了,且属性也得是字符串类型,所以这里只能写any类型
    [prop: string]: any

    constructor(
        public name: string,
        public age: number
    ){

    }

    // 也可以这么写
    ["sayHello"]() {

    }

    // 也可以这么写
    [obj4.name]() {

    }
}

// 当我们读取了这个类中不存在的属性的时候
// 使用这种方式就不会报错
// ts中不会对这种情况做检查
// 加一个配置就可以对这种的取值做检查了 
// noImpliciAny 这个是配置为true了,它就给你报错了
// console.log(u["pid"])

const myUser = new MyUser('asdf', 33)
// 但是当我们设置了索引器之后
myUser["pid"] = "ds" // 这种方式就可以了,只要符合上面类里面定义的索引器的格式
// 并且以下这种添加属性也就可以了
myUser.pid1 = 3



// 在索引器中,key的类型可以是字符串,可以是数字,数组的key就是数字
class MyArray{
    // 写一个索引器,这个类再实例化后就可以拓展了
    // 索引器在类里面的书写要写在最顶端
    [index: number]: string
    0:string = "1"
    1:string = "adf"
    2:string = "dsafadsf"
}

const my = new MyArray()
// 只要符合索引器的规定就可以进行拓展了
my[5] = "dsf"


// 一个题
const arr3: any = []
arr3[0] = 1;
arr3["0"] = 3

console.log(arr3[0]) // 输出为什么是3
// 在js中所有的成员名本质上,都是字符串
// 如果使用数字作为成员名,会自动转换为字符串

class A {
    // 可以写两个
    // 但这两个的类型必须的是一样的,或者key为数字的值必须要是key为字符串的值的子类型
    // 因为不管是数字还是字符串作为索引,最后都会变成字符串,所以就矛盾了
    [prop: number]: string
    [prop: string]: string
}

const a3 = new A()
a3[0] = "sadf"
a3["adf"] = "sdaf"
