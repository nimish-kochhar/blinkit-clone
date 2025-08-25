import './Navbar.css'

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="navbar">
      <div className="brand">Blinkit</div>

      <div className="location">
        <span>Deliver to</span>
        <strong>Home • 10 mins</strong>
      </div>

      <input className="search" placeholder="Search for 'milk', 'bread', 'chips'..." />

      <div className="actions">
        <button className="login">Sign In</button>
        <button className="cart">Cart ({cartCount})</button>
      </div>
    </header>
  )
}
