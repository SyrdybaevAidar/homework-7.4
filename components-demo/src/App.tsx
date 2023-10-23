import { useState } from 'react'
import React from 'react';
import { CardDeck } from "./lib/cardDeck.ts";
import { PokerHand } from "./lib/pokerHand.ts";

interface CardComponentInterface {
  type: string
  value: string
}

const CardComponent: React.FC<CardComponentInterface> = prop => {
  return <span className="card rank-k diams">
    <span className="rank">{prop.type}</span>
    <span className="suit">{prop.value}</span>
  </span>;
};

const deck = new CardDeck();
const cards = deck.getCards(5);


function App() {
  const [count, setCount] = useState(0);
  const [stateCards, setCards] = useState(cards);
  let handDeck = new PokerHand(stateCards);
  const [combintation, setCombination] = useState(handDeck.getOutcome());
 

  return (
    <>
      <div className='cards'>
        <CardComponent type={stateCards[0].cardType} value={stateCards[0].cardValue} />
        <CardComponent type={stateCards[1].cardType} value={stateCards[1].cardValue} />
        <CardComponent type={stateCards[2].cardType} value={stateCards[2].cardValue} />
        <CardComponent type={stateCards[3].cardType} value={stateCards[3].cardValue} />
        <CardComponent type={stateCards[4].cardType} value={stateCards[4].cardValue} />
      </div>
      <p>{combintation}</p>
      <button onClick={() => {
        setCards(deck.getCards(5));
        handDeck = new PokerHand(stateCards);
        setCombination(handDeck.getOutcome());
      }}>Раздать</button>
    </>
  )
}

export default App
