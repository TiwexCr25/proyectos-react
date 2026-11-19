import { useState, useEffect } from 'react'
import { Board } from './Board'

export function GameArea ({ onStart, size, difficulty }) {
  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 }
  ])

  useEffect(() => {
    const onKey = (e) => { console.log(e.key); tick() }

    window.addEventListener('keydown', onKey)

    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function tick () {
    setSnake(prev => {
      const head = prev[prev.length - 1]

      const newHead = {
        x: head.x + 1,
        y: head.y
      }

      return [...prev.slice(1), newHead]
    })
  }

  return (
    <div className='game-container-play'>
      <p>prueba</p>
      <button onClick={onStart}>Regresar</button>
      <Board size={size} snake={snake} />
    </div>
  )
}
