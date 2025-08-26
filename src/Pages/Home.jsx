import Navbar from '../components/Navbar/Navbar'
import CategoryGrid from '../components/CategoryGrid/CategoryGrid'
import ProductList from '../components/ProductList/ProductList'
import { categories } from '../data/categories'

export default function Home({ products }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: 16 }}>
        <h2>Shop by Category</h2>
        <CategoryGrid categories={categories} />

        <h2 style={{ marginTop: 24 }}>Popular products</h2>
        <ProductList products={products} />
      </main>
    </>
  )
}
