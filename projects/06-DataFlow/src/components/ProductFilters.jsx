import './css/productFilters.css'

export function ProductFilters ({ products, onFilter }) {
  return (
    <section className='product-filters'>
      <label className='product-filters__label' htmlFor='product-filter-category'>
        Filtrar por categoria
      </label>
      <select
        className='product-filters__select'
        id='product-filter-category'
        onChange={(e) => onFilter(e.target.value)}
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
    </section>
  )
}
