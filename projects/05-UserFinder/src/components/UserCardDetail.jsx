import { useEffect } from 'react'
import './UserCardDetail.css'

export function UserCardDetails ({ user, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className='user-detail-backdrop'
      onClick={onClose}
    >
      <div
        className='user-detail-modal'
        role='dialog'
        aria-modal='true'
        aria-labelledby='user-detail-title'
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className='user-detail-close-icon'
          type='button'
          aria-label='Cerrar detalles'
          onClick={onClose}
        >
          ×
        </button>

        <div className='user-detail-header'>
          <div className='user-detail-avatar' aria-hidden='true'>
            <span className='user-detail-avatar-head' />
            <span className='user-detail-avatar-body' />
          </div>
          <div>
            <h2 id='user-detail-title'>{user.name}</h2>
            <p className='user-detail-location'>
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
              </svg>
              {user.address?.city ?? 'Ubicación no disponible'}
            </p>
          </div>
        </div>

        <div className='user-detail-contact'>
          <p>
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2 .3v.2l7 5.25L19 6v-.2a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Z' />
            </svg>
            {user.email}
          </p>
          <p>
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.56 3.58.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.19 2.46.56 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z' />
            </svg>
            {user.phone}
          </p>
          <p>
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M4 3h16v18H4V3Zm3 3v3h3V6H7Zm0 5v3h3v-3H7Zm0 5v2h3v-2H7Zm6-10v3h4V6h-4Zm0 5v3h4v-3h-4Zm0 5v2h4v-2h-4Z' />
            </svg>
            {user.address?.suite ?? 'Dirección no disponible'}
          </p>
          <p>
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
            </svg>
            {user.address?.city ?? 'Ubicación no disponible'}
          </p>
        </div>

        <section className='user-detail-additional'>
          <h3>Información adicional</h3>
          <p>
            {user.company?.catchPhrase ?? 'No hay información adicional disponible.'}
          </p>
        </section>

        <div className='user-detail-actions'>
          <button type='button' onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
