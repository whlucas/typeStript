function combine1(a: number | string, b: number |　string): number | string {
    if(typeof a === "number" && typeof b === "number"){
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string'){
        return a + b
    }
    throw new Error("a和b必须是相同的类型")
}

// 我们希望在调用这个歌函数的时候,这个函数能够清楚的告诉我们他的返回值是什么
// 但这里给我们提示的是数字或者字符串
const result1 = combine1(3, 3)


// 这是函数重载
// 在函数实现之前,对函数调用的多种情况进行声明

// 这里我们申明一下,这个函数只有这两个情况
// 都传数字返回数字,都传字符串返回字符串
// 如果一个传字符串一个传数字就报错

// 可以在每一个申明上面写注释
/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a:number, b:number):number;
/**
 * 得到a和b的拼接结果
 * @param a 
 * @param b 
 */
function combine(a:string, b:string):string;
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b
    }
    throw new Error("a和b必须是相同的类型")
}

const result = combine(3, 3)


// 可选参数
// 可以在某些参数名的后面加?表示可以不传
// 可选参数一定要出现在末尾
function sum(a: number, b: number, c?: number){ // c是可选参数

}

// 默认参数
// 默认参数也是可选参数,因为他可以不传,不传就是默认值
function sum1(a: number, b: number, c: number = 0) { // c是可选参数

}
