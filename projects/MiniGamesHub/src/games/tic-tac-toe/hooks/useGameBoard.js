import { useState } from 'react'
import { TURN } from '../data/data.js'
import { checkWinner } from '../logic/logic.js'

export function useGameBoard () {
  const [arrayCells, setArrayCells] = useState(Array(9).fill(''))
  const [turn, setTurn] = useState('x')
  const [winner, setWinner] = useState(null)
  const [starting, setStarting] = useState(false)

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

  // Esto es lo importante: regresas todo lo que el componente necesita
  return {
    arrayCells,
    winner,
    starting,
    clickCell,
    resetGameBoard
  }
}
