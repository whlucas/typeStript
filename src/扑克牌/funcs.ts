// 这里面的两个函数都写到deck类里面了

// import { Deck, NormalCard, Card, Joker } from "./types";

// import { Mark, Color } from "./enums";

// export function createDeck(): Deck {
//     const deck: Deck = []  //定义一副牌
//     // 改成枚举之后,枚举是可以遍历的,可以简化代码
//     for (let m in Mark) {
//         for (let c in Color) {
//             // 当我们直接用对象字面量进行赋值的时候他会有更为严格的类型检查
//             // 可以使用类型断言
//             // deck.push({
//             //     color: Color[c],
//             //     mark: Mark[m],
//             //     getString() {
//             //         return this.color + this.mark
//             //     }
//             // } as Card)
//             // 或者这样
//             const card: NormalCard = {
//                 color: Color[c],
//                 mark: Mark[m],
//                 getString() {
//                     return this.color + this.mark
//                 }
//             }
//             deck.push(card)
//         }
//     }
//     // 加入大小王
//     let joker: Joker = {
//         type: "small",
//         getString() {
//             return "jo"
//         }
//     }
//     deck.push(joker)
//     joker = {
//         type: "big",
//         getString() {
//             return "JO"
//         }
//     }
//     deck.push(joker)


//     // for (let i = 1; i < 13; i++) {
//     //     deck.push({
//     //         mark: i,
//     //         color: "方片"
//     //     })
//     //     deck.push({
//     //         mark: i,
//     //         color: "梅花"
//     //     })
//     //     deck.push({
//     //         mark: i,
//     //         color: "红桃"
//     //     })
//     //     deck.push({
//     //         mark: i,
//     //         color: "黑桃"
//     //     })
//     // }

//     return deck;
// }

// export function printDeck(deck: Deck) {
//     let result = "\n"
//     deck.forEach((card, i) => {
//         let str = card.getString();
//         // if(card.mark <= 10){
//         //     str += card.mark;
//         // } else if(card.mark === 11) {
//         //     str += 'J';
//         // } else if (card.mark === 12) {
//         //     str += 'Q';
//         // } else {
//         //     str += 'K';
//         // }
//         result += str + "\t"
//         if ((i + 1) % 6 === 0) {
//             result += "\n"
//         }
//     })
//     console.log(result);

// }