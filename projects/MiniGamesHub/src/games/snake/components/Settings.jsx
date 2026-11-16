export function Settings ({ onStart, onSize }) {
  return (
    <div className='game-container-settings'>
      <h1>Snake Game</h1>
      <div className='form-row'>
        <label htmlFor='map-size'>Tamaño del mapa:</label>
        <select id='map-size' onChange={(e) => onSize(e.target.value)}>
          <option value='8'>8x8</option>
          <option value='16'>16x16</option>
          <option value='32'>32x32</option>
          <option value='64'>64x64</option>
        </select>
      </div>
      <div className='form-row'>
        <label htmlFor='map-size'>Dificultad: </label>
        <select id='map-size'>
          <option value='1'>Muy Facil</option>
          <option value='2'>Facil</option>
          <option value='3'>Normal</option>
          <option value='4'>Dificil</option>
          <option value='5'>Muy Dificil</option>
        </select>
      </div>
      <button onClick={onStart}>Jugar</button>
    </div>
  )
}
