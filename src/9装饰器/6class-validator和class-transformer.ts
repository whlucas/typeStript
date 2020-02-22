// class-validator

// 首先要导入上面那个
import "reflect-metadata"
import { validate, MinLength, MaxLength, IsNotEmpty, Max, Min } from "class-validator"
import axios from "axios"
import { plainToClass, Type } from "class-transformer"

class User {
    // 这个就是产生一个装饰器的函数
    // 可以设置错误信息
    @IsNotEmpty({message: "账号不可以为空"})
    @MinLength(5, {message: "账号最少5个字符"})
    @MaxLength(12, { message: "账号最多12个字符" })
    loginId: string = "ea"

    @Min(0, { message: "年龄的最小值是0"})
    @Max(100, { message: "年龄的最大值是110" })
    loginPwd: string = ""

    age: number = NaN
    gender: "男" | "女" = "男"
}

const post = new User()

// 用它提供的验证器去验证,这个验证器返回的是个promise
validate(post).then(errors => {
    // 如果出错了
    // 他返回给你一个对象,这个对象里面就会记录错误信息
    // 如果成功了,它会给你返回个空数组
    console.log(errors)
})




// class-transformer
// 他可以把一个平面对象来转化成类对象
// 转化成类的对象,就可以做验证了


// 登录myjson.com 把一些数据放进去
// 点保存,他就会给你一个地址,你去想这个地址发请求就会得到你给他的那些数据

axios.get("https://api.myjson.com/bins/1h5t1g").then((resp: any) => resp.data)
    // 我希望我得到的这个对象可以使用我User1里面的方法,因为我确定他是User1的对象
    // 我甚至都给他直接约束返回结果是User1的数组了
    // 但是我返回的是平面对象,里面没有我这个User1里面的方法
    .then((users: User1[]) => {
        // 这个函数也可以接收一个数组,去返回一个转换后的类对象的数组
        // us = plainToClass(User1, users)
        for(let u of users){
            // 我用这个库把这个里面的平面对象转化成我的User1的类对象
            // 第一个参数是我要转化为什么样的类对象,第二个参数是我要装化的平面对象
            const user = plainToClass(User1, u)
            console.log(user.getName())
        }
    })

// 这个data里面的对象就是平面对象
// 直接使用{}书写的对象就是平面对象

class User1 {
    id: number = NaN
    firstName: string = "saf"
    lastName: string = "dsaf"

    // 这个转换还可以帮我做一些类型变换
    // 比如服务器那边给我们返回的age是字符串,但是在类里面规定的是数字类型,
    // 那么在转换之后它就会给我们把数据变为数字类型
    // 但是这种转换必须用元数据的形式,ts在运行的时候就不在了,只有元数据是在的
    // 通过这种形式来告诉他,转换的时候,帮我做一下类型转换
    @Type(() => Number) // 因为js中只能有Number,他要在js中出现就不能写number
    age: number = NaN

    // 输出名字
    getName() {
        return this.firstName + " " + this.lastName;
    }

    // 是不是成年人
    isAdult() {
        return this.age > 36 && this.age < 60;
    }
}