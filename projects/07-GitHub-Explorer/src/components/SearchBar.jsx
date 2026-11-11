import { useState } from 'react'

export function SearchBar ({ onSearch, onError }) {
  const [text, setTex] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') {
      onError('La busqueda no puede estar vacia')
      return
    }
    onSearch(text.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={(e) => setTex(e.target.value)}
        value={text}
      />
      <button type='submit'>Buscar</button>
    </form>
  )
}
