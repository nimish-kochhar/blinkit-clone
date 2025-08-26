import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/ProductList/ProductList'

export default function CategoryPage({ products }) {
  const { categoryId } = useParams() // Reads :categoryId from URL

  // Filter products by category (mock filter; expand with real data)
  const filteredProducts = products.filter(p => p.id.startsWith(categoryId))

  return (
    <>
      <Navbar />
      <main style={{ padding: 16 }}>
        <h2>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Products</h2>
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p>No products in this category yet.</p>
        )}
      </main>
    </>
  )
}
