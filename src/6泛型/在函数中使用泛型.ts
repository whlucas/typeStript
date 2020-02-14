// 取出这个数组的前n项返回

// 这个数组第一项可能是任意数组,那么不得不写成any[]的形式
function take(arr: any[], n: number): any[] {
    if(n >= arr.length) {
        return arr;
    }
    const newArr: any[] = [];
    for (let i = 0; i < n; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

// 泛型
// 有时,书写函数时,会丢失一些类型信息(多个位置的类型应该保持一致或有关联)
// 泛型是指: 附属于函数,类,接口,类型别名之上的类型
// 泛型相当于一个类型变量,在定义时,无法预先知道具体的了类型,可以使用该变量来代替,只有到调用时,才能确定他的类型

// 我们会发现,我这三个写any的数组一定是相同类型的
// 在函数名之后写<泛型名称>通常会写成大写的T
// 调用函数的时候用一样的形式传入类型,T就会变成相应的类型
// 可以直接赋值一个默认值,没有传类型的时候t是什么类型 -- 比较少见
function take1<T = number>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// 这里不写<number>他也能推导出来
// 前提是参数中要使用泛型变量
// 如果无法完成推导,又没有告诉具体的类型,T为空对象类型
const newArr = take1<number>([3, 4, 5, 6, 34, 6], 4)

