// 用这种导出方式导入的时候可以依据提示一键导入
// 但用默认导出的形式就不会有提示了,因为导出没有名字
export const name = "kevin";

export function sum (a: number, b:number){
    return a + b
}

export default function() {
    console.log(111)
}