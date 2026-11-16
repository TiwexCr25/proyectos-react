import { useState } from 'react'
import { Board } from './Board'

export function GameArea ({ onStart, size, difficulty }) {
  const startWorld = () => {
    const board = Array.from({ length: size }, (_, y) =>
      Array.from({ length: size }, (_, x) => ({ x, y, type: 'empty' }))
    )
    const snakePlayer = [
      { type: 'body', x: 0, y: 0 },
      { type: 'body', x: 1, y: 0 },
      { type: 'head', x: 2, y: 0 }
    ]

    for (const part of snakePlayer) {
      board[part.y][part.x].type = part.type
    }

    return board
  }

  const [world, setWorld] = useState(startWorld)
  return (
    <div className='game-container-play'>
      <p>prueba</p>
      <button onClick={onStart}>Regresar</button>
      <Board world={world} />
    </div>
  )
}
