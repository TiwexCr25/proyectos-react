const cellType = {
  empty: ' ',
  head: '🟥',
  body: '🟩',
  food: '🟧'
}

export function Board ({ size, snake }) {
  const snakeMap = new Map(
    snake.map((part, index) => [
      `${part.x},${part.y}`,
      index === snake.length - 1 ? 'head' : 'body'
    ])
  )

  const world = Array.from({ length: size }, (_, y) =>
    Array.from({ length: size }, (_, x) => ({
      x,
      y,
      type: snakeMap.get(`${x},${y}`) || 'empty'
    }))
  )

  return (
    <div className='board' style={{ '--cols': size }}>
      {world.map(row =>
        row.map(cell => (
          <div key={`${cell.x}-${cell.y}`} className='cell'>
            <span className='cell-content'>
              {cellType[cell.type]}
            </span>
          </div>
        ))
      )}
    </div>
  )
}
