import './css/productCard.css'

export function ProductCard ({ products }) {
  return (
    <ul>
      {
        products.map(product =>
          <li key={product.id}>
            <article class='product-card'>
              <span class='product-card__category'>{product.category}</span>

              <h3 class='product-card__name'>{product.name}</h3>

              <div class='product-card__footer'>
                <p class='product-card__price'>${product.price}</p>

                <p class='product-card__quantity'>
                  <span class='product-card__quantity-label'>Cantidad</span>
                  <span class='product-card__quantity-value'>{product.stock}</span>
                </p>
              </div>
            </article>
          </li>
        )
      }
    </ul>
  )
}
