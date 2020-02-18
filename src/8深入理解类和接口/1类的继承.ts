// 面向对象
// Oriented Object 简称OO  翻译: 基于 事物

// 重写
// 子类中可以重写父类的成员 属性和函数都可以重写
// 但类型要和父类相同

// 类型匹配
// 鸭子辨型法
// 子类的对象都可以赋值给父类

class Tank {
    sayHello() {
        console.log(111)
    }
}

class PlayerTank extends Tank {
    sayHello() {
        console.log(222)
    }

    test() {
        super.sayHello()  // 这个调用的是父类的sayHello
        // 这个调用的是子类的sayHello,如果子类没有sayHello,则这个调用的也是父类的
        this.sayHello()  
    }
}

// 但是如果类型定义时定义的是父类Tank类型,那么之后这个变量就只能使用父类Tank的成员
let p1: Tank = new PlayerTank()

// 但可以通过这种方式来让p1来使用PalyerTank类里面的成员
if (p1 instanceof PlayerTank) {
    
}


// 继承的单根性
// 每个类最多只能拥有一个父类

// 继承的传递新
// 如果A是B的父类,B是C的父类,则A是C的父类