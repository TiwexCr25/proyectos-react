import { useState } from 'react'
import { getRandomCards } from '../logic/logic'
import { CardContainer } from './CardContainer.jsx'

export function GameArea ({ onCancel, boardSize }) {
  const [cards, setCards] = useState(() => getRandomCards(boardSize))

  const cols = Math.ceil(Math.sqrt(cards.length))

  const selectedCard = (card) => {
    const newCards = [...cards]
    const index = newCards.findIndex(c => c.id === card.id)
    if (!newCards[index].hidden || newCards[index].matched) return
    newCards[index] = { ...newCards[index], hidden: false }
    setCards(newCards)
  }

  return (
    <>
      <button onClick={() => onCancel()}>Regresar</button>
      <h1>Board: {boardSize}</h1>
      <div
        className='BoardCardsCotaniner'
        style={{ '--cols': cols > 6 ? 6 : cols }}
      >
        {
        cards.map((card) => (
          <CardContainer key={card.id} card={card} onSelectedCard={selectedCard} />
        ))
      }
      </div>
    </>
  )
}
