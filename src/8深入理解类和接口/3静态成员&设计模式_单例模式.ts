// 静态成员是指,附着在类上的成员

// 举个例子

class User7{

    // 这是一个存放所有用户的数组
    // 每次创建用户之后都要把行的用户都放到这个数组里面
    static users: User7[] = []

    constructor(
        public loginId: string,
        public loginPwd: string,
        public name: string,
        public age: string
    ) {
        // 注意,这里不能通过this.users调用这个数组,因为他是在User7里面的静态属性
        // 这个this就是我新创建的这个对象
        User7.users.push(this)
    }

    // 我要有一个登陆函数,需要用它来得到一个用户
    // 但是我调用这个登陆函数不能在我创建一个用户之后,因为我需要这个函数来得到用户信息
    // 所以要把他设置成静态方法
    static login(loginId: string, loginPwd: string): User7 | undefined{
        // 通过传过来的参数看看,users数组里面有没有
        // 这个find函数如果找到了就会返回给我这个用户对象,没有就返回undefined
        // 这里也可以用this.users.find来访问,静态方法里面的this指向的就是User
        return User7.users.find(u => {
            return u.loginId === loginId && u.loginPwd === loginPwd
        })
    }

    // 实例方法中的this指向的是当前对象
    // 静态方法中的this指向的是当前类User
    sayHello() {
        console.log(this.name + this.age)
    }

}


// 设计模式-单例模式

class Board {
    width: number = 500;
    height: number = 700;

    // 1.把构造函数私有化,不让在外面new了
    private constructor() {

    }

    // 2.写一个私有的静态属性,类型是这个棋盘类 
    private static _board?: Board

    static createBoard(): Board {
        // 调用这个私有的静态属性,注意静态方法里面的this就是这个Board
        if(this._board){
            return this._board
        }else{
            this._board = new Board()
            return this._board
        }
    }
}

// 所以我创建的时候就只能这么创建了,就不能用new了
// 这样就能实现单例模式
const B = Board.createBoard()


// 还有一种写法
// 这种写法不能创建我们需要的棋盘,且在一开始就创建了,不是在需要的时间点创建
class Board1 {
    width: number = 500;
    height: number = 700;

    private constructor() { }

    // 创建一个只读的静态属性直接赋值
    static readonly singleBoard: Board1 = new Board1()
}

// 这么来拿到这个对象
const B2 = Board1.singleBoard


