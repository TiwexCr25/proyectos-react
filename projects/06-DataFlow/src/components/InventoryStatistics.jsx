import './css/inventoryStatistics.css'

export function InventoryStatistics ({ products }) {
  const totalProducts = products.length
  const invetoryValue = products.reduce((total, product) =>
    total + Number(product.price * product.stock), 0
  )
  const totalQuantity = products.reduce((total, product) => total + Number(product.stock), 0)
  const outOfStock = products.filter(product => product.stock <= 0).length
  const totalCategories = new Set(products.map(product => product.category)).size
  const averagePrice = totalProducts > 0
    ? products.reduce((total, product) => total + Number(product.price), 0) / totalProducts
    : 0

  return (
    <section className='inventory-statistics' aria-labelledby='inventory-statistics-title'>
      <h2 className='inventory-statistics__title' id='inventory-statistics-title'>
        Estadísticas del inventario
      </h2>
      <dl className='inventory-statistics__grid'>
        <div className='inventory-statistics__item'>
          <dt>Total de productos</dt>
          <dd>{totalProducts}</dd>
        </div>
        <div className='inventory-statistics__item'>
          <dt>Valor del inventario</dt>
          <dd>${invetoryValue}</dd>
        </div>
        <div className='inventory-statistics__item'>
          <dt>Unidades disponibles</dt>
          <dd>{totalQuantity}</dd>
        </div>
        <div className='inventory-statistics__item'>
          <dt>Productos agotados</dt>
          <dd>{outOfStock}</dd>
        </div>
        <div className='inventory-statistics__item'>
          <dt>Categorías</dt>
          <dd>{totalCategories}</dd>
        </div>
        <div className='inventory-statistics__item'>
          <dt>Precio promedio</dt>
          <dd>${averagePrice.toFixed(2)}</dd>
        </div>
      </dl>
    </section>
  )
}
