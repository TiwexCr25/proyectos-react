import { Board } from './board'

export function GameArea ({ onStart, size, difficulty }) {
  return (
    <>
      <button onClick={onStart}>Regresar</button>
      <Board size={size} />
    </>
  )
}
