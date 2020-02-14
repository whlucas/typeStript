// 直接在名称后写上<泛型名称>


// 类型别名使用泛型
// 回调函数: 判断数组中的某一项是否满足条件
type callback<T> = (n: T, i: number) => boolean;

// 把上面的换成接口

interface callback1<T> {
    (n: T, i: number): boolean
}

function filter<T>(arr: T[], callback: callback<T>): T[]{
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        if (callback(n, i)){
            newArr.push(n);
        }
    })
    return newArr;
}

const arr5 = [3, 44, 5, 66, 5]
// 通过arr5的类型来得到所有T的位置的类型
filter(arr5, n => n % 2 !== 0)


