export default function ProductCard({ id, name, price, image, onAdd }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="info">
        <h4>{name}</h4>
        <p>₹{price}</p>
      </div>
      <button className="add-btn" onClick={() => onAdd(id)}>Add</button>
    </div>
  )
}
