import './CartDrawer.css'

export default function CartDrawer({ cart, onClose, onAdd, onRemove }) {
  const subtotal = Object.entries(cart).reduce(
    (sum, [id, qty]) => sum + (getProductPrice(id) * qty),
    0
  )

  // Mock price lookup; in reality, fetch from products or API
  function getProductPrice(id) {
    // Replace with actual product data lookup
    const prices = {
      'milk-500': 32,
      'bread': 45,
      'eggs-6': 55,
      'chips': 20,
    }
    return prices[id] || 0
  }

  return (
    <div className="cart-drawer">
      <div className="drawer-content">
        <button className="close" onClick={onClose}>×</button>
        <h2>Your Cart</h2>

        {Object.entries(cart).length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          <>
            <ul className="items">
              {Object.entries(cart).map(([id, qty]) => (
                <li key={id} className="item">
                  <span className="name">{id} (₹{getProductPrice(id)})</span>
                  <div className="controls">
                    <button onClick={() => onRemove(id)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => onAdd(id)}>+</button>
                  </div>
                  <span className="line-total">₹{getProductPrice(id) * qty}</span>
                </li>
              ))}
            </ul>
            <div className="subtotal">Subtotal: ₹{subtotal}</div>
            <button className="checkout">Checkout</button>
          </>
        )}
      </div>
    </div>
  )
}
