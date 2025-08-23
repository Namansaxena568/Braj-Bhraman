
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Temples from './pages/Temples'
import Hotels from './pages/Hotels'
import Paths from './pages/Paths'
import Booking from './pages/Booking'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { CartProvider } from './contexts/CartContext'
import BrajGallery from './pages/BrajGallery'
import Transport from './pages/Transport'
import Contact from './pages/Contact'

export default function App(){
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temples" element={<Temples />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/paths" element={<Paths />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/braj-ki-raj" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/gallery" element={<BrajGallery />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
