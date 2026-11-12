import { useState } from 'react'
import { Celll } from './GameCell'

const TURN = {
  x: 'X',
  o: 'O'
}

export function GameBoard () {
  const [arrayCells, setArrayCells] = useState(Array(9).fill(''))
  const [turn, setTurn] = useState('x')

  const clickCell = (index) => {
    if (arrayCells[index] !== '') return

    setArrayCells((prev) => {
      const newArray = [...prev]
      newArray[index] = turn
      return newArray
    })

    setTurn(prevTurn => prevTurn === 'x' ? 'o' : 'x')
  }

  return (
    <div className='tic-tac-toe__board'>
      {arrayCells.map((cell, index) => {
        return (
          <Celll key={index} index={index} cell={cell} onClick={clickCell} />
        )
      })}
    </div>
  )
}
