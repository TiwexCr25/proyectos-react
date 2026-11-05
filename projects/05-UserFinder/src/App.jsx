import { useState, useEffect } from 'react'
import './App.css'
import { UserCard } from './components/UserCard.jsx'
import { UserCardDetails } from './components/UserCardDetail.jsx'

const URL = 'https://jsonplaceholder.typicode.com/users'

function App () {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [text, setText] = useState('')
  const [filterType, setFilterType] = useState('name')
  const [filterCity, setFilterCity] = useState('all')
  const [userDetail, setUserDetail] = useState(null)

  const searchedUsers = users.filter(user =>
    user[filterType].toLowerCase().includes(text.toLowerCase())
  )

  const availableCities = [
    ...new Set(searchedUsers.map(user => user.address.city))
  ]

  const filteredUsers = searchedUsers.filter(user =>
    filterCity === 'all' || user.address.city === filterCity
  )

  const onDetails = (user) => {
    setUserDetail(user)
  }

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        await delay(2000)
        const res = await fetch(URL)
        if (!res.ok) throw new Error(`Error HTTP ${res.status}: ${res.statusText}`)
        const data = await res.json()
        setUsers(data)
      } catch (error) {
        if (error instanceof TypeError) {
          setError('No se pudo conectar con el servidor.')
        } else if (error instanceof SyntaxError) {
          setError('El servidor devolvió una respuesta inválida.')
        } else {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  return (
    <>
      <header>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
          <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z' />
        </svg>
        <h1>Usuarios</h1>
      </header>
      <form className='control-panel'>
        <label className='control-field'>
          <span>Buscar</span>
          <input
            type='text'
            placeholder='Buscar usuarios...'
            onChange={(e) => { setText(e.target.value) }}
            value={text}
          />
        </label>

        <label className='control-field'>
          <span>Filtrar por</span>
          <select onChange={(e) => setFilterType(e.target.value)}>
            <option value='name'>Nombre</option>
            <option value='email'>Correo electrónico</option>
          </select>
        </label>

        <label className='control-field'>
          <span>Filtrar por</span>
          <select onChange={(e) => setFilterCity(e.target.value)}>
            <option value='all'>Todas las ciudades</option>
            {
              availableCities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))
            }
          </select>
        </label>

        <button
          className='clear-filters'
          type='button'
          onClick={() => {
            setText('')
            setFilterType('name')
            setFilterCity('all')
          }}
        >
          Limpiar filtros
        </button>
      </form>
      <section className='user-grid' aria-label='Lista de usuarios'>
        {
        loading
          ? <p>Cargando...</p>
          : error
            ? <p>{error}</p>
            : filteredUsers.length > 0
              ? <UserCard users={filteredUsers} onDetails={onDetails} />
              : <p>No existen coincidencias</p>
        }
      </section>
      {userDetail && (
        <UserCardDetails
          user={userDetail}
          onClose={() => setUserDetail(null)}
        />
      )}
    </>
  )
}

export default App
