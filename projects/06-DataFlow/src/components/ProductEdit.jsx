import './css/productEdit.css'

export function ProductEdit ({ isOpen = false, onClose = () => {} }) {
  if (!isOpen) return null

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div
      className='product-edit-modal__backdrop'
      onClick={onClose}
    >
      <form
        id='product-edit-form'
        className='product-edit-modal__form'
        onSubmit={handleSubmit}
        onClick={(event) => event.stopPropagation()}
        aria-labelledby='product-edit-title'
      >
        <fieldset className='product-edit-modal__fieldset'>
          <legend id='product-edit-title' className='product-edit-modal__title'>
            Editar Producto
          </legend>
          <div className='product-edit-modal__group'>
            <div className='product-edit-modal__field'>
              <label htmlFor='product-edit-name'>Nombre</label>
              <input id='product-edit-name' name='name' type='text' />
            </div>
            <div className='product-edit-modal__field'>
              <label htmlFor='product-edit-category'>Categoría</label>
              <select id='product-edit-category' name='category'>
                <option value=''>Selecciona una opción</option>
                <option value='limpieza'>Limpieza</option>
                <option value='alimentos'>Alimentos</option>
              </select>
            </div>
          </div>
          <div className='product-edit-modal__group'>
            <div className='product-edit-modal__field'>
              <label htmlFor='product-edit-price'>Precio</label>
              <input id='product-edit-price' name='price' type='number' min='0' step='0.01' />
            </div>
            <div className='product-edit-modal__field'>
              <label htmlFor='product-edit-stock'>Stock</label>
              <input id='product-edit-stock' name='stock' type='number' min='0' step='1' />
            </div>
          </div>
        </fieldset>
        <div className='product-edit-modal__actions'>
          <button type='submit'>Guardar</button>
          <button type='button' onClick={onClose}>Cerrar</button>
          <button type='reset'>Limpiar</button>
        </div>
      </form>
    </div>
  )
}
