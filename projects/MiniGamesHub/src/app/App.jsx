import { useState } from 'react'
import { AppHeader } from './components/AppHeader'

function App () {
  const [activeGameId, setActiveGameId] = useState(null)
  return (
    <>
      <AppHeader />
      <main>
        <p>MiniGames Hub</p>
      </main>
    </>
  )
}

export default App
