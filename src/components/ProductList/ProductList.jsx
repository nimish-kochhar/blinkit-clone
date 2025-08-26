import ProductCard from './ProductCard'
import './ProductList.css'
import { useCart } from '../../context/CartContext'

export default function ProductList({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <div className="product-list">
      {products.map(p => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          image={p.image}
          quantity={cart[p.id] ?? 0}
          onAdd={addToCart}
          onRemove={removeFromCart}
        />
      ))}
    </div>
  )
}
