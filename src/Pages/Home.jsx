import Navbar from '../components/Navbar/Navbar'
import CategoryGrid from '../components/CategoryGrid/CategoryGrid'
import ProductList from '../components/ProductList/ProductList'
import { categories } from '../data/categories'

export default function Home({
  products,
  cart,
  totalItems,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}) {
  return (
    <>
      <Navbar
        cartCount={totalItems}
        onClearCart={onClearCart}
        cart={cart}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
      <main style={{ padding: 16 }}>
        <h2>Shop by Category</h2>
        <CategoryGrid categories={categories} />

        <h2 style={{ marginTop: 24 }}>Popular products</h2>
        <ProductList
          products={products}
          cart={cart}
          onAdd={onAddToCart}
          onRemove={onRemoveFromCart}
        />
      </main>
    </>
  )
}
