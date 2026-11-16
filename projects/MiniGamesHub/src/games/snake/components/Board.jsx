const cellType = {
  empty: ' ',
  head: '🟥',
  body: '🟩',
  food: '🟧'
}

export function Board ({ world }) {
  console.log('archivo board cargado')

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
              {cellType[cell.type]}
            </div>
          )
        })}
      </div>
    </>
  )
}
