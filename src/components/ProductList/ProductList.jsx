import ProductCard from './ProductCard'
import './ProductList.css'

export default function ProductList({ products, onAdd }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} {...p} onAdd={onAdd} />
      ))}
    </div>
  )
}
