import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { useCart } from '../context/CartContext'
import { allProducts } from '../data/products' // Assuming from previous data updates

export default function ProductDetail() {
  const { productId } = useParams()
  const { addToCart, removeFromCart, cart } = useCart()

  // Find product (safe guard against undefined)
  const product = allProducts.find(p => p.id === productId) || { name: 'Not Found', price: 0, image: '' }

  const quantity = cart[product.id] ?? 0

  return (
    <>
      <Navbar />
      <main style={{ padding: 16, maxWidth: 600, margin: '0 auto' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 8 }} />
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <p>Description: High-quality {product.name.toLowerCase()} delivered fresh.</p> {/* Mock */}

        {quantity > 0 ? (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button onClick={() => removeFromCart(product.id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => addToCart(product.id)}>+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        )}
      </main>
    </>
  )
}
