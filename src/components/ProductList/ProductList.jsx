import ProductCard from './ProductCard'
import './ProductList.css'

export default function ProductList({ products, cart, onAdd, onRemove }) {
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
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}
