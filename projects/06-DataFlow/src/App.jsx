import './App.css'
import { initialProducts } from './data/products.js'

function App () {
  return (
    <>
      <ul>
        {
        initialProducts.map(product =>
          <li key={product.id}>{product.name}</li>
        )
      }
      </ul>
    </>
  )
}

export default App
