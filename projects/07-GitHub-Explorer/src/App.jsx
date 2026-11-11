import { useState, useEffect } from 'react'

import './App.css'

import { SearchBar } from './components/SearchBar'
import { UserCard } from './components/UserCard'
import { UserProfile } from './components/UserProfile'

function App () {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [isLoadingProfile, setIsLoadingProfile] = useState(null)
  const [profileError, setProfileError] = useState(null)

  useEffect(() => {
    if (!selectedUser) return
    const getProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${selectedUser.login}`)
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`)
        const data = await response.json()
        setProfile(data)
      } catch (e) {
        console.log(e.message)
      }
    }
    getProfile()
  }, [selectedUser?.login])

  // `profile`, `isLoadingProfile` y `profileError`.
  const searchUser = async (query) => {
    try {
      setIsLoading(true)
      setError('')
      if (query.trim() === '') throw new Error('La busqueda no debe estar vacia')
      const response = await fetch(
        `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`
      )
      if (!response.ok) throw new Error(`Error HTTP ${response.status}`)
      const data = await response.json()
      setUsers(data.items)
      setHasSearched(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const renderResults = () => {
    if (isLoading) return <p>Cargando...</p>
    if (error !== '') return <p style={{ color: 'red' }}>{error}</p>
    if (!hasSearched) return <p>Escribe un nombre para buscar usuarios</p>
    if (users.length === 0) return <p>No se encontraron usuarios</p>
    return users.map(user => (
      <UserCard
        key={user.id}
        user={user}
        onSelect={setSelectedUser}
      />
    ))
  }

  return (
    <>
      <header>
        <h1>GitHub Explorer</h1>
        <p>Buscar usuario de GitHub:</p>
        <SearchBar onSearch={searchUser} />
      </header>
      <main>
        {profile && <UserProfile profile={profile} />}
        {renderResults()}
      </main>
    </>
  )
}

export default App
