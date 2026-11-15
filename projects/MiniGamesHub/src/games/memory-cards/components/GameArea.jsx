import { useState, useEffect, useRef } from 'react'
import { getRandomCards } from '../logic/logic'
import { CardContainer } from './CardContainer.jsx'
import Modal from '../../../shared/components/Modal.jsx'

export function GameArea ({ onCancel, boardSize }) {
  const [start, setStart] = useState(false)
  const [cards, setCards] = useState(() => getRandomCards(boardSize))
  const [anyWrongCard, setAnyWrongCard] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const timeOutRef = useRef(null)
  const intervalRef = useRef(null)

  const cols = Math.ceil(Math.sqrt(cards.length))

  useEffect(() => {
    if (completed || !start) return

    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [completed, start])

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.matched)) {
      setCompleted(true)
      setShowModal(true)
    }
  }, [cards])

  const timeText = () => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    const time = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    return time
  }

  const resetGameArea = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current)
      timeOutRef.current = null
    }
    if (intervalRef.current) clearInterval(intervalRef.current)

    setStart(false)
    setSeconds(0)
    setCompleted(false)
    setAnyWrongCard(false)
    setAttempts(0)
    setCards(getRandomCards(boardSize))
  }

  const selectedCard = (card) => {
    if (!start) setStart(true)
    const index = cards.findIndex(c => c.id === card.id)
    if ((!cards[index].hidden || cards[index].matched) && !cards[index].wrong) return

    const baseCards = anyWrongCard
      ? cards.map(c => c.wrong ? { ...c, wrong: false, hidden: true } : c)
      : cards

    if (anyWrongCard) setAnyWrongCard(false)

    const newCards = [...baseCards]
    newCards[index] = { ...newCards[index], hidden: false }
    setCards(newCards)
    checkPair(newCards)
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

    if (timeOutRef.current) clearTimeout(timeOutRef.current)

    timeOutRef.current = setTimeout(() => {
      setCards(prev => prev.map(card =>
        card.wrong ? { ...card, wrong: false, hidden: true } : card
      ))
      timeOutRef.current = null
    }, 800)
  }

  return (
    <>
      <button onClick={() => onCancel()}>Regresar</button>
      <h1>Tiempo: {start ? timeText() : 'empieza a voltear las cartas para iniciar'}</h1>
      <h1>Intentos: {attempts}</h1>
      <div
        className='BoardCardsCotainer'
        style={{ '--cols': cols > 6 ? 6 : cols }}
      >
        {
        cards.map((card) => (
          <CardContainer key={card.id} card={card} onSelectedCard={selectedCard} />
        ))
      }
      </div>
      {completed &&
        <>
          <button onClick={() => resetGameArea()}>Reiniciar</button>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <h2>Felicidades Completaste el juego con tiempo: {timeText()}</h2>
            <p>Intentos realizados: {attempts}</p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </Modal>
        </>}
    </>
  )
}
