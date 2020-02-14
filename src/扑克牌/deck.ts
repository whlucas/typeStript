import { Card, NormalCard, Joker } from "./types";
import { Mark, Color } from "./enums";

// 定义发过牌之后的情况
interface publishResult {
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck,
}

export class Deck {
    private cards: Card[] = []

    // 如果传了参数,那么我的牌就是传过来的
    // 注意传的里面都是牌的数组
    // 没传就自己生成
    constructor(cards?: Card[]) {
        if(cards){
            this.cards = cards
        }else{
            this.init();
        }
    }

    private init() {
        for (let m in Mark) {
            for (let c in Color) {
                const card: NormalCard = {
                    color: Color[c],
                    mark: Mark[m],
                    getString() {
                        return this.color + this.mark
                    }
                }
                this.cards.push(card)
            }
        }
        // 加入大小王
        let joker: Joker = {
            type: "small",
            getString() {
                return "jo"
            }
        }
        this.cards.push(joker)
        joker = {
            type: "big",
            getString() {
                return "JO"
            }
        }
        this.cards.push(joker)
        return this.cards;
    }

    print() {
        let result = "\n"
        this.cards.forEach((card, i) => {
            let str = card.getString();
            result += str + "\t"
            if ((i + 1) % 6 === 0) {
                result += "\n"
            }
        })
        console.log(result);
    }

    /**
     * 洗牌
     */
    shuffle() {
        // 把数字一位一位拿出来,每一位和随机生成的下标所表示的那一位交换
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandom(0, this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp
        }
    }
    
    // 发完牌后,得到的结果有4个card的数组,也就是二维数组
    // publish() : [card[], card[], card[], card[]]{
    //     const result: [card[], card[], card[], card[]] = [[], [], [], []]
    // }

    // 这里可以简化为Deck
    // publish() : [Deck, Deck, Deck, Deck]{
    //     let player1: Deck, player2: Deck, player3: Deck, left: Deck
    //     player1 = this.takeCards(17)
    //     player2 = this.takeCards(17)
    //     player3 = this.takeCards(17)
    //     left = new Deck(this.cards)
    //     // 生成四副牌返回
    //     return [player1, player2, player3, left]
    // }

    // 还可以简化为定义后的接口
    publish(): publishResult {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = new Deck(this.cards)
        // 生成四副牌返回
        return {
            player1,
            player2,
            player3,
            left
        }
    }

    private takeCards(n: number): Deck {
        const cards: Card[] = []
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card)
        }
        // 取到目标的牌数,去生成一副扑克牌
        return new Deck(cards)
    }


    /**
     * 无法取到最大值
     * @param min 
     * @param max 
     */
    private getRandom(min:number, max:number){
        const dec = max - min
        return Math.floor(Math.random() * dec + min)
    }
}