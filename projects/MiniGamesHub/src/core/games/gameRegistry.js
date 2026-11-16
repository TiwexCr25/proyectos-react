import ticTacToe from '../../games/tic-tac-toe'
import memoryCards from '../../games/memory-cards'
import snakeGame from '../../games/snake'

export const gameRegistry = [
  ticTacToe,
  memoryCards,
  snakeGame
]

export function getGameById (id) {
  return gameRegistry.find(
    (game) => game.id === id
  ) ?? null
}
