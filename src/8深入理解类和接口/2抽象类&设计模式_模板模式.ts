// 为什么需要抽象类

// 在这个类前面加一个abstract 表示这是一个抽象类,不能被new,他只是为了去掉一些重复的代码
abstract class Chess {
    x: number = 0
    y: number = 0

    // 抽象成员
    // 我在父类里面知道某一个成员是必须存在的,但不知道这个棋子叫啥
    // 所以应该有一个强约束,让要继承该类型的子类,必须要实现该成员
    // 则需要在这个成员前面写一个abstract,让他成为抽象成员
    // 抽象成员只能在抽象类中存在
    abstract readonly name: string = ""

    // 抽象成员
    // 必须要有一个移动的功能,但不知道这个方法具体怎么实现,但子类必须要实现
    abstract move(targetX: number, targetY: number): boolean
}

// 子类也可以是抽象类,不去实现父类的成员,交给子类的子类去实现所有的成员
class Horse extends Chess {
    readonly name: string = "马"
    move(targetX: number, targetY: number): boolean {
        this.x = targetX
        this.y = targetY
        return true
    }
}

class Pao extends Chess {
    // 不同的定义方式
    readonly name: string
    constructor() {
        super()
        this.name = "炮"
    }

    move(targetX: number, targetY: number): boolean {
        this.x = targetX
        this.y = targetY
        return true
    }
}

class Soldier extends Chess {
    // 不同的定义方式
    get name() {
        return "兵"
    }

    move(targetX: number, targetY: number): boolean {
        this.x = targetX
        this.y = targetY
        return true
    }
}

// 我们在之后new的时候可以new 后面的三个
const H = new Horse()
const P = new Pao()
const S = new Soldier()

// 但不能 newChess
// 因为没有Chess这个棋子



// 设计模式-模板模式

// 在棋子的移动函数里面,会有很多重复的代码
// 1.边界判断
// 2.目标位置是否有己方棋子
// 3.棋子移动规则判断
// 4.移动成功的话就赋值提示成功

// 解决方法我可以把公共函数写在父类,让每一个子类去调用
// 但是这种方式会产生重复的调用,且调用的顺序和约束没有强约束

// 那么使用模板模式来解决
// 具体思路, 有些方法,所有的子类实现的流程完全一致,只是流程中的某个步骤的具体实现不一致,可以将该方法提取到父类,在父类中完成整改流程的实现,遇到实现不一致的方法时,将该方法做成抽象方法


abstract class Chess1 {
    x: number = 0
    y: number = 0

   
    abstract readonly name: string = ""

    // 这个方法,所有的子类实现起来大体一致,但有些许不同
    move(targetX: number, targetY: number): boolean {
        console.log("1.棋子的移动规则判断")
        console.log("2.目标位置是否有己方棋子")

        // 3.规则判断
        // 我在父类里面做一个抽象方法
        // 这个抽象方法在子类中一定会实现,这里不用担心直接调用
        if(this.rule(targetX, targetY)){
            this.x = targetX
            this.y = targetY
            return true
        }

        console.log("4.成功后的操作")
        return false
    }

    // 移动规则的抽象方法
    protected abstract rule(targetX: number, targetY: number): boolean;
}

class Horse1 extends Chess1 {
    readonly name: string = "马"

    // 就不用在每一个子类里面写重复代码了
    // move(targetX: number, targetY: number): boolean {
    //     console.log("1.棋子的移动规则判断")
    //     console.log("2.目标位置是否有己方棋子")
    //     console.log("3.棋子移动规则判断")
    //     console.log("4.成功后的操作")
    //     this.x = targetX
    //     this.y = targetY
    //     return true
    // }

    // 只要实现缺失的抽象类就好了
    protected rule(targetX: number, targetY: number): boolean {
        return true
    }
}

class Pao1 extends Chess1 {
    readonly name: string
    constructor() {
        super()
        this.name = "炮"
    }

    protected rule(targetX: number, targetY: number): boolean {
        return true
    }

}

class Soldier1 extends Chess1 {
    get name() {
        return "兵"
    }

    protected rule(targetX: number, targetY: number): boolean {
        return true
    }
}
