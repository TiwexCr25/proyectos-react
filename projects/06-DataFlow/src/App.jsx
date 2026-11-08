import { useState, useEffect } from 'react'
import './App.css'
import { ProductForm } from './components/ProductForm.jsx'
import { ProductSearch } from './components/ProductSearch.jsx'
import { ProductFilters } from './components/ProductFilters.jsx'
import { ProductOrder } from './components/ProductOrder.jsx'
import { ProductCard } from './components/ProductCard.jsx'
import { ProductEdit } from './components/ProductEdit.jsx'
import { InventoryStatistics } from './components/InventoryStatistics.jsx'

function App () {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products')
    return savedProducts ? JSON.parse(savedProducts) : []
  })
  const [editingProduct, setEditingProduct] = useState(null)

  const [inputText, setInputText] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterStock, setFilterStock] = useState(1)

  const [orderType, setOrderType] = useState('none')

  const [showAllProducts, setShowAllProducts] = useState(false)

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

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

  const handleChangeCategory = (filterCategory) => {
    setFilterCategory(filterCategory)
  }

  const handleChangeStock = (filterStock) => {
    setFilterStock(filterStock)
  }

  const hangleChangeOrder = (order) => {
    setOrderType(order)
  }

  const toggleShowAllProducos = (toggle) => {
    setShowAllProducts(showAllProducts => toggle)
  }

  const filteredProducts = showAllProducts
    ? products
    : products.filter(product =>
      product.name.toLowerCase().includes(inputText.trim().toLowerCase()))
      .filter(product =>
        filterCategory === 'all' || product.category === filterCategory
      )
      .filter(product =>
        product.stock >= filterStock
      )

  const OrderProducts = filteredProducts.toSorted((a, b) => {
    switch (orderType) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price-ascend':
        return Number(a.price) - Number(b.price)
      case 'price-descend':
        return Number(b.price) - Number(a.price)
      case 'quantity':
        return Number(b.stock) - Number(a.stock)
      default:
        return 0
    }
  })

  const resetFilters = () => {
    setFilterCategory('all')
    setFilterStock(1)
  }

  return (
    <main>
      <ProductForm onSubmitProduct={addProduct} />
      <div className='group'>
        <ProductSearch
          onSearch={handleChangeText}
          onShowAll={toggleShowAllProducos}
        />
        <ProductFilters
          products={products}
          filterCategory={filterCategory}
          filterStock={filterStock}
          onFilterCategory={handleChangeCategory}
          onFilterStock={handleChangeStock}
          onResetFilters={resetFilters}
        />
        <ProductOrder
          onSelectedOrder={hangleChangeOrder}
        />
      </div>
      <ProductCard
        products={OrderProducts}
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
      <InventoryStatistics products={products} />
    </main>
  )
}

export default App
