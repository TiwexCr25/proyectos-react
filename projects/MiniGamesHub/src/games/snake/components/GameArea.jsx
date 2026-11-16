import { useState, useEffect } from 'react'
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
  // const [start, setStart] = useState(false)

  useEffect(() => {
    const onKey = (e) => { console.log(e.key); tick() }
    window.addEventListener('keydown', onKey)
    // setStart(true)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function tick () {
    setWorld(prev => {
      const next = prev.map(row => row.map(cell => ({ ...cell })))

      // 1. Encontrar cabeza y cuerpo
      const parts = next.flat().filter(c => c.type === 'head' || c.type === 'body')
      const head = parts.find(c => c.type === 'head')

      // 2. Ordenar serpiente de cabeza a cola siguiendo adyacencia
      const ordered = [head]
      const visited = new Set([`${head.x},${head.y}`])
      while (ordered.length < parts.length) {
        const last = ordered[ordered.length - 1]
        const nextPart = parts.find(p =>
          !visited.has(`${p.x},${p.y}`) &&
        Math.abs(p.x - last.x) + Math.abs(p.y - last.y) === 1
        )
        if (!nextPart) break
        visited.add(`${nextPart.x},${nextPart.y}`)
        ordered.push(nextPart)
      }

      // 3. Dirección = cabeza - cuello
      const neck = ordered[1]
      const dx = head.x - neck.x
      const dy = head.y - neck.y
      const newHead = { x: head.x + dx, y: head.y + dy }

      // 4. Si choca con pared, no moverse
      if (newHead.y < 0 || newHead.y >= size || newHead.x < 0 || newHead.x >= size) {
        return prev
      }

      // 5. Borrar serpiente vieja
      for (const p of parts) {
        next[p.y][p.x].type = 'empty'
      }

      // 6. Nueva serpiente: nueva cabeza + cuerpo viejo sin cola
      const newSnake = [newHead, ...ordered.slice(0, -1)]
      newSnake.forEach((p, i) => {
        next[p.y][p.x].type = i === 0 ? 'head' : 'body'
      })

      return next
    })
  }

  return (
    <div className='game-container-play'>
      <p>prueba</p>
      <button onClick={onStart}>Regresar</button>
      <Board world={world} />
    </div>
  )
}
