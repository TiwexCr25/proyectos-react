import { useState } from 'react'
import { getRandomCards } from '../logic/logic'
import { CardContainer } from './CardContainer'

export function GameArea ({ onCancel, boardSize }) {
  const [cards, setCards] = useState(() => getRandomCards(boardSize))

  const cols = Math.ceil(Math.sqrt(cards.length))

  return (
    <>
      <button onClick={() => onCancel(false)}>Regresar</button>
      <h1>Board: {boardSize}</h1>
      <div
        className='BoardCardsCotaniner'
        style={{ '--cols': cols > 6 ? 6 : cols }}
      >
        {
        cards.map((card, index) => (
          <CardContainer key={index} card={card} />
        ))
      }
      </div>
    </>
  )
}
