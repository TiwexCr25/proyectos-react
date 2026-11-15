import { useState, useEffect } from 'react'
import { getRandomCards } from '../logic/logic'
import { CardContainer } from './CardContainer.jsx'

export function GameArea ({ onCancel, boardSize }) {
  const [cards, setCards] = useState(() => getRandomCards(boardSize))
  const [selectedAmount, setSelectedAmount] = useState(0)
  const [anyWrongCard, setAnyWrongCard] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [completed, setCompleted] = useState(false)

  const cols = Math.ceil(Math.sqrt(cards.length))

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.matched)) setCompleted(true)
  }, [cards])

  const resetGameArea = () => {
    setCompleted(false)
    setSelectedAmount(0)
    setAnyWrongCard(false)
    setAttempts(0)
    setCards(getRandomCards(boardSize))
  }

  const selectedCard = (card) => {
    const index = cards.findIndex(c => c.id === card.id)
    if ((!cards[index].hidden || cards[index].matched) && !cards[index].wrong) return

    const baseCards = anyWrongCard
      ? cards.map(c => c.wrong ? { ...c, wrong: false, hidden: true } : c)
      : cards

    if (anyWrongCard) setAnyWrongCard(false)

    const newCards = [...baseCards]
    newCards[index] = { ...newCards[index], hidden: false }
    setCards(newCards)

    if (selectedAmount < 1) setSelectedAmount(prev => prev + 1)
    else {
      checkPair(newCards)
      setSelectedAmount(0)
    }
  }

  const checkPair = (newCards) => {
    const pairs = newCards.filter(card => !card.hidden && !card.matched)
    console.log(pairs)
    if (pairs.length < 2) return
    if (pairs[0].emoji === pairs[1].emoji) {
      console.log('es par')
      matchCards(pairs)
    } else {
      console.log('no es par')
      wrongCards(pairs)
    }
    setAttempts(prev => prev + 1)
  }

  const matchCards = (pairs) => {
    setCards(prev => prev.map(card => {
      const isInPair = pairs.some(par => par.id === card.id)
      return isInPair ? { ...card, matched: true } : card
    }))
  }

  const wrongCards = (pairs) => {
    setAnyWrongCard(true)
    setCards(prev => prev.map(card => {
      const isInPair = pairs.some(par => par.id === card.id)
      return isInPair ? { ...card, wrong: true } : card
    }))
  }

  return (
    <>
      <button onClick={() => onCancel()}>Regresar</button>
      <h1>Intentos: {attempts}</h1>
      <divs
        className='BoardCardsCotainer'
        style={{ '--cols': cols > 6 ? 6 : cols }}
      >
        {
        cards.map((card) => (
          <CardContainer key={card.id} card={card} onSelectedCard={selectedCard} />
        ))
      }
      </divs>
      {completed &&
        <>
          <p>Juego Completado!</p>
          <button onClick={() => resetGameArea()}>Reiniciar</button>
        </>}
    </>
  )
}
