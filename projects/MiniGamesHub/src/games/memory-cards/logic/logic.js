import { EMOJIS } from '../data/emojis'

export const getRandomCards = (boardSize) => {
  const shuffled = [...EMOJIS].sort(() => Math.random() - 0.5)
  const selected = shuffled.slice(0, boardSize / 2)
  const pairs = [...selected, ...selected].sort(() => Math.random() - 0.5)
  return pairs
}
