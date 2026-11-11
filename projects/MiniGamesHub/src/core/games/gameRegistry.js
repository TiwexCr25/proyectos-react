import ticTacToe from '../../games/tic-tac-toe'

export const gameRegistry = [
  ticTacToe
]

export function getGameById (id) {
  return gameRegistry.find(
    (game) => game.id === id
  ) ?? null
}
