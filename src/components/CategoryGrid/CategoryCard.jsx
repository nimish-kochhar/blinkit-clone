// CategoryCard shows a category image and name
export default function CategoryCard({ name, image }) {
  // props 'name' and 'image' come from parent component
  return (
    <div className="category-card">
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
  )
}
