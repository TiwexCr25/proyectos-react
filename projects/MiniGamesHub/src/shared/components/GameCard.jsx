export function GameCard ({ game, onSelect }) {
  return (
    <article
      className='game-card'
      onClick={() => onSelect(game.id)}
    >
      <header className='game-card__header'>
        <span className='game-card__category'>
          {game.category}
        </span>
      </header>

      <div className='game-card__content'>
        <h3 className='game-card__title'>
          {game.title}
        </h3>

        <p className='game-card__description'>
          {game.description}
        </p>
      </div>

      <div className='game-card__indicator'>
        Play game →
      </div>
    </article>
  )
}

export default GameCard
