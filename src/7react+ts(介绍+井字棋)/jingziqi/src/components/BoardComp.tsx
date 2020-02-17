import { ChessType } from "../types/enums";
import { ChessComp } from "./ChessComp";
import React from "react";
import "./BoardComp.css"

interface Iprops {
    // 这个数组只有三种属性:黑,红,无
    chesses: ChessType[]
    // 我想给这个设置默认值,就得先把这里设置成可选参数
    isGameOver?: boolean
    // 传过来一个事件函数,需要我这里传给他点击了哪一个位置
    onClick?: (index: number) => void
}



const BoardComp: React.FC<Iprops> = function BoardComp(props) {

    // 因为我这个props.isGameOver已经给默认值了,他就不太会是unefined了,所一这里要给他一个类型断言,只用用这个新变量来代替这个参数
    // const isGameOver = props.isGameOver as boolean;
    // 还有一种断言方式叫非空断言,用下面的方式写,就把类型里面的undefined去掉了
    const isGameOver = props.isGameOver!

    const list = props.chesses.map((type, i) => {
        return <ChessComp 
            key={i}
            type= {type}
            // 这里这个位置把要执行的函数去传给子组件
            onClick={() => {
                if (props.onClick && !isGameOver) {
                    props.onClick(i)
                }
            }}
        />
    })

    return (
        <div className="board">
            {list}
        </div>
    )
}


// 我想要给这个函数组件设置一下默认属性
BoardComp.defaultProps = {
    // 首先要在这个组件的接口那里设置吧要设置默认值的熟悉写成可选熟悉
    // 然后在这里设置默认是
    isGameOver: false
}

// 如果我想最后导出这个组件,我的加一个{},es6的规范,exoprt必须导出一个申明,如果要导出变量就的加{}
export { BoardComp }