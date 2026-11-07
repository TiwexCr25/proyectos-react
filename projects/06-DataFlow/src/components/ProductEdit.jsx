import { useState } from 'react'
import './css/productEdit.css'

export function ProductEdit ({ product, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    price: product.price,
    stock: product.stock
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value.trim() === '' ? prev[name] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(product.id, formData)
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: ''
    })
  }

  return (
    <div
      className='product-edit-modal__backdrop'
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
              <input
                id='product-edit-name' name='name' type='text'
                defaultValue={product.name}
                onChange={handleChange}
              />
            </div>
            <div className='product-edit-modal__field'>
              <label htmlFor='product-edit-category'>Categoría</label>
              <select
                id='product-edit-category' name='category'
                defaultValue={product.category}
                onChange={handleChange}
              >
                <option value=''>Selecciona una opción</option>
                {!['limpieza', 'alimentos'].includes(product.category) && (
                  <option value={product.category}>{product.category}</option>
                )}
                <option value='limpieza'>Limpieza</option>
                <option value='alimentos'>Alimentos</option>
              </select>
            </div>
          </div>
          <div className='product-edit-modal__group'>
            <div className='product-edit-modal__field'>
              <label htmlFor='product-edit-price'>Precio</label>
              <input
                id='product-edit-price' name='price' type='number' min='0' step='0.01'
                defaultValue={product.price}
                onChange={handleChange}
              />
            </div>
            <div className='product-edit-modal__field'>
              <label htmlFor='product-edit-stock'>Stock</label>
              <input
                id='product-edit-stock' name='stock' type='number' min='0' step='1'
                defaultValue={product.stock}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
        <div className='product-edit-modal__actions'>
          <button type='submit'>Guardar</button>
          <button type='button' onClick={() => onClose()}>Cerrar</button>
        </div>
      </form>
    </div>
  )
}
