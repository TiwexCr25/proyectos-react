import { useState } from 'react'
import { Settings } from './components/Settings'
import { GameArea } from './components/GameArea'
import './styles/memoryCard.css'

function MemoryCardGame () {
  const [startGame, setStartGame] = useState(false)
  const [boardSize, setBoardSize] = useState(4)

  const defaultSettings = () => {
    setStartGame(false)
    setBoardSize(4)
  }

  return (
    <>
      {
      startGame
        ? <GameArea onCancel={defaultSettings} boardSize={boardSize} />
        : (
          <div className='memory-card-settings'>
            <Settings onSetBoardSize={setBoardSize} />
            <button onClick={() => setStartGame(true)}>Jugar</button>
          </div>
          )
      }
    </>
  )
}

export default MemoryCardGame
