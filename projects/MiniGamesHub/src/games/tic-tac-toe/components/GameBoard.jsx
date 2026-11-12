import { useState } from 'react'
import { Celll } from './GameCell'

export function GameBoard () {
  const [arrayCells, setArrayCells] = useState(Array(9).fill(''))

  const clickCell = (index) => {
    setArrayCells((prev) => {
      const newArray = [...prev]
      newArray[index] = 'X'
      return newArray
    })
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
