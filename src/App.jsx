import { useState, useMemo } from 'react'
import Home from './pages/Home'
import { products } from './data/products'

function App() {
  // cart: { [productId]: quantity }
  const [cart, setCart] = useState({})

  const totalItems = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart]
  )

  function handleAddToCart(id) {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }))
  }

  function handleRemoveFromCart(id) {
    setCart(prev => {
      const current = prev[id] ?? 0
      if (current <= 1) {
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: current - 1 }
    })
  }

  function clearCart() {
    setCart({})
  }

  return (
    <Home
      products={products}
      cart={cart}
      totalItems={totalItems}
      onAddToCart={handleAddToCart}
      onRemoveFromCart={handleRemoveFromCart}
      onClearCart={clearCart}
    />
  )
}

export default App
