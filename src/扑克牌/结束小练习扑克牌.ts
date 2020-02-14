import { Deck } from "./deck";

// import { createDeck, printDeck } from "./funcs";

// 目标
// 创建一副扑克牌
// 打印该扑克牌


// const deck = createDeck()
// printDeck(deck)

const deck = new Deck()
deck.shuffle()
deck.print()

const result = deck.publish()

result.player1.print()

result.player2.print()

result.player3.print()

result.left.print()