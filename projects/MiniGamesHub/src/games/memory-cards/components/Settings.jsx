export function Settings ({ onSetBoardSize }) {
  return (
    <>
      <h2>¿Cuantas cartas desea jugar?</h2>
      <select onChange={(e) => onSetBoardSize(Number(e.target.value))}>
        <option value='4'>4</option>
        <option value='8'>8</option>
        <option value='16'>16</option>
        <option value='32'>32</option>
        <option value='64'>64</option>
      </select>
    </>
  )
}
