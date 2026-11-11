import { useState } from 'react'

import { AppHeader } from './components/AppHeader'

import { gameRegistry, getGameById } from '../core/games/gameRegistry'

import GameLibraryView from './views/GameLibraryView'
import GameSessionView from './views/GameSessionView'

function App () {
  const [activeGameId, setActiveGameId] = useState(null)

  const activeGame = getGameById(activeGameId)

  function handleSelectGame (gameId) {
    setActiveGameId(gameId)
  }

  function handleExitGame () {
    setActiveGameId(null)
  }

  return (
    <>
      <AppHeader />

      {activeGame
        ? (
          <GameSessionView
            game={activeGame}
            onExit={handleExitGame}
          />
          )
        : (
          <GameLibraryView
            games={gameRegistry}
            onSelectGame={handleSelectGame}
          />
          )}
    </>
  )
}

export default App
