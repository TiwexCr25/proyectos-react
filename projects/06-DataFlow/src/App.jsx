import './App.css'
import { initialProducts } from './data/products.js'
import { ProductCard } from './components/ProductCard.jsx'

function App () {
  return (
    <>
      <ProductCard products={initialProducts} />
    </>
  )
}

export default App
