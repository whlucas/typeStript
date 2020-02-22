// 一般我们不把这些装饰的信息写到原型链上面

// 需要我们把这些元信息放到外面的一个地方去

// 那么就有一个库reflect-metadata库
// 这个库专门帮我们来维护类和属性的元数据

import "reflect-metadata"

// 用这个库来调用一个装饰器,要传两个值一个key,一个value
// key代表识别哪一个装饰器，值是我要赋值进去的东西
// 属性和类可以取相同的key值因为调用的方式不一样可以被区分
@Reflect.metadata("a", "一个类")
class AB {
    @Reflect.metadata("prop", "一个属性")
    prop1: string = ""
}

// 得到类装饰器里面的信息

// 第一个参数是定义的时候的装饰器的key,第二个参数是取哪一个对象
// 这样取出来的是附着在a这个对象上面的键名为a的元数据
// 这样取出来的就是"一个类"
Reflect.getMetadata("a", A)

// 得到成员装饰器里的信息
const a = new AB()
// 第一个是创建时候的key,第二个是哪个对象,第三个是属性名
// 就可以的到当时保存的信息
Reflect.getMetadata("prop", a, "prop1")






// 用这个库来改写之前的那个例子
// 装饰器函数


// 做一个类型的就用一个统一的key
// 这个key值一定要避免和其他的元数据冲突
// 所以用symbol来产生数据
const key = Symbol.for("descriptor")
// 这样来的话这两个key一定是不一样的
const key1 = Symbol.for("descriptor")

// 直接返回一个metadata函数就可以了
// 并且由于调用的时候他是知道你是在描述属性还是类的,所以这里可以把描述属性和类的合并成一个
function descriptor(description: string) {
    return Reflect.metadata(key, description)
}

// 写一个函数能够打印出对象中的装饰器里面的的信息
function printObj(obj: any) { 
    // 判断这个类有没有元数据,有的话就把他打印出来
    // 首先通过这个obj获取到他的构造类
    const cons = Object.getPrototypeOf(obj)
    // 传入key值和类
    // 如果有就输出
    if (Reflect.hasMetadata(key, cons)) {
        console.log(Reflect.getMetadata(key, cons))
    }
    else {
        // 如果没有在上面放装饰器,那么就没有,没有我就输出这个类的名字
        console.log(cons.constructor.name);
    }
    // 输出所有的属性的描述和属性值
    for (const k in obj) {
        // 判断属性上面有没有元数据
        if (Reflect.hasMetadata(key, obj, k)) {
            console.log(`\t${Reflect.getMetadata(key, obj, k)}:${obj[k]}`)
        }
        else {
            // 如果没有找到,也就是属性上没写这个装饰器,那么就输出他这个属性原本的数值
            console.log(`\t${k}:${obj[k]}`)
        }
    
    }
}

@descriptor("用户")
class User0 {

    // 这个装饰就写在属性列表里面
    // 写在constructor里面会报错
    @descriptor("账号")
    loginId: string = "1"

    @descriptor("密码")
    loginPwd: string = "123"
}


const u0 = new User0()

