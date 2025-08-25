import Navbar from '../components/Navbar/Navbar'
import CategoryGrid from '../components/CategoryGrid/CategoryGrid'
import { categories } from '../data/categories'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 16 }}>
        <h2>Shop by Category</h2>
        <CategoryGrid categories={categories} />
      </main>
    </>
  )
}
