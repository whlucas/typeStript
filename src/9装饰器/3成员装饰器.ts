// 类中的属性有: 属性, 方法

// 属性装饰器也是一个函数, 该函数需要两个函数
// 1. 如果是这个属性是静态属性,则要传类本身; 如果是实例属性,则要传类的原型(prototype)
// 2. 固定为一个字符串,表示属性名
// 3. 第三个是该类型成员的描述符

type constructor1 = new (...args: any[]) => object

function decor1(target: any, key: string) {
    // 就是实例属性这里输出的就是C.prototype和属性名
    console.log(target, key)

    // 我拿到了原型就可以往上面加东西
    if (!target.__props){
        target.__props = []
    }
    target.__props.push(key)

}

function decor2(target: any, key: string) {
    // 修饰静态这里输出的就是C和属性名
    console.log(target, key)

}

// 这种函数叫做装饰器工厂
function decor3 () {
    return function (target: any, key: string) {
        console.log(target, key)

    }
}


// 方法装饰器也是个函数,他需要三个参数
// 1. 如果是这个方法是静态方法, 则要传类本身; 如果是实例方法, 则要传类的原型(prototype)
// 2. 固定为一个字符串, 表示方法名
// 3. 描述符对象 (就是一个配置对象)
function decor4() {
    // 这里可以传两个参数,因为方法也是属性
    // 但是还可以传第三个参数,ts给他了一种类型专门表示描述符对象
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        // 这个第三个参数它会帮你传进来这个方法的默认的配置对象
        console.log(target, key, descriptor)
        // 我把这个配置的这个给改了,那么这个方法在for in遍历的时候就可以被遍历到了
        // 那么我希望被遍历到的方法前面都可以加这个装饰器
        descriptor.enumerable = true

        // 如果想让他只读
        // descriptor.writable = false
    }
}

// 写一个调用这个方法就会得到一个警告这个方法过期了的的提示的装饰器
// 这个装饰器将被所有的类里面的方法通用
// 就可以不用删掉这个方法并且给你个提示,并且很方便恢复
function decor5() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.value = function() {
            console.warn(key + "方法已过期")
        }
    }
}

// 检查参数
function decor6() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const func = descriptor.value;
        descriptor.value = function(...args: any[]) {
            for(let num of args) {
                if('number' !== typeof num) {
                    throw new Error(`"${num}" is not a number`)
                }
            }
            // 如果都对了就执行原函数
            return func.apply(this, args)
        }
    }
}


class C {
    @decor1
    prop1: string = ""

    @decor2
    static prop2: string = ""

    // 也可以这么写
    @decor3()
    prop3: string = ""

    @decor4()
    method1() {

    }

    // 方法和属性都可以有多个装饰器修饰
    // 调用的顺序还是先decor5后decor4
    @decor4()
    @decor5()
    method2() {

    }

    constructor() {
        
    }
}