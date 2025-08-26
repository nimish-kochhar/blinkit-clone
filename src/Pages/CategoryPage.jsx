import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/ProductList/ProductList'
import { productsByCategory } from '../data/products'

export default function CategoryPage() {
  let { categoryId } = useParams()
  categoryId = categoryId?.toLowerCase() || '' // Safe optional chaining

  const filteredProducts = productsByCategory[categoryId] || []

  return (
    <>
      <Navbar />
      <main style={{ padding: 16 }}>
        <h2>{categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : 'Category'} Products</h2>
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p>No products in this category yet.</p>
        )}
      </main>
    </>
  )
}
