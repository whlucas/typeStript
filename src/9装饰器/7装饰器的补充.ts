// 1.参数装饰器
// 2.ts自动注入的元数据
// 3.AOP模式


// 1.参数装饰器
// 适用场景:依赖注入,依赖倒置, 一般没啥用
// 既然是参数装饰器就是要修饰函数中的参数

// 要求装饰器函数有三个参数
// 1.如果方法是静态的,则为类本身, 如果是实力方法,则为类的原型
// 2.方法名称
// 3.在参数列表中的索引,也就是你修饰的是第几个参数

function test(target:any, method: string, index: number){

}

class MyMath {
    sum(a:number, @test b:number){
        return a + b
    }

}

import "reflect-metadata"
// 2.ts自动注入的元数据
// 如果安装了reflect-metadata这个库
// 并且导入了该库
// 并且在某个成员上添加了元数据
// 并且启用了一个配置
// 则ts在编译结果中, 会将约束的类型作为元数据加入相应的位置

// 看一下编译结果
// 它还会帮你加一个元数据,这个元数据就会把这个成员的约束的类型加进去
// 这样一来TS中的类型检查将有机会在运行时进行

class User {
    @Reflect.metadata("a", "b")
    loginId: string = ""
    @Reflect.metadata("b", "c")
    loginPwd: string = ""
}


// 3.AOP(aspect oriented programming)模式
// 属于面向对象开发
// 将一些在业务中共同出现的功能块,横向切分,已达到分离切入点的功能


class RegUser {
    loginId: string = ""
    loginPwd: string = ""
    age: number = NaN
    pid: string = ""

    /**
     * 将用户保存到数据库
     */
    // 做这事的前提条件是要验证通过之后才可以
    // 验证这个功能是整个业务中经常出现,并且代码很多,很多验证的方式是共通的
    // 那么就把验证这个功能抽离出来,就是在一个纵向的业务中把其中一块业务横向的抽离出来
    // 好处是重复代码没有了
    save() {

    }
}