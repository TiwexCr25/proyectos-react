import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://api.github.com/users/octocat')
        const data = await response.json()
        setUser(data)
      } catch (e) {
        throw new Error('Error')
      } finally {
        setIsLoading(false)
      }
    }
    getUser()
  }, [])

  return (
    <>
      <h1>GItHub Explorer</h1>
      {isLoading && <p>Cardando...</p>}

      <p>Usuario: {user.name}</p>
      <img src={user.avatar_url} alt='gitHub avatar url' />
    </>
  )
}

export default App
