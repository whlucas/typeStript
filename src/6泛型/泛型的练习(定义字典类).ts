// 开发一个字典类
// 字典中会保存键值对的数据

// 键值对数据的特点: 
// key可以是任何类型,但不允许重复
// value可以是任何类型
// 每个键对应一个值
// 所有的键类型相同,所有的值类型相同

// 字典类中对键值对数据的操作
// 1.重新设置某个键对应的值,如果不存在,则添加
// 2.按照键,删除对应的键值对
// 3.循环每一个键值对
// 4.得到当前键值对的数量
// 5.判断某个键是否存在


// 定义一个回调函数的接口
interface callback3<k, v> {
    (key: k, val: v): void
}

class Dictionary<k, v>{
    // 定义两个数组来保存key和value
    private keys: k[] = [];
    private vals: v[] = [];


    // 给外部一个访问器,来访问我的这个size,这样这个size就是只读的
    get size() {
        return this.keys.length
    }

    // 设置键值对
    set(key: k, val: v){
        const i = this.keys.indexOf(key)
        // 没有这个键就添加
        if(i < 0){
            this.keys.push(key);
            this.vals.push(val);
        }else{
            this.vals[i] = val
        }
    }

    // 遍历
    forEach(callback: callback3<k, v>) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i]
            callback(k, v)
        })
    }

    // 判断一个键是否存在
    has(key: k){
        return this.keys.includes(key)
    }

    // 删除对应的键值对
    delete(key: k) {
        const i = this.keys.indexOf(key)
        if( i === -1){
            return '不存在'
        }else{
            this.keys.splice(i, 1);
            this.vals.splice(i, 1);
        }
    }

    // 得到当前键值对的数量
    
}

// 创建的时候指定键和值的类型
const dic = new Dictionary<string, number>()

dic.forEach((k, v) => {
    console.log(k + ':' +v)
})

