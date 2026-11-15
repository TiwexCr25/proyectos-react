import { useMemoryCardGame } from '../hooks/useMemoryCardGame.js'
import { CardContainer } from './CardContainer.jsx'
import Modal from '../../../shared/components/Modal.jsx'

export function GameArea ({ onCancel, boardSize }) {
  const {
    showModal,
    start,
    cards,
    attempts,
    completed,
    cols,
    setShowModal,
    timeText,
    selectedCard,
    resetGameArea
  } = useMemoryCardGame(boardSize)

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
