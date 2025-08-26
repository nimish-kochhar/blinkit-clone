import { Link } from 'react-router-dom'

export default function CategoryCard({ id = '', name, image }) {
  // Defensive: id defaults to empty string to avoid toLowerCase error
  return (
    <Link to={`/category/${id.toLowerCase()}`} className="category-card">
      <img src={image} alt={name} />
      <span>{name}</span>
    </Link>
  )
}
