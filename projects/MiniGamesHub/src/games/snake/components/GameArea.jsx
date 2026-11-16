import { Board } from './board'

export function GameArea ({ onStart, size, difficulty }) {
  return (
    <div className='game-container-play'>
      <button onClick={onStart}>Regresar</button>
      <Board size={size} />
    </div>
  )
}
