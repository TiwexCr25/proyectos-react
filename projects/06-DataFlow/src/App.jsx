import './App.css'
import { initialProducts } from './data/products.js'
import { ProductForm } from './components/ProductForm.jsx'
import { ProductCard } from './components/ProductCard.jsx'
import { ProductEdit } from './components/ProductEdit.jsx'
import { useState } from 'react'

function App () {
  const [products, setProducts] = useState(initialProducts)
  const [isEditOpen, setIsEditOpen] = useState(false)

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
    console.log('edit', id)
    setIsEditOpen(true)
  }

  return (
    <main>
      <ProductForm onSubmitProduct={addProduct} />
      <ProductCard
        products={products}
        onRemoveProduct={removeProduct}
        onEditProduct={editProduct}
      />
      <ProductEdit isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
    </main>
  )
}

export default App
