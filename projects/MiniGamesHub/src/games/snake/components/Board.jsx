export function Board ({ size }) {
  const totalCells = size * size

  return (
    <div
      className='board'
      style={{ '--cols': size }}
    >
      {Array.from({ length: totalCells }).map((_, i) => (
        <div key={i} className='cell'>
          {' '}
        </div>
      ))}
    </div>
  )
}
