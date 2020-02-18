// 接口和类的连用

// 举例
// 有一个马戏团,马戏团中有很多动物,包括:狮子,老虎,猴子,狗
// 这些动物都具有一些共同的特征:名字,年龄,种类名称,还包含一个共同的方法:打招呼
// 他们各自有各自的技能,但技能是可以通过训练改变的

// 马戏团中有以下常见的技能：
// 火圈表演： 单火圈， 双火圈
// 平衡表演： 独木桥，走钢丝
// 智慧表演： 算术题，跳舞

// 比如狮子和老虎能进行火圈表演,猴子能平衡表演,狗能智慧表演

abstract class Animal {
    abstract type: string

    constructor(
        public name: string,
        public age: number
    ){}

    sayHello() {
        console.log(this.name + this.age)
    }
}

// 狮子里会单火圈和双火圈
// 当我们不使用接口的时候,对能力的函数没有强约束力
// 比如你要进行火圈表演就一定要有双火圈和单火圈两个内容,并且火圈函数的参数没有约定

class Lion extends Animal {
    type: string = "狮子"
    singleFile() {
        console.log("单火圈")
    }
    doubleFile() {
        console.log("双火圈")
    }
}

class Tiger extends Animal {
    type: string = "老虎"
    singleFile() {
        console.log("单火圈")
    }
    doubleFile() {
        console.log("双火圈")
    }
}

class Monkey extends Animal {
    type: string = "猴子"
}

class Dog extends Animal {
    type: string = "狗"
}


const animals: Animal[] = [
    new Lion("王富贵", 12),
    new Tiger("坤坤", 21),
    new Monkey("小六", 2),
    new Dog("旺财", 4)
]

// 所有动物打招呼
animals.forEach(a => a.sayHello())

// 所有会火圈动物的来进行火圈表演
animals.forEach(a => {
    // 这样有一个问题是,本来我想判断能力,但是我判断了类型
    // 如果这类型里面没有这能力了就会报错
    if(a instanceof Lion || a instanceof Tiger){
        a.singleFile()
        a.doubleFile()
    }
})

// 所以系统中缺少了对能力的定义


// 用接口来定义能力
interface IFireShow {
    singleFire(): void
    doubleFire(): void
}

interface IWisdomShow{
    suanshuti(): void
    tioawu(): void
}

interface IBalanceShow {
    dumuqiao(): void
    zougangsi(): void
}

// 利用接口对上面的类进行重写
abstract class Animal1 {
    abstract type: string

    constructor(
        public name: string,
        public age: number
    ) { }

    sayHello() {
        console.log(this.name + this.age)
    }
}

// 用implements关键字来实现接口里面的东西
class Lion1 extends Animal implements IFireShow {
    type: string = "狮子"
    singleFire() {
        console.log("单火圈")
    }
    doubleFire() {
        console.log("双火圈")
    }
}

class Tiger1 extends Animal implements IFireShow {
    type: string = "老虎"
    singleFire() {
        console.log("单火圈")
    }
    doubleFire() {
        console.log("双火圈")
    }
}

class Monkey1 extends Animal implements IWisdomShow {
    type: string = "猴子"
    suanshuti(): void {
        console.log("算术题")
    }
    tioawu(): void {
        console.log("跳舞")
    }
}

class Dog1 extends Animal implements IBalanceShow {
    type: string = "狗"
    dumuqiao(): void {
        console.log("独木桥")
    }
    zougangsi(): void {
        console.log("走钢丝")
    }
}


const animals1: Animal[] = [
    new Lion("王富贵", 12),
    new Tiger("坤坤", 21),
    new Monkey("小六", 2),
    new Dog("旺财", 4)
]

// 写一个类型保护函数
// 这个函数的返回结果是ani是不是IFireShow这个类型
// 如果返回的是true则这个参数是这个类型,如果返回false,则他不是
// 通常写类型保护函数的时候,参数直接是object类型就好了,不用非要写他是Animal类型,ts它会不理解,会报错,ts认为Animal类型里面没有借口里面的这两个函数,他不知道Animal里面有子类
// 这个函数一般是和接口放到一个文件里面
function hasFireShow(ani: object): ani is IFireShow {
    if ((a as unknown as IFireShow).singleFire && (a as unknown as IFireShow).singleFire) {
        return true
    }
    return false
}

animals1.forEach(a => {
    // 这里判断一下这个a里面有没有那两个函数
    // 为了不报错要先把a转换成unKnown再转换成IFireShow再去判断这个里面有没有singleFire函数
    // if ((a as unknown as IFireShow).singleFire && (a as unknown as IFireShow).singleFire) {
        // 但是这样写里面又要报错,所以需要写一个类型保护函数
        // a.singleFile()
        // a.doubleFile()
    // }

    // 我有了上面的类型保护函数,这里就简单了
    // 这么写解除了类型和能力的偶合,只用关心有没有能力,而不用关心有没有动物
    if (hasFireShow(a)) {
        a.singleFire()
        a.doubleFire()
    }
})


// 接口可以继承类，表示该类的所有成员都在接口中

class AA {
    a1: string = ""
    a2: string = ""
    a3: string = ""
}

class BB {
    b1: number = 0
    b2: number = 0
    b3: number = 0
}

// 表示这个接口C拥有AA,和BB的所有成员
interface CC extends AA, BB {

}

const la: CC = {
    a1: "",
    a2: "",
    a3: "",
    b1: 1,
    b2: 2,
    b3: 3
}