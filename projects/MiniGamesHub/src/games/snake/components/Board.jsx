const cellType = {
  empty: ' ',
  head: '🟥',
  body: '🟩',
  food: '🟧'
}

export function Board ({ world }) {
  const cols = world[0].length
  return (
    <>
      <div
        className='board'
        style={{ '--cols': cols }}
      >
        {world.map((row) =>
          row.map((cell) => (
            <div key={`${cell.x}-${cell.y}`} className='cell'>
              <span className='cell-content'>{cellType[cell.type]}</span>
            </div>
          ))
        )}
      </div>
    </>
  )
}
