import { useGameBoard } from '../hooks/useGameBoard'
import { Celll } from './GameCell'

export function GameBoard () {
  const {
    arrayCells,
    winner,
    starting,
    clickCell,
    resetGameBoard
  } = useGameBoard()

  return (
    <>
      {winner && <p>{winner}</p>}
      <div className='tic-tac-toe__board'>
        {arrayCells.map((cell, index) => {
          return (
            <Celll key={index} index={index} cell={cell} onClick={clickCell} />
          )
        })}
      </div>
      <button disabled={!starting} onClick={() => resetGameBoard()}>Reiniciar</button>
    </>
  )
}
