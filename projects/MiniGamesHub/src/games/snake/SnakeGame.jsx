import { useState } from 'react'
import { Settings } from './components/Settings'
import { GameArea } from './components/GameArea'
import './styles/SnakeGame.css'

function SnakeGame () {
  const [start, setStart] = useState(false)
  const [configSize, setConfigSize] = useState(8)

  return (
    <>
      {
      start
        ? <GameArea onStart={() => setStart(false)} size={configSize} />
        : <Settings onStart={() => setStart(true)} onSize={setConfigSize} />
      }
    </>
  )
}

export default SnakeGame
