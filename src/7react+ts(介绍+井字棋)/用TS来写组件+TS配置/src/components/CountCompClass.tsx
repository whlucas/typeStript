import React from "react"

interface Iprops {
    num: number
    onChange?: (n: number) => void
}

// 约束一下这个类型的状态
interface IState{
    msg: string
    description: string
}

// 类组件的泛型可以填很多个,第一个是指props的类型, 第二个约束里面的状态state
// 当然实际效果上这个Istate是起不到约束作用的,还的需要在初始化状态的时候再约束一下,所以这个泛型里面的IState可以不写
// 但是如果我们想要在setState里面获得完整的类型检查的话,需要在泛型这里设置一下
export class CountComp extends React.Component<Iprops, IState> {

    // 我这里写这个状态会把上面的泛型IState的规则覆盖掉
    // 所以我这里写这个状态的时候还的再给他规定一下类型
    state: IState = {
        msg: "",
        description: "",
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num - 1)
                    }
                }}>-</button>
                <span>{this.props.num}</span>
                <button onClick={() => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num + 1)
                    }
                }}>+</button>
            </div>
        )
    }
}