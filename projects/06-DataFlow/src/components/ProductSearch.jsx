import './css/productSearch.css'

export function ProductSearch ({ onSearch }) {
  return (
    <section className='product-search'>
      <label className='product-search__label' htmlFor='product-search-input'>
        Buscar productos
      </label>
      <input
        className='product-search__input'
        id='product-search-input'
        name='search'
        type='search'
        placeholder='Nombre o categoría'
        onChange={(e) => onSearch(e.target.value)}
      />
    </section>
  )
}
