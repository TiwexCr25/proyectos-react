import { useState } from 'react'
import './css/productForm.css'

export function ProductForm ({ onSubmitProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmitProduct(formData)
    e.currentTarget.reset()
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: ''
    })
  }
  return (
    <>
      <form id='formProducto' onSubmit={handleSubmit}>
        <fieldset>
          <legend>Nuevo producto</legend>
          <div className='grupo'>
            <div className='campo'>
              <label htmlFor='nombre'>Nombre</label>
              <input
                id='nombre' name='name' type='text' required minLength='2' maxLength='50' autoComplete='off'
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className='campo'>
              <label htmlFor='categoria'>Categoría</label>
              <select id='categoria' name='category' required value={formData.category} onChange={handleChange}>
                <option value=''>Selecciona una opción</option>
                <option value='limpieza'>Limpieza</option>
                <option value='alimentos'>Alimentos</option>
              </select>
            </div>
          </div>

          <div className='grupo'>
            <div className='campo'>
              <label htmlFor='precio'>Precio</label>
              <input
                id='precio' name='price' type='number' min='0' step='0.01' required
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className='campo'>
              <label htmlFor='stock'>Stock</label>
              <input
                id='stock' name='stock' type='number' min='0' step='1' required
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
          </div>

        </fieldset>
        <div className='product-form-actions'>
          <button type='submit'>Guardar</button>
          <button type='reset'>Limpiar</button>
        </div>
      </form>
    </>
  )
}
