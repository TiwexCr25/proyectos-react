import { WINNER_COMBOS } from '../data/data.js'

export const checkWinner = (cells) => {
  for (const [a, b, c] of WINNER_COMBOS) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a]
    }
  }
  return null
}
