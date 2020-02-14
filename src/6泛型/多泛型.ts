// 将两个数组进行混合,第一位是第一个数组,第二位是第二个数组,要求两个数组的长度相等
// 比如第一个数组是数字,第二个数组是字符串,返回就可以是数字可以是字符串
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[]{
    if(arr1.length !== arr2.length){
        throw new Error("两个数组长度不等")
    } 
    let result: (T | K)[] = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}

const result2 = mixinArray([1, 2, 34, 5], ['we', 'sdaf', 'dsaf'])