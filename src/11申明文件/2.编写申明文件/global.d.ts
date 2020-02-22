// 这个是我写申明文件的地方

// 全局申明: 申明一些全局的变量

// 我现在要声明console这个对象 
// 申明文件是不能赋值的
// 这里报错是因为人家写的对这个console的申明文件我没删
declare var console: {
    log(message?: any): void
}


// 也可以这么写
interface Console {
    log(message?: any): void
    error(message?: any): void
    
}

declare var console: Console


// 还有一种写法
// 这个namespace表示命名空间,可以看成一个对象
// 命名空间中的内容必须通过命名空间的名字.成员名来访问,
declare namespace console {
    function log(message ?: any): void
    function error(message ?: any): void
}


// 再写一个全局的函数setTimeout,和setInterval
declare function setTimeout(handler: () => void, miliseconds: number): number

declare function setInterval(handler: () => void, miliseconds: number): number


// 三斜线指令
// 在一个申明文件中包含另一个申明文件

// 如果这个申明文件是可以被找到的,那么这个文件里面去包含那些ts找不到的申明文件
// 那些不能被找到的的申明文件就可以被找到了

// 这个三斜线指令前面不能有东西
/// <reference path="./lodash.d.ts" />

