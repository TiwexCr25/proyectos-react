import './App.css'
import { initialProducts } from './data/products.js'
import { ProductForm } from './components/ProductForm.jsx'
import { ProductSearch } from './components/ProductSearch.jsx'
import { ProductFilters } from './components/ProductFilters.jsx'
import { ProductCard } from './components/ProductCard.jsx'
import { ProductEdit } from './components/ProductEdit.jsx'
import { useState } from 'react'

function App () {
  const [products, setProducts] = useState(initialProducts)
  const [editingProduct, setEditingProduct] = useState(null)

  const [inputText, setInputText] = useState('')
  const [filterCategory, setFilterCategory] = useState('')

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
    const product = products.find(product => product.id === id)
    setEditingProduct(product)
  }

  const cancelEditProduct = () => {
    setEditingProduct(null)
  }

  const saveEditProduct = (id, editedProduct) => {
    console.log(editedProduct)
    setProducts(products => products.map(product =>
      product.id === id
        ? { ...product, ...editedProduct }
        : product
    ))
    setEditingProduct(null)
  }

  const handleChangeText = (inputValue) => {
    setInputText(inputValue)
  }

  const handleChangeFilter = (filterCategory) => {
    setFilterCategory(filterCategory)
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(inputText.trim().toLowerCase()))

  return (
    <main>
      <ProductForm onSubmitProduct={addProduct} />
      <div className='group'>
        <ProductSearch
          onSearch={handleChangeText}
        />
        <ProductFilters
          products={products}
          onFilter={handleChangeFilter}
        />
      </div>
      <ProductCard
        products={filteredProducts}
        onRemoveProduct={removeProduct}
        onEditProduct={editProduct}
      />
      {
        editingProduct &&
          <ProductEdit
            product={editingProduct}
            onClose={cancelEditProduct}
            onSave={saveEditProduct}
          />
}
    </main>
  )
}

export default App
