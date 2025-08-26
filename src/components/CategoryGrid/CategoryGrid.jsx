import CategoryCard from './CategoryCard'
import './CategoryGrid.css'

export default function CategoryGrid({ categories }) {
  if (!categories) {
    return <p>No categories to display</p>
  }

  return (
    <div className="category-grid">
      {categories
        .filter(cat => cat && cat.id) // Ignore invalid entries missing id
        .map((cat) => (
          <CategoryCard key={cat.id} id={cat.id} name={cat.name} image={cat.image} />
        ))}
    </div>
  )
}
