
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function Navbar(){
  const { cartCount } = useCart()
  const linkCls = ({isActive}) => `px-3 py-2 rounded-xl hover:bg-black/5 ${isActive ? 'text-braj-purple font-semibold' : 'text-gray-700'}`
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-extrabold tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-braj-purple text-white grid place-items-center">BB</span>
          <span>Braj Brahman</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <NavLink to="/temples" className={linkCls}>Temples</NavLink>
          <NavLink to="/hotels" className={linkCls}>Hotels</NavLink>
          <NavLink to="/paths" className={linkCls}>Paths</NavLink>
          <NavLink to="/booking" className={linkCls}>Booking</NavLink>
          <NavLink to="/braj-ki-raj" className={linkCls}>Braj ki Raj</NavLink>
          <NavLink to="/transport" className={linkCls}>Transport</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <NavLink to="/cart" className="px-3 py-2 rounded-xl bg-braj-purple text-white hover:opacity-90">
            Cart ({cartCount})
          </NavLink>
        </div>
      </div>
    </header>
  )
}
