// 泛型约束用于限制泛型的取值


/**
 * 将某个对象的name属性的的每个单词的首字母大写,然后将该对象返回
 */


interface hasNameProperty {
    name: string
}

// 这个函数传入的类型就是返回的类型
// 但我们需要对这个T进行一些约束,这个T的是个对象,对象里面的有一个name
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    obj.name.split(" ").map(s => s[0].toUpperCase() + s.substr(1)).join(" ")
    return obj
}

const o = {
    name: "kevin yuan",
    age: 22,
    gender: "男"
}

const newO = nameToUpperCase(o)