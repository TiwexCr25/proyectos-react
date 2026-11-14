import { EMOJIS } from '../data/emojis'

export const getRandomCards = (boardSize) => {
  const shuffled = [...EMOJIS].sort(() => Math.random() - 0.5)
  const selected = shuffled.slice(0, boardSize / 2)

  const uniqueCards = selected.map((emoji) => ({
    id: crypto.randomUUID(),
    emoji,
    symbol: '?',
    hidden: true,
    matched: false,
    wrong: false
  }))

  const pairs = uniqueCards.flatMap((card) => [
    card,
    { ...card, id: crypto.randomUUID() }
  ])

  const shuffledPairs = pairs.sort(() => Math.random() - 0.5)

  return shuffledPairs
}
