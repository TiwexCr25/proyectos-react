import './css/productFilters.css'

export function ProductFilters ({ products, onFilterCategory, onFilterStock }) {
  return (
    <section className='product-filters'>
      <div className='group'>
        <label className='product-filters__label' htmlFor='product-filter-category'>
          Filtrar por categoria
        </label>
        <select
          className='product-filters__select'
          id='product-filter-category'
          onChange={(e) => onFilterCategory(e.target.value)}
        >
          <option value='all'>Todas las categorias</option>
          {
          products.length > 0
            ? (
                products.map(product =>
                  <option key={product.category} value={product.category}>
                    {product.category}
                  </option>
                )
              )
            : null
        }
        </select>
      </div>
      <div className='group'>
        <label className='product-filters__label' htmlFor='product-filter-availability'>
          Disponibilidad
        </label>
        <input
          className='product-filters__input'
          id='product-filter-availability'
          type='number'
          defaultValue={1}
          onChange={(e) => onFilterStock(e.target.value)}
        />
      </div>
    </section>
  )
}
