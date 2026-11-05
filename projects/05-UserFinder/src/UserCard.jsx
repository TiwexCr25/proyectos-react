import './UserCard.css'

function UserCard ({ users, onDetails }) {
  console.log(users)
  return (
    <section>
      {
        users.map((user) => {
          return (
            <article key={user.id} className='user-card'>
              <div className='user-card__content'>
                <div className='user-card__avatar' aria-hidden='true'>
                  <span className='user-card__avatar-head' />
                  <span className='user-card__avatar-body' />
                </div>

                <div className='user-card__info'>
                  <h2 className='user-card__name'>{user.name}</h2>
                  <p className='user-card__detail'>
                    <svg viewBox='0 0 24 24' aria-hidden='true'>
                      <path d='M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2 .3v.2l7 5.25L19 6v-.2a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Z' />
                    </svg>
                    <span>{user.email}</span>
                  </p>
                  <p className='user-card__detail'>
                    <svg viewBox='0 0 24 24' aria-hidden='true'>
                      <path d='M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.56 3.58.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.19 2.46.56 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z' />
                    </svg>
                    <span>{user.phone}</span>
                  </p>
                  <p className='user-card__detail'>
                    <svg viewBox='0 0 24 24' aria-hidden='true'>
                      <path d='M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
                    </svg>
                    <span>{user.address?.city ?? 'Ubicación no disponible'}</span>
                  </p>
                </div>
              </div>

              <button
                className='user-card__button'
                type='button'
                onClick={() => onDetails?.(user)}
              >
                Ver detalles
              </button>
            </article>

          )
        })
      }
    </section>
  )
}

export default UserCard
