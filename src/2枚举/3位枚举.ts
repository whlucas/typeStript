// 枚举的位运算

// 针对位枚举

enum Permission {
    Read,
    Write,
    Create,
    Delete,
    // 还有一些组合的权限比如
    // readAndWrite
    // readAndCreate
    // 我们可以把它们都列出来,当然太傻
}

// 这里有一个解决办法
enum Permission1 {
    // 我们可以通过二进制位上的标识来确定权限
    Read = 1,   // 2^0   0001
    Write = 2,  // 2^1   0010
    Create = 4, // 2^2   0100
    Delete = 8 // 2^3    1000
    // 比如3这个数,就是0011,他就用第一个和第二个权限
}

// 1.如何组合权限
// 这里用位运算来对p变量赋值,这里不是联合类型
// | 或运算,其中有一位是1就是1  0010 & 0011
// 这样p就是有读写这两个权限的标识了
let p:Permission1 = Permission.Read | Permission.Write

// 2.如何判断是否拥有某个权限
// 判断target变量是否拥有per权限
function hasPermission(target:Permission1, per:Permission1){
    // 且运算,两个都是1才是1
    // 0011 & 0010
    return (target & per) === per
}

// 判断变量p是否拥有可读权限
hasPermission(p, Permission1.Read)


// 3.如何删除某个权限
// 我想把p中的某个权限删了
// 用异或运算,两个位置相同取0不同取1 0011 ^ 0010
p = p ^ Permission1.Write