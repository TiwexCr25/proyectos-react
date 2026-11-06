import './App.css'
import { initialProducts } from './data/products.js'
import { ProductForm } from './components/ProductForm.jsx'
import { ProductCard } from './components/ProductCard.jsx'
import { useState } from 'react'

function App () {
  const [products, setProducts] = useState(initialProducts)

  const addProduct = (product) => {
    const newProduct = {
      id: crypto.randomUUID(),
      ...product

    }
    setProducts([...products, newProduct])
  }

  const removeProduct = (id) => {
    if (confirm('¿Eliminar producto?')) {
      setProducts(products => products.filter(product => product.id !== id))
    }
  }

  const editProduct = (id) => {
    console.log('edit')
  }

  return (
    <main>
      <ProductForm onSubmitProduct={addProduct} />
      <ProductCard
        products={products}
        onRemoveProduct={removeProduct}
        onEditProduct={editProduct}
      />
    </main>
  )
}

export default App
