import CategoryCard from './CategoryCard'
import './CategoryGrid.css'

export default function CategoryGrid({ categories }) {
  // categories prop is an array of category objects
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} name={cat.name} image={cat.image} />
      ))}
    </div>
  )
}
