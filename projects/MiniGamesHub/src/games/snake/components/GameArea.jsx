import { useState } from 'react'
import { Board } from './Board'

export function GameArea ({ onStart, size, difficulty }) {
  const total = size * size
  const initialBoard = Array.from({ length: total }, () => ({ type: 'empty' }))

  const [world, setWorld] = useState(initialBoard)
  return (
    <div className='game-container-play'>
      <p>prueba</p>
      <button onClick={onStart}>Regresar</button>
      <Board world={world} />
    </div>
  )
}
