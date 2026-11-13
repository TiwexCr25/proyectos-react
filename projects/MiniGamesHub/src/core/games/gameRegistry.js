import ticTacToe from '../../games/tic-tac-toe'
import memoryCards from '../../games/memory-cards'

export const gameRegistry = [
  ticTacToe,
  memoryCards
]

export function getGameById (id) {
  return gameRegistry.find(
    (game) => game.id === id
  ) ?? null
}
