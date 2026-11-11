import './GameSessionView.css'

function GameSessionView ({ game, onExit }) {
  const GameComponent = game.Component

  return (
    <main className='game-session'>
      <header className='game-session__header'>
        <button
          type='button'
          className='game-session__back-button'
          onClick={onExit}
        >
          ← Back to library
        </button>

        <div className='game-session__information'>
          <h1 className='game-session__title'>
            {game.title}
          </h1>

          <p className='game-session__description'>
            {game.description}
          </p>
        </div>
      </header>

      <section className='game-session__area'>
        <GameComponent />
      </section>
    </main>
  )
}

export default GameSessionView
