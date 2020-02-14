// 原来是这么写的

// class Use3r {
//     constructor(name:string, age:number){
//         this.name = name,
//         this.age = age
//     }
// }


// 但是报错了
// 因为ts认为一个对象被创建的时候他的,属性是确定的,不能在里面再次赋值

// 就像这样
const obj = {}
// 这样再去赋值它就认为是有问题的
// obj.a = 1


// 在ts中,他要求你是用属性列表来定义属性
class User5 {
    // 首先定义属性
    name: string
    age: number
    // 我的初始化的工作还可以在这里完成,在这里等号后面就是默认值
    // 本来这个默认值是写在构造函数里面的,但是写在这里也可以
    gender: "男" | "女" = "男"

    // 省份证号可能后再赋值,所以这里可以定义为
    // pid: string | undefined
    // 或者
    pid?: string

    // 我希望这个值一旦赋了值就不要被改变
    readonly id: number

    // 我先面的两个属性只供内部使用
    // 外面的人没法访问
    // 则可以添加访问修饰符

    // 访问修饰符可以控制类中的某个成员的访问权限
    // public: 默认的访问修饰符,公开的,所有的代码均可访问
    // private: 私有的,只有在这个类中可以访问
    // protect: 暂时没讲

    private publishNumber: number = 3;  // 每天一共可以发多少文章
    private curNumber: number = 0;  // 当前可以发布多少文章

    // 如果有一个属性是在new的时候传进来并且直接赋值的
    // 那么可以简写为name1的形式,不用再写属性列表了,不用再在constructor里面赋值了
    constructor(public name1: string, name: string, age: number, gender: "男" | "女" = "男") {
        this.name = name,
        this.age = age,
        this.id =  Math.random()
    }

    

    // 我写一个方法来修改我内部的值
    publish(title: string){
        if(this.curNumber < this.publishNumber){
            console.log("发布一篇文章:" + title)
            this.curNumber ++;
        }else{
            console.log("发布文章数已达到上线")
        }
    }

}

const user4 = new User5("aaa", "aa", 2);
// 由于进行了属性声明
// 在之后就无法添加多的属性了
// u.pid = "22333"

// 我希望我的这个对象在属性初始化的时候要求更加的严格
// 比如定义了属性列表,但是没有在构造函数里面写,比如go
// 在配置里面写一个strictPropertyInitialization: true