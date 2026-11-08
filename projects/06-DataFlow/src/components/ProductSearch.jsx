import './css/productSearch.css'

export function ProductSearch ({ onSearch, onShowAll }) {
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
      <label className='product-search__checkbox-label' htmlFor='show-all-products'>
        <input
          className='product-search__checkbox'
          id='show-all-products'
          name='showAll'
          type='checkbox'
          onChange={(e) => onShowAll(e.target.checked)}
        />
        <span>Mostrar todos los productos</span>
      </label>
    </section>
  )
}
