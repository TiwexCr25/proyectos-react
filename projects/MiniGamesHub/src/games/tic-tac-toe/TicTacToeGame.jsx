import { GameBoard } from './components/GameBoard'
import './styles/tic-tac-toe.css'

function TicTacToeGame () {
  return (
    <div className='tic-tac-toe'>
      <h1>TicTacToe</h1>
      <GameBoard />
      <button>Reiniciar</button>
    </div>
  )
}

export default TicTacToeGame
