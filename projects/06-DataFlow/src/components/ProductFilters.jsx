import './css/productFilters.css'

export function ProductFilters ({
  products,
  filterCategory,
  filterStock,
  onFilterCategory,
  onFilterStock,
  onResetFilters
}) {
  const categories = [...new Set(products.map(product => product.category).filter(Boolean))]

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
            categories.length > 0
              ? (
                  categories.map(category =>
                    <option key={category} value={category}>
                      {category}
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
