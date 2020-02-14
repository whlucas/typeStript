// 这是一个数组的帮助类

// 我在整个类上面来一个泛型,在new这个类的时候就定义一下这个T
// 之后利用这个T的类型来对里面的变量进行赋值
class ArrayHelper<T> {

    private arr: T[]

    constructor(arr: T[]){
        this.arr = arr
    }

    // 传入前几个值
    // 我这里这个arr就不在作为参数了,直接用这个this.arr就行了
    take(n: number): T[] {
        if (n >= this.arr.length) {
            return this.arr;
        }
        const newArr: T[] = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }

    private getRandom(min: number, max: number){
        const dec = max-min;
        return Math.floor(Math.random() * dec + max)
    }

    // 这个函数里面的T和上面那个函数的T是不相关的
    shuffle() {
        for (let i = 0; i < this.arr.length; i++) {
            const targetIndex = this.getRandom(0, this.arr.length);
            const temp = this.arr[i];
            this.arr[i] = this.arr[targetIndex];
            this.arr[targetIndex] = temp
        }
    }
}

const helper = new ArrayHelper([1, 3, 4, 5])
helper.take(1)