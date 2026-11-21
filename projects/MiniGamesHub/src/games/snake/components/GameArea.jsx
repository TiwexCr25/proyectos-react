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
    const onKey = (e) => { console.log(e.key); tick(e.key) }

    window.addEventListener('keydown', onKey)

    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function tick (key) {
    let dir
    switch (key) {
      case 'a':
        dir = { x: -1, y: 0 }
        break
      case 'd':
        dir = { x: 1, y: 0 }
        break
      case 'w':
        dir = { x: 0, y: -1 }
        break
      case 's':
        dir = { x: 0, y: 1 }
        break
    }
    setSnake(prev => {
      const head = prev[prev.length - 1]

      const newHead = {
        x: head.x + dir.x,
        y: head.y + dir.y
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
