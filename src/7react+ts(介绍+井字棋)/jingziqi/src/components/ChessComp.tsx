import { ChessType } from "../types/enums";
import React from "react";
import "./ChessComp.css"

interface Iprops {
    type: ChessType
    onClick?: () => void 
}

// 这里可以把这个props里面的东西解构出来
export function ChessComp({ type, onClick }: Iprops){
    let chess = null;

    if(type === ChessType.red){
        chess = <div className = "chess-item red"></div>
    } else if (type === ChessType.black) {
        chess = <div className="chess-item black"></div>
    }

    return (
        <div className="chess" onClick={() => {
            // 如果说这是一个空的棋子,你点击他的时候他就要触发一个传过来的事件
            if (type === ChessType.none && onClick){
                onClick();
            }
        }}>
            {chess}
        </div>
    )
}