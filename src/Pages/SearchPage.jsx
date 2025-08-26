import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/ProductList/ProductList'
import { allProducts } from '../data/products'

export default function SearchPage() {
  const { query } = useParams() // Get search query from URL
  const decodedQuery = decodeURIComponent(query).toLowerCase()

  const filteredProducts = allProducts.filter(p =>
    p.name.toLowerCase().includes(decodedQuery)
  )

  return (
    <>
      <Navbar />
      <main style={{ padding: 16 }}>
        <h2>Search Results for "{decodeURIComponent(query)}"</h2>
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p>No products found for "{decodeURIComponent(query)}".</p>
        )}
      </main>
    </>
  )
}
