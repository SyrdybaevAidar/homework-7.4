import {Card} from "./card.ts";

export class CardDeck
{
    static types: string[] = [
        "♦",
        "♥",
        "♣",
        "♠"
       ]
       
    static values: string[] = [
         "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
       ]

    cards: Card[] = []

    constructor(){
        for(let type of CardDeck.types){
            for(let valueIndex:number = 0; valueIndex < CardDeck.values.length; valueIndex++){
              this.cards.push(new Card(type, CardDeck.values[valueIndex]));
            }
          }
    }
    getCard(){
        let card = this.cards[Math.floor(Math.random()*this.cards.length)];
        let cardIndex = this.cards.indexOf(card);
        this.cards.splice(cardIndex, 1); 
        return card;
    }

    getCards(count:number){
        const result:Card[] = [];
        for(let number:number = 0; number < count; number++){
            result.push(this.getCard());
        }
        return result;
    }
}