import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import './Modal.css'

export default function Modal ({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className='modal-overlay'
      onClick={onClose}
    >
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
      >
        <button className='modal-close' onClick={onClose}>✕</button>
        {children}
      </div>
    </div>,
    document.body
  )
}
