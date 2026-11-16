const cellType = {
  empty: ' ',
  head: '🟥',
  body: '🟩',
  food: '🟧'
}

export function Board ({ world }) {
  const cols = Math.sqrt(world.length)
  return (
    <>
      <div
        className='board'
        style={{ '--cols': cols }}
      >
        {world.map((cell, index) => {
          return (
            <div key={index} className='cell'>
              <span className='cell-content'>{cellType[cell.type]}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
