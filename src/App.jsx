import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CategoryPage from './Pages/CategoryPage'
import ProductDetail from './Pages/ProductDetail'
import SearchPage from './Pages/SearchPage' // Create next

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/search/:query" element={<SearchPage />} />
    </Routes>
  )
}

export default App
