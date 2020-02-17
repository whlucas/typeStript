import React from "react";
import { ChessType, GameStatus } from "../types/enums";
import { BoardComp } from "./BoardComp";
import { GameStatusComp } from "./CameStatusComp";

interface IState {
    cheses: ChessType[]
    gameStatus: GameStatus
    nextChess: ChessType.red | ChessType.black
}

export class GameComp extends React.Component<{}, IState> {

    state:IState = {
        cheses: [],
        gameStatus: GameStatus.gaming,
        nextChess: ChessType.black
    }

    componentDidMount() {
        this.init()
    }

    /**
     * 初始化数据
     */
    init(){
        const arr: ChessType[] = []
        for (let i = 0; i < 9; i++) {
            arr.push(ChessType.none)
        }
        this.setState({
            cheses: arr,
            gameStatus: GameStatus.gaming,
            nextChess: ChessType.black
        })
    }

    /**
     * 处理棋子的点击事件
     * 如果该函数运行,游戏没结束,该位置没棋子
     * @param index 
     */
    handleChessClick(index:number) {
        // react修改数组里面成员的方式
        const chesses: ChessType[] = [...this.state.cheses];
        chesses[index] = this.state.nextChess
        this.setState(prevState => {
            return {
                cheses: chesses,
                // 拿到上一个状态去改下一个状态
                nextChess: prevState.nextChess === ChessType.red ? ChessType.black : ChessType.red,
                // 想要在下子的时候去给他一个游戏状态,但是不方便给this.state.chesses因为他是异步的,所以我们给我们重新赋值的chesses
                gameStatus: this.getStatus(chesses, index)
            }
        })
    }

    // 获得游戏结果
    getStatus(chesses: ChessType[], index: number): GameStatus{
        // 1.判断是否有一方获得胜利
        const horMin = Math.floor(index / 3) * 3;
        const verMin = index % 3;
        if (
            // 判断横向
            (chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]) 
            ||
            // 判断纵向
            (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6]) 
            ||
            // 判断斜向
            (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none || chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none ) 
        ) {
            if(chesses[index] === ChessType.red){
                return GameStatus.redWin;
            }else {
                return GameStatus.blackWin;
            }
        }

        // 2.如果没胜利怕段是否平局
        if(!chesses.includes(ChessType.none)) {
            return GameStatus.equal
        }
        // 3.都没有,就游戏正在运行

        return GameStatus.gaming
    }

    render(){
        return(
            <div style = {{textAlign: "center"}}>
                <h1>井字棋游戏</h1>
                {/* 显示结果的 */}
                <GameStatusComp 
                    status = {this.state.gameStatus}
                    next = {this.state.nextChess}
                />
                {/* 棋盘 */}
                <BoardComp 
                    chesses = {this.state.cheses}
                    isGameOver = {this.state.gameStatus !== GameStatus.gaming}
                    onClick={this.handleChessClick.bind(this)}
                />
                <button onClick = { () => {
                    this.init()
                }}>重新开始</button>
            </div>
        )
    }
}