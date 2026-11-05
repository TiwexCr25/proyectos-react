import './App.css'
import { initialProducts } from './data/products.js'
import { ProductForm } from './components/ProductForm.jsx'
import { ProductCard } from './components/ProductCard.jsx'

function App () {
  return (
    <main>
      <ProductForm />
      <ProductCard products={initialProducts} />
    </main>
  )
}

export default App
