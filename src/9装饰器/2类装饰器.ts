// 类装饰器的本质是一个函数,该函数接收一个函数,表示类本身(构造函数本身)
// 使用装饰器时是@后面跟一个函数,该函数接收一个参数,表示类本身(构造函数本身)

// 如何约束一个变量为一个不知道具体名字的类
// 第一种方式是将他约束为一个函数Function 类的本质是function,但是这种方式就太宽泛了,他不知道这个函数是一个可以创建对象的函数
// 第二种方式就是下面这种,表示这个参数他是一个类

// 使用装饰器之前需要配置一下
// "experimentalDecorators": true

// 装饰器函数的运行时间,是在类定义后直接运行,不是在创建对象之后

// 类装饰器可以具有的返回值
// 1. void:仅运行函数
// 2. 返回一个新的类: 会将新的类替换掉装饰目标


// 这个target就是我这个装饰器所装饰的类,它会帮我传进来
function test(target: new () => object) {
    // 比如我可以返回一个AAA的子类B
    // 但是不建议这么写,因为我实际上用的是B而不是AAA
    // 他不知道到底是哪个类用了这个装饰器,所以类型检查就会出问题
    return class B extends target {

    }
}

// 这个new后面的()里面是构造函数里面的参数,这个里面的参数类型要和传进来的那个类的构造函数里面的参数所匹配
// 但是如果你要这个装饰器的参数通用的话就像下面那么写
function test1(target: new (...args: any[]) => object) {
    // 获取所有的成员签名
    const desc = Object.getOwnPropertyDescriptors(target.prototype)

    for (const key of Object.keys(desc)){
        if (key === 'constructor') {
            continue;
        }

        const func = desc[key].value;

        // 如果是函数操作一下
        if('function' === typeof func){
            Object.defineProperty(target.prototype, key, {
                value(...args: any) {
                    // 打印函数名
                    console.log("before" + key)
                    // 再执行一下
                    const ret = func.apply(this, args)
                    // 再打印函数名
                    console.log("after" + key)

                    return  ret
                }
            })
        }
    }
    
}

// 我这里把这个装饰器函数给这个类之后,它就会把这个AAA传给这个函数的target
@test1
class AAA {
    constructor(
        public name: string
    ) {

    }

    add(...nums: number[]) {
        return nums.reduce((p, n) => (p + n), 0)
    }
}


// 我换一种形式,我希望这个class上面的装饰器可以传参
function test2(str: string){
    // 那么我需要给类装饰器的那个位置返回一个有类装饰器格式的函数
    // 1.只有一个参数传一个类
    // 2.返回值是一个类或者不返回
    return function(target: new (...args: any[]) => object) {

    }
}

@test2("这是一个类")
class AAA1 {
    constructor(
        public name: string
    ) {

    }
}


// 多个装饰器函数的情况
type constructor = new (...arg: any[]) => object

function d1(target: constructor) {
    console.log('d1')
}

function d2(target: constructor) {
    console.log('d2')
}

// 他的运行顺序是d2,d1,倒着运行,离class近的先运行
@d1
@d2
class AAA2 {
    constructor(
        public name: string
    ) {

    }
}


// 一道面试题
function d11() {
    console.log('d11')
    return function(target: constructor) {
        console.log('d11 decorator')
    }
}

function d22() {
    console.log('d22')
    return function (target: constructor) {
        console.log('d22 decorator')
    }
}
// 输出顺序
// d11, d22, d22 decorator, d11 decorator
// 先运行两个函数得到两个装饰器,然后定义类,然后按照装饰器执行的顺序执行装饰器函数
@d11()
@d22()
class AAA3 {
    constructor(
        public name: string
    ) {

    }
}


