import { Color, Mark } from "./enums"

// 用类的方式定义一副牌了,不这么写了
// export type Deck = Card[]


// 用类型别名来定义类型
// 我现在在扑克牌中加入了大小王了,就不能这么定义了
// export type Deck = NormalCard[]  // 一副牌


// 第一种做法
// 两种类型的数组
// export type Deck = (NormalCard | Joker)[]

// 第二种做法,写一个基本类型card,之后的普通卡牌和大小王都去继承这个基本类型card
// 那么这一副牌就可以被定义为是卡牌的数组
export interface Card{
    getString(): string
}

// 用接口定义一张卡牌
export interface NormalCard extends Card {
    color: Color,
    mark: Mark
}

// 用借口定义大小王
export interface Joker extends Card {
    type: "big" | "small"
} 

// export type NormalCard = {  // 一张牌
//     color: Color
//     mark: Mark
// }