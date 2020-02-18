// this指向

// 如果直接调用函数（全局调用），this指向全局对象或undefined
// 如果使用对象.方法调用,this指向对象本身
// 如果是dom事件处理函数,浏览器帮你调用,它保证this指向事件处理对象
// 交通函数中的this,this指向函数声明时的函数的位置的指向
// bind,call,apply手动绑定this指向

const uu1 = {
    name: "ssf",
    age: 11,
    sayHello() {
        // 这个this由调用这个函数的时候决定
        // 所以他是any
        console.log(this.name, this.age)
    }
}

const say = uu1.sayHello
say() // 这么调用的话,this就指向global


class User4 {
    constructor(
        public name: string,
        public age: number
    ){}

    sayHello() {
        console.log(this, this.name, this.age)
    }
}

const user44 = new User4("sdaf", 5)
const sayHello1 = user44.sayHello
sayHello1() // 这个时候,这个函数里面的this就是undefined
// 因为class是es6的语法,里面使用了严格模式,他返回的就是undefined


// ts提供了一个选项
// 配置"noImplicitThis": true, 表示this隐式的被推断出any,也就是this要有明确的指向
// 然后对this进行约束

// 我定义第一个接口
// 并且在申明函数的时候,手动声明this的指向
// 申明之后就会严格的去检查this
// 申明的格式就是将this作为函数的第一个参数去申明这个this的指向
// 这里我申明这个函数里面的this指向IUser这个对象
interface IUser{
    name: string,
    age: number,
    sayHello(this: IUser): void
}

const myIUser: IUser = {
    name: "adsf",
    age: 18,
    sayHello(this: IUser) {
        console.log(this.name, this.age)
    }
}

const sayHello2 = myIUser.sayHello
// sayHello2() // 申明了this之后这个函数调用的时候就报错了



class User8 {
    constructor(
        public name: string,
        public age: number
    ) { }

    // 约束this的指向,并不是正真的参数
    sayHello(this: User8) {
        console.log(this, this.name, this.age)
    }
}

const user55 = new User8("sdaf", 5)
const sayHello3 = user55.sayHello
// sayHello3() // 这样也就报错了
