export default function ProductCard({ id, name, price, image, quantity = 0, onAdd, onRemove }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="info">
        <h4>{name}</h4>
        <p>₹{price}</p>
      </div>

      {quantity > 0 ? (
        <div className="qty-controls">
          <button onClick={() => onRemove(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onAdd(id)}>+</button>
        </div>
      ) : (
        <button className="add-btn" onClick={() => onAdd(id)}>Add</button>
      )}
    </div>
  )
}
