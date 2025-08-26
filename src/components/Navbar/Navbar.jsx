import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import CartDrawer from '../CartDrawer/CartDrawer'
import './Navbar.css'

export default function Navbar() {
  const { totalItems, clearCart, cart, addToCart, removeFromCart } = useCart()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <header className="navbar">
        <div className="brand">Blinkit</div>

        <div className="location">
          <span>Deliver to</span>
          <strong>Home • 10 mins</strong>
        </div>

        <input className="search" placeholder="Search for 'milk', 'bread', 'chips'..." />

        <div className="actions">
          <button className="login">Sign In</button>
          <button className="cart" onClick={() => setIsDrawerOpen(true)}>
            Cart ({totalItems})
          </button>
          {totalItems > 0 && (
            <button className="clear" onClick={clearCart}>
              Clear
            </button>
          )}
        </div>
      </header>

      {isDrawerOpen && (
        <CartDrawer
          onClose={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  )
}
