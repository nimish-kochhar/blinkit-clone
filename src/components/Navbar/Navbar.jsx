import { useState } from 'react'
import CartDrawer from '../CartDrawer/CartDrawer' // We'll create this next
import './Navbar.css'

export default function Navbar({ cartCount = 0, onClearCart, cart, onAddToCart, onRemoveFromCart }) {
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
            Cart ({cartCount})
          </button>
          {cartCount > 0 && (
            <button className="clear" onClick={onClearCart}>
              Clear
            </button>
          )}
        </div>
      </header>

      {isDrawerOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setIsDrawerOpen(false)}
          onAdd={onAddToCart}
          onRemove={onRemoveFromCart}
        />
      )}
    </>
  )
}
