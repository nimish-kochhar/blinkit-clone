import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage' // We'll create this next
import { products } from './data/products'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route path="/category/:categoryId" element={<CategoryPage products={products} />} />
    </Routes>
  )
}

export default App
