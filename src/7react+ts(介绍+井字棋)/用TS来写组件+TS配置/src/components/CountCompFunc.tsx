// 这里是函数式组件如何写的实例

import React from "react";

// 函数式组件可以对这个属性进行约束

interface Iprops{
    num: number
    onChange?: (n: number) => void
}

// export function CountComp(props: Iprops) {
//     return (
//         <div>
//             <button onClick={ () => {
//                 if(props.onChange){
//                     props.onChange(props.num - 1)
//                 }
//             }}>-</button>
//             <span>{props.num}</span>
//             <button onClick={ () => {
//                 if(props.onChange){
//                     props.onChange(props.num + 1)
//                 }
//             }}></button>
//         </div>
//     )
// }


// 函数组件还有一种写法
// 这种写法它会多一个属性props.children 可以传递父级标签中inner的内容

// 不要再写FSC了,直接FC里面的
export const CountComp: React.FC<Iprops> = function CountComp(props) {
    return (
        <div>
            <button onClick={() => {
                if (props.onChange) {
                    props.onChange(props.num - 1)
                }
            }}>-</button>
            <span>{props.num}</span>
            <button onClick={() => {
                if (props.onChange) {
                    props.onChange(props.num + 1)
                }
            }}>+</button>
        </div>
    )
}