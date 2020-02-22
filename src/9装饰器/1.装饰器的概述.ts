// 装饰器解决的问题
// 分离关注点

class User9 {
    loginid: string = ""    // 必须是3-5个字符
    loginpwd: string = ""  // 必须是6-12个字符
    age: number = NaN  // 必须是0-100之间的数字
    gender: "nan" | "nv" = "nan"

    // 我写在里面
    // 会发现,我验证用户和验证密码的代码都差不多
    // 再写一个其他的类就又要再写一遍
    validateUser(u: User9) {
    if (u9.loginid && u9.loginid.length && u.loginid.length >= 3) {
        // loginid 验证通过
    } else {
        // 输出错误信息
    }
    // 进行其他属性的验证
}
}
const u9 = new User9

// 我们现在要对用户对象中的数据进行验证

// 把验证写在外面 
function validateUser(u: User9) {
    if(u9.loginid && u9.loginid.length && u.loginid.length >= 3){
        // loginid 验证通过
    }else{
        // 输出错误信息
    }
    // 进行其他属性的验证
}

// 但是我们的逻辑应该是写这个属性的时候就晓得我的验证规则
// 而不是我在写验证函数的时候才知道验证规则

// 所以不管是写在外面还是写在里面,都会有问题

// 产生这个问题的根源就是,我在定义属性的时候,能够附加的信息量有限

// 作用: 为某些属性,类,参数,方法提供元数据信息

// 元数据(mataData):用来描述数据的数据

// 装饰器的本质
// 在js中,装饰器是一个函数, 所以:装饰器是要参与运行的