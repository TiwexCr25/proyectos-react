import './css/productFilters.css'

export function ProductFilters ({
  products,
  filterCategory,
  filterStock,
  onFilterCategory,
  onFilterStock,
  onResetFilters
}) {
  return (
    <section className='product-filters'>
      <div className='filters-Container'>
        <div className='group'>
          <label className='product-filters__label' htmlFor='product-filter-category'>
            Filtrar por categoria
          </label>
          <select
            className='product-filters__select'
            id='product-filter-category'
            value={filterCategory}
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
            value={filterStock}
            onChange={(e) => onFilterStock(e.target.value)}
          />
        </div>
      </div>
      <button
        className='product-filters__reset'
        type='button'
        onClick={() => onResetFilters()}
      >
        Limpiar filtros
      </button>
    </section>
  )
}
