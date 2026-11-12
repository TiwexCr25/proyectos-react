export function Celll ({ index, cell, onClick }) {
  return (
    <div className='tic-tac-toe__cell' onClick={() => onClick(index)}>
      <p>{cell}</p>
    </div>
  )
}
