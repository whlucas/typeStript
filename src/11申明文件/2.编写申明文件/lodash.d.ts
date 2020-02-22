// 模块申明
// 申明的东西只有导入这个模块后才能使用

// 我安装了lodash模块

// 现在我要申明他
// 那么他就会来我这个对象里面去找类型定义
// 我还要告诉他我们的这个模块里面有一些函数
declare module "lodash" {
    export function chunk<T>(array: T[], size: number): T[][] // 表示这个数组的每一项都是T类型的数组
}

// 这么写还有一个问题
// 虽然我num run build是可以的
// 但是我num run dev 不行,因为他ts-node不会去读配置文件里面include配置,所以他就找不到声明文件,所以需要在配置中单独为dev启动的时候加一个让他去找声明文件的路径
// "typeRoots": [] 就还是这个配置,给他把所有的路径都配置上

