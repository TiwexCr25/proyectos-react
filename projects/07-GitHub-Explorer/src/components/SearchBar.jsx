import { useState } from 'react'

export function SearchBar ({ onSearch }) {
  const [text, setTex] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(text)
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
