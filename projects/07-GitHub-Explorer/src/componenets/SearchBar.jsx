import { useState } from 'react'

export function SearchBar ({ onSearch }) {
  const [text, setTex] = useState('')

  return (
    <>
      <input type='text' onChange={(e) => setTex(e.target.value)} />
      <button onClick={() => onSearch(text)}>Buscar</button>
    </>
  )
}
