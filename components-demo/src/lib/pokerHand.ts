import {Card} from "./card.ts";
import { CardDeck } from "./cardDeck.ts";

export class PokerHand{
    cards: Card[] = []
    constructor(cards:Card[]){
        this.cards = cards;
    }

    isFlash(){
        return this.cards.every(card => card.cardType == this.cards[0].cardType);
    }

    isStreet(){
        const sortedMass = this.cards.sort((card1, card2) => {
            return CardDeck.values.indexOf(card1.cardValue) - CardDeck.values.indexOf(card2.cardValue);
        });

        return sortedMass.slice(2, 4).every(it => (CardDeck.values.indexOf(it.cardValue) - CardDeck.values.indexOf(this.cards[this.cards.indexOf(it) - 1].cardValue)) === 1);
    }

    isOnePair(card:Card){
        const indexCard = this.cards.indexOf(card);
        const isPair = this.cards
                .filter(it => this.cards.indexOf(it) != indexCard)
                .filter(it => it.cardValue == card.cardValue);

        return isPair.length == 2;
    }

    isOnePairAll(){
        for(let card of this.cards){
            if(this.isOnePair(card))
            return true;
        }

        return false;
    }

    isSet(card:Card){
        const indexCard = this.cards.indexOf(card);
        const isPair = this.cards
                .filter(it => this.cards.indexOf(it) != indexCard)
                .filter(it => it.cardValue == card.cardValue);

        return isPair.length == 3;
    }

    isSetAllCards(){
        for(let card of this.cards){
            if(this.isSet(card))
            return true;
        }

        return false;
    }

    isTwoPair(){
        let pairCount = 0;
        for(let card of this.cards){
            if(this.isOnePair(card)){
                pairCount++;
            }

            if(pairCount == 2){
                return true;
            }
        }

        return false;
    }

    getMaxCard(){
        const sortedMass = this.cards.sort((card1, card2) => {
            return CardDeck.values.indexOf(card1.cardValue) - CardDeck.values.indexOf(card2.cardValue);
        });

        return sortedMass[4];
    }

    getOutcome(){
        if(this.isFlash()){
            return "У вас флеш";
        }

        if(this.isStreet()){
            return "У вас стрит";
        }

        if(this.isSetAllCards()){
            return "У флэш";
        }

        if(this.isStreet()){
            return "У две пары";
        }

        if(this.isStreet()){
            return "У вас пара";
        }

        if(this.isStreet()){
            return `Старшая карта ${this.getMaxCard().cardType+this.getMaxCard().cardValue}`;
        }
    }
}