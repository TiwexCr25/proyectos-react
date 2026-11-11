import { useEffect, useState } from 'react'

import './App.css'

import { SearchBar } from './components/SearchBar'
import { UserCard } from './components/UserCard'

function App () {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleError = (message) => {
    setError(message)
  }

  const searchUser = async (user) => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://api.github.com/users/${user}`)
      if (response.status === 404) throw new Error('Usuario no encontrado')
      const data = await response.json()
      setUsers(users => [...users, data])
      setError('')
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <header>
        <h1>GitHub Explorer</h1>
        <p>Buscar usuario de GitHub: </p>
        {error !== '' && <p style={{ color: 'red' }}>{error}</p>}
        <SearchBar
          onSearch={searchUser}
          onError={handleError}
        />
        {isLoading && <p>Cargando...</p>}
      </header>
      <main>
        {users.map(user =>
          <UserCard key={user.id} user={user} />
        )}
      </main>
    </>
  )
}

export default App
