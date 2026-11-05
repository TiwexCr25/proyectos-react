import './css/productCard.css'

export function ProductCard ({ products, onRemoveProduct }) {
  return (
    <ul>
      {
        products.map(product =>
          <li key={product.id}>
            <article className='product-card'>
              <div className='headerContainer'>
                <span className='product-card__category'>{product.category}</span>
                <button
                  className='product-card__delete'
                  onClick={() => onRemoveProduct(product.id)}
                />
              </div>
              <h3 className='product-card__name'>{product.name}</h3>

              <div className='product-card__footer'>
                <p className='product-card__price'>${product.price}</p>

                <p className='product-card__quantity'>
                  <span className='product-card__quantity-label'>Cantidad</span>
                  <span className='product-card__quantity-value'>{product.stock}</span>
                </p>
              </div>
            </article>
          </li>
        )
      }
    </ul>
  )
}
