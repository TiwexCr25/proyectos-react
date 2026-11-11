import './GameLibraryView.css'

function GameLibraryView ({ games, onSelectGame }) {
  return (
    <main className='game-library'>

      <header className='game-library__header'>
        <h1>Biblioteca de juegos</h1>
        <p>Selecciona un juego para comenzar.</p>
      </header>

      <section className='game-library__grid'>
        {games.map(game => (
          <article
            key={game.id}
            className='game-card'
          >
            <h2>{game.title}</h2>
            <p>{game.description}</p>

            <button onClick={() => onSelectGame(game.id)}>
              Jugar
            </button>
          </article>
        ))}
      </section>

    </main>
  )
}

export default GameLibraryView
