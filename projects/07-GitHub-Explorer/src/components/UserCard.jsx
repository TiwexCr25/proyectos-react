export function UserCard ({ user, onSelect }) {
  return (
    <>
      <article>
        <img src={user.avatar_url} alt='avatar url' />
        <p>login: {user.login}</p>
        <p>Tipo de cuenta: {user.type}</p>
        <p>Enlace:{' '}
          <span>
            <a href={user.html_url}>
              entrar aqui
            </a>
          </span>
        </p>
        <button onClick={() => onSelect(user)}>Ver Perfil</button>
      </article>
    </>
  )
}
