import './css/productOrder.css'

export function ProductOrder ({ onSelectedOrder }) {
  return (
    <section className='product-order'>
      <div className='group'>
        <label className='product-order__label' htmlFor='product-filter-category'>
          Ordenar por
        </label>
        <select
          className='product-order__select'
          id='product-order'
          onChange={(e) => onSelectedOrder(e.target.value)}
        >
          <option value='none'>Sin orden</option>
          <option value='name'>Nombre</option>
          <option value='price-ascend'>Precio ascendente</option>
          <option value='price-descend'>Precio descendente</option>
          <option value='quantity'>Cantidad disponible</option>
        </select>
      </div>
    </section>
  )
}
