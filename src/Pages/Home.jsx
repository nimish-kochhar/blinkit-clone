import Navbar from '../components/Navbar/Navbar'
import CategoryGrid from '../components/CategoryGrid/CategoryGrid'
import ProductList from '../components/ProductList/ProductList'
import { categories } from '../data/categories'
import { allProducts } from '../data/products' // Use flattened list

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 16 }}>
        <h2>Shop by Category</h2>
        <CategoryGrid categories={categories} />

        <h2 style={{ marginTop: 24 }}>Popular Products</h2>
        <ProductList products={allProducts.slice(0, 10)} /> {/* Show first 10 as "popular" */}
      </main>
    </>
  )
}
