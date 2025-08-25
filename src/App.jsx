import { useState } from 'react'
import Home from './Pages/Home'
import { products } from './data/products'

function App() {
  const [cartCount, setCartCount] = useState(0)

  function handleAddToCart(id) {
    setCartCount((c) => c + 1)
  }

  return <Home cartCount={cartCount} onAddToCart={handleAddToCart} products={products} />
}

export default App
