// 写一些装饰器为下面的这个类加一些描述信息
// 利用一个函数来打印出这个类的实例对象里面的信息

// 装饰器函数
function classDescriptor(description: string) {
    return function(target: new(...args: any[]) => object) {
        // 保存在该类的原型中,这样这个对象里面就有这个信息了
        target.prototype.$classDescription = description
    }
}

function propDescriptor(description: string) {
    return function (target: any, propName: string) {
        // 把属性名和属性的描述作为一个个对象,存到一个数组里面
        // 但不能保存属性值,因为这个函数运行的时候还没有实例化对象呢
        if(!target.$propDescription) {
            target.$propDescription = [];
        }
        // 把描述添加进去
        target.$propDescriptions.push({
            propName,
            description
        })
    }
}

// 写一个函数能够打印出对象中的装饰器里面的的信息
function printObj(obj: any) { // 设置成any跳过检查,不然他觉得obj上会没有$classDescription,会报错
    if(obj.$classDescription){
        console.log(obj.$classDescription)
    }
    else{
        // 如果没有在上面放装饰器,那么就没有,没有我就输出这个类的名字
        // __proto__表示对象的构造函数的原型
        console.log(obj.__proto__.constructor.name);
        // 还有一种写法Object.getPrototypeOf(obj).constructor.name)
        console.log(Object.getPrototypeOf(obj).constructor.name);
    }
    // 没有这个属性描述的数组就给他加上
    if (!obj.$propDescriptions){
        obj.$propDescriptions = []
    }
    // 输出所有的属性的描述和属性值
    for (const key in obj) {
        // 遍历这个对象的属性,去掉原型上面的属性
        if (obj.hasOwnProperty(key)) {
            // 找到对象里面的属性值和描述数组里面的propName能对上的那个对象
            const prop = obj.$propDescriptions.find((p: any) => p.propName === key)
            if(prop) {
                // 输出描述信息和,那个对象的值
                console.log(`\t${prop.description}:${obj[key]}`)
            }
            else {
                // 如果没有找到,也就是属性上没写这个装饰器,那么就输出他这个属性原本的数值
                console.log(`\t${key}:${obj[key]}`)
            }
        }
    }
}

@classDescriptor("用户")
class User0 {

    // 这个装饰就写在属性列表里面
    // 写在constructor里面会报错
    @propDescriptor("账号")
    loginId: string = "1"

    @propDescriptor("密码")
    loginPwd: string ="123"
}


const u0 = new User0()