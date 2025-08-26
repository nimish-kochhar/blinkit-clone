import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState({})

  const totalItems = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart]
  )

  function addToCart(id) {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }))
  }

  function removeFromCart(id) {
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

  const value = {
    cart,
    totalItems,
    addToCart,
    removeFromCart,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
