import { useState } from 'react'
import { Celll } from './GameCell'

const TURN = {
  x: 'X',
  o: 'O'
}

const WINNER_COMBOS = [
  [0, 1, 2], // fila 1
  [3, 4, 5], // fila 2
  [6, 7, 8], // fila 3
  [0, 3, 6], // columna 1
  [1, 4, 7], // columna 2
  [2, 5, 8], // columna 3
  [0, 4, 8], // diagonal \
  [2, 4, 6] // diagonal /
]

export function GameBoard () {
  const [arrayCells, setArrayCells] = useState(Array(9).fill(''))
  const [turn, setTurn] = useState('x')
  const [winner, setWinner] = useState(null)
  const [starting, setStarting] = useState(false)

  const checkWinner = (cells) => {
    for (const [a, b, c] of WINNER_COMBOS) {
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a]
      }
    }
    return null
  }

  const clickCell = (index) => {
    if (arrayCells[index] !== '' || winner) return

    setStarting(true)

    const newArray = [...arrayCells]
    newArray[index] = TURN[turn]
    setArrayCells(newArray)

    const newWinner = checkWinner(newArray)
    if (newWinner) setWinner(`Ganador: ${newWinner}`)
    else if (newArray.every(cell => cell !== '')) {
      setWinner('Empate')
    } else setTurn(prevTurn => prevTurn === 'x' ? 'o' : 'x')
  }

  const resetGameBoard = () => {
    setArrayCells(Array(9).fill(''))
    setTurn('x')
    setWinner(null)
    setStarting(false)
  }

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
