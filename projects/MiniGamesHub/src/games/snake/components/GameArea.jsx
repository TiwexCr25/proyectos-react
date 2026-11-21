import { useState, useEffect, useRef } from 'react'
import { Board } from './Board'

export function GameArea ({ onStart, size, difficulty }) {
  const tickInterval = useRef(null)
  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 }
  ])
  const dir = useRef({ x: 1, y: 0 })

  useEffect(() => {
    const onKey = (e) => {
      switch (e.key) {
        case 'a':
          dir.current = { x: -1, y: 0 }
          break
        case 'd':
          dir.current = { x: 1, y: 0 }
          break
        case 'w':
          dir.current = { x: 0, y: -1 }
          break
        case 's':
          dir.current = { x: 0, y: 1 }
          break
      }
    }

    window.addEventListener('keydown', onKey)

    tickInterval.current = setInterval(tick, 500)

    return () => {
      window.removeEventListener('keydown', onKey)
      clearInterval(tickInterval.current)
    }
  }, [])

  console.log('Render:', dir)
  function tick (key) {
    console.log('Tick:', dir)
    setSnake(prev => {
      const head = prev[prev.length - 1]

      const newHead = {
        x: head.x + dir.current.x,
        y: head.y + dir.current.y
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
