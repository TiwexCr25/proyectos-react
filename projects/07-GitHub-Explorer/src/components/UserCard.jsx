export function UserCard ({ user }) {
  return (
    <>
      <article key={user.id}>
        <img src={user.avatar_url} alt='avatar url' />
        <p>Nombre: {user.name}</p>
        <p>Tipo de cuenta: {user.type}</p>
        <p>Enlace:{' '}
          <span>
            <a href={user.html_url}>
              entrar aqui
            </a>
          </span>
        </p>
      </article>
    </>
  )
}
